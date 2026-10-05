import * as THREE from 'three';
import { GeoBuilder, V3 } from '../geom';
import { GFX } from '../gfx';
import { CarSpec, Light, Station } from './spec';
import { brakeGeoHD, buildBodyHD, wheelGeoHD } from './hd';
import { carMaterials } from './mats';
import { shadowGeo, shadowMaterial } from './shadow';
import { driverColours, ellipsoid, gunArm, helmet, torso } from './figure';

const GLASS = 0x18283c, GLASS_SIDE = 0x22364c, DARK = 0x141416, BLACK = 0x0a0a0c, CHROME = 0xc8ccd4;

const scale = (c: number, k: number) => new THREE.Color(c).multiplyScalar(k).getHex();

/** Interpolates a station field at position z. */
export function at(st: Station[], z: number, key: 'w' | 'yb' | 'belt' | 'top' | 'wt'): number {
  if (z <= st[0].z) return st[0][key];
  for (let i = 1; i < st.length; i++) {
    if (z <= st[i].z) {
      const t = (z - st[i - 1].z) / (st[i].z - st[i - 1].z);
      return st[i - 1][key] + (st[i][key] - st[i - 1][key]) * t;
    }
  }
  return st[st.length - 1][key];
}

export interface CarGeo {
  lit: GeoBuilder;
  glow: GeoBuilder;
  brake: GeoBuilder;
  plate: { y: number; z: number };
  tailZ: number;
}

/** Builds the body (no wheels) from a spec. Traffic skips the fine detail. */
export function buildBody(spec: CarSpec, paint: number, traffic = false): CarGeo {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const b = new GeoBuilder();
  const st = spec.stations;
  const shade = scale(paint, 0.72), deep = scale(paint, 0.5);
  const last = st[st.length - 1];
  const zR = last.z;

  // ---- lofted body ------------------------------------------------------------
  for (let i = 0; i < st.length - 1; i++) {
    const a = st[i], c = st[i + 1];
    const cabin = a.seg === 'ws' || a.seg === 'rf' || a.seg === 'rw' || a.seg === 'lv';
    for (const s of [-1, 1]) {
      g.quad([s * a.w, a.yb, a.z], [s * c.w, c.yb, c.z], [s * c.w, c.belt, c.z], [s * a.w, a.belt, a.z], paint);
      g.quad([s * a.w, a.belt, a.z], [s * c.w, c.belt, c.z], [s * c.wt, c.top, c.z], [s * a.wt, a.top, a.z],
        cabin && a.seg !== 'lv' ? GLASS_SIDE : paint);
      // dark sill
      g.quad([s * (a.w + 0.004), a.yb, a.z], [s * (c.w + 0.004), c.yb, c.z], [s * (c.w + 0.004), c.yb + 0.09, c.z], [s * (a.w + 0.004), a.yb + 0.09, a.z], deep);
    }
    const top = a.seg === 'ws' || a.seg === 'rw' ? GLASS : a.seg === 'lv' ? DARK : a.seg === 'bed' ? DARK : a.seg === 'rf' ? shade : paint;
    g.quad([-a.wt, a.top, a.z], [a.wt, a.top, a.z], [c.wt, c.top, c.z], [-c.wt, c.top, c.z], top);
    if (a.seg === 'lv') {
      // louvred cover: paint slats over the dark opening
      for (let k = 1; k < 6; k++) {
        const t = k / 6;
        const z = a.z + (c.z - a.z) * t, y = a.top + (c.top - a.top) * t + 0.01, w = a.wt + (c.wt - a.wt) * t;
        g.quad([-w, y, z - 0.03], [w, y, z - 0.03], [w, y + 0.01, z + 0.03], [-w, y + 0.01, z + 0.03], paint);
      }
    }
  }
  const cap = (s: Station, col: number, dz: number) => g.poly([
    [-s.w, s.yb, s.z + dz], [-s.w, s.belt, s.z + dz], [-s.wt, s.top, s.z + dz], [s.wt, s.top, s.z + dz], [s.w, s.belt, s.z + dz], [s.w, s.yb, s.z + dz],
  ], col);
  cap(st[0], shade, 0);
  cap(last, shade, 0);
  // ---- nose: intake + headlights ----------------------------------------------
  const f0 = st[0], zF = f0.z - 0.006;
  g.quad([-f0.w * 0.7, f0.yb + 0.04, zF], [f0.w * 0.7, f0.yb + 0.04, zF], [f0.w * 0.7, f0.yb + 0.14, zF], [-f0.w * 0.7, f0.yb + 0.14, zF], BLACK);
  if (!traffic) {
    const fr = spec.front ?? 'popup';
    const hy = (f0.belt + f0.top) / 2;
    for (const s of [-1, 1]) {
      const x = s * f0.w * 0.62;
      if (fr === 'popup') {
        // closed pop-up lids: a shut line on the bonnet + small bumper lamps
        const zl = at(st, f0.z + 0.45, 'top');
        g.quad([x - 0.2, zl + 0.004, f0.z + 0.3], [x + 0.2, zl + 0.004, f0.z + 0.3], [x + 0.2, zl + 0.004, f0.z + 0.33], [x - 0.2, zl + 0.004, f0.z + 0.33], BLACK);
        l.quad([x - 0.14, f0.yb + 0.17, zF], [x + 0.14, f0.yb + 0.17, zF], [x + 0.14, f0.yb + 0.24, zF], [x - 0.14, f0.yb + 0.24, zF], 0xffb040);
      } else if (fr === 'round') {
        const pts: V3[] = [];
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * Math.PI * 2;
          pts.push([x + Math.cos(a) * 0.11, hy + Math.sin(a) * 0.09, zF - 0.002]);
        }
        l.poly(pts, 0xf4f0d8);
      } else {
        const hh = fr === 'slim' ? 0.05 : 0.1;
        l.quad([x - 0.2, hy - hh / 2, zF], [x + 0.2, hy - hh / 2, zF], [x + 0.2, hy + hh / 2, zF], [x - 0.2, hy + hh / 2, zF], 0xf4f0d8);
      }
    }
  }
  // bumper / valance
  g.quad([-last.w, last.yb - 0.06, zR + 0.02], [last.w, last.yb - 0.06, zR + 0.02], [last.w, last.yb + 0.08, zR + 0.02], [-last.w, last.yb + 0.08, zR + 0.02], traffic ? 0x3a3a3a : BLACK);

  // ---- tail -----------------------------------------------------------------
  for (const r of spec.rear ?? []) {
    for (const x of r.mirror === false || r.x === 0 ? [r.x] : [r.x, -r.x]) {
      g.quad([x - r.w / 2, r.y - r.h / 2, zR + 0.006], [x + r.w / 2, r.y - r.h / 2, zR + 0.006], [x + r.w / 2, r.y + r.h / 2, zR + 0.006], [x - r.w / 2, r.y + r.h / 2, zR + 0.006], r.c);
    }
  }
  const lamp = (gb: GeoBuilder, li: Light, x: number, z: number, c: number) => {
    if (li.round) {
      const pts: V3[] = [];
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
        pts.push([x + (Math.cos(a) * li.w) / 2, li.y + (Math.sin(a) * li.h) / 2, z]);
      }
      gb.poly(pts, c);
    } else gb.quad([x - li.w / 2, li.y - li.h / 2, z], [x + li.w / 2, li.y - li.h / 2, z], [x + li.w / 2, li.y + li.h / 2, z], [x - li.w / 2, li.y + li.h / 2, z], c);
  };
  const detail = GFX.modern && !traffic;
  for (const li of spec.lights) {
    for (const x of li.mirror === false || li.x === 0 ? [li.x] : [li.x, -li.x]) {
      lamp(l, li, x, zR + 0.012, li.c);
      if (li.brake && !traffic) lamp(b, li, x, zR + 0.016, 0xff3a2a);
      if (detail) {
        // lamp housing rim and a brighter reflector core
        lamp(g, { ...li, w: li.w + 0.05, h: li.h + 0.05 }, x, zR + 0.008, 0x1a1a1e);
        lamp(l, { ...li, w: li.w * 0.5, h: li.h * 0.45 }, x, zR + 0.014, new THREE.Color(li.c).lerp(new THREE.Color(0xffffff), 0.45).getHex());
      }
    }
  }
  if (spec.slats) {
    const s = spec.slats;
    for (let k = 0; k <= s.n; k++) {
      const y = s.y0 + ((s.y1 - s.y0) * k) / s.n;
      g.box(0, y, zR + 0.03, s.w * 2, 0.035, 0.03, BLACK);
    }
  }
  if (!traffic) {
    for (const e of spec.exhaust) {
      g.with(new THREE.Matrix4().makeTranslation(e.x, e.y, zR - 0.1).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), () => {
        g.prism(0, 0, -0.1, 0.17, e.r, e.r, 8, CHROME, null);
        g.prism(0, 0, 0.169, 0.17, e.r * 0.78, e.r * 0.78, 8, BLACK, BLACK);
      });
    }
    // plate recess
    g.quad([-0.3, spec.plateY - 0.1, zR + 0.004], [0.3, spec.plateY - 0.1, zR + 0.004], [0.3, spec.plateY + 0.1, zR + 0.004], [-0.3, spec.plateY + 0.1, zR + 0.004], DARK);
    if (detail) {
      // chrome plate frame, reversing lamps, diffuser fins
      const py = spec.plateY, z = zR + 0.006;
      g.quad([-0.31, py - 0.105, z], [0.31, py - 0.105, z], [0.31, py - 0.085, z], [-0.31, py - 0.085, z], CHROME);
      g.quad([-0.31, py + 0.085, z], [0.31, py + 0.085, z], [0.31, py + 0.105, z], [-0.31, py + 0.105, z], CHROME);
      for (const s of [-1, 1]) l.quad([s * 0.36, py - 0.04, zR + 0.012], [s * 0.48, py - 0.04, zR + 0.012], [s * 0.48, py + 0.04, zR + 0.012], [s * 0.36, py + 0.04, zR + 0.012], 0xf0f0e8);
      for (let k = -2; k <= 2; k++) g.box(k * 0.2, last.yb - 0.03, zR - 0.12, 0.03, 0.1, 0.26, DARK);
    }
  } else {
    g.quad([-0.26, spec.plateY - 0.08, zR + 0.008], [0.26, spec.plateY - 0.08, zR + 0.008], [0.26, spec.plateY + 0.08, zR + 0.008], [-0.26, spec.plateY + 0.08, zR + 0.008], 0xe8e8d8);
  }

  // ---- sides ----------------------------------------------------------------
  const sideQuad = (s: number, z0: number, z1: number, y0a: number, y1a: number, y0b: number, y1b: number, c: number, off: number) => {
    const w0 = at(st, z0, 'w') + off, w1 = at(st, z1, 'w') + off;
    g.quad([s * w0, y0a, z0], [s * w1, y0b, z1], [s * w1, y1b, z1], [s * w0, y1a, z0], c);
  };
  for (const f of spec.side ?? []) {
    for (const s of [-1, 1]) {
      if (f.kind === 'intake') sideQuad(s, f.z0, f.z1, f.y0 + (f.y1 - f.y0) * 0.5, f.y1, f.y0, f.y1, BLACK, 0.006);
      else if (f.kind === 'naca') sideQuad(s, f.z0, f.z1, f.y1 - 0.02, f.y1, f.y0, f.y1, BLACK, 0.006);
      else if (f.kind === 'stripe') sideQuad(s, f.z0, f.z1, f.y0, f.y1, f.y0, f.y1, f.c ?? 0xffffff, 0.008);
      else if (f.kind === 'strakes') {
        sideQuad(s, f.z0, f.z1, f.y0, f.y1, f.y0, f.y1, BLACK, 0.006);
        const n = f.n ?? 5;
        for (let k = 0; k < n; k++) {
          const y = f.y0 + ((f.y1 - f.y0) * (k + 0.6)) / (n + 0.2);
          sideQuad(s, f.z0, f.z1, y, y + 0.035, y, y + 0.035, paint, 0.03);
        }
      }
    }
  }
  if (!traffic) {
    // mirrors at the base of the windscreen
    const ws = st.find((s) => s.seg === 'ws');
    if (ws) for (const s of [-1, 1]) g.box(s * (ws.w + 0.06), ws.belt + 0.12, ws.z + 0.25, 0.18, 0.12, 0.12, [paint, paint, shade, BLACK]);
    if (detail && ws) {
      const rw = st.find((s) => s.seg === 'rw') ?? st.find((s) => s.seg === 'lv');
      for (const s of [-1, 1]) {
        // mirror stalk
        g.box(s * (ws.w + 0.02), ws.belt + 0.08, ws.z + 0.25, 0.08, 0.04, 0.05, BLACK);
        // door shut lines and handle
        const zd0 = ws.z + 0.05, zd1 = rw ? rw.z + 0.05 : ws.z + 1.1;
        for (const zz of [zd0, zd1]) {
          const w = at(st, zz, 'w') + 0.007, yb = at(st, zz, 'yb') + 0.1, yt = at(st, zz, 'belt') - 0.02;
          g.quad([s * w, yb, zz], [s * w, yb, zz + 0.02], [s * w, yt, zz + 0.02], [s * w, yt, zz], DARK);
        }
        const wh = at(st, zd1 - 0.25, 'w') + 0.012, yh = at(st, zd1 - 0.25, 'belt') - 0.1;
        g.quad([s * wh, yh, zd1 - 0.38], [s * wh, yh, zd1 - 0.18], [s * wh, yh + 0.04, zd1 - 0.18], [s * wh, yh + 0.04, zd1 - 0.38], CHROME);
      }
      // rubber window seals: dark strips along the screen and rear-window edges
      for (const seg of ['ws', 'rw'] as const) {
        const i = st.findIndex((s) => s.seg === seg);
        if (i < 0 || i + 1 >= st.length) continue;
        const a = st[i], c = st[i + 1];
        for (const s of [-1, 1]) {
          g.quad([s * a.wt, a.top + 0.004, a.z], [s * c.wt, c.top + 0.004, c.z], [s * (c.wt - 0.04), c.top + 0.006, c.z], [s * (a.wt - 0.04), a.top + 0.006, a.z], BLACK);
        }
      }
    }
  }

  if (traffic && GFX.modern) {
    // period traffic detail: chunky bumpers, door mirrors, rear wiper, roof rails on estates/4x4s
    const f0 = st[0], ws = st.find((s) => s.seg === 'ws'), rw = st.find((s) => s.seg === 'rw');
    g.box(0, last.yb + 0.05, zR + 0.08, last.w * 2 + 0.06, 0.16, 0.16, [0x3a3a3e, 0x4a4a4e]);
    g.box(0, f0.yb + 0.05, f0.z - 0.08, f0.w * 2 + 0.06, 0.16, 0.16, [0x3a3a3e, 0x4a4a4e]);
    if (ws) for (const s of [-1, 1]) g.box(s * (ws.w + 0.08), ws.belt + 0.1, ws.z + 0.2, 0.14, 0.12, 0.1, 0x1a1a1a);
    if (rw) g.quad([-0.05, rw.top + 0.15, rw.z + 0.3], [0.45, rw.top + 0.35, rw.z + 0.3], [0.45, rw.top + 0.37, rw.z + 0.3], [-0.05, rw.top + 0.17, rw.z + 0.3], 0x111111);
    if (spec.id === 'volvo240' || spec.id === 'cherokee') {
      const rf = st.find((s) => s.seg === 'rf')!;
      const rfEnd = st[st.indexOf(rf) + 1];
      for (const s of [-1, 1]) g.box(s * (rf.wt - 0.08), rf.top + 0.06, (rf.z + rfEnd.z) / 2, 0.06, 0.08, rfEnd.z - rf.z, 0x2a2a2a);
    }
  }

  // ---- top details ------------------------------------------------------------
  if (spec.louvres) {
    const lv = spec.louvres;
    for (let k = 0; k < lv.n; k++) {
      const z = lv.z0 + ((lv.z1 - lv.z0) * k) / lv.n;
      const y = at(st, z, 'top') + 0.006;
      g.quad([-lv.w, y, z], [lv.w, y, z], [lv.w, y + 0.004, z + 0.06], [-lv.w, y + 0.004, z + 0.06], BLACK);
    }
  }
  if (spec.scoop) {
    const rf = st.find((s) => s.seg === 'rf')!;
    g.box(0, rf.top + 0.07, rf.z + 0.25, 0.32, 0.14, 0.5, [paint, paint, BLACK, shade]);
  }
  if (spec.wing) {
    const w = spec.wing;
    const deck = at(st, w.z, 'top');
    if (w.kind === 'duck') {
      g.box(0, w.y, w.z, w.w * 2, 0.06, w.d, [paint, paint, shade, shade]);
    } else {
      g.box(0, w.y, w.z, w.w * 2, 0.055, w.d, [paint, paint, shade, shade]);
      g.box(0, w.y - 0.03, w.z + w.d / 2, w.w * 2, 0.04, 0.03, deep);
      if (w.kind === 'big') {
        for (const s of [-1, 1]) g.box(s * 0.32, (deck + w.y) / 2, w.z, 0.07, w.y - deck, 0.16, DARK);
      } else if (w.kind === 'hoop') {
        for (const s of [-1, 1]) g.box(s * (w.w - 0.08), (deck + w.y) / 2, w.z, 0.12, w.y - deck, w.d * 0.7, paint);
      } else {
        // bridge: end plates down to the haunches
        for (const s of [-1, 1]) g.poly([[s * w.w, deck, w.z - w.d / 2 - 0.15], [s * w.w, deck, w.z + w.d / 2], [s * w.w, w.y + 0.06, w.z + w.d / 2], [s * w.w, w.y + 0.06, w.z - w.d / 2]], paint);
      }
    }
  }

  // wheel arches (dark, behind the tyres)
  const wh = spec.wheels;
  for (const [z, x] of [[wh.fz, wh.fx], [wh.rz, wh.rx]]) {
    for (const s of [-1, 1]) {
      const pts: V3[] = [];
      for (let k = 0; k <= 6; k++) {
        const a = (k / 6) * Math.PI;
        pts.push([s * (at(st, z, 'w') + 0.003), wh.r + Math.sin(a) * (wh.r + 0.07), z + Math.cos(a) * (wh.r + 0.07)]);
      }
      g.poly(pts, BLACK);
      void x;
    }
  }
  return { lit: g, glow: l, brake: b, plate: { y: spec.plateY, z: zR + 0.012 }, tailZ: zR };
}

/** Tyre with a spoked rim; outward = +1 for the right side. */
export function wheelGeo(r: number, hw: number, outward: number, rim: number, spokes: number): THREE.BufferGeometry {
  const wg = new GeoBuilder();
  const n = Math.max(10, spokes * 2);
  const p = (a: number, x: number, rr = r): V3 => [x, Math.cos(a) * rr, Math.sin(a) * rr];
  const rimDark = scale(rim, 0.3);
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    wg.quad(p(a0, -hw), p(a1, -hw), p(a1, hw), p(a0, hw), i % 2 ? 0x1a1a1a : 0x242424);
    wg.quad(p(a0, outward * hw), p(a1, outward * hw), p(a1, outward * hw, r * 0.7), p(a0, outward * hw, r * 0.7), 0x202020);
    wg.tri([-outward * hw, 0, 0], p(a0, -outward * hw), p(a1, -outward * hw), 0x161616);
    wg.tri([outward * (hw + 0.005), 0, 0], p(a0, outward * (hw + 0.005), r * 0.7), p(a1, outward * (hw + 0.005), r * 0.7), i % 2 === 0 ? rim : rimDark);
  }
  wg.with(new THREE.Matrix4().makeRotationZ(Math.PI / 2), () => wg.prism(0, 0, -outward * (hw + 0.01), -outward * (hw + 0.011), 0.07, 0.07, 6, rim, rim));
  return wg.build();
}

/** Soft glow quads behind every tail lamp (night driving). */
export function tailHalos(spec: CarSpec, size = 1, bright = 0.8): GeoBuilder {
  const h = new GeoBuilder();
  const z = spec.stations[spec.stations.length - 1].z + 0.08;
  for (const li of spec.lights) {
    for (const x of li.mirror === false || li.x === 0 ? [li.x] : [li.x, -li.x]) {
      const r = Math.max(li.w, li.h) * 1.6 * size + 0.25;
      h.quad([x - r, li.y - r, z], [x + r, li.y - r, z], [x + r, li.y + r, z], [x - r, li.y + r, z],
        new THREE.Color(li.c).multiplyScalar(bright).getHex(), [0, 0, 1, 1]);
    }
  }
  return h;
}

/** Static wheels baked into a traffic car's geometry. */
export function addStaticWheels(g: GeoBuilder, spec: CarSpec) {
  const w = spec.wheels;
  for (const [x, z] of [[-w.fx, w.fz], [w.fx, w.fz], [-w.rx, w.rz], [w.rx, w.rz]]) {
    g.with(new THREE.Matrix4().makeTranslation(x, w.r, z).multiply(new THREE.Matrix4().makeRotationZ(Math.PI / 2)), () => {
      g.prism(0, 0, -0.12, 0.12, w.r, w.r, 8, 0x181818, x > 0 ? 0x8a8a8a : 0x8a8a8a);
    });
  }
}

export interface CarMats { lit: THREE.Material; glow: THREE.Material; sign: THREE.Material; paint?: THREE.Material; halo?: THREE.Material }

/** The player's car: body + spinning wheels + brake lights + backfire. */
export class PlayerCar {
  root = new THREE.Group();
  body = new THREE.Group();
  wheels: THREE.Mesh[] = [];
  private brake: THREE.Mesh;
  private flames: THREE.Mesh;
  private geos: THREE.BufferGeometry[] = [];

  private hubs: THREE.Mesh[] = [];
  /** the driver leaning out of each side window with a gun (-1 left, +1 right) */
  private gunners: { group: THREE.Group; arm: THREE.Group; flash: THREE.Mesh; tube: THREE.Group; blast: THREE.Object3D }[] = [];
  private gunSide = 1;
  private detail: THREE.Object3D[] = [];
  private paintwork: THREE.Mesh[] = []; // dents + scrapes
  private dentable: THREE.Mesh[] = []; // dents only (glass, lamps, plate)
  private cracks: THREE.LineSegments | null = null;
  private crackCount = 0;
  private glowMesh: THREE.Mesh | null = null;
  private tailZ = 0;
  /** true once the model has been dented (a new race needs a fresh one) */
  damaged = false;
  private near = true;

  /** Level of detail: far-off cars drop the cabin and brake hardware. */
  setNear(near: boolean) {
    if (near === this.near) return;
    this.near = near;
    for (const o of this.detail) o.visible = near;
  }

  constructor(public spec: CarSpec, paint: number, mats: CarMats, plateUv: [number, number, number, number], shadow = 0x3c3c46, night = false) {
    const add = (geo: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D) => {
      this.geos.push(geo);
      const mesh = new THREE.Mesh(geo, m);
      parent.add(mesh);
      return mesh;
    };
    const hd = GFX.modern;
    const hm = hd ? carMaterials() : null;
    let plate: { y: number; z: number }, tailZ: number;
    let wheelPos: { x: number; z: number; r: number; hw: number }[];
    if (hm) {
      const cg = buildBodyHD(spec, paint);
      this.paintwork.push(add(cg.skin.build(true), hm.paint, this.body), add(cg.body.build(), hm.paint, this.body));
      this.detail.push(add(cg.cabin.build(), hm.lit, this.body));
      const gl = add(cg.glass.build(), hm.glass, this.body);
      gl.renderOrder = 1;
      this.glowMesh = add(cg.glow.build(), hm.glow, this.body);
      this.dentable.push(gl, this.glowMesh);
      this.brake = add(cg.brake.empty ? new GeoBuilder().tri([0, 0, 0], [0, 0, 0], [0, 0, 0], 0).build() : cg.brake.build(), hm.glow, this.body);
      plate = cg.plate;
      tailZ = cg.tailZ;
      wheelPos = cg.wheels;
    } else {
      const cg = buildBody(spec, paint);
      this.paintwork.push(add(cg.lit.build(), mats.paint ?? mats.lit, this.body));
      if (!cg.glow.empty) this.dentable.push((this.glowMesh = add(cg.glow.build(), mats.glow, this.body)));
      this.brake = add(cg.brake.empty ? new GeoBuilder().tri([0, 0, 0], [0, 0, 0], [0, 0, 0], 0).build() : cg.brake.build(), mats.glow, this.body);
      plate = cg.plate;
      tailZ = cg.tailZ;
      const w = spec.wheels, hw = w.hw ?? 0.18;
      wheelPos = [{ x: w.fx, z: w.fz, r: w.r, hw }, { x: w.rx, z: w.rz, r: w.r * 1.03, hw: hw * 1.15 }];
    }
    const s = new GeoBuilder();
    const { y, z } = plate;
    s.quad([-0.27, y - 0.08, z], [0.27, y - 0.08, z], [0.27, y + 0.08, z], [-0.27, y + 0.08, z], 0xffffff, plateUv);
    this.dentable.push(add(s.build(), mats.sign, this.body));
    this.dentable.push(this.brake);
    if (night && mats.halo) add(tailHalos(spec, 0.45, 0.45).build(), mats.halo, this.body);

    const f = new GeoBuilder();
    for (const e of spec.exhaust) {
      f.prism(e.x, -e.y, 0, 0.7, e.r * 2, 0, 6, [0xffd040, 0xff7020], null);
      f.prism(e.x, -e.y, 0, 0.42, e.r * 1.2, 0, 6, 0xfff8c0, null);
    }
    const fg = f.build();
    fg.rotateX(Math.PI / 2); // +y -> +z (backwards), -z offsets -> +y heights
    this.flames = add(fg, mats.glow, this.body);
    this.flames.position.set(0, 0, tailZ + (hd ? 0.12 : 0.05));
    this.tailZ = tailZ;
    this.flames.visible = false;

    if (hd) {
      // soft contact shadow that darkens the road beneath
      const m = add(shadowGeo(spec), shadowMaterial(night ? 0.85 : 0.7), this.root);
      m.renderOrder = -1;
    } else {
      // sprite-style shadow: kept inside the car's footprint so it only peeks out under the sills
      const st = spec.stations;
      const len = st[st.length - 1].z - st[0].z;
      const wid = Math.max(...st.map((x) => x.w));
      const sh = new GeoBuilder();
      const pts: V3[] = [];
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        pts.push([Math.cos(a) * wid * 0.92, 0.02, (st[0].z + len / 2) + Math.sin(a) * (len / 2 - 0.05)]);
      }
      sh.poly(pts, 0xffffff);
      add(sh.build(), new THREE.MeshBasicMaterial({ color: shadow, side: THREE.DoubleSide }), this.root);
    }

    const w = spec.wheels;
    const style = spec.rimStyle ?? 'star';
    for (const [k, side] of [[0, -1], [0, 1], [1, -1], [1, 1]]) {
      const wp = wheelPos[k];
      const geo = hm ? wheelGeoHD(wp.r, wp.hw, side, style, w.rim) : wheelGeo(wp.r, wp.hw, side, w.rim, w.spokes);
      const mesh = add(geo, hm ? hm.lit : mats.lit, this.root);
      mesh.position.set(side * wp.x, wp.r, wp.z);
      this.wheels.push(mesh as THREE.Mesh);
      if (hm) {
        const hub = add(brakeGeoHD(wp.r, wp.hw, side, spec.id === '959' || spec.id === 'nsx' ? 0x2a2a2e : 0xc81810), hm.lit, this.root);
        hub.position.copy(mesh.position);
        this.hubs.push(hub as THREE.Mesh);
        this.detail.push(hub);
      }
    }
    this.buildGunners(paint, hm ? hm.lit : mats.lit, hm ? hm.glow : mats.glow, !!hm);
    this.root.add(this.body);
  }

  dispose() {
    for (const g of this.geos) g.dispose();
    this.cracks?.geometry.dispose();
  }

  /**
   * Crash damage: crumples the bodywork round the impact point (pushing panels
   * in, with a little random crinkle), scuffs the paint to bare metal and soot,
   * and cracks the glass as it adds up. where: which end/side took the hit.
   */
  hit(severity: number, where: 'front' | 'rear' | 'left' | 'right') {
    this.damaged = true;
    const st = this.spec.stations;
    const z0 = st[0].z, z1 = st[st.length - 1].z;
    const wid = Math.max(...st.map((x) => x.w));
    const r = Math.random;
    const c = new THREE.Vector3();
    const dir = new THREE.Vector3();
    if (where === 'front' || where === 'rear') {
      const f = where === 'front';
      c.set((r() - 0.5) * wid * 1.4, 0.45 + r() * 0.25, f ? z0 + 0.1 : z1 - 0.1);
      dir.set(0, -0.15, f ? 1 : -1);
    } else {
      const sx = where === 'right' ? 1 : -1;
      c.set(sx * wid, 0.45 + r() * 0.3, z0 + 0.6 + r() * (z1 - z0 - 1.2));
      dir.set(-sx, -0.1, (r() - 0.5) * 0.3);
    }
    dir.normalize();
    const rad = 0.55 + severity * 0.5, depth = 0.04 + severity * 0.16;
    const bare = new THREE.Color(0x6a6a70), soot = new THREE.Color(0x1c1a18), tmp = new THREE.Color();
    const crinkle = (x: number, y: number, z: number) => Math.sin(x * 41.3 + y * 17.1) * Math.cos(z * 29.7 + x * 7.3);
    const deform = (m: THREE.Mesh, paint: boolean) => {
      const g = m.geometry;
      const pos = g.getAttribute('position') as THREE.BufferAttribute;
      const col = paint ? (g.getAttribute('color') as THREE.BufferAttribute | undefined) : undefined;
      let touched = false;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        const d = Math.hypot(x - c.x, (y - c.y) * 1.3, z - c.z);
        if (d >= rad) continue;
        const f = (1 - d / rad) ** 2;
        const k = depth * f * (0.8 + 0.4 * crinkle(x, y, z));
        pos.setXYZ(i, x + dir.x * k, y + dir.y * k, z + dir.z * k);
        touched = true;
        if (col) {
          // scraped to bare metal at the centre, sooty smears round it
          tmp.setRGB(col.getX(i), col.getY(i), col.getZ(i));
          const t = Math.min(1, f * (0.4 + severity));
          tmp.lerp(crinkle(z, x, y) > 0.2 ? bare : soot, t * 0.75);
          col.setXYZ(i, tmp.r, tmp.g, tmp.b);
        }
      }
      if (!touched) return;
      pos.needsUpdate = true;
      if (col) col.needsUpdate = true;
      g.computeVertexNormals();
    };
    for (const m of this.paintwork) deform(m, true);
    for (const m of this.dentable) deform(m, false);
    if (severity > 0.35 && this.crackCount < 3) this.crack();
  }

  /** Smashes the tail lamps on one side: lens and brake light go dark. */
  breakLamp(side: number) {
    this.damaged = true;
    for (const m of [this.glowMesh, this.brake]) {
      if (!m) continue;
      const pos = m.geometry.getAttribute('position') as THREE.BufferAttribute;
      const col = m.geometry.getAttribute('color') as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        if (pos.getZ(i) < this.tailZ - 0.05 || pos.getX(i) * side < 0.2) continue;
        col.setXYZ(i, col.getX(i) * 0.15 + 0.02, col.getY(i) * 0.15 + 0.02, col.getZ(i) * 0.15 + 0.02);
      }
      col.needsUpdate = true;
    }
  }

  /** Adds a spider-web crack to the rear window (or the windscreen on cars without one). */
  private crack() {
    const st = this.spec.stations;
    let i = st.findIndex((x) => x.seg === 'rw');
    if (i < 0) i = st.findIndex((x) => x.seg === 'ws');
    if (i < 0 || i + 1 >= st.length) return;
    this.crackCount++;
    const a = st[i], b = st[i + 1];
    // bilinear map of the glass panel: u across (-1..1), v from station a to b
    const P = (u: number, v: number): number[] => {
      const wt = a.wt + (b.wt - a.wt) * v;
      return [u * wt * 0.95, a.top + (b.top - a.top) * v + 0.03 * (1 - u * u) + 0.025, a.z + (b.z - a.z) * v];
    };
    const pts: number[] = this.cracks ? Array.from(this.cracks.geometry.getAttribute('position').array as Float32Array) : [];
    const cu = (Math.random() - 0.5) * 1.1, cv = 0.25 + Math.random() * 0.5;
    const rays = 7 + Math.floor(Math.random() * 4);
    const ring: [number, number][] = [];
    for (let k = 0; k < rays; k++) {
      const ang = (k / rays) * Math.PI * 2 + Math.random() * 0.5;
      const len = 0.35 + Math.random() * 0.45;
      let u = cu, v = cv;
      for (let j = 1; j <= 4; j++) {
        const t = (len * j) / 4;
        const nu = Math.max(-1, Math.min(1, cu + Math.cos(ang) * t + (Math.random() - 0.5) * 0.08));
        const nv = Math.max(0, Math.min(1, cv + Math.sin(ang) * t * 0.8 + (Math.random() - 0.5) * 0.06));
        pts.push(...P(u, v), ...P(nu, nv));
        if (j === 1) ring.push([nu, nv]);
        u = nu;
        v = nv;
      }
    }
    for (let k = 0; k < ring.length; k++) pts.push(...P(...ring[k]), ...P(...ring[(k + 1) % ring.length]));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    if (this.cracks) {
      this.cracks.geometry.dispose();
      this.cracks.geometry = geo;
    } else {
      this.cracks = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0xe8f0ff, transparent: true, opacity: 0.85 }));
      this.cracks.renderOrder = 2;
      this.body.add(this.cracks);
    }
  }

  /** Builds the lean-out shooter for both sides (hidden until aim() shows one). */
  private buildGunners(paint: number, lit: THREE.Material, glow: THREE.Material, tiled: boolean) {
    const st = this.spec.stations;
    const rfI = st.findIndex((x) => x.seg === 'rf');
    const ws = st.find((x) => x.seg === 'ws') ?? st[1];
    const rf = rfI >= 0 ? st[rfI] : ws;
    const z = rf.z + 0.15;
    const belt = at(st, z, 'belt'), w = at(st, z, 'w');
    const dc = driverColours(paint), suit = dc.suit;
    for (const s of [-1, 1]) {
      const body = new GeoBuilder(tiled), arm = new GeoBuilder(tiled), fl = new GeoBuilder(tiled);
      // leaning out of the window: suited torso, neck, full-face helmet
      torso(body, [s * 0.1, 0.16, 0.02], [0.2, 0.2, 0.14], suit, dc.band);
      ellipsoid(body, [s * 0.16, 0.36, 0.0], [0.05, 0.06, 0.05], 0x1a1a1c, 6, 4);
      helmet(body, [s * 0.2, 0.5, -0.01], 0.135, dc.band, 12, 8, dc.shell);
      // the other arm braced on the door
      ellipsoid(body, [s * 0.02, 0.12, -0.2], [0.05, 0.05, 0.13], suit, 8, 5);
      ellipsoid(body, [s * 0.0, 0.08, -0.33], [0.045, 0.045, 0.045], 0x141416, 6, 4);
      const muzzle = gunArm(arm, suit, dc.band);
      // muzzle flash: a star of glowing blades and a hot core
      for (let k = 0; k < 4; k++) {
        const a = (k / 4) * Math.PI;
        const c = Math.cos(a) * 0.12, d = Math.sin(a) * 0.12;
        fl.quad([-c, -d, 0], [c, d, 0], [c * 0.3, d * 0.3, -0.36], [-c * 0.3, -d * 0.3, -0.36], k % 2 ? 0xffc040 : 0xffe890);
      }
      fl.quad([-0.08, -0.08, 0.001], [0.08, -0.08, 0.001], [0.08, 0.08, 0.001], [-0.08, 0.08, 0.001], 0xfffbe0);
      const group = new THREE.Group();
      const lean = new THREE.Group();
      lean.rotation.z = -s * 0.32; // lean the upper body out of the window
      group.add(lean);
      const add = (g: GeoBuilder, m: THREE.Material, parent: THREE.Object3D) => {
        const geo = g.build();
        this.geos.push(geo);
        const mesh = new THREE.Mesh(geo, m);
        parent.add(mesh);
        return mesh;
      };
      add(body, lit, lean);
      const armG = new THREE.Group();
      armG.position.set(s * 0.26, 0.28, 0);
      add(arm, lit, armG);
      const flash = add(fl, glow, armG);
      flash.position.set(...muzzle);
      flash.visible = false;
      lean.add(armG);
      // the bazooka: an olive tube on the outer shoulder, pointing dead ahead, with fire at both ends when it goes off
      const tube = new THREE.Group();
      const olive = new THREE.MeshLambertMaterial({ color: 0x4a5a2a }), dark = new THREE.MeshLambertMaterial({ color: 0x1e1e20 });
      tube.add(new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 1.15, 10).rotateX(Math.PI / 2), olive));
      tube.add(new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.08, 10).rotateX(Math.PI / 2).translate(0, 0, -0.58), dark)); // muzzle ring
      tube.add(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.085, 0.12, 10).rotateX(Math.PI / 2).translate(0, 0, 0.6), dark)); // flared back
      tube.add(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.16, 0.06).translate(0, -0.12, -0.12), dark)); // grip
      tube.add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.08).translate(0, 0.1, -0.2), dark)); // sight
      // hands on the grip and under the tube
      tube.add(new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4).translate(0, -0.2, -0.12), dark));
      tube.add(new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4).translate(0, -0.09, -0.36), dark));
      const hot = new THREE.MeshBasicMaterial({ color: 0xffb040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
      const blast = new THREE.Group();
      blast.add(new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.9, 8).rotateX(Math.PI / 2).translate(0, 0, 1.1), hot)); // back-blast
      blast.add(new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.5, 8).rotateX(-Math.PI / 2).translate(0, 0, -0.85), hot)); // muzzle flash
      tube.add(blast);
      tube.position.set(s * 0.3, 0.46, 0.05);
      tube.visible = false;
      lean.add(tube);
      group.position.set(s * (w - 0.14), belt - 0.06, z);
      group.visible = false;
      this.body.add(group);
      this.gunners.push({ group, arm: armG, flash, tube, blast });
    }
  }

  /**
   * Shooting pose: side -1/+1 shows the driver leaning out of that window with
   * the gun turned to `yaw` (radians, 0 = straight ahead, + to the left);
   * side 0 hides them. `flash` lights the muzzle for this frame.
   */
  aim(side: number, yaw = 0, flash = false, rocket = 0) {
    if (side) this.gunSide = side;
    this.gunners.forEach((g, i) => {
      const on = side !== 0 && (i === 0 ? -1 : 1) === this.gunSide;
      g.group.visible = on;
      if (!on) return;
      // rocket > 0: shouldering the bazooka (1 = just fired) instead of the gun
      g.arm.visible = rocket <= 0;
      g.tube.visible = rocket > 0;
      g.blast.visible = rocket > 0.75;
      if (rocket > 0.75) g.blast.scale.setScalar(0.7 + Math.random() * 0.6);
      g.arm.rotation.set(0, yaw, 0);
      g.flash.visible = flash && rocket <= 0;
      if (flash) g.flash.rotation.z = Math.random() * Math.PI;
    });
  }

  pose(steer: number, yaw: number, spin: number, bounce: number, pitch: number, braking = false, flame = 0) {
    this.root.rotation.set(0, yaw, 0);
    this.body.rotation.set(pitch, 0, -steer * 0.05);
    this.body.position.y = bounce;
    this.brake.visible = braking;
    this.flames.visible = flame > 0;
    if (flame > 0) this.flames.scale.set(1, 1, 0.6 + Math.random() * 0.8);
    this.wheels.forEach((wm, i) => wm.rotation.set(spin, i < 2 ? -steer * 0.35 : 0, 0, 'YXZ'));
    this.hubs.forEach((h, i) => h.rotation.set(0, i < 2 ? -steer * 0.35 : 0, 0));
  }
}
