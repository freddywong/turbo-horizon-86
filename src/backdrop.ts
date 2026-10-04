import * as THREE from 'three';
import { GeoBuilder, V3 } from './geom';
import { GFX } from './gfx';
import { Rng } from './rng';

/**
 * Everything at "infinity": banded sky, sun / moon, clouds, mountain and
 * skyline silhouettes. The group follows the camera position; each layer
 * yaws with the road's accumulated heading at its own rate (the classic
 * horizon scroll of 80s racers).
 */
export class Backdrop {
  group = new THREE.Group();
  layers: { obj: THREE.Object3D; factor: number }[] = [];
  /** the sun disc and its centre in that layer's local space (for the lens flare) */
  sun: { obj: THREE.Object3D; local: THREE.Vector3 } | null = null;
  private tmp = new THREE.Vector3();

  /** Sun centre in normalised device coords, or null when it's behind the camera. */
  sunNdc(camera: THREE.Camera): THREE.Vector3 | null {
    if (!this.sun) return null;
    this.sun.obj.updateMatrixWorld();
    const p = this.tmp.copy(this.sun.local);
    this.sun.obj.localToWorld(p);
    p.project(camera);
    return p.z < 1 ? p : null;
  }

  addLayer(obj: THREE.Object3D, factor: number) {
    this.group.add(obj);
    this.layers.push({ obj, factor });
  }

  update(cam: THREE.Vector3, heading: number) {
    this.group.position.copy(cam);
    for (const l of this.layers) l.obj.rotation.y = heading * l.factor;
  }
}

const basic = (opts: THREE.MeshBasicMaterialParameters = {}) =>
  new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, side: THREE.DoubleSide, ...opts });

const shade = (c: number, k: number) => {
  const ch = (s: number) => Math.min(255, Math.round(((c >> s) & 255) * k));
  return (ch(16) << 16) | (ch(8) << 8) | ch(0);
};

/** 15-bit colour (5 bits per channel), like a late-80s arcade palette. */
const q15 = (c: number) => {
  const q = (v: number) => Math.round(Math.round((v / 255) * 31) * (255 / 31));
  return (q((c >> 16) & 255) << 16) | (q((c >> 8) & 255) << 8) | q(c & 255);
};
const lerpHex = (a: number, b: number, t: number) => {
  const ch = (s: number) => Math.round(((a >> s) & 255) + (((b >> s) & 255) - ((a >> s) & 255)) * t);
  return (ch(16) << 16) | (ch(8) << 8) | ch(0);
};

/**
 * Raster-style sky: key colours at given elevations, blended and then
 * quantised into fine hard steps (per-line palette changes on the real boards).
 * stops: [elevation in degrees, colour] from the horizon upward.
 */
export function skyDome(stops: [number, number][], below: number, step = 0.45): THREE.Mesh {
  const H = 2048;
  const cv = document.createElement('canvas');
  cv.width = 2;
  cv.height = H;
  const g = cv.getContext('2d')!;
  const hex = (h: number) => '#' + h.toString(16).padStart(6, '0');
  g.fillStyle = hex(below);
  g.fillRect(0, 0, 2, H);
  const colorAt = (e: number) => {
    if (e <= stops[0][0]) return stops[0][1];
    for (let i = 1; i < stops.length; i++) {
      if (e <= stops[i][0]) return lerpHex(stops[i - 1][1], stops[i][1], (e - stops[i - 1][0]) / (stops[i][0] - stops[i - 1][0]));
    }
    return stops[stops.length - 1][1];
  };
  // '92: a smooth gradient; '86: palette-limited hard steps
  const smooth = GFX.modern;
  const st = smooth ? 0.09 : step;
  for (let e = 0; e < 90; e += st * (e < 20 || smooth ? 1 : 3)) {
    const hi = Math.min(90, e + st * (e < 20 || smooth ? 1 : 3));
    const y0 = (H * (90 - hi)) / 180, y1 = (H * (90 - e)) / 180;
    g.fillStyle = hex(smooth ? colorAt(e) : q15(colorAt(e)));
    g.fillRect(0, Math.floor(y0), 2, Math.ceil(y1 - y0) + 1);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.magFilter = smooth ? THREE.LinearFilter : THREE.NearestFilter;
  tex.minFilter = smooth ? THREE.LinearFilter : THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  const geo = new THREE.SphereGeometry(2800, 24, 90);
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, fog: false, side: THREE.BackSide, depthWrite: false }));
  m.renderOrder = -10;
  return m;
}

/** Point on a cylinder of radius R at azimuth a (0 = straight ahead), offset u along the tangent. */
const ring = (R: number, a: number, u: number, y: number): V3 =>
  [Math.sin(a) * R + Math.cos(a) * u, y, -Math.cos(a) * R + Math.sin(a) * u];

/** Jagged polygon mountain range wrapped round the horizon. mask(a) scales height per azimuth. */
export function mountainRing(rng: Rng, R: number, color: number, maxH: number, mask: (a: number) => number,
  cap?: number, peaks = 40, wr: [number, number] = [6, 18]): THREE.Mesh {
  const g = new GeoBuilder();
  const N = 240;
  const h = new Float32Array(N + 1);
  for (let p = 0; p < peaks; p++) {
    const c = rng.next() * N;
    const height = rng.range(0.3, 1) * maxH;
    const width = rng.range(wr[0], wr[1]);
    for (let i = 0; i <= N; i++) {
      let d = Math.abs(i - c);
      d = Math.min(d, N - d);
      h[i] = Math.max(h[i], height * Math.max(0, 1 - d / width));
    }
  }
  for (let i = 0; i < N; i++) {
    const a0 = (i / N) * Math.PI * 2, a1 = ((i + 1) / N) * Math.PI * 2;
    const h0 = h[i] * mask(a0), h1 = h[i + 1] * mask(a1);
    if (h0 < 1 && h1 < 1) continue;
    if (GFX.modern) {
      // shaded slopes: lighter towards the peaks, hazier at the foot
      const top = (hh: number) => shade(color, 0.86 + 0.26 * Math.min(1, hh / maxH));
      const foot = shade(color, 0.78);
      g.quadC(ring(R, a0, 0, -60), ring(R, a1, 0, -60), ring(R, a1, 0, h1), ring(R, a0, 0, h0), [foot, foot, top(h1), top(h0)]);
    } else g.quad(ring(R, a0, 0, -60), ring(R, a1, 0, -60), ring(R, a1, 0, h1), ring(R, a0, 0, h0), color);
    if (cap !== undefined) {
      // snow / light caps on the tallest peaks
      const t = maxH * 0.72;
      if (h0 > t && h1 > t) g.quad(ring(R - 1, a0, 0, h0 - (h0 - t) * 0.6), ring(R - 1, a1, 0, h1 - (h1 - t) * 0.6),
        ring(R - 1, a1, 0, h1), ring(R - 1, a0, 0, h0), cap);
    }
  }
  return new THREE.Mesh(g.build(), basic());
}

/** Thin band just below the horizon that hides everything beyond the ground's far edge. */
export function horizonBand(R: number, color: number, depth = 500): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(R, R, depth, 32, 1, true);
  geo.translate(0, -depth / 2 + 0.5, 0);
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, fog: false, side: THREE.DoubleSide }));
  return m;
}

/** Centre of a disc() placed at azimuth a, elevation elev (degrees) on radius R. */
export function discCentre(R: number, a: number, elev: number): THREE.Vector3 {
  const cy = Math.tan((elev * Math.PI) / 180) * R;
  const [x, y, z] = ring(R, a, 0, cy);
  return new THREE.Vector3(x, y, z);
}

/** Flat n-gon disc facing the viewer (sun, moon). */
export function disc(R: number, a: number, elev: number, radius: number, colors: [number, number][], sides = 20): THREE.Mesh {
  const g = new GeoBuilder();
  const cy = Math.tan((elev * Math.PI) / 180) * R;
  if (GFX.modern) {
    // one smooth radial gradient through the given rings, finer polygon
    const n = Math.max(sides, 40);
    const rings = [...colors].sort((x, y) => y[0] - x[0]);
    const pt = (rr: number, t: number): V3 => ring(R, a, Math.cos(t) * radius * rr, cy + Math.sin(t) * radius * rr);
    for (let k = 0; k < rings.length; k++) {
      const [r0, c0] = rings[k];
      const [r1, c1] = k + 1 < rings.length ? rings[k + 1] : [0, rings[k][1]];
      for (let i = 0; i < n; i++) {
        const t0 = (i / n) * Math.PI * 2, t1 = ((i + 1) / n) * Math.PI * 2;
        g.quadC(pt(r0, t0), pt(r0, t1), pt(r1, t1), pt(r1, t0), [c0, c0, c1, c1]);
      }
    }
    return new THREE.Mesh(g.build(), basic());
  }
  for (const [r, c] of colors) {
    const pts: V3[] = [];
    for (let i = 0; i < sides; i++) {
      const t = (i / sides) * Math.PI * 2;
      pts.push(ring(R, a, Math.cos(t) * radius * r, cy + Math.sin(t) * radius * r));
    }
    g.poly(pts, c);
    R -= 2;
  }
  return new THREE.Mesh(g.build(), basic());
}

/** Puffy flat clouds made of overlapping polygons, lighter on top. */
export function clouds(rng: Rng, R: number, count: number, tones: [number, number, number],
  aMin = -Math.PI, aMax = Math.PI, elev: [number, number] = [4, 13]): THREE.Mesh {
  const g = new GeoBuilder();
  const [hi, mid, shade] = tones;
  const ellipse = (rr: number, a: number, cx: number, cy: number, rx: number, ry: number, c: number, from = 0, to = Math.PI * 2) => {
    const pts: V3[] = [];
    const n = GFX.modern ? 24 : 12;
    for (let i = 0; i <= n; i++) {
      const t = from + ((to - from) * i) / n;
      pts.push(ring(rr, a, cx + Math.cos(t) * rx, cy + Math.sin(t) * ry));
    }
    g.poly(pts, c);
  };
  for (let c = 0; c < count; c++) {
    const a = rng.range(aMin, aMax);
    const e = rng.range(elev[0], elev[1]);
    const cy = Math.tan((e * Math.PI) / 180) * R;
    const w = rng.range(140, 340);
    const puffs = rng.int(4, 8);
    const base = R - c * 6;
    // flat shaded underside spanning the cloud
    ellipse(base, a, 0, cy, w * 0.9, 16, shade, Math.PI, Math.PI * 2);
    for (let p = 0; p < puffs; p++) {
      const px = rng.range(-w, w) * 0.65;
      const py = rng.range(0, 34) * (1 - Math.abs(px) / w);
      const rx = rng.range(45, 100), ry = rx * rng.range(0.5, 0.7);
      const rr = base - 1 - p * 0.3;
      ellipse(rr, a, px, cy + py, rx, ry, mid, 0, Math.PI);
      ellipse(rr - 0.1, a, px - rx * 0.15, cy + py + ry * 0.2, rx * 0.7, ry * 0.65, hi, 0.2, Math.PI);
    }
  }
  return new THREE.Mesh(g.build(), basic());
}

/** Night skyline: dark block silhouettes peppered with bright window rectangles. */
export function skylineRing(rng: Rng, R: number, body: number[], windows: number[], maxH: number,
  mask: (a: number) => number, density = 0.6, lit = 0.25): THREE.Group {
  const g = new GeoBuilder();
  const w = new GeoBuilder();
  const N = 420;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + rng.range(-0.004, 0.004);
    const m = mask(a);
    if (m <= 0 || !rng.chance(density)) continue;
    const bw = rng.range(14, 40);
    const bh = rng.range(0.15, 1) * maxH * m * (rng.chance(0.1) ? 1.4 : 1);
    const rr = R - rng.range(0, 60);
    const col = rng.pick(body);
    g.quad(ring(rr, a, -bw / 2, -40), ring(rr, a, bw / 2, -40), ring(rr, a, bw / 2, bh), ring(rr, a, -bw / 2, bh), col);
    if (rng.chance(0.25)) {
      const tw = bw * 0.5;
      g.quad(ring(rr, a, -tw / 2, bh), ring(rr, a, tw / 2, bh), ring(rr, a, tw / 2, bh + bh * 0.2), ring(rr, a, -tw / 2, bh + bh * 0.2), col);
    }
    if (windows.length) {
      for (let y = 6; y < bh - 4; y += 7) for (let x = -bw / 2 + 3; x < bw / 2 - 3; x += 5) {
        if (!rng.chance(lit)) continue;
        const wc = rng.pick(windows);
        w.quad(ring(rr - 1, a, x, y), ring(rr - 1, a, x + 2.6, y), ring(rr - 1, a, x + 2.6, y + 3.4), ring(rr - 1, a, x, y + 3.4), wc);
      }
      if (bh > maxH * 0.6 && rng.chance(0.6)) {
        w.quad(ring(rr - 1, a, -1.5, bh + 1), ring(rr - 1, a, 1.5, bh + 1), ring(rr - 1, a, 1.5, bh + 4), ring(rr - 1, a, -1.5, bh + 4), 0xff2020);
      }
    }
  }
  const grp = new THREE.Group();
  grp.add(new THREE.Mesh(g.build(), basic()));
  if (!w.empty) grp.add(new THREE.Mesh(w.build(), basic()));
  return grp;
}

/** Single-pixel stars (at our low resolution they read as hardware sprites). */
export function stars(rng: Rng, count: number): THREE.Points {
  const pos: number[] = [];
  const col: number[] = [];
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const a = rng.next() * Math.PI * 2;
    const e = rng.range(12, 75) * (Math.PI / 180);
    const R = 2600;
    pos.push(Math.sin(a) * Math.cos(e) * R, Math.sin(e) * R, -Math.cos(a) * Math.cos(e) * R);
    c.setHex(rng.pick([0xffffff, 0xc8d8ff, 0xffe8c0, 0x9ab0ff]));
    col.push(c.r, c.g, c.b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  return new THREE.Points(geo, new THREE.PointsMaterial({ size: 1, sizeAttenuation: false, vertexColors: true, fog: false }));
}

/** A low-poly volcano silhouette with a white cap (Japanese postcard motif). */
export function volcano(R: number, a: number, h: number, w: number, body: number, cap: number): THREE.Mesh {
  const g = new GeoBuilder();
  const p = (u: number, y: number) => ring(R, a, u, y);
  g.poly([p(-w, -40), p(w, -40), p(w * 0.12, h), p(-w * 0.12, h)], body);
  g.poly([p(-w * 0.12, h), p(w * 0.12, h), p(w * 0.32, h * 0.62), p(w * 0.14, h * 0.7), p(0, h * 0.6), p(-w * 0.16, h * 0.68), p(-w * 0.32, h * 0.6)].map(
    (v): V3 => [v[0], v[1], v[2]]).reverse(), cap);
  return new THREE.Mesh(g.build(), basic());
}
