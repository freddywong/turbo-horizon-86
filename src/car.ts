import * as THREE from 'three';
import { GeoBuilder, V3 } from './geom';

export interface CarMats { lit: THREE.Material; glow: THREE.Material; sign: THREE.Material }

/**
 * The player's fictional wedge-shaped late-80s supercar. Front is -Z.
 * Modelled to read from directly behind: big wing, light clusters,
 * quad exhausts, diffuser, spoked wheels.
 */
export class PlayerCar {
  root = new THREE.Group(); // positioned on the road
  body = new THREE.Group(); // rolls / pitches / bounces
  wheels: THREE.Mesh[] = [];
  private brake: THREE.Mesh;
  private flames: THREE.Mesh;

  constructor(paint: number, stripe: number, mats: CarMats, plateUv: [number, number, number, number]) {
    const g = new GeoBuilder();
    const l = new GeoBuilder(); // always-on lights
    const b = new GeoBuilder(); // brake lights
    const s = new GeoBuilder(); // plate
    const dark = 0x141416, black = 0x0a0a0c, glass = 0x18283c, glassSide = 0x22364c, chrome = 0xc8ccd4;
    const shade = new THREE.Color(paint).multiplyScalar(0.7).getHex();
    const deep = new THREE.Color(paint).multiplyScalar(0.5).getHex();
    const W = 1.0, Wr = 1.07, Wt = 0.92;
    const yb = 0.26, ySk = 0.36;
    const yNose = 0.42, yCowl = 0.7, yTail = 0.84;
    const zF = -2.3, zC = -0.72, zH = 0.6, zR = 2.3;

    // ---- sides: front wedge + wider rear haunch -------------------------------
    for (const sg of [-1, 1]) {
      g.poly([[sg * W, ySk, zF + 0.1], [sg * W, ySk, zH], [sg * W, 0.74, zH], [sg * Wt, yCowl, zC], [sg * W, yNose, zF]], paint);
      g.poly([[sg * W, ySk, zH], [sg * Wr, ySk, zH + 0.3], [sg * Wr, ySk, zR], [sg * Wr, yTail, zR], [sg * Wr, 0.8, zH + 0.3], [sg * W, 0.74, zH]], paint);
      // haunch transition face
      g.tri([sg * W, 0.74, zH], [sg * Wr, 0.8, zH + 0.3], [sg * W, ySk, zH], shade);
      // side skirt in a darker tone
      g.quad([sg * W, yb, zF + 0.2], [sg * W, yb, zH], [sg * W, ySk, zH], [sg * W, ySk, zF + 0.2], deep);
      g.quad([sg * Wr, yb, zH + 0.3], [sg * Wr, yb, zR], [sg * Wr, ySk, zR], [sg * Wr, ySk, zH + 0.3], deep);
      // big side intake ahead of the rear wheel
      g.poly([[sg * (W + 0.005), 0.68, -0.1], [sg * (W + 0.005), 0.7, zH], [sg * (W + 0.005), 0.42, zH], [sg * (W + 0.005), 0.42, 0.25]], black);
      // door shut line + pinstripe
      g.quad([sg * (W + 0.006), 0.4, -0.15], [sg * (W + 0.006), 0.4, -0.12], [sg * (W + 0.006), 0.7, -0.12], [sg * (W + 0.006), 0.7, -0.15], dark);
      g.quad([sg * (W + 0.008), 0.5, zF + 0.3], [sg * (W + 0.008), 0.5, -0.15], [sg * (W + 0.008), 0.55, -0.15], [sg * (W + 0.008), 0.55, zF + 0.3], stripe);
      // mirrors
      g.box(sg * 1.02, 0.86, -0.4, 0.2, 0.13, 0.12, [paint, paint, shade, black]);
    }
    // ---- top surfaces ----------------------------------------------------------
    g.quad([-W, yNose, zF], [W, yNose, zF], [Wt, yCowl, zC], [-Wt, yCowl, zC], paint);
    g.quad([-Wt, yCowl, zC], [Wt, yCowl, zC], [W, 0.74, zH], [-W, 0.74, zH], paint);
    g.quad([-W, 0.74, zH], [W, 0.74, zH], [Wr, yTail, zR], [-Wr, yTail, zR], paint);
    // bonnet vents
    for (const sg of [-1, 1]) g.quad([sg * 0.25, yNose + 0.07, -1.9], [sg * 0.62, yNose + 0.07, -1.9], [sg * 0.6, yNose + 0.16, -1.4], [sg * 0.27, yNose + 0.16, -1.4], dark);
    // engine cover louvres (the camera looks right at these)
    for (let i = 0; i < 6; i++) {
      const z = 1.25 + i * 0.15;
      const y = 0.76 + (z - zH) * 0.05;
      g.quad([-0.7, y + 0.004, z], [0.7, y + 0.004, z], [0.7, y + 0.012, z + 0.07], [-0.7, y + 0.012, z + 0.07], black);
    }
    // nose
    g.quad([-W, yb, zF + 0.1], [W, yb, zF + 0.1], [W, yNose, zF], [-W, yNose, zF], shade);
    // ---- tail ------------------------------------------------------------------
    g.quad([-Wr, yb, zR], [Wr, yb, zR], [Wr, yTail, zR], [-Wr, yTail, zR], shade);
    // black light band across the tail
    g.quad([-Wr + 0.03, 0.52, zR + 0.005], [Wr - 0.03, 0.52, zR + 0.005], [Wr - 0.03, 0.78, zR + 0.005], [-Wr + 0.03, 0.78, zR + 0.005], black);
    for (const sg of [-1, 1]) {
      // two-segment light clusters each side
      l.quad([sg * 1.0, 0.56, zR + 0.01], [sg * 0.62, 0.56, zR + 0.01], [sg * 0.62, 0.74, zR + 0.01], [sg * 1.0, 0.74, zR + 0.01], 0xb01410);
      l.quad([sg * 0.58, 0.56, zR + 0.01], [sg * 0.4, 0.56, zR + 0.01], [sg * 0.4, 0.74, zR + 0.01], [sg * 0.58, 0.74, zR + 0.01], 0xff8a20);
      b.quad([sg * 1.0, 0.56, zR + 0.015], [sg * 0.62, 0.56, zR + 0.015], [sg * 0.62, 0.74, zR + 0.015], [sg * 1.0, 0.74, zR + 0.015], 0xff3828);
      l.quad([sg * 0.94, 0.6, zR + 0.012], [sg * 0.68, 0.6, zR + 0.012], [sg * 0.68, 0.7, zR + 0.012], [sg * 0.94, 0.7, zR + 0.012], 0xff4430);
    }
    // centre brake light in the wing comes on with the others
    // plate recess + plate
    g.quad([-0.34, 0.3, zR + 0.006], [0.34, 0.3, zR + 0.006], [0.34, 0.5, zR + 0.006], [-0.34, 0.5, zR + 0.006], dark);
    s.quad([-0.3, 0.32, zR + 0.012], [0.3, 0.32, zR + 0.012], [0.3, 0.48, zR + 0.012], [-0.3, 0.48, zR + 0.012], 0xffffff, plateUv);
    // diffuser fins
    g.quad([-Wr, yb - 0.08, zR - 0.1], [Wr, yb - 0.08, zR - 0.1], [Wr, yb, zR], [-Wr, yb, zR], black);
    for (let i = -3; i <= 3; i++) g.box(i * 0.22, yb - 0.03, zR - 0.08, 0.03, 0.1, 0.22, dark);
    // quad exhausts
    for (const x of [-0.78, -0.58, 0.58, 0.78]) {
      g.with(new THREE.Matrix4().makeTranslation(x, 0.36, zR - 0.1).multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2)), () => {
        g.prism(0, 0, -0.1, 0.16, 0.075, 0.075, 8, chrome, null);
        g.prism(0, 0, 0.159, 0.16, 0.06, 0.06, 8, black, black);
      });
    }
    // ---- cabin -----------------------------------------------------------------
    const cw0 = 0.86, cw1 = 0.66, yRoof = 1.13;
    const zWs = 0.08, zRf = 0.72, zRw = 1.5, yRw = 0.8;
    g.quad([-cw0, yCowl, zC], [cw0, yCowl, zC], [cw1, yRoof, zWs], [-cw1, yRoof, zWs], glass);
    g.quad([-cw1, yRoof, zWs], [cw1, yRoof, zWs], [cw1, yRoof, zRf], [-cw1, yRoof, zRf], paint);
    g.quad([-cw1, yRoof + 0.001, zRf - 0.05], [cw1, yRoof + 0.001, zRf - 0.05], [cw1, yRoof + 0.001, zRf], [-cw1, yRoof + 0.001, zRf], shade);
    g.quad([-cw1 + 0.08, yRoof - 0.04, zRf + 0.05], [cw1 - 0.08, yRoof - 0.04, zRf + 0.05], [cw0 - 0.12, yRw + 0.03, zRw - 0.05], [-cw0 + 0.12, yRw + 0.03, zRw - 0.05], glass);
    g.quad([-cw1, yRoof, zRf], [cw1, yRoof, zRf], [cw0, yRw, zRw], [-cw0, yRw, zRw], paint);
    for (const sg of [-1, 1]) {
      g.poly([[sg * cw0, yCowl, zC], [sg * cw1, yRoof, zWs], [sg * cw1, yRoof, zRf], [sg * cw0, 0.82, zRf + 0.3]], glassSide);
      // flying buttress down to the haunch
      g.poly([[sg * cw1, yRoof, zRf], [sg * cw0, yRw, zRw], [sg * (Wr - 0.02), yTail - 0.01, zRw + 0.2], [sg * (cw0 + 0.08), 0.8, zRf + 0.3]], paint);
    }
    // ---- rear wing -----------------------------------------------------------
    for (const sg of [-1, 1]) g.box(sg * 0.6, yTail + 0.17, 2.06, 0.08, 0.34, 0.18, dark);
    g.box(0, yTail + 0.36, 2.1, 2.1, 0.06, 0.46, [paint, paint, shade, shade]);
    g.box(0, yTail + 0.31, 2.31, 2.1, 0.05, 0.05, deep);
    for (const sg of [-1, 1]) g.poly([[sg * 1.06, yTail + 0.2, 1.85], [sg * 1.06, yTail + 0.2, 2.35], [sg * 1.06, yTail + 0.45, 2.35], [sg * 1.06, yTail + 0.45, 1.95]], black);
    b.quad([-0.22, yTail + 0.395, 2.335], [0.22, yTail + 0.395, 2.335], [0.22, yTail + 0.43, 2.335], [-0.22, yTail + 0.43, 2.335], 0xff3828);

    this.body.add(new THREE.Mesh(g.build(), mats.lit), new THREE.Mesh(l.build(), mats.glow), new THREE.Mesh(s.build(), mats.sign));
    this.brake = new THREE.Mesh(b.build(), mats.glow);
    this.body.add(this.brake);

    // backfire flames from the pipes
    const f = new GeoBuilder();
    for (const x of [-0.68, 0.68]) {
      f.prism(x, 0, 0, 0.7, 0.16, 0, 6, [0xffd040, 0xff7020], null);
      f.prism(x, 0, 0, 0.42, 0.09, 0, 6, 0xfff8c0, null);
    }
    const fg = f.build();
    fg.rotateX(Math.PI / 2);
    this.flames = new THREE.Mesh(fg, mats.glow);
    this.flames.position.set(0, 0.36, zR + 0.05);
    this.flames.visible = false;
    this.body.add(this.flames);

    // shadow: a flat dark octagon, like a sprite shadow
    const sh = new GeoBuilder();
    const pts: V3[] = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      pts.push([Math.cos(a) * 1.3, 0.03, Math.sin(a) * 2.7]);
    }
    sh.poly(pts, 0x101014);
    this.root.add(new THREE.Mesh(sh.build(), new THREE.MeshBasicMaterial({ color: 0x0c0c10, side: THREE.DoubleSide })));

    // wheels: 10-sided tyres with five-spoke rims
    const mk = (r: number, hw: number, outward: number) => {
      const wg = new GeoBuilder();
      const n = 10;
      const p = (a: number, x: number, rr = r): V3 => [x, Math.cos(a) * rr, Math.sin(a) * rr];
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
        wg.quad(p(a0, -hw), p(a1, -hw), p(a1, hw), p(a0, hw), i % 2 ? 0x1a1a1a : 0x242424);
        // sidewall ring
        wg.quad(p(a0, outward * hw), p(a1, outward * hw), p(a1, outward * hw, r * 0.68), p(a0, outward * hw, r * 0.68), 0x202020);
        wg.tri([-outward * hw, 0, 0], p(a0, -outward * hw), p(a1, -outward * hw), 0x161616);
        // rim face: light, with dark gaps between five spokes
        const spoke = i % 2 === 0;
        wg.tri([outward * (hw + 0.005), 0, 0], p(a0, outward * (hw + 0.005), r * 0.68), p(a1, outward * (hw + 0.005), r * 0.68), spoke ? 0xd0d4dc : 0x3a3c44);
      }
      wg.prism(0, 0, 0, 0.001, 0.08, 0.08, 6, 0xf0f0f0, 0xf0f0f0);
      return wg.build();
    };
    const wl = mk(0.38, 0.19, -1), wr = mk(0.38, 0.19, 1);
    const wlr = mk(0.4, 0.22, -1), wrr = mk(0.4, 0.22, 1);
    for (const [geo, x, z] of [[wl, -0.86, -1.42], [wr, 0.86, -1.42], [wlr, -0.9, 1.45], [wrr, 0.9, 1.45]] as [THREE.BufferGeometry, number, number][]) {
      const w = new THREE.Mesh(geo, mats.lit);
      w.position.set(x, z < 0 ? 0.38 : 0.4, z);
      this.wheels.push(w);
      this.root.add(w);
    }
    this.root.add(this.body);
  }

  /** Visual pose only; physics lives in the game. */
  pose(steer: number, yaw: number, spin: number, bounce: number, pitch: number, braking = false, flame = 0) {
    this.root.rotation.set(0, yaw, 0);
    this.body.rotation.set(pitch, 0, -steer * 0.05);
    this.body.position.y = bounce;
    this.brake.visible = braking;
    this.flames.visible = flame > 0;
    if (flame > 0) this.flames.scale.set(1, 1, 0.6 + Math.random() * 0.8);
    this.wheels.forEach((w, i) => {
      w.rotation.set(spin, i < 2 ? -steer * 0.35 : 0, 0, 'YXZ');
    });
  }
}
