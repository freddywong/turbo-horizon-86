import * as THREE from 'three';
import { GeoBuilder, V3 } from '../geom';
import { CarSpec, Light, Station } from './spec';

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
  for (const li of spec.lights) {
    for (const x of li.mirror === false || li.x === 0 ? [li.x] : [li.x, -li.x]) {
      lamp(l, li, x, zR + 0.012, li.c);
      if (li.brake && !traffic) lamp(b, li, x, zR + 0.016, 0xff3a2a);
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

/** Static wheels baked into a traffic car's geometry. */
export function addStaticWheels(g: GeoBuilder, spec: CarSpec) {
  const w = spec.wheels;
  for (const [x, z] of [[-w.fx, w.fz], [w.fx, w.fz], [-w.rx, w.rz], [w.rx, w.rz]]) {
    g.with(new THREE.Matrix4().makeTranslation(x, w.r, z).multiply(new THREE.Matrix4().makeRotationZ(Math.PI / 2)), () => {
      g.prism(0, 0, -0.12, 0.12, w.r, w.r, 8, 0x181818, x > 0 ? 0x8a8a8a : 0x8a8a8a);
    });
  }
}

export interface CarMats { lit: THREE.Material; glow: THREE.Material; sign: THREE.Material }

/** The player's car: body + spinning wheels + brake lights + backfire. */
export class PlayerCar {
  root = new THREE.Group();
  body = new THREE.Group();
  wheels: THREE.Mesh[] = [];
  private brake: THREE.Mesh;
  private flames: THREE.Mesh;
  private geos: THREE.BufferGeometry[] = [];

  constructor(public spec: CarSpec, paint: number, mats: CarMats, plateUv: [number, number, number, number]) {
    const cg = buildBody(spec, paint);
    const s = new GeoBuilder();
    const { y, z } = cg.plate;
    s.quad([-0.27, y - 0.08, z], [0.27, y - 0.08, z], [0.27, y + 0.08, z], [-0.27, y + 0.08, z], 0xffffff, plateUv);
    const add = (geo: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D) => {
      this.geos.push(geo);
      const mesh = new THREE.Mesh(geo, m);
      parent.add(mesh);
      return mesh;
    };
    add(cg.lit.build(), mats.lit, this.body);
    if (!cg.glow.empty) add(cg.glow.build(), mats.glow, this.body);
    add(s.build(), mats.sign, this.body);
    this.brake = add(cg.brake.empty ? new GeoBuilder().tri([0, 0, 0], [0, 0, 0], [0, 0, 0], 0).build() : cg.brake.build(), mats.glow, this.body);

    const f = new GeoBuilder();
    for (const e of spec.exhaust) {
      f.prism(e.x, -e.y, 0, 0.7, e.r * 2, 0, 6, [0xffd040, 0xff7020], null);
      f.prism(e.x, -e.y, 0, 0.42, e.r * 1.2, 0, 6, 0xfff8c0, null);
    }
    const fg = f.build();
    fg.rotateX(Math.PI / 2); // +y -> +z (backwards), -z offsets -> +y heights
    this.flames = add(fg, mats.glow, this.body);
    this.flames.position.set(0, 0, cg.tailZ + 0.05);
    this.flames.visible = false;

    // sprite-style shadow
    const st = spec.stations;
    const len = st[st.length - 1].z - st[0].z;
    const wid = Math.max(...st.map((x) => x.w));
    const sh = new GeoBuilder();
    const pts: V3[] = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      pts.push([Math.cos(a) * (wid + 0.3), 0.03, (st[0].z + len / 2) + Math.sin(a) * (len / 2 + 0.4)]);
    }
    sh.poly(pts, 0x101014);
    add(sh.build(), new THREE.MeshBasicMaterial({ color: 0x0c0c10, side: THREE.DoubleSide }), this.root);

    const w = spec.wheels;
    const hw = w.hw ?? 0.18;
    for (const [x, z, out] of [[-w.fx, w.fz, -1], [w.fx, w.fz, 1], [-w.rx, w.rz, -1], [w.rx, w.rz, 1]]) {
      const rr = z > 0 ? w.r * 1.03 : w.r;
      const mesh = add(wheelGeo(rr, z > 0 ? hw * 1.15 : hw, out, w.rim, w.spokes), mats.lit, this.root);
      mesh.position.set(x, rr, z);
      this.wheels.push(mesh as THREE.Mesh);
    }
    this.root.add(this.body);
  }

  dispose() {
    for (const g of this.geos) g.dispose();
  }

  pose(steer: number, yaw: number, spin: number, bounce: number, pitch: number, braking = false, flame = 0) {
    this.root.rotation.set(0, yaw, 0);
    this.body.rotation.set(pitch, 0, -steer * 0.05);
    this.body.position.y = bounce;
    this.brake.visible = braking;
    this.flames.visible = flame > 0;
    if (flame > 0) this.flames.scale.set(1, 1, 0.6 + Math.random() * 0.8);
    this.wheels.forEach((wm, i) => wm.rotation.set(spin, i < 2 ? -steer * 0.35 : 0, 0, 'YXZ'));
  }
}
