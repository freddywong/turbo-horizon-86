import * as THREE from 'three';
import { GeoBuilder, V3, at, rotY } from './geom';
import { ROAD_HALF, SEG } from './track';
import { Rng } from './rng';
import { GFX, haloTexture } from './gfx';
import { atlasPatch, FACADE, facadeAtlas, tileOffset } from './textures';

export type MatKind = 'lit' | 'glow' | 'sign' | 'halo' | 'facade' | 'facadeLit';
export interface PropPart { geo: THREE.BufferGeometry; mat: MatKind; tint?: boolean }
export interface PropDef { parts: PropPart[]; radius: number; max: number; len?: number }
export type UV = [number, number, number, number];

export interface Materials {
  lit: THREE.Material; glow: THREE.Material; sign: THREE.Material; halo: THREE.Material; paint: THREE.Material;
  facade: THREE.Material; facadeLit: THREE.Material;
}

let facadeTex: THREE.Texture | null = null;

export function makeMaterials(signTex: THREE.Texture): Materials {
  if (GFX.modern && !facadeTex) facadeTex = facadeAtlas();
  const facade = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide });
  const facadeLit = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  if (GFX.modern && facadeTex) {
    atlasPatch(facade, facadeTex);
    atlasPatch(facadeLit, facadeTex);
  }
  return {
    facade,
    facadeLit,
    lit: new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }),
    glow: new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }),
    sign: new THREE.MeshBasicMaterial({ map: signTex, side: THREE.DoubleSide }),
    // additive light halos: only drawn in the '92 look
    halo: new THREE.MeshBasicMaterial({
      map: haloTexture(), vertexColors: true, transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false, fog: false, side: THREE.DoubleSide, visible: GFX.modern,
    }),
    // glossy car paint with a specular glint in the '92 look
    paint: GFX.modern
      ? new THREE.MeshPhongMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide, shininess: 45, specular: 0x9a9a9a })
      : new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }),
  };
}

/** Draws every visible prop with one InstancedMesh per prop part. */
export class PropRenderer {
  private meshes: { mesh: THREE.InstancedMesh; tint: boolean }[][] = [];
  private counts: number[] = [];
  private m = new THREE.Matrix4();
  private q = new THREE.Quaternion();
  private e = new THREE.Euler();
  private p = new THREE.Vector3();
  private sc = new THREE.Vector3();
  private c = new THREE.Color();
  private white = new THREE.Color(1, 1, 1);

  constructor(public defs: PropDef[], mats: Materials, parent: THREE.Object3D) {
    for (const d of defs) {
      const list = d.parts.map((part) => {
        const mesh = new THREE.InstancedMesh(part.geo, mats[part.mat], d.max);
        mesh.frustumCulled = false;
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.setColorAt(0, this.white);
        mesh.count = 0;
        parent.add(mesh);
        return { mesh, tint: part.tint ?? part.mat === 'lit' };
      });
      this.meshes.push(list);
      this.counts.push(0);
    }
  }

  begin() {
    this.counts.fill(0);
  }

  add(t: number, x: number, y: number, z: number, rot: number, s = 1, sy = 1, tint?: number, roll = 0) {
    const n = this.counts[t];
    if (n >= this.defs[t].max) return;
    this.counts[t] = n + 1;
    this.e.set(0, rot, roll, 'YXZ');
    this.q.setFromEuler(this.e);
    this.p.set(x, y, z);
    this.sc.set(s, s * sy, s);
    this.m.compose(this.p, this.q, this.sc);
    if (tint !== undefined) this.c.setHex(tint);
    for (const { mesh, tint: tinted } of this.meshes[t]) {
      mesh.setMatrixAt(n, this.m);
      mesh.setColorAt(n, tinted && tint !== undefined ? this.c : this.white);
    }
  }

  end() {
    this.meshes.forEach((list, t) => {
      for (const { mesh } of list) {
        mesh.count = this.counts[t];
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      }
    });
  }
}

// ---------------------------------------------------------------------------
// Prop library. Everything is deliberately built from a handful of polygons.
// Local axes: -Z points down the road (away from the player), +X to the right.
// ---------------------------------------------------------------------------

const scaleHex = (c: number, k: number) => new THREE.Color(c).multiplyScalar(k).getHex();

const parts = (lit: GeoBuilder, glow?: GeoBuilder, sign?: GeoBuilder): PropPart[] => {
  const out: PropPart[] = [{ geo: lit.build(), mat: 'lit' }];
  if (glow && !glow.empty) out.push({ geo: glow.build(), mat: 'glow' });
  if (sign && !sign.empty) out.push({ geo: sign.build(), mat: 'sign' });
  return out;
};

export function palmTree(): PropDef {
  const g = new GeoBuilder();
  addPalm(g);
  return { parts: parts(g), radius: 0.8, max: 260 };
}

/** Sandy islet with a couple of palms (sits on the sea at absolute height 0). */
export function islet(): PropDef {
  const g = new GeoBuilder();
  g.blob(0, 0, 0, 16, 2.4, 11, [0xf2dc9a, 0xd8c080]);
  g.with(at(-4, 1.5, 1), () => addPalm(g));
  g.with(at(5, 1.2, -2).multiply(rotY(1.3)).multiply(new THREE.Matrix4().makeScale(0.8, 0.8, 0.8)), () => addPalm(g));
  return { parts: parts(g), radius: 0, max: 20 };
}

export function addPalm(g: GeoBuilder) {
  const segs = 5;
  let x = 0;
  for (let i = 0; i < segs; i++) {
    const nx = 0.18 * Math.pow(i + 1, 1.5);
    const y0 = i * 2, y1 = (i + 1) * 2;
    const r0 = 0.48 - i * 0.04, r1 = 0.44 - i * 0.04;
    const c = i % 2 ? 0x8a5a2b : 0xa8703a;
    // slanted hex segment
    for (let k = 0; k < 6; k++) {
      const a0 = (k / 6) * Math.PI * 2, a1 = ((k + 1) / 6) * Math.PI * 2;
      g.quad(
        [x + Math.cos(a0) * r0, y0, Math.sin(a0) * r0], [x + Math.cos(a1) * r0, y0, Math.sin(a1) * r0],
        [nx + Math.cos(a1) * r1, y1, Math.sin(a1) * r1], [nx + Math.cos(a0) * r1, y1, Math.sin(a0) * r1], k % 2 ? c : 0x744a22);
    }
    x = nx;
  }
  const top: V3 = [x, segs * 2, 0];
  const leaves = 7;
  for (let i = 0; i < leaves; i++) {
    const a = (i / leaves) * Math.PI * 2 + 0.3;
    const dx = Math.cos(a), dz = Math.sin(a);
    const px = -dz, pz = dx; // perpendicular
    const L = (d: number, h: number, w: number): [V3, V3] => [
      [top[0] + dx * d + px * w, top[1] + h, top[2] + dz * d + pz * w],
      [top[0] + dx * d - px * w, top[1] + h, top[2] + dz * d - pz * w],
    ];
    const [a1, b1] = L(1.5, 0.7, 0.75);
    const [a2, b2] = L(3.0, 0.3, 0.6);
    const tip: V3 = [top[0] + dx * 4.4, top[1] - 1.6, top[2] + dz * 4.4];
    const c = i % 2 ? 0x2fae4a : 0x1f8a3a;
    g.tri(top, a1, b1, c);
    g.quad(b1, a1, a2, b2, i % 2 ? 0x26983f : 0x1a7432);
    g.tri(b2, a2, tip, c);
  }
  g.blob(top[0], top[1] - 0.3, 0, 0.5, 0.45, 0.5, 0x6a4a1a);
}

export function deciduousTree(): PropDef {
  const g = new GeoBuilder();
  g.prism(0, 0, 0, 3, 0.45, 0.32, 5, [0x6e4a26, 0x5a3c1e]);
  g.blob(0, 4.6, 0, 2.8, 2.4, 2.8, [0x3fae3f, 0x2a7a2e]);
  g.blob(0.4, 6.8, 0.2, 1.9, 1.6, 1.9, [0x56c24a, 0x34883a]);
  return { parts: parts(g), radius: 1.2, max: 220 };
}

export function bush(): PropDef {
  const g = new GeoBuilder();
  g.blob(0, 0.9, 0, 1.8, 1.1, 1.6, [0x48b040, 0x2c7a2c]);
  return { parts: parts(g), radius: 0, max: 160 };
}

export function rock(): PropDef {
  const g = new GeoBuilder();
  g.blob(0, 1.0, 0, 2.2, 1.6, 2.0, [0xc8b48c, 0x8c7a5a]);
  g.blob(1.6, 0.6, 0.6, 1.2, 0.9, 1.1, [0xb8a47c, 0x7c6a4c]);
  return { parts: parts(g), radius: 2.2, max: 120 };
}

export function umbrella(colors: [number, number]): PropDef {
  const g = new GeoBuilder();
  g.box(0, 1.3, 0, 0.12, 2.6, 0.12, 0xf0f0f0);
  g.prism(0, 0, 2.3, 3.0, 2.1, 0, 8, [colors[0], colors[1]]);
  g.prism(0, 0, 2.3, 2.3001, 2.1, 0.01, 8, [colors[0], colors[1]]);
  // towel
  g.quad([-0.6, 0.03, 0.6], [0.6, 0.03, 0.6], [0.6, 0.03, 2.4], [-0.6, 0.03, 2.4], colors[0]);
  return { parts: parts(g), radius: 0, max: 120 };
}

export function lifeguardTower(): PropDef {
  const g = new GeoBuilder();
  for (const [x, z] of [[-0.9, -0.9], [0.9, -0.9], [0.9, 0.9], [-0.9, 0.9]]) g.box(x, 1.3, z, 0.2, 2.6, 0.2, 0xffffff);
  g.box(0, 3.5, 0, 2.6, 1.8, 2.4, [0xffffff, 0xffffff]);
  g.box(0, 3.6, 1.21, 1.8, 0.7, 0.02, 0x2a5a8a);
  g.prism(0, 0, 4.4, 5.4, 2.1, 0, 4, [0xff4a6a, 0xff7a8a], null, Math.PI / 4);
  return { parts: parts(g), radius: 1.4, max: 30 };
}

/** Tall pastel resort hotel. White base, instance tint gives the pastel colour. */
/** Rooftop clutter: AC units, a water tank, a mast with a warning lamp. */
function rooftop(g: GeoBuilder, l: GeoBuilder, y: number, w: number, d: number, rng: Rng, mast = true) {
  for (let i = 0; i < 3; i++) g.box(rng.range(-w / 3, w / 3), y + 0.6, rng.range(-d / 3, d / 3), 2.2, 1.2, 1.6, [0xc8c8c8, 0xdcdcdc]);
  if (rng.chance(0.7)) {
    const tx = rng.range(-w / 4, w / 4), tz = rng.range(-d / 4, d / 4);
    for (const [dx, dz] of [[-0.9, -0.9], [0.9, -0.9], [0.9, 0.9], [-0.9, 0.9]]) g.box(tx + dx, y + 1, tz + dz, 0.2, 2, 0.2, 0x6a6a70);
    g.prism(tx, tz, y + 2, y + 4.2, 1.4, 1.4, 8, [0x9a8a70, 0x8a7a62], 0x7a6a52);
  }
  if (mast) {
    g.box(w / 4, y + 4, 0, 0.25, 8, 0.25, 0x9a9aa8);
    l.box(w / 4, y + 8.2, 0, 0.6, 0.6, 0.6, 0xff2020);
  }
}

export function hotel(style: number, rng: Rng): PropDef {
  const g = new GeoBuilder();
  const glass = 0x3a8ab8;
  if (GFX.modern) {
    const f = new GeoBuilder();
    const l = new GeoBuilder();
    const T = (t: number) => tileOffset(t);
    if (style === 0) {
      const w = 16, d = 12, h = 38;
      f.facadeBox(0, h / 2 + 1.5, 0, w, h - 3, d, T(FACADE.HOTEL), 8, 8, [0xffffff, 0xeeeeee], 0xe8e8e8);
      // lobby: dark glass ground floor with a canopy
      g.box(0, 1.5, 0, w - 0.4, 3, d - 0.4, [0x2a4a6a, 0x2a4a6a]);
      g.box(0, 3.1, d / 2 + 1.2, 7, 0.3, 2.6, [0xffffff, 0xffffff]);
      for (const x of [-3.2, 3.2]) g.box(x, 1.5, d / 2 + 2.3, 0.2, 3, 0.2, 0xd8d8d8);
      for (const x of [-w / 2 - 0.2, w / 2 + 0.2]) g.box(x, h / 2, 0, 0.7, h, d + 0.7, [0xffffff, 0xffffff]);
      g.box(0, h + 1.2, 0, w * 0.5, 2.4, d * 0.6, [0xffffff, 0xf0f0f0]);
      rooftop(g, l, h, w, d, rng);
    } else if (style === 1) {
      const tiers: [number, number, number][] = [[18, 16, 14], [14, 12, 11], [9, 9, 8]];
      let y = 0;
      for (const [w, h, d] of tiers) {
        f.facadeBox(0, y + h / 2, 0, w, h, d, T(FACADE.DECO), 8, 8, [0xffffff, 0xf0f0f0], 0xf0e8d8);
        g.box(0, y + h - 0.4, 0, w + 0.6, 0.8, d + 0.6, [0xffe08a, 0xffe8a0]);
        g.box(0, y + h - 1.4, 0, w + 0.3, 0.25, d + 0.3, 0x40c0b0);
        y += h;
      }
      g.prism(0, 0, y, y + 7, 1.2, 0.05, 4, [0xffffff, 0xe0e0e0]);
      l.box(0, y + 7.2, 0, 0.5, 0.5, 0.5, 0xff2020);
    } else {
      const w = 26, d = 9, h = 12;
      f.facadeBox(0, h / 2, 0, w, h, d, T(FACADE.MOTEL), 12, 12, [0xffffff, 0xf0f0f0], 0xe0dcd4);
      g.box(0, h + 0.3, 0, w + 1, 0.6, d + 1, [0xff6a8a, 0xff7a96]);
      g.box(0, 6.1, d / 2 + 0.9, w, 0.25, 1.8, [0xf0f0f0, 0xffffff]);
      for (let x = -w / 2 + 3; x < w / 2; x += 6) g.box(x, h / 2, d / 2 + 1.7, 0.4, h, 0.4, 0xffffff);
      rooftop(g, l, h, w, d, rng, false);
    }
    return { parts: [...parts(g, l), { geo: f.build(), mat: 'facade' }], radius: 0, max: 40 };
  }
  if (style === 0) {
    const w = 16, d = 12, h = 38;
    g.box(0, h / 2, 0, w, h, d, [0xffffff, 0xf0f0f0]);
    for (let y = 4; y < h - 2; y += 3.2) g.box(0, y, 0, w + 0.3, 1.2, d + 0.3, glass);
    g.box(0, h + 1.2, 0, w * 0.5, 2.4, d * 0.6, 0xffffff);
    g.box(-w / 2 - 0.2, h / 2, 0, 0.6, h, d + 0.6, 0xffffff);
    g.box(w / 2 + 0.2, h / 2, 0, 0.6, h, d + 0.6, 0xffffff);
  } else if (style === 1) {
    // stepped art-deco tower
    const tiers: [number, number, number][] = [[18, 16, 14], [14, 12, 11], [9, 9, 8]];
    let y = 0;
    for (const [w, h, d] of tiers) {
      g.box(0, y + h / 2, 0, w, h, d, [0xffffff, 0xf4f4f4]);
      for (let yy = y + 2.5; yy < y + h - 1; yy += 3) g.box(0, yy, 0, w * 0.7, 1.3, d + 0.3, glass);
      g.box(0, y + h - 0.4, 0, w + 0.6, 0.8, d + 0.6, 0xffe08a);
      y += h;
    }
    g.prism(0, 0, y, y + 7, 1.2, 0.05, 4, [0xffffff, 0xe0e0e0]);
  } else {
    // long low motel-style block
    const w = 26, d = 9, h = 12;
    g.box(0, h / 2, 0, w, h, d, [0xffffff, 0xf2f2f2]);
    for (let y = 2.5; y < h; y += 3.3) g.box(0, y, 0, w + 0.3, 1.1, d + 0.3, glass);
    g.box(0, h + 0.3, 0, w + 1, 0.6, d + 1, 0xff6a8a);
    for (let x = -w / 2 + 3; x < w / 2; x += 6) g.box(x, h / 2, d / 2 + 0.25, 0.6, h, 0.5, 0xffffff);
  }
  void rng;
  return { parts: parts(g), radius: 0, max: 40 };
}

/** Low pastel shop with a striped awning and a sign. */
export function shop(uv: UV): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const f = new GeoBuilder();
  if (GFX.modern) f.facadeBox(0, 3.5, 0, 12, 7, 9, tileOffset(FACADE.SHOP), 12, 7, [0xffffff, 0xf0f0f0], 0xe0dcd4);
  else {
    g.box(0, 3.5, 0, 12, 7, 9, [0xffffff, 0xf0f0f0]);
    g.box(0, 3, 4.6, 8, 2.6, 0.2, 0x3a7aa8);
  }
  for (let i = 0; i < 6; i++) {
    const x0 = -6 + i * 2, x1 = x0 + 2;
    g.quad([x0, 5.2, 4.5], [x1, 5.2, 4.5], [x1, 4.4, 6.0], [x0, 4.4, 6.0], i % 2 ? 0xffffff : 0xff4a5a);
  }
  s.quad([-5, 7.2, 4.52], [5, 7.2, 4.52], [5, 9.7, 4.52], [-5, 9.7, 4.52], 0xffffff, uv);
  g.box(0, 8.45, 4.4, 10.4, 2.9, 0.2, 0xffffff);
  const out: PropPart[] = [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }];
  if (!f.empty) out.push({ geo: f.build(), mat: 'facade' });
  return { parts: out, radius: 0, max: 40 };
}

/** Big roadside billboard on two legs. */
export function billboard(uv: UV, w = 9, h = 4.5, legs = 0x8a8a8a, frame = 0xf0f0f0): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  g.box(-w * 0.3, 2.5, 0, 0.35, 5, 0.35, legs);
  g.box(w * 0.3, 2.5, 0, 0.35, 5, 0.35, legs);
  g.box(0, 5 + h / 2, 0, w + 0.6, h + 0.6, 0.4, frame);
  s.quad([-w / 2, 5, 0.22], [w / 2, 5, 0.22], [w / 2, 5 + h, 0.22], [-w / 2, 5 + h, 0.22], 0xffffff, uv);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }], radius: 1.2, max: 40 };
}

/** Small road sign on a single post (route marker, distance sign). */
export function roadSign(uv: UV, w = 4, h = 2): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  g.box(0, 1.6, 0, 0.2, 3.2, 0.2, 0xcfcfcf);
  g.box(0, 3.2 + h / 2, -0.06, w + 0.2, h + 0.2, 0.1, 0xdddddd);
  s.quad([-w / 2, 3.2, 0.01], [w / 2, 3.2, 0.01], [w / 2, 3.2 + h, 0.01], [-w / 2, 3.2 + h, 0.01], 0xffffff, uv);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }], radius: 0.5, max: 30 };
}

/** Streetlight. Arm reaches toward -X (place on the right side, rotate PI for the left). */
export function streetLight(height: number, lamp: number, pole = 0x9aa0a8, arm = 3, halo = false): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  g.prism(0, 0, 0, height, 0.2, 0.14, 6, pole);
  g.box(-arm / 2, height, 0, arm, 0.22, 0.22, pole);
  l.box(-arm, height - 0.2, 0, 1.4, 0.3, 0.6, lamp);
  const out = parts(g, l);
  if (halo) {
    // big soft glow round the lamp, crossed so it reads from any angle
    const h = new GeoBuilder();
    const r = 4.2, y = height - 0.5;
    h.quad([-arm - r, y - r, 0], [-arm + r, y - r, 0], [-arm + r, y + r, 0], [-arm - r, y + r, 0], lamp, [0, 0, 1, 1]);
    h.quad([-arm, y - r, -r], [-arm, y - r, r], [-arm, y + r, r], [-arm, y + r, -r], lamp, [0, 0, 1, 1]);
    // pool of light on the road below
    h.quad([-arm - 3.5, 0.05, -3.5], [-arm + 3.5, 0.05, -3.5], [-arm + 3.5, 0.05, 3.5], [-arm - 3.5, 0.05, 3.5], scaleHex(lamp, 0.35), [0, 0, 1, 1]);
    out.push({ geo: h.build(), mat: 'halo', tint: false });
  }
  return { parts: out, radius: 0.5, max: 120 };
}

/** Guardrail section, one segment long. */
export function guardrail(color = 0xf2f2f2, post = 0x9a9a9a): PropDef {
  const g = new GeoBuilder();
  g.box(0, 0.85, -SEG / 2, 0.15, 0.45, SEG + 0.05, [color, color]);
  g.box(0, 0.4, 0, 0.18, 0.8, 0.18, post);
  g.box(0, 0.4, -SEG / 2, 0.18, 0.8, 0.18, post);
  return { parts: parts(g), radius: 0, max: 420 };
}

/** Start / checkpoint / goal gantry spanning the whole road. */
export function gate(uv: UV, post = 0xf0f0f0, beam = 0xe02a2a, lights = 0xffe040): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const l = new GeoBuilder();
  const X = ROAD_HALF + 2.5;
  g.box(-X, 5.5, 0, 1.2, 11, 1.2, [post, post]);
  g.box(X, 5.5, 0, 1.2, 11, 1.2, [post, post]);
  g.box(0, 11.5, 0, X * 2 + 1.6, 3.4, 0.8, beam);
  s.quad([-X + 1, 10.1, 0.42], [X - 1, 10.1, 0.42], [X - 1, 12.9, 0.42], [-X + 1, 12.9, 0.42], 0xffffff, uv);
  for (let i = 0; i < 6; i++) l.box(-X + 2 + i * ((X * 2 - 4) / 5), 13.6, 0.2, 0.9, 0.6, 0.6, lights);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }, { geo: l.build(), mat: 'glow' }], radius: 0, max: 4 };
}

/** Tunnel mouth: a massive concrete face with a hole for the road. */
export function tunnelPortal(face = 0x8a8a96, trim = 0xd8c040, H = 9): PropDef {
  const g = new GeoBuilder();
  const R = ROAD_HALF + 2.2;
  const top = 34, side = 60;
  g.box(-R - side / 2, top / 2 - 4, 0, side, top + 8, 3, [face, face]);
  g.box(R + side / 2, top / 2 - 4, 0, side, top + 8, 3, [face, face]);
  g.box(0, H + (top - H) / 2, 0, R * 2, top - H, 3, [face, face]);
  g.box(0, H + 0.6, 1.6, R * 2, 1.2, 0.3, trim);
  g.box(-R - 0.4, H / 2, 1.6, 0.8, H, 0.3, trim);
  g.box(R + 0.4, H / 2, 1.6, 0.8, H, 0.3, trim);
  return { parts: parts(g), radius: 0, max: 6 };
}

/** Tunnel bored through a hill: a flat cut-out hillside around a concrete portal. */
export function hillPortal(H = 9): PropDef {
  const g = new GeoBuilder();
  const O = ROAD_HALF + 2.2;
  const T = H + 2.5;
  const green = 0x4aae3a, dark = 0x3a8c30, rockC = 0xa89070, rockD = 0x8a7458;
  const L = (pts: [number, number][], c: number, z: number) => g.poly(pts.map(([x, y]): V3 => [x, y, z]), c);
  const mirror = (pts: [number, number][]) => pts.map(([x, y]): [number, number] => [-x, y]).reverse();
  // hill silhouette (left, crown, right)
  const left: [number, number][] = [[-130, -8], [-O, -8], [-O, T], [-34, 30], [-62, 38], [-98, 22]];
  L(left, green, -0.4);
  L(mirror([[-120, -8], [-O, -8], [-O, T], [-30, 34], [-55, 30], [-90, 16]]), dark, -0.4);
  L([[-O, T], [O, T], [O + 8, 34], [12, 44], [-10, 40], [-O - 6, 30]], green, -0.4);
  // rocky face around the opening
  L([[-O - 10, -8], [-O, -8], [-O, T], [-O - 6, T + 6], [-O - 14, 8]], rockC, 0);
  L([[O, -8], [O + 10, -8], [O + 14, 8], [O + 6, T + 6], [O, T]], rockD, 0);
  L([[-O, T], [O, T], [O + 6, T + 6], [0, T + 9], [-O - 6, T + 6]], rockC, 0);
  // concrete portal frame + hazard trim
  g.box(-O - 0.6, H / 2, 0.4, 1.2, H + 0.4, 0.8, 0xe0d8c8);
  g.box(O + 0.6, H / 2, 0.4, 1.2, H + 0.4, 0.8, 0xe0d8c8);
  g.box(0, H + 1.1, 0.4, O * 2 + 2.4, 2.2, 0.8, 0xe0d8c8);
  for (let i = 0; i < 10; i++) {
    const x0 = -O + (i * O * 2) / 10;
    g.quad([x0, H + 0.2, 0.82], [x0 + (O * 2) / 10, H + 0.2, 0.82], [x0 + (O * 2) / 10, H + 0.9, 0.82], [x0, H + 0.9, 0.82], i % 2 ? 0x1a1a1a : 0xffd040);
  }
  return { parts: parts(g), radius: 0, max: 6 };
}

/** Yellow/black curve-warning chevron board on two short posts. */
export function chevron(uv: UV, mount = 0): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const y0 = 1.0 + mount;
  if (!mount) for (const x of [-1.5, 1.5]) g.box(x, 0.6, -0.1, 0.16, 1.2, 0.16, 0xe8e8e8);
  g.box(0, y0 + 0.75, -0.08, 4.3, 1.7, 0.12, 0x1a1a1a);
  s.quad([-2, y0 + 0.1, 0], [2, y0 + 0.1, 0], [2, y0 + 1.4, 0], [-2, y0 + 1.4, 0], 0xffffff, uv);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }], radius: 1.8, max: 60 };
}

/** Clipped hedge with flowers, one segment long (rows read as continuous). */
export function hedge(): PropDef {
  const g = new GeoBuilder();
  g.box(0, 0.65, -SEG / 2, 1.5, 1.3, SEG, [0x3a9a3a, 0x52b84a]);
  const cols = [0xff5a8a, 0xffe040, 0xffffff, 0xff8a30];
  for (let i = 0; i < 6; i++) g.box((i % 2 ? 0.35 : -0.35), 1.34, -0.5 - i * 0.95, 0.3, 0.12, 0.3, cols[i % cols.length]);
  return { parts: parts(g), radius: 0, max: 360 };
}

/** Flag pole with a pennant; pennant colour comes from the instance tint. */
export function flag(): PropDef {
  const g = new GeoBuilder();
  const f = new GeoBuilder();
  g.prism(0, 0, 0, 8, 0.1, 0.08, 6, 0xf0f0f0, 0xffe040);
  f.tri([0, 7.8, 0], [0, 6.2, 0], [-2.6, 7.0, 0.3], 0xffffff);
  f.tri([0, 7.0, 0.01], [0, 6.6, 0.01], [-1.6, 6.85, 0.31], 0xd0d0d0);
  return { parts: [{ geo: g.build(), mat: 'lit', tint: false }, { geo: f.build(), mat: 'lit', tint: true }], radius: 0.4, max: 80 };
}

/** Tall cypress / pine made of stacked cones. */
export function pine(): PropDef {
  const g = new GeoBuilder();
  g.prism(0, 0, 0, 1.6, 0.3, 0.25, 5, 0x6a4626);
  g.prism(0, 0, 1.2, 5.2, 2.4, 0, 7, [0x2a7a3a, 0x1e6430]);
  g.prism(0, 0, 3.6, 7.6, 1.9, 0, 7, [0x34903f, 0x267034]);
  g.prism(0, 0, 5.8, 9.6, 1.3, 0, 7, [0x3ea448, 0x2c7a38]);
  return { parts: parts(g), radius: 1.0, max: 200 };
}

/** Three surfboards stuck upright in the sand. */
export function surfboards(): PropDef {
  const g = new GeoBuilder();
  const cols: [number, number][] = [[0xff4a6a, 0xffffff], [0x2aa0ff, 0xffe040], [0xffe040, 0xff6a20]];
  cols.forEach(([c, st], i) => {
    const x = (i - 1) * 0.8;
    const pts: V3[] = [];
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      pts.push([x + Math.cos(a) * 0.32, 1.25 + Math.sin(a) * 1.25, i * 0.12]);
    }
    g.poly(pts, c);
    g.quad([x - 0.06, 0.1, i * 0.12 + 0.01], [x + 0.06, 0.1, i * 0.12 + 0.01], [x + 0.06, 2.4, i * 0.12 + 0.01], [x - 0.06, 2.4, i * 0.12 + 0.01], st);
  });
  return { parts: parts(g), radius: 0, max: 40 };
}

/** Little sailing boat for the sea (absolute height 0). */
export function sailboat(): PropDef {
  const g = new GeoBuilder();
  g.poly([[-1.4, 0, -4], [1.4, 0, -4], [1.1, 0.9, -4.4], [-1.1, 0.9, -4.4]], 0xffffff);
  g.box(0, 0.6, 0, 2.8, 1.2, 8, [0xffffff, 0xe8e8e8, 0xf0f0f0, 0x2a5aa8]);
  g.box(0, 0.35, 0, 2.84, 0.25, 8.04, 0x2a5aa8);
  g.box(0, 6, 0.6, 0.15, 10, 0.15, 0xd0d0d0);
  g.tri([0, 10.5, 0.6], [0, 1.6, 0.6], [0, 1.6, 4.0], 0xffffff);
  g.tri([0, 9.0, 0.5], [0, 1.6, 0.5], [0, 1.6, -3.0], 0xff6a8a);
  return { parts: parts(g), radius: 0, max: 40 };
}

/** Concrete road bridge crossing over the expressway, lit underneath. */
export function overpass(fascia: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const X = ROAD_HALF + 60, y = 12.5;
  g.box(0, y, 0, X * 2, 2.4, 11, [0x8a8a98, 0xa8a8b4, 0x6e6e7c, 0x6e6e7c]);
  g.box(0, y - 0.3, 5.55, X * 2, 1.2, 0.2, fascia);
  g.box(0, y + 1.7, 5.3, X * 2, 1.0, 0.3, 0xc8c8d0);
  g.box(0, y + 1.7, -5.3, X * 2, 1.0, 0.3, 0xc8c8d0);
  for (const x of [-(ROAD_HALF + 5), ROAD_HALF + 5, -(ROAD_HALF + 36), ROAD_HALF + 36]) g.box(x, y / 2 - 20, 0, 2.6, y + 40, 4, [0x7a7a88, 0x8a8a96]);
  for (let x = -ROAD_HALF; x <= ROAD_HALF; x += 5.5) l.box(x, y - 1.25, 0, 1.6, 0.1, 0.8, 0xfff0c0);
  for (let x = -X + 4; x < X; x += 9) l.box(x, y + 2.35, 5.3, 0.5, 0.3, 0.4, 0xffc060);
  return { parts: parts(g, l), radius: 0, max: 6 };
}

/** A scatter of street lights / windows on the city floor far below the expressway. */
export function floorLights(rng: Rng): PropDef {
  const l = new GeoBuilder();
  const cols = [0xffd070, 0xffffff, 0xffb040, 0x80e0ff, 0xff5a8a];
  for (let i = 0; i < 26; i++) {
    const x = rng.range(-45, 45), z = rng.range(-30, 30);
    const c = rng.pick(cols);
    if (rng.chance(0.4)) {
      // a row of lamps along a street
      for (let k = 0; k < 5; k++) l.box(x + k * 3, 0.4, z, 0.7, 0.7, 0.7, c);
    } else l.box(x, 0.4, z, 0.9, 0.9, 0.9, c);
  }
  return { parts: [{ geo: l.build(), mat: 'glow' }], radius: 0, max: 200 };
}

// ----------------------------- traffic ------------------------------------



export function truck(stripe: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(0, 2.3, 1.0, 2.5, 3.2, 7.4, [0xf4f4f4, 0xffffff, 0xe8e8e8, 0xe0e0e0]);
  g.box(0, 2.2, 1.0, 2.54, 0.5, 7.44, stripe);
  g.box(0, 1.5, -3.6, 2.4, 2.2, 1.8, [0xffffff]);
  g.box(0, 2.1, -4.45, 2.0, 0.8, 0.1, 0x223344);
  for (const [x, z] of [[-1.0, -3.6], [1.0, -3.6], [-1.0, 2.6], [1.0, 2.6], [-1.0, 3.8], [1.0, 3.8]]) g.box(x, 0.45, z, 0.4, 0.9, 0.9, 0x151515);
  l.box(-1.0, 0.95, 4.72, 0.35, 0.3, 0.04, 0xff2a20);
  l.box(1.0, 0.95, 4.72, 0.35, 0.3, 0.04, 0xff2a20);
  return { parts: parts(g, l), radius: 0, max: 10, len: 6.5 };
}


/** City bus / coach. */
export function bus(stripe: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(0, 1.9, 0, 2.5, 3.0, 10, [0xffffff, 0xf4f4f4, 0xe8e8e8, 0xe8e8e8]);
  g.box(0, 2.4, 0, 2.54, 1.0, 9.0, 0x223344);
  g.box(0, 1.2, 0, 2.54, 0.4, 10.04, stripe);
  g.box(0, 2.6, 5.02, 1.8, 0.8, 0.05, 0x223344);
  for (const [x, z] of [[-1.05, -3.4], [1.05, -3.4], [-1.05, 3.4], [1.05, 3.4]]) g.box(x, 0.45, z, 0.4, 0.9, 1.0, 0x151515);
  l.box(-1.0, 1.0, 5.02, 0.3, 0.35, 0.04, 0xff2a20);
  l.box(1.0, 1.0, 5.02, 0.3, 0.35, 0.04, 0xff2a20);
  l.box(0, 3.25, 5.02, 1.6, 0.25, 0.04, 0xffb040);
  return { parts: parts(g, l), radius: 0, max: 8, len: 7.5 };
}


// ----------------------------- roadside detail ('92) -----------------------------

/** White reflector post with a black band and a red / white reflector. */
export function delineator(red: boolean): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(0, 0.55, 0, 0.16, 1.1, 0.16, [0xf4f4f4, 0xffffff]);
  g.box(0, 0.86, 0, 0.17, 0.12, 0.17, 0x1a1a1a);
  l.box(0, 0.72, 0.085, 0.1, 0.16, 0.01, red ? 0xff3020 : 0xffffff);
  return { parts: parts(g, l), radius: 0, max: 400 };
}

/** Small kilometre marker post with a number plate from the sign atlas. */
export function kmPost(uv: UV): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  g.box(0, 0.6, 0, 0.12, 1.2, 0.12, 0xdcdcdc);
  g.box(0, 1.35, -0.04, 0.9, 0.6, 0.06, 0xffffff);
  s.quad([-0.42, 1.08, 0], [0.42, 1.08, 0], [0.42, 1.62, 0], [-0.42, 1.62, 0], 0xffffff, uv);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }], radius: 0, max: 20 };
}

/** Low-poly person; the shirt takes the instance tint. variant 1 = swimwear. */
export function person(variant: number): PropDef {
  const g = new GeoBuilder();
  const c = new GeoBuilder();
  const skin = 0xd8a07a, legs = variant === 1 ? 0xd8a07a : 0x3a4a6a;
  g.box(-0.12, 0.42, 0, 0.18, 0.84, 0.2, legs);
  g.box(0.12, 0.42, 0, 0.18, 0.84, 0.2, legs);
  if (variant === 1) g.box(0, 0.8, 0, 0.44, 0.18, 0.24, 0x2a2a6a);
  c.box(0, 1.15, 0, 0.46, 0.62, 0.26, [0xffffff, 0xffffff]);
  g.box(-0.3, 1.1, 0, 0.12, 0.6, 0.14, skin);
  g.box(0.3, 1.1, 0, 0.12, 0.6, 0.14, skin);
  g.box(0, 1.6, 0, 0.24, 0.28, 0.24, skin);
  g.box(0, 1.76, -0.02, 0.26, 0.08, 0.26, variant === 1 ? 0xe8c060 : 0x2a1a10);
  return { parts: [{ geo: g.build(), mat: 'lit', tint: false }, { geo: c.build(), mat: 'lit', tint: true }], radius: 0, max: 160 };
}

/** A few seagulls gliding over the beach (flat V shapes). */
export function seagulls(rng: Rng): PropDef {
  const g = new GeoBuilder();
  for (let i = 0; i < 5; i++) {
    const x = rng.range(-10, 10), y = rng.range(0, 6), z = rng.range(-10, 10), s = rng.range(0.8, 1.3);
    g.tri([x, y, z], [x - 0.9 * s, y + 0.35 * s, z - 0.2], [x - 0.1, y + 0.05, z + 0.25 * s], 0xffffff);
    g.tri([x, y, z], [x + 0.9 * s, y + 0.35 * s, z - 0.2], [x + 0.1, y + 0.05, z + 0.25 * s], 0xe8e8f0);
  }
  return { parts: parts(g), radius: 0, max: 30 };
}

/** Striped beach hut; the stripe colour takes the instance tint. */
export function beachHut(): PropDef {
  const g = new GeoBuilder();
  const c = new GeoBuilder();
  g.box(0, 1.3, 0, 2.4, 2.6, 2.2, [0xffffff, 0xf4f4f4]);
  for (let i = 0; i < 3; i++) c.box(-0.8 + i * 0.8, 1.3, 0, 0.4, 2.62, 2.22, [0xffffff, 0xffffff]);
  g.prism(0, 0, 2.6, 3.6, 1.9, 0, 4, [0xffffff, 0xe8e8e8], null, Math.PI / 4);
  g.box(0, 1.0, 1.12, 0.9, 1.8, 0.04, 0x6a4a2a);
  return { parts: [{ geo: g.build(), mat: 'lit', tint: false }, { geo: c.build(), mat: 'lit', tint: true }], radius: 1.4, max: 40 };
}

/** Amber reflector on top of the expressway barrier. */
export function barrierLamp(color: number): PropDef {
  const l = new GeoBuilder();
  l.box(0, 0.05, 0, 0.16, 0.1, 0.4, color);
  return { parts: [{ geo: l.build(), mat: 'glow' }], radius: 0, max: 500 };
}

/** Orange emergency phone box against the barrier. */
export function phoneBox(uv: UV): PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(0, 1.1, 0, 1.0, 2.2, 0.8, [0xff8a20, 0xffa040]);
  g.box(0, 2.3, 0, 1.1, 0.2, 0.9, 0x3a3a3a);
  s.quad([-0.4, 1.4, 0.41], [0.4, 1.4, 0.41], [0.4, 1.9, 0.41], [-0.4, 1.9, 0.41], 0xffffff, uv);
  l.box(0, 2.5, 0, 0.3, 0.2, 0.3, 0xffd040);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }, { geo: l.build(), mat: 'glow' }], radius: 0, max: 20 };
}

/** Pair of jet fans hung from a tunnel ceiling, with a row of lamps. */
export function tunnelFans(y: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  for (const x of [-4.5, 4.5]) {
    g.with(new THREE.Matrix4().makeTranslation(x, y - 1.1, 0).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), () => {
      g.prism(0, 0, -1.6, 1.6, 0.7, 0.7, 10, [0x8a8a92, 0x7a7a82], 0x2a2a2e);
      g.prism(0, 0, -1.61, -1.6, 0.7, 0.7, 10, 0x2a2a2e, 0x2a2a2e);
    });
    g.box(x, y - 0.3, 0, 0.2, 0.6, 0.2, 0x5a5a62);
  }
  for (const x of [-9, 9]) l.box(x, y - 0.2, 0, 0.4, 0.2, 1.4, 0xfff0c0);
  return { parts: parts(g, l), radius: 0, max: 12 };
}
