import * as THREE from 'three';
import { GeoBuilder, V3 } from './geom';

/**
 * The player's fictional wedge-shaped 80s supercar (~200 triangles).
 * Front is -Z. Built so it reads well from directly behind.
 */
export class PlayerCar {
  root = new THREE.Group(); // positioned on the road
  body = new THREE.Group(); // rolls / pitches / bounces
  wheels: THREE.Mesh[] = [];

  constructor(paint: number, stripe: number, mats: { lit: THREE.Material; glow: THREE.Material }) {
    const g = new GeoBuilder();
    const l = new GeoBuilder();
    const dark = 0x161618, glass = 0x1a2a3e, glassSide = 0x22344a;
    const shade = new THREE.Color(paint).multiplyScalar(0.72).getHex();
    const W = 1.0, Wt = 0.94;
    const yb = 0.24;
    const yNose = 0.44, yCowl = 0.7, yTail = 0.82;
    const zF = -2.25, zC = -0.7, zR = 2.25;
    // side panels
    for (const s of [-1, 1]) {
      g.poly([[s * W, yb, zF], [s * W, yb, zR], [s * W, yTail, zR], [s * Wt, yCowl, zC], [s * W, yNose, zF]], paint);
      g.quad([s * (W + 0.01), yb, zF + 0.2], [s * (W + 0.01), yb, zR - 0.1], [s * (W + 0.01), yb + 0.12, zR - 0.1], [s * (W + 0.01), yb + 0.12, zF + 0.2], dark);
      // side intake wedge
      g.tri([s * (W + 0.01), 0.66, 0.2], [s * (W + 0.01), 0.66, 1.55], [s * (W + 0.01), 0.36, 1.55], dark);
      // pinstripe
      g.quad([s * (W + 0.012), 0.5, zF + 0.3], [s * (W + 0.012), 0.5, zR - 0.05], [s * (W + 0.012), 0.56, zR - 0.05], [s * (W + 0.012), 0.56, zF + 0.3], stripe);
    }
    // hood + deck
    g.quad([-W, yNose, zF], [W, yNose, zF], [Wt, yCowl, zC], [-Wt, yCowl, zC], paint);
    g.quad([-Wt, yCowl, zC], [Wt, yCowl, zC], [W, yTail, zR], [-W, yTail, zR], paint);
    // engine cover louvres
    for (let i = 0; i < 4; i++) {
      const z = 1.55 + i * 0.16;
      g.quad([-0.6, yTail - 0.005 + i * 0.002, z], [0.6, yTail - 0.005 + i * 0.002, z], [0.6, yTail + 0.003, z + 0.07], [-0.6, yTail + 0.003, z + 0.07], dark);
    }
    // nose
    g.quad([-W, yb, zF], [W, yb, zF], [W, yNose, zF], [-W, yNose, zF], shade);
    // tail panel
    g.quad([-W, yb, zR], [W, yb, zR], [W, yTail, zR], [-W, yTail, zR], shade);
    g.quad([-0.9, 0.28, zR + 0.01], [0.9, 0.28, zR + 0.01], [0.9, 0.5, zR + 0.01], [-0.9, 0.5, zR + 0.01], dark);
    g.quad([-0.26, 0.32, zR + 0.02], [0.26, 0.32, zR + 0.02], [0.26, 0.46, zR + 0.02], [-0.26, 0.46, zR + 0.02], 0xf2e8a0);
    g.box(-0.55, 0.22, zR - 0.05, 0.12, 0.08, 0.2, 0x8a8a8a);
    g.box(-0.35, 0.22, zR - 0.05, 0.12, 0.08, 0.2, 0x8a8a8a);
    l.quad([-0.96, 0.56, zR + 0.015], [0.96, 0.56, zR + 0.015], [0.96, 0.72, zR + 0.015], [-0.96, 0.72, zR + 0.015], 0xff2418);
    l.quad([-0.3, 0.6, zR + 0.02], [0.3, 0.6, zR + 0.02], [0.3, 0.68, zR + 0.02], [-0.3, 0.68, zR + 0.02], 0xff9a40);
    // cabin
    const cw0 = 0.86, cw1 = 0.68, yRoof = 1.14;
    const zWs = 0.1, zRf = 0.75, zRw = 1.45, yRw = 0.79;
    g.quad([-cw0, yCowl, zC], [cw0, yCowl, zC], [cw1, yRoof, zWs], [-cw1, yRoof, zWs], glass);
    g.quad([-cw1, yRoof, zWs], [cw1, yRoof, zWs], [cw1, yRoof, zRf], [-cw1, yRoof, zRf], paint);
    g.quad([-cw1, yRoof, zRf], [cw1, yRoof, zRf], [cw0, yRw, zRw], [-cw0, yRw, zRw], glass);
    for (const s of [-1, 1]) {
      g.poly([[s * cw0, yCowl, zC], [s * cw1, yRoof, zWs], [s * cw1, yRoof, zRf], [s * cw0, yRw, zRw]], glassSide);
      // body-coloured B-pillar buttress
      g.tri([s * cw1, yRoof, zRf], [s * cw0, yRw, zRw], [s * (cw0 + 0.08), yRw - 0.02, zRw + 0.35], paint);
    }
    // rear wing on struts
    for (const s of [-1, 1]) g.box(s * 0.62, yTail + 0.13, 2.05, 0.1, 0.26, 0.14, dark);
    g.box(0, yTail + 0.29, 2.08, 2.04, 0.07, 0.42, [paint, paint, shade, shade]);
    for (const s of [-1, 1]) g.box(s * 1.02, yTail + 0.24, 2.08, 0.05, 0.2, 0.46, dark);
    // mirrors
    for (const s of [-1, 1]) g.box(s * 0.98, 0.86, -0.35, 0.18, 0.12, 0.12, paint);

    const bodyMesh = new THREE.Mesh(g.build(), mats.lit);
    const lightMesh = new THREE.Mesh(l.build(), mats.glow);
    this.body.add(bodyMesh, lightMesh);

    // shadow: a flat dark octagon, like a sprite shadow
    const sh = new GeoBuilder();
    const pts: V3[] = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      pts.push([Math.cos(a) * 1.25, 0.03, Math.sin(a) * 2.6]);
    }
    sh.poly(pts, 0x101014);
    const shadow = new THREE.Mesh(sh.build(), new THREE.MeshBasicMaterial({ color: 0x0c0c10, side: THREE.DoubleSide }));
    this.root.add(shadow);

    // wheels: octagonal drums with a light hub
    const wg = new GeoBuilder();
    const n = 8, r = 0.37, hw = 0.17;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
      const p = (a: number, x: number, rr = r): V3 => [x, Math.cos(a) * rr, Math.sin(a) * rr];
      wg.quad(p(a0, -hw), p(a1, -hw), p(a1, hw), p(a0, hw), i % 2 ? 0x1c1c1c : 0x262626);
      wg.tri([hw, 0, 0], p(a0, hw), p(a1, hw), i % 2 ? 0x9a9aa0 : 0xc8c8d0);
      wg.tri([-hw, 0, 0], p(a0, -hw), p(a1, -hw), i % 2 ? 0x9a9aa0 : 0xc8c8d0);
    }
    const wgeo = wg.build();
    for (const [x, z] of [[-0.86, -1.38], [0.86, -1.38], [-0.88, 1.42], [0.88, 1.42]]) {
      const w = new THREE.Mesh(wgeo, mats.lit);
      w.position.set(x, r, z);
      this.wheels.push(w);
      this.root.add(w);
    }
    this.root.add(this.body);
  }

  /** Visual pose only; physics lives in the game. */
  pose(steer: number, yaw: number, spin: number, bounce: number, pitch: number) {
    this.root.rotation.set(0, yaw, 0);
    this.body.rotation.set(pitch, 0, -steer * 0.05);
    this.body.position.y = bounce;
    this.wheels.forEach((w, i) => {
      w.rotation.set(spin, i < 2 ? -steer * 0.35 : 0, 0, 'YXZ');
    });
  }
}
