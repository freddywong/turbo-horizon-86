import { PropDef } from '../props';
import { GFX } from '../gfx';
import * as THREE from 'three';
import { addStaticWheels, buildBody, tailHalos } from './build';
import { buildBodyHD, wheelInto } from './hd';
import { shadowGeo } from './shadow';
import { boxy, CarSpec, Light, Station } from './spec';

const RED = 0xc01810;

const spec = (id: string, name: string, stations: Station[], lights: Light[], plateY = 0.5, r = 0.3): CarSpec => {
  const L = stations[stations.length - 1].z - stations[0].z;
  const w = Math.max(...stations.map((s) => s.w));
  return {
    id, name, make: '', year: 0, group: 'TRAFFIC', paints: [0xffffff], stations, lights,
    wheels: { r, fz: stations[0].z + L * 0.2, rz: stations[0].z + L * 0.8, fx: w - 0.06, rx: w - 0.06, rim: 0x9a9a9a, spokes: 4 },
    exhaust: [], plateY, stats: { vmax: 0, accel: 0, grip: 0 },
  };
};

/** Period traffic. Bodies are white so the instance tint paints them. */
export const TRAFFIC: Record<string, CarSpec> = {
  golf: spec('golf', 'VW GOLF MK2', boxy({ len: 4.0, w: 0.83, nose: 0.62, hood: 0.84, roof: 1.4, deck: 0.98, tail: 0.98, ws: -0.95, rf0: -0.2, rf1: 1.15, rw: 1.85 }),
    [{ x: 0.6, y: 0.84, w: 0.34, h: 0.18, c: RED }], 0.55),
  volvo240: spec('volvo240', 'VOLVO 240 ESTATE', boxy({ len: 4.8, w: 0.86, nose: 0.7, hood: 0.86, roof: 1.42, deck: 1.0, tail: 1.0, ws: -0.8, rf0: 0.0, rf1: 2.22, rw: 2.34 }),
    [{ x: 0.76, y: 0.86, w: 0.16, h: 0.42, c: RED }], 0.6),
  ae86: spec('ae86', 'TOYOTA AE86', boxy({ len: 4.2, w: 0.82, nose: 0.6, hood: 0.8, roof: 1.32, deck: 0.94, tail: 0.94, ws: -0.6, rf0: 0.1, rf1: 0.7, rw: 1.95 }),
    [{ x: 0.52, y: 0.8, w: 0.56, h: 0.14, c: RED }], 0.52),
  cherokee: spec('cherokee', 'JEEP CHEROKEE XJ', boxy({ len: 4.24, w: 0.9, nose: 0.92, hood: 1.06, roof: 1.62, deck: 1.22, tail: 1.22, ws: -0.9, rf0: -0.35, rf1: 1.96, rw: 2.06, yb: 0.45 }),
    [{ x: 0.8, y: 0.98, w: 0.14, h: 0.36, c: RED }], 0.7, 0.36),
  caprice: spec('caprice', 'CHEVROLET CAPRICE', boxy({ len: 5.4, w: 0.95, nose: 0.78, hood: 0.92, roof: 1.42, deck: 1.0, tail: 1.0, ws: -0.7, rf0: 0.0, rf1: 1.0, rw: 1.6 }),
    [{ x: 0.62, y: 0.86, w: 0.6, h: 0.16, c: RED }], 0.6),
  w124: spec('w124', 'MERCEDES W124', boxy({ len: 4.74, w: 0.87, nose: 0.7, hood: 0.86, roof: 1.42, deck: 1.0, tail: 1.02, ws: -0.65, rf0: 0.05, rf1: 0.95, rw: 1.55 }),
    [{ x: 0.6, y: 0.88, w: 0.5, h: 0.2, c: RED }], 0.62),
  f150: spec('f150', 'FORD F-150', [
    { z: -2.5, w: 0.98, yb: 0.45, belt: 0.95, top: 1.05, wt: 0.9, seg: 'p' },
    { z: -2.1, w: 1.0, yb: 0.45, belt: 1.1, top: 1.15, wt: 0.94, seg: 'p' },
    { z: -0.9, w: 1.0, yb: 0.45, belt: 1.15, top: 1.2, wt: 0.94, seg: 'ws' },
    { z: -0.35, w: 1.0, yb: 0.45, belt: 1.15, top: 1.8, wt: 0.86, seg: 'rf' },
    { z: 0.6, w: 1.0, yb: 0.45, belt: 1.15, top: 1.8, wt: 0.86, seg: 'p' },
    { z: 0.62, w: 1.0, yb: 0.45, belt: 1.15, top: 1.18, wt: 0.96, seg: 'bed' },
    { z: 2.5, w: 1.0, yb: 0.45, belt: 1.15, top: 1.18, wt: 0.96, seg: 'p' },
  ], [{ x: 0.9, y: 0.95, w: 0.12, h: 0.3, c: RED }], 0.65, 0.38),
  crown: spec('crown', 'TOYOTA CROWN', boxy({ len: 4.7, w: 0.85, nose: 0.74, hood: 0.88, roof: 1.48, deck: 1.0, tail: 1.02, ws: -0.6, rf0: 0.1, rf1: 1.05, rw: 1.5 }),
    [{ x: 0.64, y: 0.88, w: 0.4, h: 0.16, c: RED }], 0.62),
  cedric: spec('cedric', 'NISSAN CEDRIC', boxy({ len: 4.8, w: 0.86, nose: 0.72, hood: 0.86, roof: 1.42, deck: 0.98, tail: 1.0, ws: -0.65, rf0: 0.05, rf1: 1.0, rw: 1.55 }),
    [{ x: 0.5, y: 0.86, w: 0.7, h: 0.12, c: RED }], 0.6),
  every: spec('every', 'SUZUKI EVERY', [
    { z: -1.7, w: 0.7, yb: 0.4, belt: 0.8, top: 0.9, wt: 0.66, seg: 'p' },
    { z: -1.55, w: 0.7, yb: 0.4, belt: 0.9, top: 1.0, wt: 0.66, seg: 'ws' },
    { z: -1.05, w: 0.7, yb: 0.4, belt: 1.0, top: 1.82, wt: 0.62, seg: 'rf' },
    { z: 1.65, w: 0.7, yb: 0.4, belt: 1.0, top: 1.82, wt: 0.62, seg: 'p' },
    { z: 1.7, w: 0.7, yb: 0.4, belt: 1.0, top: 1.8, wt: 0.64, seg: 'p' },
  ], [{ x: 0.6, y: 0.8, w: 0.14, h: 0.3, c: RED }], 0.6, 0.27),
  civic: spec('civic', 'HONDA CIVIC EF', boxy({ len: 4.0, w: 0.84, nose: 0.6, hood: 0.8, roof: 1.32, deck: 0.96, tail: 0.96, ws: -0.55, rf0: 0.2, rf1: 1.2, rw: 1.92 }),
    [{ x: 0.5, y: 0.8, w: 0.66, h: 0.12, c: RED }], 0.5),
};

/** Turns a traffic spec into an instanced prop (body + wheels lit, lights glowing). */
export function trafficProp(s: CarSpec, opts: { taxi?: boolean; night?: boolean } = {}): PropDef {
  if (GFX.modern) return trafficPropHD(s, opts);
  const cg = buildBody(s, 0xffffff, true);
  addStaticWheels(cg.lit, s);
  const glow = cg.glow;
  if (opts.taxi) {
    const rf = s.stations.find((x) => x.seg === 'rf')!;
    glow.box(0, rf.top + 0.12, rf.z + 0.4, 0.5, 0.22, 0.3, 0xffe080);
  }
  const st = s.stations;
  const parts = [{ geo: cg.lit.build(), mat: 'lit' as const }];
  const out: PropDef = { parts, radius: 0, max: 40, len: (st[st.length - 1].z - st[0].z) / 2 + 2.2 };
  if (!glow.empty) out.parts.push({ geo: glow.build(), mat: 'glow' });
  if (opts.night) out.parts.push({ geo: tailHalos(s, 0.8).build(), mat: 'halo', tint: false });
  return out;
}

/** '92 traffic: smooth body, textured lamps, glass with occupants, treaded wheels with hubcaps. */
function trafficPropHD(s: CarSpec, opts: { taxi?: boolean; night?: boolean }): PropDef {
  const cg = buildBodyHD(s, 0xffffff, true);
  const inner = cg.cabin; // untinted: occupants, wheels
  for (const wp of cg.wheels) {
    for (const side of [-1, 1]) {
      inner.with(new THREE.Matrix4().makeTranslation(side * wp.x, wp.r, wp.z), () => wheelInto(inner, wp.r, wp.hw, side, 'steel', 0xb8bcc4, 8, false));
    }
  }
  const glow = cg.glow;
  if (opts.taxi) {
    const rf = s.stations.find((x) => x.seg === 'rf')!;
    glow.box(0, rf.top + 0.12, rf.z + 0.4, 0.5, 0.22, 0.3, 0xffe080);
  }
  const st = s.stations;
  const out: PropDef = {
    parts: [
      { geo: shadowGeo(s), mat: 'shadow', tint: false, order: -1 },
      { geo: cg.skin.build(true), mat: 'car', tint: true },
      { geo: cg.body.build(), mat: 'car', tint: true },
      { geo: inner.build(), mat: 'car', tint: false },
      { geo: glow.build(), mat: 'carGlow', tint: false },
      { geo: cg.glass.build(), mat: 'glass', tint: false },
    ],
    radius: 0, max: 40, len: (st[st.length - 1].z - st[0].z) / 2 + 2.2,
  };
  if (opts.night) out.parts.push({ geo: tailHalos(s, 0.8).build(), mat: 'halo', tint: false });
  return out;
}
