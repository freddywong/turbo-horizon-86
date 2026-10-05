import * as THREE from 'three';
import { GeoBuilder, V3 } from '../geom';
import { CARTEX, RIM_TILE, RimStyle } from '../textures';
import { CarSpec, Light, Seg, Station } from './spec';
import { driverColours, ellipsoid, helmet, torso } from './figure';

/**
 * '92 car builder: the spec's few cross-sections are resampled along smooth
 * splines into many, each with a 9-point profile (tucked sill, swage line,
 * rounded shoulder, crowned top), real wheel-arch openings with flared lips,
 * see-through glass over a modelled cabin and textured lamps, grilles, tyres
 * and rims. Units are metres; the front of the car is -Z.
 */

const GLASS = 0x34506c, GLASS_SIDE = 0x3c5874, DARK = 0x161618, BLACK = 0x0a0a0c, CHROME = 0xd4d8e0, TUB = 0x0b0b0d;
const MESH_COL = 0x5a5a60;

const scale = (c: number, k: number) => new THREE.Color(c).multiplyScalar(k).getHex();

type Key = 'w' | 'yb' | 'belt' | 'top' | 'wt';
type P2 = [number, number];

/** Monotone cubic (Fritsch-Carlson) through the stations: smooth curves without overshoot. */
function spline(st: Station[], key: Key): (z: number) => number {
  const n = st.length;
  const z = st.map((s) => s.z), y = st.map((s) => s[key]);
  const d: number[] = [];
  for (let i = 0; i < n - 1; i++) d.push((y[i + 1] - y[i]) / Math.max(1e-4, z[i + 1] - z[i]));
  const m: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) m.push(d[0] * 0.5);
    else if (i === n - 1) m.push(d[n - 2] * 0.5);
    else if (d[i - 1] * d[i] <= 0) m.push(0);
    else {
      const v = (d[i - 1] + d[i]) / 2;
      m.push(Math.sign(v) * Math.min(Math.abs(v), 3 * Math.abs(d[i - 1]), 3 * Math.abs(d[i])));
    }
  }
  return (zz) => {
    if (zz <= z[0]) return y[0];
    if (zz >= z[n - 1]) return y[n - 1];
    let i = 0;
    while (i < n - 2 && zz > z[i + 1]) i++;
    const h = z[i + 1] - z[i];
    if (h < 1e-4) return y[i + 1];
    const t = (zz - z[i]) / h, t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * y[i] + (t3 - 2 * t2 + t) * h * m[i] + (-2 * t3 + 3 * t2) * y[i + 1] + (t3 - t2) * h * m[i + 1];
  };
}

interface Wheel { z: number; x: number; r: number; hw: number; R: number; flare: number }
interface Sec { z: number; seg: Seg; pts: P2[] }

export interface CarGeoHD {
  skin: GeoBuilder; // smooth-shaded paintwork
  body: GeoBuilder; // flat-shaded trim, paint material
  cabin: GeoBuilder; // interior, matte material
  glass: GeoBuilder;
  glow: GeoBuilder;
  brake: GeoBuilder;
  plate: { y: number; z: number };
  tailZ: number;
  wheels: { x: number; z: number; r: number; hw: number }[];
}

const isCabin = (s: Seg) => s === 'ws' || s === 'rf' || s === 'rw';

/** Quad with a uv per corner. */
function quadUV(g: GeoBuilder, a: V3, b: V3, c: V3, d: V3, col: number, ua: P2, ub: P2, uc: P2, ud: P2) {
  g.tri(a, b, c, col, [ua, ub, uc]);
  g.tri(a, c, d, col, [ua, uc, ud]);
}

/** Box with every face mapped 0..1 (for upholstery, mesh panels...). */
function tbox(g: GeoBuilder, cx: number, cy: number, cz: number, w: number, h: number, d: number, col: number, layer: number, back = col) {
  g.layer(layer, () => {
    const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = cz - d / 2, z1 = cz + d / 2;
    g.quad([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], col, [0, 0, 1, 0.3]);
    g.quad([x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], col, [0, 0, 1, 1]);
    g.quad([x1, y0, z1], [x0, y0, z1], [x0, y1, z1], [x1, y1, z1], back, [0, 0, 1, 1]);
    g.quad([x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], scale(col, 0.8), [0, 0, 0.2, 1]);
    g.quad([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], scale(col, 0.8), [0, 0, 0.2, 1]);
    g.quad([x0, y0, z0], [x0, y0, z1], [x1, y0, z1], [x1, y0, z0], scale(col, 0.6), [0, 0, 1, 0.3]);
  });
}

/** A box stretched between two points (arms, struts). */
function limb(g: GeoBuilder, a: V3, b: V3, t: number, col: number) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const len = va.distanceTo(vb);
  const m = new THREE.Matrix4().lookAt(va, vb, new THREE.Vector3(0, 1, 0));
  m.setPosition(va.clone().add(vb).multiplyScalar(0.5));
  g.with(m, () => g.box(0, 0, 0, t, t, len, col));
}

/** Low-poly sphere (helmets, heads) with an optional coloured band. */
function ball(g: GeoBuilder, c: V3, r: number, col: number, seg = 8, rings = 5, band = col) {
  const pt = (i: number, j: number): V3 => {
    const th = (j / rings) * Math.PI, ph = (i / seg) * Math.PI * 2;
    return [c[0] + Math.sin(th) * Math.cos(ph) * r, c[1] + Math.cos(th) * r, c[2] + Math.sin(th) * Math.sin(ph) * r];
  };
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < seg; i++) {
      const cc = j === 1 ? band : col;
      g.quad(pt(i, j), pt(i + 1, j), pt(i + 1, j + 1), pt(i, j + 1), cc);
    }
  }
}

/** Flat ring (steering wheels, lamp bezels) in the plane given by a matrix. */
function ring(g: GeoBuilder, r0: number, r1: number, n: number, col: number) {
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    g.quad([Math.cos(a0) * r0, Math.sin(a0) * r0, 0], [Math.cos(a1) * r0, Math.sin(a1) * r0, 0],
      [Math.cos(a1) * r1, Math.sin(a1) * r1, 0], [Math.cos(a0) * r1, Math.sin(a0) * r1, 0], col);
  }
}

/** Disc mapped polar onto a texture layer (uv centre 0.5, 0.5). */
function disc(g: GeoBuilder, cx: number, cy: number, z: number, rx: number, ry: number, n: number, col: number, layer: number) {
  g.layer(layer, () => {
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
      g.tri([cx, cy, z], [cx + Math.cos(a0) * rx, cy + Math.sin(a0) * ry, z], [cx + Math.cos(a1) * rx, cy + Math.sin(a1) * ry, z], col,
        [[0.5, 0.5], [0.5 + Math.cos(a0) * 0.5, 0.5 + Math.sin(a0) * 0.5], [0.5 + Math.cos(a1) * 0.5, 0.5 + Math.sin(a1) * 0.5]]);
    }
  });
}

export function buildBodyHD(spec: CarSpec, paint: number, traffic = false): CarGeoHD {
  const skin = new GeoBuilder(true), body = new GeoBuilder(true), cabin = new GeoBuilder(true);
  const glass = new GeoBuilder(), glow = new GeoBuilder(true), brake = new GeoBuilder(true);
  const st = spec.stations;
  const first = st[0], last = st[st.length - 1];
  const zF = first.z, zR = last.z;
  const W = spline(st, 'w'), YB = spline(st, 'yb'), BELT = spline(st, 'belt'), TOP = spline(st, 'top'), WT = spline(st, 'wt');
  const segAt = (z: number): Seg => {
    let s = st[0].seg;
    for (const x of st) if (z >= x.z - 1e-6) s = x.seg;
    return s;
  };
  const deep = scale(paint, 0.42), shade = scale(paint, 0.82);
  const eighties = spec.group === '80s EXOTIC';

  // ---- wheels and arches ---------------------------------------------------------
  const wh = spec.wheels;
  const hw0 = traffic ? 0.11 : wh.hw ?? 0.18;
  const wheels: Wheel[] = [
    { z: wh.fz, x: traffic ? W(wh.fz) - 0.12 : wh.fx, r: wh.r, hw: hw0, R: 0, flare: 0 },
    { z: wh.rz, x: traffic ? W(wh.rz) - 0.12 : wh.rx, r: traffic ? wh.r : wh.r * 1.03, hw: traffic ? hw0 : hw0 * 1.15, R: 0, flare: 0 },
  ];
  for (const w of wheels) {
    w.R = w.r + (traffic ? 0.06 : 0.07);
    const need = w.x + w.hw + 0.02 - W(w.z);
    w.flare = Math.max(spec.arch ?? (traffic ? 0.012 : 0.035), need);
  }
  const flareAt = (z: number) => {
    let f = 0;
    for (const w of wheels) {
      const k = (z - w.z) / (w.R + 0.5);
      if (Math.abs(k) < 1) f += w.flare * Math.cos((k * Math.PI) / 2) ** 2;
    }
    return f;
  };
  const archAt = (z: number) => {
    let y = -1;
    for (const w of wheels) {
      const dz = z - w.z;
      if (Math.abs(dz) <= w.R) y = Math.max(y, w.r + Math.sqrt(w.R * w.R - dz * dz));
    }
    return y;
  };

  // ---- cross-sections -------------------------------------------------------------
  const section = (z: number): Sec => {
    const w = W(z), yb = YB(z), belt = BELT(z), top = TOP(z), wt = Math.min(WT(z), w - 0.02), seg = segAt(z);
    const f = flareAt(z), ay = archAt(z);
    const h = belt - yb;
    const crown = isCabin(seg) ? 0.03 : 0.022;
    const pts: P2[] = [
      [w - 0.05, yb],
      [w + f, yb + 0.12 * h],
      [w + f + 0.014, yb + 0.5 * h],
      [w + f * 0.85, yb + 0.82 * h],
      [w - 0.02 + f * 0.5, belt],
      isCabin(seg) ? [w - 0.03 - (w - 0.03 - wt) * 0.42, belt + (top - belt) * 0.52] : [wt + (w - wt) * 0.55, belt + (top - belt) * 0.8],
      [wt, top],
      [wt * 0.5, top + crown * 0.75],
      [0, top + crown],
    ];
    if (ay > 0) {
      // cut the arch opening: lower side points ride up onto the arch, the fender crowns over it
      for (let k = 0; k < 4; k++) pts[k][1] = Math.max(pts[k][1], ay + (k === 3 ? 0.03 : 0));
      pts[4][1] = Math.max(pts[4][1], ay + 0.07);
      pts[5][1] = Math.max(pts[5][1], pts[4][1] - 0.015);
      pts[6][1] = Math.max(pts[6][1], ay + 0.03); // the wing tops crown over the tyre
    }
    return { z, seg, pts };
  };

  // stations: the spec's own, evenly subdivided, plus dense rings round each arch
  const step = traffic ? 0.6 : 0.17;
  const zs: number[] = [];
  for (let i = 0; i < st.length - 1; i++) {
    const n = Math.max(1, Math.ceil((st[i + 1].z - st[i].z) / step));
    for (let k = 0; k < n; k++) zs.push(st[i].z + ((st[i + 1].z - st[i].z) * k) / n);
  }
  zs.push(zR);
  const archK = traffic ? [-1.02, -1, -0.5, 0.5, 1, 1.02] : [-1.03, -1, -0.92, -0.7, -0.38, 0, 0.38, 0.7, 0.92, 1, 1.03];
  for (const w of wheels) for (const k of archK) zs.push(w.z + w.R * k);
  zs.sort((a, b) => a - b);
  const zu: number[] = [];
  for (const z of zs) {
    if (z < zF || z > zR) continue;
    if (zu.length && z - zu[zu.length - 1] < 0.006) continue;
    zu.push(z);
  }
  const secs = zu.map(section);

  // ---- lofted skin --------------------------------------------------------------
  const P = (sc: Sec, k: number, s: number, dx = 0, dy = 0): V3 => [s * (sc.pts[k][0] + dx), sc.pts[k][1] + dy, sc.z];
  const lvStart = st.find((x) => x.seg === 'lv')?.z ?? 0;
  for (let i = 0; i < secs.length - 1; i++) {
    const A = secs[i], C = secs[i + 1];
    const seg = A.seg;
    for (const s of [-1, 1]) {
      for (let k = 0; k < 8; k++) {
        let a = P(A, k, s), b = P(C, k, s), c = P(C, k + 1, s), d = P(A, k + 1, s);
        if (s > 0) [b, d] = [d, b]; // keep every skin face wound outward so smoothing is consistent
        const glassSide = (k === 4 || k === 5) && isCabin(seg);
        const glassTop = (k === 6 || k === 7) && (seg === 'ws' || seg === 'rw');
        if (glassSide) glass.quad(a, b, c, d, GLASS_SIDE);
        else if (glassTop) glass.quad(a, b, c, d, GLASS);
        else if (k >= 6 && seg === 'bed') body.quad(a, b, c, d, DARK);
        else if (k >= 6 && seg === 'lv') continue; // louvred cover, drawn below
        else skin.quad(a, b, c, d, k === 0 ? deep : paint);
      }
    }
  }
  if (st.some((x) => x.seg === 'lv')) {
    body.layer(CARTEX.LOUVRE, () => {
      for (let i = 0; i < secs.length - 1; i++) {
        const A = secs[i], C = secs[i + 1];
        if (A.seg !== 'lv') continue;
        for (const s of [-1, 1]) {
          for (let k = 6; k < 8; k++) {
            const a = P(A, k, s), b = P(C, k, s), c = P(C, k + 1, s), d = P(A, k + 1, s);
            const v = (z: number) => (z - lvStart) / 0.13;
            const u = (p: V3) => Math.abs(p[0]) * 2;
            quadUV(body, a, b, c, d, paint, [u(a), v(a[2])], [u(b), v(b[2])], [u(c), v(c[2])], [u(d), v(d[2])]);
          }
        }
      }
    });
  }

  // nose and tail caps
  const cap = (sc: Sec, col: number, g: GeoBuilder) => {
    const pts: V3[] = [];
    for (let k = 0; k <= 8; k++) pts.push(P(sc, k, 1));
    for (let k = 7; k >= 0; k--) pts.push(P(sc, k, -1));
    const cy = (sc.pts[0][1] + sc.pts[8][1]) / 2;
    for (let i = 0; i < pts.length; i++) g.tri([0, cy, sc.z], pts[i], pts[(i + 1) % pts.length], col);
  };
  const S0 = secs[0], SL = secs[secs.length - 1];
  cap(S0, shade, body);
  cap(SL, scale(paint, 0.9), body);

  // window frames: belt seal, pillars and roof rails
  const strip = (A: Sec, C: Sec, k: number, s: number, toward: number, wdt: number, col: number, g: GeoBuilder) => {
    const pt = (sc: Sec) => {
      const p = sc.pts[k], q = sc.pts[toward];
      const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1;
      const o: V3 = [s * (p[0] + 0.006), p[1] + 0.004, sc.z];
      const e: V3 = [s * (p[0] + 0.006 + (dx / l) * wdt), p[1] + 0.004 + (dy / l) * wdt, sc.z];
      return [o, e];
    };
    const [a, d] = pt(A), [b, c] = pt(C);
    g.quad(a, b, c, d, col);
  };
  for (let i = 0; i < secs.length - 1; i++) {
    const A = secs[i], C = secs[i + 1];
    if (!isCabin(A.seg)) continue;
    for (const s of [-1, 1]) {
      strip(A, C, 4, s, 5, 0.03, BLACK, body);
      if (A.seg === 'rf') strip(A, C, 6, s, 5, 0.025, BLACK, body);
      else strip(A, C, 6, s, 5, 0.06, paint, body); // A and C pillars
    }
  }
  // windscreen base cowl and header, rear-window surround
  const cross = (sc: Sec, k0: number, col: number, wdt: number) => {
    const pts: V3[] = [];
    for (let k = k0; k <= 8; k++) pts.push(P(sc, k, 1, 0.004, 0.006));
    for (let k = 7; k >= k0; k--) pts.push(P(sc, k, -1, 0.004, 0.006));
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      body.quad(a, b, [b[0], b[1], b[2] + wdt], [a[0], a[1], a[2] + wdt], col);
    }
  };
  const wsSec = secs.find((x) => x.seg === 'ws');
  const rfSec = secs.find((x) => x.seg === 'rf');
  if (wsSec) cross(wsSec, 4, BLACK, 0.06);
  if (rfSec) cross(rfSec, 6, paint, -0.05);

  // ---- arches: dark tubs and flared lips -------------------------------------------
  const sideAt = (z: number, y: number): number => {
    const sc = section(z);
    for (let k = 0; k < 4; k++) {
      const p = sc.pts[k], q = sc.pts[k + 1];
      if (y >= p[1] && y <= q[1]) return p[0] + ((q[0] - p[0]) * (y - p[1])) / Math.max(1e-4, q[1] - p[1]);
    }
    return y < sc.pts[0][1] ? sc.pts[0][0] : sc.pts[4][0];
  };
  /** height of the upper surface of the section at z at half-width x */
  const topAt = (z: number, x: number): number => {
    const sc = section(z);
    for (let k = 4; k < 8; k++) {
      const p = sc.pts[k], q = sc.pts[k + 1];
      if (x <= p[0] && x >= q[0]) return p[1] + ((q[1] - p[1]) * (p[0] - x)) / Math.max(1e-4, p[0] - q[0]);
    }
    return sc.pts[8][1];
  };
  for (const w of wheels) {
    const n = traffic ? 6 : 14;
    for (const s of [-1, 1]) {
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * Math.PI, a1 = ((i + 1) / n) * Math.PI;
        const pz = (a: number, r: number) => w.z + Math.cos(a) * r, py = (a: number, r: number) => w.r + Math.sin(a) * r;
        const xo0 = sideAt(pz(a0, w.R), py(a0, w.R)) + 0.002, xo1 = sideAt(pz(a1, w.R), py(a1, w.R)) + 0.002;
        const xi = w.x - w.hw - 0.06;
        // tub, kept under the bonnet / deck surface
        const yi0 = Math.min(py(a0, w.R), topAt(pz(a0, w.R), xi) - 0.02), yi1 = Math.min(py(a1, w.R), topAt(pz(a1, w.R), xi) - 0.02);
        body.quad([s * xo0, py(a0, w.R), pz(a0, w.R)], [s * xo1, py(a1, w.R), pz(a1, w.R)], [s * xi, yi1, pz(a1, w.R)], [s * xi, yi0, pz(a0, w.R)], TUB);
        // lip: a rolled edge standing proud of the body
        const lr = w.R + (traffic ? 0.03 : 0.045);
        body.quad([s * (xo0 + 0.02), py(a0, w.R), pz(a0, w.R)], [s * (xo1 + 0.02), py(a1, w.R), pz(a1, w.R)],
          [s * (xo1 + 0.004), py(a1, lr), pz(a1, lr)], [s * (xo0 + 0.004), py(a0, lr), pz(a0, lr)], eighties || traffic ? paint : shade);
        body.quad([s * (xo0 + 0.02), py(a0, w.R), pz(a0, w.R)], [s * (xo1 + 0.02), py(a1, w.R), pz(a1, w.R)],
          [s * (xo1 - 0.01), py(a1, w.R - 0.01), pz(a1, w.R - 0.01)], [s * (xo0 - 0.01), py(a0, w.R - 0.01), pz(a0, w.R - 0.01)], deep);
      }
    }
  }

  // ---- nose ------------------------------------------------------------------------
  const f0 = S0.pts, yb0 = f0[0][1], w0 = f0[2][0];
  const zN = zF - 0.006;
  const fr = spec.front ?? 'popup';
  // air intakes: a black surround with mesh inside, shaped per car
  const intakeAt = (cx: number, y0: number, y1: number, hw: number, bevel = 0) => {
    const b = Math.min(bevel, (y1 - y0) / 2, hw / 2);
    body.poly([[cx - hw + b, y0, zN + 0.002], [cx + hw - b, y0, zN + 0.002], [cx + hw, y0 + b, zN + 0.002], [cx + hw, y1 - b, zN + 0.002],
      [cx + hw - b, y1, zN + 0.002], [cx - hw + b, y1, zN + 0.002], [cx - hw, y1 - b, zN + 0.002], [cx - hw, y0 + b, zN + 0.002]], BLACK);
    const ix = hw - 0.025 - b * 0.5, iy0 = y0 + 0.02 + b * 0.4, iy1 = y1 - 0.02 - b * 0.4;
    if (ix > 0.02 && iy1 > iy0) body.layer(CARTEX.MESH, () => body.quad([cx - ix, iy0, zN], [cx + ix, iy0, zN], [cx + ix, iy1, zN], [cx - ix, iy1, zN], MESH_COL, [0, 0, ix * 12, (iy1 - iy0) * 7]));
  };
  const nose = traffic ? 'bar' : spec.nose ?? 'bar';
  const hyN = (f0[4][1] + f0[6][1]) / 2;
  if (nose === 'bar' || nose === 'grille') intakeAt(0, yb0 + 0.02, yb0 + 0.19, w0 * 0.74);
  if (nose === 'grille') intakeAt(0, hyN - 0.035, hyN + 0.035, w0 * 0.3); // slim upper grille between the lamps
  if (nose === 'slim') intakeAt(0, yb0 + 0.03, yb0 + 0.1, w0 * 0.7, 0.02);
  if (nose === 'lip') intakeAt(0, yb0 + 0.025, yb0 + 0.065, w0 * 0.6);
  if (nose === 'mouth') {
    intakeAt(0, yb0 + 0.03, yb0 + 0.2, w0 * 0.36, 0.06);
    for (const sx of [-1, 1]) intakeAt(sx * w0 * 0.68, yb0 + 0.04, yb0 + 0.11, w0 * 0.14, 0.02);
  }
  if (nose === 'slots') {
    intakeAt(0, yb0 + 0.03, yb0 + 0.12, w0 * 0.3, 0.02);
    for (const sx of [-1, 1]) intakeAt(sx * w0 * 0.6, yb0 + 0.05, yb0 + 0.12, w0 * 0.2, 0.02);
  }
  if (nose === 'twin') {
    for (const sx of [-1, 1]) intakeAt(sx * w0 * 0.52, yb0 + 0.03, yb0 + 0.16, w0 * 0.24, 0.03);
    intakeAt(0, yb0 + 0.04, yb0 + 0.09, w0 * 0.18, 0.015);
  }
  if (!traffic) {
    if (spec.chrome) {
      // full-width chrome bumper across the bottom of the nose, wrapping round the corners
      body.box(0, yb0 + 0.07, zN - 0.03, w0 * 1.96, 0.1, 0.1, [CHROME, 0xa8acb4]);
      for (const s of [-1, 1]) body.box(s * w0 * 0.98, yb0 + 0.07, zN + 0.08, 0.06, 0.1, 0.24, [CHROME, 0xa8acb4]);
    } else {
      // splitter: a thin lip just proud of the nose, not a plank
      body.box(0, yb0 - 0.008, zF + 0.1, w0 * 1.62, 0.022, 0.24, [DARK, BLACK]);
    }
    const hy = (f0[4][1] + f0[6][1]) / 2;
    for (const s of [-1, 1]) {
      const x = s * w0 * 0.62;
      if (fr === 'popup') {
        // closed pop-up lids outlined on the bonnet; driving lamps and indicators in the bumper
        const za = zF + 0.26, zb = zF + 0.62;
        const y = (z: number) => TOP(z) + 0.012;
        const o = (x0: number, z0: number, x1: number, z1: number) => body.quad([x0, y(z0), z0], [x1, y(z1), z1], [x1, y(z1) + 0.001, z1 + 0.018], [x0, y(z0) + 0.001, z0 + 0.018], BLACK);
        o(x - 0.2, za, x + 0.2, za);
        o(x - 0.2, zb, x + 0.2, zb);
        for (const xx of [x - 0.2, x + 0.2]) body.quad([xx - 0.008, y(za), za], [xx + 0.008, y(za), za], [xx + 0.008, y(zb), zb], [xx - 0.008, y(zb), zb], BLACK);
        const ly = yb0 + 0.25;
        body.quad([x - 0.17, ly - 0.05, zN + 0.001], [x + 0.17, ly - 0.05, zN + 0.001], [x + 0.17, ly + 0.05, zN + 0.001], [x - 0.17, ly + 0.05, zN + 0.001], DARK);
        glow.layer(CARTEX.HEADLAMP, () => glow.quad([x - 0.15 + s * 0.06, ly - 0.035, zN - 0.002], [x + 0.15 + s * 0.06, ly - 0.035, zN - 0.002], [x + 0.15 + s * 0.06, ly + 0.035, zN - 0.002], [x - 0.15 + s * 0.06, ly + 0.035, zN - 0.002], 0xf4f0d8, [0, 0, 1, 1]));
        glow.layer(CARTEX.LENS, () => glow.quad([x - 0.16, ly - 0.035, zN - 0.002], [x - 0.04, ly - 0.035, zN - 0.002], [x - 0.04, ly + 0.035, zN - 0.002], [x - 0.16, ly + 0.035, zN - 0.002], 0xffa030, [0, 0, 1, 1]));
      } else if (fr === 'round') {
        g92ring(body, x, hy, zN + 0.001, 0.125, 0.15, CHROME);
        disc(glow, x, hy, zN - 0.002, 0.125, 0.11, 16, 0xf4f0d8, CARTEX.HEADLAMP);
      } else {
        const hh = fr === 'slim' ? 0.06 : 0.12;
        body.quad([x - 0.23, hy - hh / 2 - 0.02, zN + 0.001], [x + 0.23, hy - hh / 2 - 0.02, zN + 0.001], [x + 0.23, hy + hh / 2 + 0.02, zN + 0.001], [x - 0.23, hy + hh / 2 + 0.02, zN + 0.001], DARK);
        glow.layer(CARTEX.HEADLAMP, () => glow.quad([x - 0.2, hy - hh / 2, zN - 0.002], [x + 0.12, hy - hh / 2, zN - 0.002], [x + 0.12, hy + hh / 2, zN - 0.002], [x - 0.2, hy + hh / 2, zN - 0.002], 0xf4f0d8, [0, 0, 1, 1]));
        glow.layer(CARTEX.LENS, () => glow.quad([x + 0.13, hy - hh / 2, zN - 0.002], [x + 0.21, hy - hh / 2, zN - 0.002], [x + 0.21, hy + hh / 2, zN - 0.002], [x + 0.13, hy + hh / 2, zN - 0.002], 0xffa030, [0, 0, 1, 1]));
      }
    }
  } else {
    // traffic: simple square lamps either side of the grille
    const hy = yb0 + 0.24;
    for (const s of [-1, 1]) glow.layer(CARTEX.HEADLAMP, () => glow.quad([s * w0 * 0.82, hy - 0.06, zN - 0.002], [s * w0 * 0.5, hy - 0.06, zN - 0.002], [s * w0 * 0.5, hy + 0.06, zN - 0.002], [s * w0 * 0.82, hy + 0.06, zN - 0.002], 0xe8e4cc, [0, 0, 1, 1]));
  }

  // ---- tail ------------------------------------------------------------------------
  const zT = zR;
  for (const r of spec.rear ?? []) {
    for (const x of r.mirror === false || r.x === 0 ? [r.x] : [r.x, -r.x]) {
      const a: V3 = [x - r.w / 2, r.y - r.h / 2, zT + 0.006], b: V3 = [x + r.w / 2, r.y - r.h / 2, zT + 0.006];
      const c: V3 = [x + r.w / 2, r.y + r.h / 2, zT + 0.006], d: V3 = [x - r.w / 2, r.y + r.h / 2, zT + 0.006];
      if (r.c === BLACK) body.layer(CARTEX.MESH, () => body.quad(a, b, c, d, MESH_COL, [0, 0, r.w * 7, r.h * 7]));
      else body.quad(a, b, c, d, r.c);
    }
  }
  const lampShape = (g: GeoBuilder, li: Light, x: number, z: number, c: number, grow = 0, layer?: number) => {
    const w = li.w + grow, h = li.h + grow;
    const lay = layer ?? (li.round ? CARTEX.LENS_ROUND : li.w > 0.7 ? CARTEX.LENS_BAR : CARTEX.LENS);
    if (li.round) disc(g, x, li.y, z, w / 2, h / 2, 16, c, lay);
    else g.layer(lay, () => g.quad([x - w / 2, li.y - h / 2, z], [x + w / 2, li.y - h / 2, z], [x + w / 2, li.y + h / 2, z], [x - w / 2, li.y + h / 2, z], c, [0, 0, li.w > 0.7 ? w * 6 : 1, 1]));
  };
  for (const li of spec.lights) {
    for (const x of li.mirror === false || li.x === 0 ? [li.x] : [li.x, -li.x]) {
      lampShape(glow, li, x, zT + 0.012, li.c);
      if (li.brake && !traffic) lampShape(brake, li, x, zT + 0.016, 0xff4a36);
      if (!traffic) {
        lampShape(body, li, x, zT + 0.008, 0x1a1a1e, 0.05, CARTEX.PLAIN);
        if (li.round) body.with(new THREE.Matrix4().makeTranslation(x, li.y, zT + 0.01).multiply(new THREE.Matrix4().makeScale(1, li.h / li.w, 1)), () => ring(body, li.w / 2, li.w / 2 + 0.022, 16, CHROME));
      }
    }
  }
  if (spec.slats) {
    const s = spec.slats;
    for (let k = 0; k <= s.n; k++) {
      const y = s.y0 + ((s.y1 - s.y0) * k) / s.n;
      body.box(0, y, zT + 0.03, s.w * 2, 0.03, 0.035, [BLACK, DARK]);
    }
  }
  // rear bumper below the plate, diffuser under it
  const ybR = SL.pts[0][1], wR = SL.pts[2][0];
  const bTop = Math.min(ybR + 0.15, spec.plateY - 0.12);
  if (bTop - (ybR - 0.04) > 0.06) {
    // wrap-around bumper: straight across the back, corners rounded to follow how much the tail tucks in
    const y0 = ybR - 0.04, y1 = bTop, zb = zT + 0.075, d = 0.09;
    const tuck = Math.max(0, W(zT - 0.4) - wR);
    const r = Math.min(0.32, 0.07 + tuck * 2.2), cx = wR * 0.98 - r, cz = zb - r;
    const face = spec.chrome ? CHROME : eighties || traffic ? 0x2a2a2e : shade, top = spec.chrome ? 0xe8ecf0 : eighties || traffic ? 0x38383c : paint;
    const plan: [number, number][] = [[0, zb]];
    for (let k = 0; k <= 5; k++) {
      const a = (k / 5) * (Math.PI / 2);
      plan.push([cx + r * Math.sin(a), cz + r * Math.cos(a)]);
    }
    for (const sx of [-1, 1]) {
      for (let k = 0; k < plan.length - 1; k++) {
        const [xa, za] = plan[k], [xb, zb2] = plan[k + 1];
        // inner edge: pulled in towards the body by the bumper depth
        const ia: [number, number] = k === 0 ? [xa, za - d] : [xa - Math.sin(((k - 1) / 5) * (Math.PI / 2)) * d, za - Math.cos(((k - 1) / 5) * (Math.PI / 2)) * d];
        const ib: [number, number] = [xb - Math.sin((k / 5) * (Math.PI / 2)) * d, zb2 - Math.cos((k / 5) * (Math.PI / 2)) * d];
        body.quad([sx * xa, y0, za], [sx * xb, y0, zb2], [sx * xb, y1, zb2], [sx * xa, y1, za], face);
        body.quad([sx * xa, y1, za], [sx * xb, y1, zb2], [sx * ib[0], y1, ib[1]], [sx * ia[0], y1, ia[1]], top);
      }
    }
  }
  if (!traffic) {
    for (const e of spec.exhaust) {
      body.with(new THREE.Matrix4().makeTranslation(e.x, e.y, zT - 0.1).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), () => {
        body.prism(0, 0, -0.1, 0.22, e.r, e.r, 12, [CHROME, 0xa8acb4], null);
        body.prism(0, 0, 0.2, 0.222, e.r * 1.04, e.r * 1.04, 12, 0x8a7aa8, null); // heat-blued rim
        body.prism(0, 0, 0.221, 0.08, e.r * 0.8, e.r * 0.8, 12, BLACK, BLACK);
      });
    }
    // plate recess with chrome frame, reversing lamps
    const py = spec.plateY, z = zT + 0.006;
    body.quad([-0.3, py - 0.1, zT + 0.004], [0.3, py - 0.1, zT + 0.004], [0.3, py + 0.1, zT + 0.004], [-0.3, py + 0.1, zT + 0.004], DARK);
    body.quad([-0.31, py - 0.105, z], [0.31, py - 0.105, z], [0.31, py - 0.085, z], [-0.31, py - 0.085, z], CHROME);
    body.quad([-0.31, py + 0.085, z], [0.31, py + 0.085, z], [0.31, py + 0.105, z], [-0.31, py + 0.105, z], CHROME);
    for (const s of [-1, 1]) {
      glow.layer(CARTEX.LENS, () => glow.quad([s * 0.36, py - 0.04, zT + 0.012], [s * 0.49, py - 0.04, zT + 0.012], [s * 0.49, py + 0.04, zT + 0.012], [s * 0.36, py + 0.04, zT + 0.012], 0xf0f0e8, [0, 0, 1, 1]));
      // tow eye / fog lamp in the bumper
      const fy = Math.max(ybR + 0.02, (bTop + ybR) / 2 - 0.025);
      if (s < 0) glow.layer(CARTEX.LENS, () => glow.quad([-0.62, fy, zT + 0.08], [-0.48, fy, zT + 0.08], [-0.48, fy + 0.05, zT + 0.08], [-0.62, fy + 0.05, zT + 0.08], 0xd02018, [0, 0, 1, 1]));
    }
    // diffuser: a dark ramp with fins
    body.quad([-wR * 0.8, ybR - 0.05, zT + 0.06], [wR * 0.8, ybR - 0.05, zT + 0.06], [wR * 0.8, ybR + 0.03, zT - 0.5], [-wR * 0.8, ybR + 0.03, zT - 0.5], 0x1c1c20);
    for (let k = -3; k <= 3; k++) body.box(k * wR * 0.24, ybR + 0.0, zT - 0.15, 0.025, 0.06, 0.4, DARK);
  } else {
    body.quad([-0.26, spec.plateY - 0.08, zT + 0.008], [0.26, spec.plateY - 0.08, zT + 0.008], [0.26, spec.plateY + 0.08, zT + 0.008], [-0.26, spec.plateY + 0.08, zT + 0.008], 0xe8e8d8);
    body.quad([-0.29, spec.plateY - 0.1, zT + 0.007], [0.29, spec.plateY - 0.1, zT + 0.007], [0.29, spec.plateY + 0.1, zT + 0.007], [-0.29, spec.plateY + 0.1, zT + 0.007], 0x303034);
  }

  // ---- sides -----------------------------------------------------------------------
  const sideQuad = (g: GeoBuilder, s: number, z0: number, z1: number, y0a: number, y1a: number, y0b: number, y1b: number, c: number, off: number, uv?: [number, number, number, number]) => {
    const a: V3 = [s * (sideAt(z0, y0a) + off), y0a, z0], b: V3 = [s * (sideAt(z1, y0b) + off), y0b, z1];
    const cc: V3 = [s * (sideAt(z1, y1b) + off), y1b, z1], d: V3 = [s * (sideAt(z0, y1a) + off), y1a, z0];
    g.quad(a, b, cc, d, c, uv);
  };
  for (const f of spec.side ?? []) {
    for (const s of [-1, 1]) {
      if (f.kind === 'intake') {
        // wedge-shaped recess, sliced along z so it hugs the flank and stays below the window line
        const n = 10, bot = (z: number) => Math.max(f.y0 + (f.y1 - f.y0) * 0.5 * (1 - (z - f.z0) / (f.z1 - f.z0)), archAt(z) + 0.1);
        const top = (z: number, pad: number) => Math.max(bot(Math.min(f.z1, Math.max(f.z0, z))) + 0.04, Math.min(f.y1 + pad, BELT(z) - 0.03));
        for (let j = 0; j < n; j++) {
          const za = f.z0 + ((f.z1 - f.z0) * j) / n, zb = f.z0 + ((f.z1 - f.z0) * (j + 1)) / n;
          const ea = j === 0 ? za - 0.03 : za, eb = j === n - 1 ? zb + 0.03 : zb;
          // stand further off where the fender bulges over the wheel, so the paint never pokes through
          const off = 0.006 + Math.min(0.02, (flareAt(za) + flareAt(zb)) * 0.25);
          sideQuad(body, s, ea, eb, bot(za) - 0.03, top(ea, 0.03), bot(zb) - 0.03, top(eb, 0.03), BLACK, off);
          const u0 = (za - f.z0) * 7, u1 = (zb - f.z0) * 7;
          body.layer(CARTEX.MESH, () => sideQuad(body, s, za, zb, bot(za), top(za, 0), bot(zb), top(zb, 0), MESH_COL, off + 0.003, [u0, 0, u1 - u0, (f.y1 - f.y0) * 7]));
        }
      } else if (f.kind === 'naca') {
        sideQuad(body, s, f.z0, f.z1, f.y1 - 0.02, f.y1, f.y0, f.y1, BLACK, 0.007);
        sideQuad(body, s, f.z0 + (f.z1 - f.z0) * 0.6, f.z1, f.y1 - (f.y1 - f.y0) * 0.6, f.y1, f.y0 + 0.02, f.y1 - 0.02, 0x222226, 0.009);
      } else if (f.kind === 'stripe') sideQuad(body, s, f.z0, f.z1, f.y0, f.y1, f.y0, f.y1, f.c ?? 0xffffff, 0.008);
      else if (f.kind === 'strakes') {
        const nz = 6;
        for (let j = 0; j < nz; j++) {
          const za = f.z0 + ((f.z1 - f.z0) * j) / nz, zb = f.z0 + ((f.z1 - f.z0) * (j + 1)) / nz;
          sideQuad(body, s, za, zb, f.y0, f.y1, f.y0, f.y1, BLACK, 0.006);
          const n = f.n ?? 5;
          for (let k = 0; k < n; k++) {
            const y = f.y0 + ((f.y1 - f.y0) * (k + 0.6)) / (n + 0.2);
            // each strake is a fin: outer face, top and bottom
            for (const [ya, yb2, off0, off1] of [[y, y + 0.035, 0.035, 0.035], [y, y, 0.006, 0.035], [y + 0.035, y + 0.035, 0.006, 0.035]] as const) {
              const a: V3 = [s * (sideAt(za, ya) + off0), ya, za], b: V3 = [s * (sideAt(zb, ya) + off0), ya, zb];
              const c: V3 = [s * (sideAt(zb, yb2) + off1), yb2, zb], d: V3 = [s * (sideAt(za, yb2) + off1), yb2, za];
              body.quad(a, b, c, d, ya === yb2 ? (ya === y ? deep : shade) : paint);
            }
          }
        }
      }
    }
  }
  const wsSt = st.find((x) => x.seg === 'ws');
  const rwSt = st.find((x) => x.seg === 'rw') ?? st.find((x) => x.seg === 'lv');
  const rfI = st.findIndex((x) => x.seg === 'rf');
  for (const s of [-1, 1]) {
    // side skirt between the arches
    const za = wheels[0].z + wheels[0].R + 0.04, zb = wheels[1].z - wheels[1].R - 0.04;
    if (zb > za) {
      const n = traffic ? 1 : 4;
      for (let i = 0; i < n; i++) {
        const z0 = za + ((zb - za) * i) / n, z1 = za + ((zb - za) * (i + 1)) / n;
        const y0 = YB(z0), y1 = YB(z1);
        body.quad([s * (sideAt(z0, y0 + 0.02) + 0.02), y0 - 0.02, z0], [s * (sideAt(z1, y1 + 0.02) + 0.02), y1 - 0.02, z1],
          [s * (sideAt(z1, y1 + 0.1) + 0.006), y1 + 0.1, z1], [s * (sideAt(z0, y0 + 0.1) + 0.006), y0 + 0.1, z0], traffic ? 0x2a2a2e : eighties ? deep : shade);
      }
    }
    // side marker lamps
    const zm = zF + 0.3, ym = YB(zm) + (BELT(zm) - YB(zm)) * 0.55;
    glow.layer(CARTEX.LENS, () => {
      glow.quad([s * (sideAt(zm, ym) + 0.01), ym - 0.025, zm], [s * (sideAt(zm + 0.14, ym) + 0.01), ym - 0.025, zm + 0.14],
        [s * (sideAt(zm + 0.14, ym) + 0.01), ym + 0.025, zm + 0.14], [s * (sideAt(zm, ym) + 0.01), ym + 0.025, zm], 0xff9a20, [0, 0, 1, 1]);
      const zr = zR - 0.4, yr = YB(zr) + (BELT(zr) - YB(zr)) * 0.6;
      glow.quad([s * (sideAt(zr, yr) + 0.01), yr - 0.025, zr], [s * (sideAt(zr + 0.14, yr) + 0.01), yr - 0.025, zr + 0.14],
        [s * (sideAt(zr + 0.14, yr) + 0.01), yr + 0.025, zr + 0.14], [s * (sideAt(zr, yr) + 0.01), yr + 0.025, zr], 0xc81810, [0, 0, 1, 1]);
    });
    if (!wsSt) continue;
    // door mirror: stalk, body-colour pod, silvered glass facing back
    const zmr = wsSt.z + 0.22, ymr = BELT(zmr) + 0.07, xmr = sideAt(zmr, BELT(zmr) - 0.01);
    if (!traffic) {
      body.box(s * (xmr + 0.035), ymr - 0.04, zmr, 0.08, 0.03, 0.04, BLACK);
      body.box(s * (xmr + 0.11), ymr, zmr, 0.14, 0.08, 0.075, [paint, paint, shade, BLACK]);
      body.quad([s * (xmr + 0.05), ymr - 0.032, zmr + 0.039], [s * (xmr + 0.17), ymr - 0.032, zmr + 0.039], [s * (xmr + 0.17), ymr + 0.032, zmr + 0.039], [s * (xmr + 0.05), ymr + 0.032, zmr + 0.039], 0x9aa8b8);
    } else body.box(s * (xmr + 0.08), ymr, zmr, 0.14, 0.12, 0.1, [0x1a1a1a, 0x222222, 0x1a1a1a, 0x333333]);
    // door shut lines following the body section; the door ends ahead of any side intake
    const intake = (spec.side ?? []).find((f) => f.kind === 'intake');
    const zd0 = wsSt.z + 0.06;
    let zd1 = rwSt ? rwSt.z + 0.05 : wsSt.z + 1.15;
    if (intake) zd1 = Math.min(zd1, intake.z0 - 0.06);
    for (const zz of [zd0, zd1]) {
      const sc = section(zz);
      for (let k = 0; k < 4; k++) {
        const p = sc.pts[k], q = sc.pts[k + 1];
        if (q[1] < YB(zz) + 0.08) continue;
        body.quad([s * (p[0] + 0.006), p[1], zz], [s * (p[0] + 0.006), p[1], zz + 0.016], [s * (q[0] + 0.006), q[1], zz + 0.016], [s * (q[0] + 0.006), q[1], zz], DARK);
      }
    }
    if (traffic) continue;
    // handle at the back of the door, unless a duct or intake is there (F40 / Countach open from inside the duct)
    const zh = zd1 - 0.22, yh = BELT(zh) - 0.1;
    const blocked = (spec.side ?? []).some((f) => (f.kind === 'naca' || f.kind === 'intake') && zh + 0.14 > f.z0 && zh - 0.14 < f.z1 && yh + 0.05 > f.y0 && yh - 0.05 < f.y1);
    if (!blocked) {
      body.quad([s * (sideAt(zh - 0.1, yh) + 0.009), yh - 0.018, zh - 0.1], [s * (sideAt(zh + 0.1, yh) + 0.009), yh - 0.018, zh + 0.1],
        [s * (sideAt(zh + 0.1, yh) + 0.009), yh + 0.018, zh + 0.1], [s * (sideAt(zh - 0.1, yh) + 0.009), yh + 0.018, zh - 0.1], CHROME);
    }
    // fuel flap on the right rear quarter: behind the door (and intake), ahead of the arch, else up on the haunch
    if (s > 0 && rfI >= 0) {
      const back = Math.max(zd1, intake ? intake.z1 : zd1) + 0.04, arch = wheels[1].z - wheels[1].R - 0.04;
      let zf = 0, yf = 0, room = false;
      if (arch - back >= 0.2) {
        zf = (back + arch) / 2;
        yf = YB(zf) + (BELT(zf) - YB(zf)) * 0.62;
        room = true;
      } else {
        const r = wheels[1], archTop = r.r + r.R + 0.06;
        zf = r.z;
        yf = (archTop + BELT(zf) - 0.05) / 2;
        room = BELT(zf) - 0.05 - archTop >= 0.14;
      }
      if (room) {
        const xf = sideAt(zf, yf) + 0.008;
        body.with(new THREE.Matrix4().makeTranslation(xf, yf, zf).multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2)), () => {
          ring(body, 0.0, 0.058, 12, shade);
          ring(body, 0.058, 0.07, 12, DARK);
        });
      }
    }
  }

  // ---- top details -----------------------------------------------------------------
  if (wsSt && wsSec) {
    // wipers parked at the base of the windscreen
    const z = wsSec.z + 0.07, y = TOP(z) + 0.035;
    for (const x0 of [-0.62, 0.0]) {
      const wl = WT(z) * 0.62;
      body.quad([x0 * WT(z), y, z], [x0 * WT(z) + wl, y + 0.004, z + 0.035], [x0 * WT(z) + wl, y + 0.016, z + 0.035], [x0 * WT(z), y + 0.012, z], BLACK);
    }
  }
  if (spec.louvres) {
    const lv = spec.louvres;
    const y = (z: number) => TOP(z) + 0.024;
    body.layer(CARTEX.LOUVRE, () => {
      const n = 4;
      for (let i = 0; i < n; i++) {
        const za = lv.z0 + ((lv.z1 - lv.z0) * i) / n, zb = lv.z0 + ((lv.z1 - lv.z0) * (i + 1)) / n;
        const va = (lv.n * i) / n, vb = (lv.n * (i + 1)) / n;
        quadUV(body, [-lv.w, y(za), za], [lv.w, y(za), za], [lv.w, y(zb), zb], [-lv.w, y(zb), zb], scale(paint, 0.9), [0, va], [4, va], [4, vb], [0, vb]);
      }
    });
  }
  if (spec.scoop && rfI >= 0) {
    const rf = st[rfI];
    // low snorkel faired into the roof: wedge rising towards the back with a mesh mouth facing forward
    const z0 = rf.z + 0.12, z1 = rf.z + 0.75, yT = rf.top + 0.02, h = 0.085, hw = 0.14;
    body.poly([[-hw, yT, z0], [-hw, yT + h, z0 + 0.06], [-hw, yT + h * 0.6, z1], [-hw, yT, z1]], shade);
    body.poly([[hw, yT, z1], [hw, yT + h * 0.6, z1], [hw, yT + h, z0 + 0.06], [hw, yT, z0]], shade);
    body.quad([-hw, yT + h, z0 + 0.06], [hw, yT + h, z0 + 0.06], [hw, yT + h * 0.6, z1], [-hw, yT + h * 0.6, z1], paint);
    body.layer(CARTEX.MESH, () => body.quad([hw - 0.02, yT + 0.01, z0], [-hw + 0.02, yT + 0.01, z0], [-hw + 0.02, yT + h - 0.01, z0 + 0.05], [hw - 0.02, yT + h - 0.01, z0 + 0.05], MESH_COL, [0, 0, 2, 1]));
  }
  if (spec.wing) {
    const w = spec.wing;
    const deck = TOP(w.z) + 0.02;
    // aerofoil: thick leading edge tapering to a trailing gurney
    const blade = (span: number) => {
      const x = span;
      body.quad([-x, w.y + 0.03, w.z - w.d / 2], [x, w.y + 0.03, w.z - w.d / 2], [x, w.y + 0.02, w.z + w.d / 2], [-x, w.y + 0.02, w.z + w.d / 2], paint);
      body.quad([-x, w.y - 0.03, w.z - w.d / 2], [x, w.y - 0.03, w.z - w.d / 2], [x, w.y - 0.005, w.z + w.d / 2], [-x, w.y - 0.005, w.z + w.d / 2], deep);
      body.quad([-x, w.y - 0.03, w.z - w.d / 2], [x, w.y - 0.03, w.z - w.d / 2], [x, w.y + 0.03, w.z - w.d / 2], [-x, w.y + 0.03, w.z - w.d / 2], shade);
      body.quad([-x, w.y - 0.005, w.z + w.d / 2], [x, w.y - 0.005, w.z + w.d / 2], [x, w.y + 0.045, w.z + w.d / 2 + 0.01], [-x, w.y + 0.045, w.z + w.d / 2 + 0.01], BLACK);
    };
    if (w.kind === 'duck') {
      body.box(0, w.y, w.z, w.w * 2, 0.06, w.d, [paint, paint, shade, shade]);
      body.quad([-w.w, w.y + 0.03, w.z + w.d / 2], [w.w, w.y + 0.03, w.z + w.d / 2], [w.w, w.y + 0.05, w.z + w.d / 2 + 0.02], [-w.w, w.y + 0.05, w.z + w.d / 2 + 0.02], BLACK);
    } else {
      blade(w.w);
      if (w.kind === 'big') {
        for (const s of [-1, 1]) {
          body.box(s * 0.32, (deck + w.y) / 2, w.z, 0.06, w.y - deck, 0.2, [DARK, DARK, 0x262628]);
          body.box(s * w.w, w.y + 0.02, w.z, 0.02, 0.2, w.d + 0.1, [paint, paint, shade, shade]);
        }
      } else if (w.kind === 'hoop') {
        for (const s of [-1, 1]) body.box(s * (w.w - 0.08), (deck + w.y) / 2, w.z, 0.1, w.y - deck, w.d * 0.7, [paint, paint, shade, shade]);
        // high-level brake light in the blade
        brake.layer(CARTEX.LENS_BAR, () => brake.quad([-0.2, w.y + 0.012, w.z + w.d / 2 + 0.012], [0.2, w.y + 0.012, w.z + w.d / 2 + 0.012], [0.2, w.y + 0.04, w.z + w.d / 2 + 0.016], [-0.2, w.y + 0.04, w.z + w.d / 2 + 0.016], 0xff4030, [0, 0, 3, 1]));
        glow.layer(CARTEX.LENS_BAR, () => glow.quad([-0.2, w.y + 0.012, w.z + w.d / 2 + 0.008], [0.2, w.y + 0.012, w.z + w.d / 2 + 0.008], [0.2, w.y + 0.04, w.z + w.d / 2 + 0.012], [-0.2, w.y + 0.04, w.z + w.d / 2 + 0.012], 0x701010, [0, 0, 3, 1]));
      } else {
        for (const s of [-1, 1]) body.poly([[s * w.w, deck, w.z - w.d / 2 - 0.2], [s * w.w, deck, w.z + w.d / 2], [s * w.w, w.y + 0.07, w.z + w.d / 2], [s * w.w, w.y + 0.07, w.z - w.d / 2]], paint);
      }
    }
  }
  if (!traffic && rfI >= 0) {
    // roof aerial
    const rf = st[rfI], rfE = st[rfI + 1];
    if (spec.group === '90s JAPAN') limb(body, [0.35, TOP(rfE.z) - 0.02, rfE.z + 0.05], [0.38, TOP(rfE.z) + 0.26, rfE.z + 0.22], 0.008, BLACK);
    void rf;
  }

  // ---- cabin -----------------------------------------------------------------------
  if (rfI >= 0 && wsSt) {
    const rf = st[rfI], rfE = st[rfI + 1];
    const trim = spec.trim ?? 0x2c2c32;
    const zh = rf.z + Math.min(0.45, (rfE.z - rf.z) * 0.55);
    const roofY = TOP(zh);
    const belt = BELT(zh);
    const headY = roofY - (traffic ? 0.24 : 0.22);
    const wIn = W(zh) - 0.09;
    const floorY = belt - 0.26;
    const z0 = wsSt.z + 0.25, z1 = rfE.z + 0.15;
    cabin.quad([-wIn, floorY, z0], [wIn, floorY, z0], [wIn, floorY, z1], [-wIn, floorY, z1], TUB);
    for (const s of [-1, 1]) cabin.quad([s * wIn, floorY, z0], [s * wIn, floorY, z1], [s * wIn, belt - 0.02, z1], [s * wIn, belt - 0.02, z0], scale(trim, 0.7));
    // bulkhead behind the seats, low enough to see the cabin through the rear glass
    cabin.quad([-wIn, floorY, z1], [wIn, floorY, z1], [wIn, belt + 0.02, z1], [-wIn, belt + 0.02, z1], 0x141418);
    // parcel shelf / engine deck under the rear window
    const rwE = st[rfI + 2] ?? rfE;
    cabin.quad([-wIn, belt + 0.02, z1], [wIn, belt + 0.02, z1], [wIn, Math.min(BELT(rwE.z), TOP(rwE.z)) - 0.02, rwE.z], [-wIn, Math.min(BELT(rwE.z), TOP(rwE.z)) - 0.02, rwE.z], 0x1c1c20);
    const drive = spec.drive ?? (spec.group === '90s JAPAN' ? 'R' : 'L');
    const dx = drive === 'C' ? 0 : (drive === 'R' ? 1 : -1) * Math.min(0.38, wIn * 0.48);
    const seats: { x: number; z: number; driver: boolean }[] = drive === 'C'
      ? [{ x: 0, z: zh - 0.12, driver: true }, { x: -0.44, z: zh + 0.12, driver: false }, { x: 0.44, z: zh + 0.12, driver: false }]
      : [{ x: dx, z: zh, driver: true }, { x: -dx, z: zh, driver: false }];
    const dc = driverColours(paint);
    const suit = traffic ? 0x4a4a52 : dc.suit;
    const wheelZ = zh - (traffic ? 0.5 : 0.48), wheelY = headY - 0.24;
    // dashboard
    const dashZ = Math.max(wsSt.z + 0.3, wheelZ - 0.22);
    cabin.box(0, belt - 0.03, dashZ, wIn * 2, 0.12, 0.32, [0x1a1a1e, 0x222228]);
    for (const seat of seats) {
      const sx = seat.x, sz = seat.z;
      if (traffic) {
        cabin.box(sx, belt - 0.02, sz + 0.2, 0.42, 0.5, 0.1, scale(trim, 0.9));
        if (seat.driver) {
          ball(cabin, [sx, headY, sz], 0.11, 0x2a2018, 6, 4, 0x2a2018);
          cabin.box(sx, headY - 0.25, sz + 0.03, 0.36, 0.26, 0.2, suit);
        }
        continue;
      }
      const backY = Math.min(belt - 0.04, roofY - 0.52);
      cabin.with(new THREE.Matrix4().makeTranslation(sx, backY, sz + 0.22).multiply(new THREE.Matrix4().makeRotationX(0.22)), () => {
        tbox(cabin, 0, 0, 0, 0.44, 0.56, 0.1, trim, CARTEX.SEAT, scale(trim, 0.75));
        tbox(cabin, 0, 0.36, 0.02, 0.26, 0.17, 0.09, trim, CARTEX.SEAT, scale(trim, 0.75));
        // side bolsters
        for (const s of [-1, 1]) cabin.box(s * 0.2, 0.02, -0.06, 0.06, 0.48, 0.1, scale(trim, 0.85));
      });
      if (seat.driver) {
        // driver: helmet with a paint-colour stripe, shoulders, arms to the wheel
        helmet(cabin, [sx, headY, sz], 0.125, dc.band, 12, 8, dc.shell);
        ellipsoid(cabin, [sx, headY - 0.16, sz + 0.02], [0.05, 0.06, 0.05], 0x1a1a1c, 6, 4);
        torso(cabin, [sx, headY - 0.33, sz + 0.04], [0.21, 0.17, 0.12], suit, dc.band);
        for (const s of [-1, 1]) {
          limb(cabin, [sx + s * 0.18, headY - 0.26, sz + 0.02], [sx + s * 0.16, wheelY - 0.02, wheelZ + 0.05], 0.075, suit);
          ball(cabin, [sx + s * 0.16, wheelY - 0.02, wheelZ + 0.04], 0.04, 0x1a1a1a, 5, 3);
        }
        // steering wheel and instrument binnacle
        cabin.with(new THREE.Matrix4().makeTranslation(sx, wheelY, wheelZ).multiply(new THREE.Matrix4().makeRotationX(-0.45)), () => {
          ring(cabin, 0.15, 0.185, 14, 0x161616);
          cabin.box(0, 0, 0, 0.3, 0.035, 0.02, 0x222226);
          cabin.box(0, -0.07, 0, 0.035, 0.14, 0.02, 0x222226);
          cabin.prism(0, 0, -0.01, 0.01, 0.05, 0.05, 8, 0x303034, 0x303034);
        });
        cabin.box(sx, belt + 0.05, dashZ + 0.02, 0.42, 0.07, 0.2, [0x141416, 0x1c1c20]);
      }
    }
    // interior mirror
    cabin.box(0, TOP(rf.z + 0.05) - 0.07, rf.z + 0.06, 0.22, 0.06, 0.03, [0x1a1a1a, 0x1a1a1a, 0x1a1a1a, 0x8a96a4]);
  }

  return {
    skin, body, cabin, glass, glow, brake,
    plate: { y: spec.plateY, z: zT + 0.012 },
    tailZ: zT,
    wheels: [
      { x: wheels[0].x, z: wheels[0].z, r: wheels[0].r, hw: wheels[0].hw },
      { x: wheels[1].x, z: wheels[1].z, r: wheels[1].r, hw: wheels[1].hw },
    ],
  };
}

/** Chrome bezel ring in the XY plane at (x, y, z). */
function g92ring(g: GeoBuilder, x: number, y: number, z: number, r0: number, r1: number, col: number) {
  g.with(new THREE.Matrix4().makeTranslation(x, y, z), () => ring(g, r0, r1, 16, col));
}

/**
 * Wheel along the X axis: treaded tyre with rounded shoulders and lettered
 * sidewall, recessed rim face cut out between the spokes (needs alphaTest).
 * outward = +1 for the car's right side.
 */
export function wheelInto(g: GeoBuilder, r: number, hw: number, outward: number, style: RimStyle, rimCol: number, n = 16, detail = true) {
  const p = (a: number, x: number, rr: number): V3 => [x, Math.cos(a) * rr, Math.sin(a) * rr];
  const rr = r * 0.66, rs = r * 0.93, tx = hw * 0.8;
  const ox = outward * hw, rx = outward * (hw - 0.035);
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    const v0 = (i / n) * 8, v1 = ((i + 1) / n) * 8;
    // tread: u across the tyre, v round it
    g.layer(CARTEX.TREAD, () => quadUV(g, p(a0, -tx, r), p(a0, tx, r), p(a1, tx, r), p(a1, -tx, r), 0x3a3a3c, [0, v0], [1, v0], [1, v1], [0, v1]));
    // rounded shoulders
    for (const s of [-1, 1]) g.quad(p(a0, s * tx, r), p(a1, s * tx, r), p(a1, s * hw, rs), p(a0, s * hw, rs), 0x26262a);
    // outer sidewall with lettering
    const u0 = (i / n) * 2, u1 = ((i + 1) / n) * 2;
    g.layer(CARTEX.SIDEWALL, () => quadUV(g, p(a0, ox, rr), p(a1, ox, rr), p(a1, ox, rs), p(a0, ox, rs), 0xffffff, [u0, 0], [u1, 0], [u1, 1], [u0, 1]));
    // inner sidewall and a dark back face
    g.quad(p(a0, -ox, rr), p(a1, -ox, rr), p(a1, -ox, rs), p(a0, -ox, rs), 0x161618);
    g.tri([-ox, 0, 0], p(a0, -ox, rr), p(a1, -ox, rr), 0x101012);
    // polished lip stepping down to the recessed rim face
    g.quad(p(a0, ox, rr), p(a1, ox, rr), p(a1, rx, rr), p(a0, rx, rr), scale(rimCol, 0.85));
    if (detail) {
      // barrel seen through the spokes
      g.quad(p(a0, rx, rr * 0.98), p(a1, rx, rr * 0.98), p(a1, -rx * 0.6, rr * 0.98), p(a0, -rx * 0.6, rr * 0.98), scale(rimCol, 0.4));
    }
  }
  g.with(new THREE.Matrix4().makeTranslation(rx, 0, 0).multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2)), () => {
    disc(g, 0, 0, 0, rr, rr, n, rimCol, RIM_TILE[style]);
  });
}

export function wheelGeoHD(r: number, hw: number, outward: number, style: RimStyle, rimCol: number): THREE.BufferGeometry {
  const g = new GeoBuilder(true);
  wheelInto(g, r, hw, outward, style, rimCol);
  return g.build();
}

/** Brake disc and caliper behind a rim: steers with the wheel but doesn't spin. */
export function brakeGeoHD(r: number, hw: number, outward: number, caliper = 0xc81810): THREE.BufferGeometry {
  const g = new GeoBuilder(true);
  const rr = r * 0.66;
  const x = outward * (hw - 0.09);
  g.with(new THREE.Matrix4().makeTranslation(x, 0, 0).multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2)), () => {
    ring(g, rr * 0.42, rr * 0.86, 14, 0x9a9aa0);
    ring(g, rr * 0.86, rr * 0.88, 14, 0x6a6a70);
    g.prism(0, 0, -0.02, 0.02, rr * 0.42, rr * 0.42, 8, 0x3a3a3e, 0x3a3a3e);
  });
  // caliper hugging the disc at the back-top
  const a = 0.8;
  g.with(new THREE.Matrix4().makeTranslation(x + outward * 0.02, Math.cos(a) * rr * 0.68, Math.sin(a) * rr * 0.68).multiply(new THREE.Matrix4().makeRotationX(a)), () => {
    g.box(0, 0, 0, 0.06, 0.08, 0.2, [caliper, scale(caliper, 1.15)]);
  });
  return g.build();
}
