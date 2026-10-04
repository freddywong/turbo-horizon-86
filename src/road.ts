import * as THREE from 'three';
import { GFX } from './gfx';
import { atlasPatch, SCROLL, surfaceAtlas, TILE, tileOffset } from './textures';
import { LANES, LANE_W, ROAD_HALF, SEG, STRIPE, View } from './track';

/** One strip of the road cross-section between two lateral points. */
export interface Span {
  xa: number; ya: number; absA: boolean;
  xb: number; yb: number; absB: boolean;
  c0: THREE.Color; c1: THREE.Color; // light / dark band colours
  tex?: number; // surface tile ('92 look); guessed from colour/shape when absent
}
export interface Profile { spans: Span[] }

const col = (h: number) => new THREE.Color().setHex(h);

export interface SideStep {
  w: number; // lateral width (0 for a vertical wall)
  dy?: number; // relative height change
  abs?: number; // absolute height at the end of the step
  c: [number, number];
}

export interface RoadStyle {
  road: [number, number];
  line: number; // dashed lane line colour
  edge?: number; // solid edge line
  rumble?: [number, number];
  rumbleW?: number;
}

/**
 * Builds a cross-section: lanes + dashes in the middle, then a list of steps
 * walking outward on each side (shoulders, sand, walls, sea...).
 */
export function makeProfile(style: RoadStyle, left: SideStep[], right: SideStep[], ceiling?: [number, number]): Profile {
  const spans: Span[] = [];
  const add = (xa: number, ya: number, absA: boolean, xb: number, yb: number, absB: boolean, c: [number, number], tex?: number) =>
    spans.push({ xa, ya, absA, xb, yb, absB, c0: col(c[0]), c1: col(c[1]), tex });
  const dash = 0.35;
  let x = -ROAD_HALF;
  const edgeW = style.edge !== undefined ? 0.45 : 0;
  if (edgeW) { add(x, 0, false, x + edgeW, 0, false, [style.edge!, style.edge!], TILE.PAINT); x += edgeW; }
  for (let i = 1; i < LANES; i++) {
    const lx = -ROAD_HALF + i * LANE_W;
    add(x, 0, false, lx - dash / 2, 0, false, style.road, TILE.ASPHALT);
    add(lx - dash / 2, 0, false, lx + dash / 2, 0, false, [style.line, style.road[1]], TILE.PAINT);
    x = lx + dash / 2;
  }
  add(x, 0, false, ROAD_HALF - edgeW, 0, false, style.road, TILE.ASPHALT);
  if (edgeW) add(ROAD_HALF - edgeW, 0, false, ROAD_HALF, 0, false, [style.edge!, style.edge!], TILE.PAINT);

  const tops: { x: number; y: number; abs: boolean }[] = [];
  for (const side of [-1, 1]) {
    let px = ROAD_HALF, py = 0, pabs: boolean = false;
    if (style.rumble) {
      const rw = style.rumbleW ?? 1.6;
      add(side * px, 0, false, side * (px + rw), 0, false, style.rumble, TILE.KERB);
      px += rw;
    }
    for (const st of side < 0 ? left : right) {
      const nx = px + st.w;
      let ny: number = py, nabs: boolean = pabs;
      if (st.abs !== undefined) { ny = st.abs; nabs = true; }
      else if (st.dy !== undefined) { ny = py + st.dy; }
      add(side * px, py, pabs, side * nx, ny, nabs, st.c);
      px = nx; py = ny; pabs = nabs;
    }
    tops.push({ x: side * px, y: py, abs: pabs });
  }
  if (ceiling) add(tops[0].x, tops[0].y, tops[0].abs, tops[1].x, tops[1].y, tops[1].abs, ceiling, TILE.CEILING);
  return { spans };
}

/** Picks a surface tile for a side span from its colour and shape. */
function guessTile(sp: Span): number {
  const vertical = Math.abs(sp.xb - sp.xa) < 0.01;
  if (vertical) return Math.abs(sp.yb - sp.ya) > 3 ? TILE.TUNNEL : TILE.CONCRETE;
  const hsl = { h: 0, s: 0, l: 0 };
  sp.c0.getHSL(hsl, THREE.SRGBColorSpace);
  const h = hsl.h * 360, { s, l } = hsl;
  if (sp.absB && sp.yb < 0.5 && sp.yb > 0.05 && l > 0.9) return TILE.FOAM;
  if (h > 165 && h < 260 && s > 0.5) return l < 0.25 ? TILE.BAY : l > 0.52 ? TILE.SHALLOW : TILE.SEA;
  if (l < 0.22) return TILE.CITY;
  if (h > 60 && h < 170 && s > 0.25) return TILE.GRASS;
  if (h > 25 && h < 60 && s > 0.55) return TILE.SAND;
  if (h > 25 && h < 60 && s > 0.3 && l < 0.8) return TILE.DIRT;
  if (s < 0.2 && l > 0.6) return TILE.CONCRETE;
  return TILE.PAVING;
}

/** Repeat size (world units) of each tile across / along the road. */
const REPEAT: Record<number, [number, number]> = {
  [TILE.ASPHALT]: [5.5, 9], [TILE.PAINT]: [2, 6], [TILE.KERB]: [1.6, 6], [TILE.GRASS]: [7, 7], [TILE.SAND]: [9, 9],
  [TILE.SEA]: [16, 16], [TILE.BAY]: [20, 20], [TILE.SHALLOW]: [10, 10], [TILE.FOAM]: [3, 8], [TILE.CONCRETE]: [4, 6],
  [TILE.TUNNEL]: [3, 3], [TILE.CEILING]: [6, 12], [TILE.PAVING]: [3, 3], [TILE.CITY]: [40, 40], [TILE.DIRT]: [5, 5],
};

const MAX_SEGS = 220;
const MAX_SPANS = 32;

/** One dynamic mesh for the whole visible road + ground, rebuilt each frame. */
export class RoadMesh {
  mesh: THREE.Mesh;
  private pos: Float32Array;
  private colr: Float32Array;
  private uv: Float32Array;
  private tile: Float32Array;
  /** shader clock for scrolling water */
  time = { value: 0 };
  private geo: THREE.BufferGeometry;

  constructor(private profiles: Profile[]) {
    const maxQuads = MAX_SEGS * MAX_SPANS;
    this.pos = new Float32Array(maxQuads * 4 * 3);
    this.colr = new Float32Array(maxQuads * 4 * 3);
    this.uv = new Float32Array(maxQuads * 4 * 2);
    this.tile = new Float32Array(maxQuads * 4 * 3);
    if (GFX.modern) {
      // texture-mapped ground does the speed cue, so the big light/dark bands get
      // softer; strong two-colour stripes (kerbs, lane dashes) stay as they are
      for (const p of profiles) for (const sp of p.spans) {
        const d = Math.abs(sp.c0.r - sp.c1.r) + Math.abs(sp.c0.g - sp.c1.g) + Math.abs(sp.c0.b - sp.c1.b);
        if (d < 0.25) sp.c1 = sp.c0.clone().lerp(sp.c1, 0.45);
        if (sp.tex === undefined) sp.tex = guessTile(sp);
        // the night-city tile carries its own colours (lit streets), so don't darken it
        if (sp.tex === TILE.CITY) { sp.c0 = new THREE.Color(0xc8c8e0); sp.c1 = new THREE.Color(0xb8b8d4); }
      }
    }
    const idx = new Uint32Array(maxQuads * 6);
    for (let q = 0; q < maxQuads; q++) {
      idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4, q * 4 + 2, q * 4 + 3], q * 6);
    }
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.colr, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('tile', new THREE.BufferAttribute(this.tile, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setIndex(new THREE.BufferAttribute(idx, 1));
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    if (GFX.modern) {
      mat.color.setScalar(1.1); // the painted tiles average a bit under white
      atlasPatch(mat, surfaceAtlas(), this.time);
    }
    this.mesh = new THREE.Mesh(this.geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 0;
  }

  update(view: View) {
    const { bx, by, bz, bh, yRef } = view;
    const P = this.pos, C = this.colr, U = this.uv, TL = this.tile;
    let q = 0;
    const segs = Math.min(view.count, MAX_SEGS);
    for (let k = 0; k < segs; k++) {
      const i = view.start + k;
      const seg = view.track.seg(i);
      const prof = this.profiles[seg.profile];
      const light = Math.floor(i / STRIPE) % 2 === 0;
      const c0 = Math.cos(bh[k]), s0 = Math.sin(bh[k]);
      const c1 = Math.cos(bh[k + 1]), s1 = Math.sin(bh[k + 1]);
      for (const sp of prof.spans) {
        const c = light ? sp.c0 : sp.c1;
        const o = q * 12;
        // corner 0: k, a
        P[o] = bx[k] + c0 * sp.xa; P[o + 1] = sp.absA ? sp.ya - yRef : by[k] + sp.ya; P[o + 2] = bz[k] + s0 * sp.xa;
        // corner 1: k, b
        P[o + 3] = bx[k] + c0 * sp.xb; P[o + 4] = sp.absB ? sp.yb - yRef : by[k] + sp.yb; P[o + 5] = bz[k] + s0 * sp.xb;
        // corner 2: k+1, b
        P[o + 6] = bx[k + 1] + c1 * sp.xb; P[o + 7] = sp.absB ? sp.yb - yRef : by[k + 1] + sp.yb; P[o + 8] = bz[k + 1] + s1 * sp.xb;
        // corner 3: k+1, a
        P[o + 9] = bx[k + 1] + c1 * sp.xa; P[o + 10] = sp.absA ? sp.ya - yRef : by[k + 1] + sp.ya; P[o + 11] = bz[k + 1] + s1 * sp.xa;
        for (let v = 0; v < 4; v++) {
          C[o + v * 3] = c.r; C[o + v * 3 + 1] = c.g; C[o + v * 3 + 2] = c.b;
        }
        // texture coords in repeat units: across = lateral offset (+ height, so walls tile too), along = track distance
        const rep = REPEAT[sp.tex ?? 0] ?? [6, 8];
        const ua = (sp.xa + sp.ya) / rep[0], ub = (sp.xb + sp.yb) / rep[0];
        const va = (i * SEG) / rep[1], vb = ((i + 1) * SEG) / rep[1];
        const u = q * 8;
        const [tx, ty] = tileOffset(sp.tex ?? 0);
        const sc = SCROLL[sp.tex ?? 0] ?? 0;
        for (let v = 0; v < 4; v++) { TL[q * 12 + v * 3] = tx; TL[q * 12 + v * 3 + 1] = ty; TL[q * 12 + v * 3 + 2] = sc; }
        U[u] = ua; U[u + 1] = va; U[u + 2] = ub; U[u + 3] = va;
        U[u + 4] = ub; U[u + 5] = vb; U[u + 6] = ua; U[u + 7] = vb;
        q++;
      }
    }
    this.geo.setDrawRange(0, q * 6);
    (this.geo.attributes.position as THREE.BufferAttribute).addUpdateRange(0, q * 12);
    (this.geo.attributes.color as THREE.BufferAttribute).addUpdateRange(0, q * 12);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    if (GFX.modern) {
      (this.geo.attributes.uv as THREE.BufferAttribute).addUpdateRange(0, q * 8);
      this.geo.attributes.uv.needsUpdate = true;
      (this.geo.attributes.tile as THREE.BufferAttribute).addUpdateRange(0, q * 12);
      this.geo.attributes.tile.needsUpdate = true;
      this.time.value = performance.now() / 1000;
    }
  }
}
