import * as THREE from 'three';
import { LANES, LANE_W, ROAD_HALF, STRIPE, View } from './track';

/** One strip of the road cross-section between two lateral points. */
export interface Span {
  xa: number; ya: number; absA: boolean;
  xb: number; yb: number; absB: boolean;
  c0: THREE.Color; c1: THREE.Color; // light / dark band colours
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
  const add = (xa: number, ya: number, absA: boolean, xb: number, yb: number, absB: boolean, c: [number, number]) =>
    spans.push({ xa, ya, absA, xb, yb, absB, c0: col(c[0]), c1: col(c[1]) });
  const dash = 0.35;
  let x = -ROAD_HALF;
  const edgeW = style.edge !== undefined ? 0.45 : 0;
  if (edgeW) { add(x, 0, false, x + edgeW, 0, false, [style.edge!, style.edge!]); x += edgeW; }
  for (let i = 1; i < LANES; i++) {
    const lx = -ROAD_HALF + i * LANE_W;
    add(x, 0, false, lx - dash / 2, 0, false, style.road);
    add(lx - dash / 2, 0, false, lx + dash / 2, 0, false, [style.line, style.road[1]]);
    x = lx + dash / 2;
  }
  add(x, 0, false, ROAD_HALF - edgeW, 0, false, style.road);
  if (edgeW) add(ROAD_HALF - edgeW, 0, false, ROAD_HALF, 0, false, [style.edge!, style.edge!]);

  const tops: { x: number; y: number; abs: boolean }[] = [];
  for (const side of [-1, 1]) {
    let px = ROAD_HALF, py = 0, pabs: boolean = false;
    if (style.rumble) {
      const rw = style.rumbleW ?? 1.6;
      add(side * px, 0, false, side * (px + rw), 0, false, style.rumble);
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
  if (ceiling) add(tops[0].x, tops[0].y, tops[0].abs, tops[1].x, tops[1].y, tops[1].abs, ceiling);
  return { spans };
}

const MAX_SEGS = 220;
const MAX_SPANS = 32;

/** One dynamic mesh for the whole visible road + ground, rebuilt each frame. */
export class RoadMesh {
  mesh: THREE.Mesh;
  private pos: Float32Array;
  private colr: Float32Array;
  private geo: THREE.BufferGeometry;

  constructor(private profiles: Profile[]) {
    const maxQuads = MAX_SEGS * MAX_SPANS;
    this.pos = new Float32Array(maxQuads * 4 * 3);
    this.colr = new Float32Array(maxQuads * 4 * 3);
    const idx = new Uint32Array(maxQuads * 6);
    for (let q = 0; q < maxQuads; q++) {
      idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4, q * 4 + 2, q * 4 + 3], q * 6);
    }
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.colr, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setIndex(new THREE.BufferAttribute(idx, 1));
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(this.geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 0;
  }

  update(view: View) {
    const { bx, by, bz, bh, yRef } = view;
    const P = this.pos, C = this.colr;
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
        q++;
      }
    }
    this.geo.setDrawRange(0, q * 6);
    (this.geo.attributes.position as THREE.BufferAttribute).addUpdateRange(0, q * 12);
    (this.geo.attributes.color as THREE.BufferAttribute).addUpdateRange(0, q * 12);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}
