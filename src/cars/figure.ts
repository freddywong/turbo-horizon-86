import * as THREE from 'three';
import { GeoBuilder, V3 } from '../geom';

/**
 * The drivers: helmet, racing suit and the gun-arm used when they lean out to
 * shoot. Built from smooth-ish ellipsoids so they read as people, not boxes.
 */

type ColFn = (nx: number, ny: number, nz: number) => number;

/** Ellipsoid made of lat/long quads, coloured per facet by its direction from the centre. */
export function ellipsoid(g: GeoBuilder, c: V3, r: V3, col: number | ColFn, seg = 10, rings = 7) {
  const f = typeof col === 'number' ? () => col : col;
  const pt = (i: number, j: number): V3 => {
    const th = (j / rings) * Math.PI, ph = (i / seg) * Math.PI * 2;
    return [c[0] + Math.sin(th) * Math.cos(ph) * r[0], c[1] + Math.cos(th) * r[1], c[2] + Math.sin(th) * Math.sin(ph) * r[2]];
  };
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < seg; i++) {
      const th = ((j + 0.5) / rings) * Math.PI, ph = ((i + 0.5) / seg) * Math.PI * 2;
      const n: V3 = [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
      g.quad(pt(i, j), pt(i + 1, j), pt(i + 1, j + 1), pt(i, j + 1), f(n[0], n[1], n[2]));
    }
  }
}

/** How different two colours look (weighted RGB distance, 0-~765). */
function colourGap(a: number, b: number): number {
  const ca = new THREE.Color(a), cb = new THREE.Color(b);
  return Math.hypot((ca.r - cb.r) * 2, (ca.g - cb.g) * 3, (ca.b - cb.b) * 1.5) * 100;
}
const pickFar = (paint: number, from: number[], not: number[] = []) =>
  from.filter((c) => !not.includes(c)).reduce((best, c) => (colourGap(c, paint) > colourGap(best, paint) ? c : best));

/** Driver colours chosen to stand out against the car's paint, so the gunner leaning out is easy to see. */
export function driverColours(paint: number): { suit: number; band: number; shell: number } {
  const suit = pickFar(paint, [0x1a3a9a, 0xf2f2ee, 0x1c1c22, 0xffcc10, 0x18a0b8, 0xff6410, 0x2a9a3a]);
  const band = pickFar(suit, [0xffffff, 0xffcc10, 0xff3030, 0x20e0ff, 0x1c1c22]);
  const shell = pickFar(paint, [0xffffff, 0xffd020, 0x30d8ff, 0xff4aa0, 0x40e040], [suit]);
  return { suit, band, shell };
}

/** Full-face racing helmet: a shell (white unless given), centre stripe, dark visor facing forward (-z). */
export function helmet(g: GeoBuilder, c: V3, r: number, stripe: number, seg = 12, rings = 8, shell = 0xffffff) {
  const shellShade = new THREE.Color(shell).multiplyScalar(0.9).getHex();
  ellipsoid(g, c, [r * 0.92, r, r * 1.04], (nx, ny, nz) => {
    if (nz < -0.42 && ny > -0.3 && ny < 0.38) return ny > 0.2 ? 0x2a3e58 : 0x101a26; // visor with a sky glint on top
    if (nz < -0.5 && ny <= -0.3) return 0xd8d8d4; // chin bar
    if (Math.abs(nx) < 0.2 && ny > -0.1) return stripe; // centre stripe over the crown
    if (ny < -0.55) return 0x1a1a1c; // neck roll
    return ny > 0.3 ? shell : shellShade;
  }, seg, rings);
}

/** Racing-suit torso with a contrasting band across the chest. */
export function torso(g: GeoBuilder, c: V3, r: V3, suit: number, band: number) {
  const dark = new THREE.Color(suit).multiplyScalar(0.7).getHex();
  ellipsoid(g, c, r, (_nx, ny) => (ny > 0.15 && ny < 0.45 ? band : ny < -0.3 ? dark : suit), 10, 6);
}

/**
 * Gun arm, modelled pointing forward (-z) from a shoulder at the origin:
 * upper arm, forearm, glove and a compact sub-machine gun.
 * Returns the muzzle position (local).
 */
export function gunArm(g: GeoBuilder, suit: number, band: number): V3 {
  const dark = new THREE.Color(suit).multiplyScalar(0.8).getHex();
  ellipsoid(g, [0, 0, -0.12], [0.062, 0.062, 0.15], (_nx, ny) => (ny > 0.5 ? band : suit), 8, 5); // upper arm
  ellipsoid(g, [0, -0.012, -0.33], [0.052, 0.052, 0.13], dark, 8, 5); // forearm
  ellipsoid(g, [0, -0.018, -0.465], [0.05, 0.055, 0.05], 0x141416, 8, 5); // glove
  const metal = 0x2a2c30, edge = 0x4a4e56;
  // receiver, top cover, folded stock
  g.box(0, 0.035, -0.56, 0.06, 0.075, 0.26, [metal, edge, metal, metal]);
  g.box(0, 0.077, -0.56, 0.04, 0.01, 0.22, edge);
  g.box(0, 0.02, -0.4, 0.05, 0.03, 0.12, 0x1e1e20);
  // pistol grip under the glove, curved magazine in front of it
  g.with(new THREE.Matrix4().makeTranslation(0, -0.03, -0.47).multiply(new THREE.Matrix4().makeRotationX(0.25)), () => g.box(0, 0, 0, 0.04, 0.1, 0.045, 0x1a1a1c));
  g.with(new THREE.Matrix4().makeTranslation(0, -0.07, -0.6).multiply(new THREE.Matrix4().makeRotationX(-0.18)), () => g.box(0, 0, 0, 0.032, 0.16, 0.05, [0x202024, 0x303034]));
  // perforated barrel shroud and barrel
  g.with(new THREE.Matrix4().makeRotationX(-Math.PI / 2), () => {
    g.prism(0, 0.04, 0.69, 0.8, 0.024, 0.024, 8, [metal, 0x101012], metal);
    g.prism(0, 0.04, 0.8, 0.9, 0.013, 0.013, 6, edge, 0x050505);
  });
  g.box(0, 0.08, -0.66, 0.012, 0.025, 0.012, edge); // front sight
  return [0, 0.04, -0.92];
}
