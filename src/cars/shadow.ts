import * as THREE from 'three';
import { GeoBuilder } from '../geom';
import { CarSpec } from './spec';

/**
 * Soft "blob" contact shadow for the '92 look: a blurred rounded rectangle,
 * darkest under the floor and the four tyres, fading out past the sills. It is
 * drawn as transparent black, so it darkens whatever road surface is beneath
 * instead of painting a fixed-colour slab.
 */
let tex: THREE.Texture | null = null;

function shadowTexture(): THREE.Texture {
  if (tex) return tex;
  const W = 64, H = 128;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const g = cv.getContext('2d')!;
  const img = g.createImageData(W, H);
  const smooth = (e0: number, e1: number, x: number) => {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  };
  // half extents of the rounded rectangle in uv units (0..1 across the quad)
  const hx = 0.36, hy = 0.4, rad = 0.12;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const u = (x + 0.5) / W - 0.5, v = (y + 0.5) / H - 0.5;
      // signed distance to the rounded rectangle (in uv units)
      const qx = Math.abs(u) - (hx - rad), qy = Math.abs(v) - (hy - rad);
      const d = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - rad;
      let a = 0.55 * (1 - smooth(-0.08, 0.13, d));
      // contact patches under the tyres
      for (const ty of [-0.28, 0.28]) {
        for (const tx of [-0.3, 0.3]) {
          const r = Math.hypot((u - tx) / 0.09, (v - ty) / 0.12);
          a = Math.max(a, 0.9 * (1 - smooth(0.4, 1.2, r)));
        }
      }
      const i = (y * W + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 0;
      img.data[i + 3] = Math.round(255 * Math.min(1, a));
    }
  }
  g.putImageData(img, 0, 0);
  tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

const mats = new Map<number, THREE.Material>();

/** Shared shadow material; strength is the overall darkness (deeper at night). */
export function shadowMaterial(strength: number): THREE.Material {
  const hit = mats.get(strength);
  if (hit) return hit;
  const m = new THREE.MeshBasicMaterial({
    color: 0x000000, map: shadowTexture(), transparent: true, side: THREE.DoubleSide, opacity: strength, depthWrite: false,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  mats.set(strength, m);
  return m;
}

/** Flat quad just above the road covering the car's footprint plus the fade margin. */
export function shadowGeo(spec: CarSpec): THREE.BufferGeometry {
  const st = spec.stations;
  const z0 = st[0].z, z1 = st[st.length - 1].z;
  const len = z1 - z0, wid = Math.max(...st.map((s) => s.w)) * 2;
  // the texture's solid core spans 72% x 80% of the quad: size it so the core matches the body
  const hw = (wid * 1.0) / 0.72 / 2, hl = (len * 0.98) / 0.8 / 2, zc = (z0 + z1) / 2;
  const g = new GeoBuilder();
  g.quad([-hw, 0.025, zc - hl], [hw, 0.025, zc - hl], [hw, 0.025, zc + hl], [-hw, 0.025, zc + hl], 0xffffff, [0, 0, 1, 1]);
  return g.build();
}
