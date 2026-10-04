import * as THREE from 'three';
import { GeoBuilder, V3 } from './geom';
import { GFX } from './gfx';
import { PropDef, PropPart, UV } from './props';
import { Rng } from './rng';
import { FACADE, tileOffset } from './textures';
import { ROAD_HALF, SEG } from './track';

/**
 * Scenery for the desert, alpine, Las Vegas and Riviera routes. Same rules as
 * props.ts: a handful of polygons each, -Z down the road, +X to the right.
 */

const parts = (lit: GeoBuilder, glow?: GeoBuilder, sign?: GeoBuilder): PropPart[] => {
  const out: PropPart[] = [{ geo: lit.build(), mat: 'lit' }];
  if (glow && !glow.empty) out.push({ geo: glow.build(), mat: 'glow' });
  if (sign && !sign.empty) out.push({ geo: sign.build(), mat: 'sign' });
  return out;
};
const shade = (c: number, k: number) => new THREE.Color(c).multiplyScalar(k).getHex();

// ---------------------------------------------------------------- desert ----

/** Saguaro cactus: ribbed trunk and two upturned arms. */
export function cactus(): PropDef {
  const g = new GeoBuilder();
  const ribs = [0x3e8c3a, 0x2e6e2c];
  g.prism(0, 0, 0, 6.2, 0.5, 0.42, 8, ribs, 0x5aa04a);
  // arms: a short stub out, then up
  for (const [s, y, h] of [[1, 2.6, 2.4], [-1, 3.4, 1.8]] as const) {
    g.box(s * 0.75, y, 0, 1.1, 0.6, 0.6, ribs[0]);
    g.prism(s * 1.15, 0, y - 0.2, y + h, 0.34, 0.3, 7, ribs, 0x5aa04a);
  }
  return { parts: parts(g), radius: 0.7, max: 220 };
}

/** Joshua tree: shaggy branching trunk with spiky green tufts. */
export function joshuaTree(): PropDef {
  const g = new GeoBuilder();
  const bark = [0x7a6a52, 0x5e5040];
  g.prism(0, 0, 0, 2.6, 0.38, 0.3, 6, bark);
  const tips: V3[] = [[-1.6, 4.4, 0.3], [1.4, 4.8, -0.4], [0.2, 5.4, 0.9], [-0.4, 4.0, -1.3]];
  for (const t of tips) {
    const n = 5;
    for (let i = 0; i < n; i++) {
      const a = i / n, b = (i + 1) / n;
      const p = (k: number): V3 => [t[0] * k, 2.6 + (t[1] - 2.6) * k, t[2] * k];
      const pa = p(a), pb = p(b);
      g.quad([pa[0] - 0.18, pa[1], pa[2]], [pa[0] + 0.18, pa[1], pa[2]], [pb[0] + 0.15, pb[1], pb[2]], [pb[0] - 0.15, pb[1], pb[2]], bark[i % 2]);
    }
    // spiky leaf ball
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      g.tri([t[0], t[1] - 0.2, t[2]], [t[0] + Math.cos(a) * 0.25, t[1], t[2] + Math.sin(a) * 0.25], [t[0] + Math.cos(a) * 0.9, t[1] + 0.5, t[2] + Math.sin(a) * 0.9], k % 2 ? 0x4a7a3a : 0x6a9a4a);
    }
  }
  return { parts: parts(g), radius: 0.6, max: 160 };
}

/** Red sandstone butte with layered strata (for well off the road). */
export function butte(rng: Rng): PropDef {
  const g = new GeoBuilder();
  const bands = [0xc0603a, 0xd8784a, 0xb05434, 0xe0905c, 0xa84c30];
  const n = 9, h = rng.range(26, 46), r0 = rng.range(26, 40), r1 = r0 * rng.range(0.55, 0.75);
  const layers = 5;
  for (let k = 0; k < layers; k++) {
    const y0 = (h * k) / layers, y1 = (h * (k + 1)) / layers;
    const ra = r0 + (r1 - r0) * (k / layers), rb = r0 + (r1 - r0) * ((k + 1) / layers);
    g.prism(0, 0, y0, y1, ra, rb, n, [bands[k], shade(bands[k], 0.82)], k === layers - 1 ? 0xd88a58 : null, 0.3);
  }
  // talus slope at the foot
  g.prism(0, 0, -2, 4, r0 * 1.35, r0, n, [0xc87c50, 0xb06a44], null, 0.3);
  return { parts: parts(g), radius: 0, max: 30 };
}

/** Natural rock arch spanning the road. */
export function rockArch(): PropDef {
  const g = new GeoBuilder();
  const X = ROAD_HALF + 5, H = 18, T = 4;
  const cols = [0xc86a40, 0xb05a36, 0xd8804e];
  for (const s of [-1, 1]) g.box(s * (X + 3), H / 2 - 2, 0, 7, H + 4, 9, [cols[0], cols[2]]);
  const n = 10;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI, a1 = ((i + 1) / n) * Math.PI;
    const p = (a: number, r: number, z: number): V3 => [-Math.cos(a) * r, H - 4 + Math.sin(a) * (r * 0.45), z];
    for (const z of [-4, 4]) g.quad(p(a0, X, z), p(a1, X, z), p(a1, X + T, z), p(a0, X + T, z), cols[i % 2]);
    g.quad(p(a0, X, -4), p(a1, X, -4), p(a1, X, 4), p(a0, X, 4), 0x8a4428); // underside
    g.quad(p(a0, X + T, -4), p(a1, X + T, -4), p(a1, X + T, 4), p(a0, X + T, 4), cols[2]);
  }
  return { parts: parts(g), radius: 0, max: 4 };
}

/** Concrete intake tower standing in the reservoir by the dam. */
export function intakeTower(): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  g.prism(0, 0, -30, 26, 6, 5, 12, [0xe8e0d0, 0xd0c8b8]);
  g.prism(0, 0, 26, 32, 6.6, 6.6, 12, [0xd8d0c0, 0xc0b8a8], 0xb8b0a0);
  g.prism(0, 0, 32, 36, 3, 0.4, 12, [0xc0b8a8, 0xa8a090]);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    l.box(Math.cos(a) * 5.4, 28, Math.sin(a) * 5.4, 0.8, 1.6, 0.8, 0xffe8a0);
  }
  return { parts: parts(g, l), radius: 0, max: 6 };
}

// ------------------------------------------------------------------ alps ----

/** Snow-laden pine: dark cones with white snow on each tier. */
export function snowPine(): PropDef {
  const g = new GeoBuilder();
  g.prism(0, 0, 0, 1.4, 0.3, 0.25, 5, 0x5a3e26);
  const tiers: [number, number, number][] = [[1, 4.6, 2.6], [3.2, 7, 2.0], [5.4, 9.4, 1.4]];
  for (const [y0, y1, r] of tiers) {
    g.prism(0, 0, y0, y1, r, 0, 8, [0x1e5a36, 0x174a2c]);
    // snow lying on the upper part of each cone
    const ys = y0 + (y1 - y0) * 0.45;
    g.prism(0, 0, ys, y1 + 0.05, r * 0.58, 0, 8, [0xffffff, 0xe0e8f4]);
  }
  return { parts: parts(g), radius: 1.0, max: 300 };
}

/** Swiss chalet: white masonry ground floor, timber upper floor, steep snowy roof, balcony. */
export function chalet(rng: Rng): PropDef {
  const g = new GeoBuilder();
  const w = rng.range(10, 13), d = 9, h1 = 3.4, h2 = 3.2;
  const wood = rng.pick([0x8a5432, 0x7a4a2c, 0x9a6038]);
  g.box(0, h1 / 2, 0, w, h1, d, [0xf4f0e8, 0xffffff]);
  g.box(0, h1 + h2 / 2, 0, w, h2, d, [wood, shade(wood, 1.15)]);
  // windows with red shutters
  for (let x = -w / 2 + 1.6; x < w / 2 - 1; x += 2.6) {
    for (const [y, c] of [[1.8, 0x3a4a5a], [h1 + 1.6, 0x3a4a5a]] as const) {
      g.box(x, y, d / 2 + 0.02, 1, 1.1, 0.06, c);
      g.box(x - 0.75, y, d / 2 + 0.04, 0.4, 1.1, 0.06, 0xc02a2a);
      g.box(x + 0.75, y, d / 2 + 0.04, 0.4, 1.1, 0.06, 0xc02a2a);
    }
  }
  // balcony
  g.box(0, h1 + 0.2, d / 2 + 0.8, w * 0.8, 0.2, 1.6, wood);
  for (let x = -w * 0.4; x <= w * 0.4; x += 0.6) g.box(x, h1 + 0.75, d / 2 + 1.55, 0.12, 1, 0.12, shade(wood, 0.8));
  g.box(0, h1 + 1.25, d / 2 + 1.55, w * 0.8, 0.12, 0.12, shade(wood, 0.8));
  // roof: two steep planes with overhang, snow on top
  const top = h1 + h2, ridge = top + 3.6, o = 1.2;
  for (const s of [-1, 1]) {
    g.quad([s * (w / 2 + o), top - 0.4, -d / 2 - o], [s * (w / 2 + o), top - 0.4, d / 2 + o], [0, ridge, d / 2 + o], [0, ridge, -d / 2 - o], shade(wood, 0.7));
    g.quad([s * (w / 2 + o - 0.1), top - 0.15, -d / 2 - o], [s * (w / 2 + o - 0.1), top - 0.15, d / 2 + o], [0, ridge + 0.25, d / 2 + o], [0, ridge + 0.25, -d / 2 - o], 0xf8fbff);
  }
  for (const z of [-d / 2, d / 2]) g.tri([-w / 2, top, z], [w / 2, top, z], [0, ridge, z], [wood, wood][0]);
  g.box(w * 0.25, ridge, 0, 0.9, 2.4, 0.9, 0xd8d0c8); // chimney
  return { parts: parts(g), radius: 0, max: 30 };
}

/** Bank of ploughed snow, one segment long. */
export function snowBank(): PropDef {
  const g = new GeoBuilder();
  g.quad([-1.2, 0, 0], [1.4, 0, 0], [0.6, 1.1, 0], [-0.8, 0.9, 0], 0xffffff);
  g.quad([-0.8, 0.9, 0], [0.6, 1.1, 0], [0.6, 1.1, -SEG], [-0.8, 0.9, -SEG], 0xf4f8ff);
  g.quad([1.4, 0, 0], [0.6, 1.1, 0], [0.6, 1.1, -SEG], [1.4, 0, -SEG], 0xdce6f4);
  g.quad([-1.2, 0, 0], [-0.8, 0.9, 0], [-0.8, 0.9, -SEG], [-1.2, 0, -SEG], 0xe8eef8);
  return { parts: parts(g), radius: 0, max: 400 };
}

/** Red cable-car gondola hanging from its cable, high over the valley. */
export function gondola(): PropDef {
  const g = new GeoBuilder();
  g.box(0, 0, 0, 3.2, 2.6, 2.4, [0xd02a2a, 0xe03a3a]);
  g.box(0, 0.3, 1.21, 2.8, 1.2, 0.02, 0x8ab8d8);
  g.box(0, 0.3, -1.21, 2.8, 1.2, 0.02, 0x8ab8d8);
  g.box(0, 2.6, 0, 0.2, 2.6, 0.2, 0x3a3a3a);
  g.box(0, 3.9, 0, 300, 0.12, 0.12, 0x2a2a2a);
  return { parts: parts(g), radius: 0, max: 6 };
}

// ----------------------------------------------------------------- vegas ----

/** Casino hotel tower: lit window walls, gold bands, neon crown and a big sign on top. */
export function casinoTower(rng: Rng, uv: UV, neon: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const s = new GeoBuilder();
  const f = new GeoBuilder();
  const w = rng.range(26, 40), d = rng.range(16, 22), h = rng.range(60, 110);
  if (GFX.modern) {
    f.facadeBox(0, h / 2, 0, w, h, d, tileOffset(rng.pick([FACADE.OFFICE_WARM, FACADE.APARTMENT, FACADE.OFFICE_COOL])), 14, 14, [0xffffff, 0xd8c8a8], 0x3a3040, rng.range(0, 1));
  } else {
    g.box(0, h / 2, 0, w, h, d, [0x3a2e40, 0x4a3e50]);
    for (let y = 6; y < h - 4; y += 6) for (let x = -w / 2 + 2; x < w / 2 - 2; x += 3) if (rng.chance(0.55)) l.box(x, y, d / 2 + 0.05, 1.6, 2, 0.05, rng.pick([0xffe8a0, 0xfff6d8, 0xffd070]));
  }
  // gold bands and a podium
  for (const y of [h * 0.33, h * 0.66, h]) l.box(0, y, 0, w + 0.4, 0.9, d + 0.4, 0xffc84a);
  g.box(0, 5, 0, w + 14, 10, d + 10, [0x2a2030, 0x3a2e40]);
  l.box(0, 10.4, 0, w + 14.4, 0.8, d + 10.4, neon);
  // crown: neon outline + sign
  l.box(0, h + 2, 0, w * 0.7, 0.6, d * 0.7, neon);
  g.box(0, h + 7, d * 0.25, w * 0.8, 9, 0.6, 0x10101c);
  s.quad([-w * 0.38, h + 3, d * 0.25 + 0.32], [w * 0.38, h + 3, d * 0.25 + 0.32], [w * 0.38, h + 11, d * 0.25 + 0.32], [-w * 0.38, h + 11, d * 0.25 + 0.32], 0xffffff, uv);
  l.box(0, h + 11.4, d * 0.25, w * 0.8, 0.5, 0.7, neon);
  const out = parts(g, l, s);
  if (!f.empty) out.push({ geo: f.build(), mat: 'facadeLit' });
  return { parts: out, radius: 0, max: 40 };
}

/**
 * Roadside casino pylon: tall pole, big lit sign board ringed with bulbs,
 * and a neon arrow pointing at the door.
 */
export function neonPylon(uv: UV, frame: number, arrow: number, h: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const s = new GeoBuilder();
  g.box(0, h / 2, -0.4, 1.4, h, 1.4, 0x202030);
  g.box(0, h + 5, -0.3, 12.6, 10.6, 0.6, 0x10101c);
  s.quad([-6, h, 0.05], [6, h, 0.05], [6, h + 10, 0.05], [-6, h + 10, 0.05], 0xffffff, uv);
  // chasing bulbs round the board
  for (let i = 0; i <= 12; i++) {
    const x = -6.3 + i * 1.05;
    l.box(x, h - 0.3, 0.1, 0.35, 0.35, 0.35, i % 2 ? 0xffffff : 0xffe060);
    l.box(x, h + 10.3, 0.1, 0.35, 0.35, 0.35, i % 2 ? 0xffe060 : 0xffffff);
  }
  for (let i = 0; i <= 10; i++) for (const x of [-6.3, 6.3]) l.box(x, h + i, 0.1, 0.35, 0.35, 0.35, i % 2 ? 0xffffff : 0xffe060);
  // arrow: a bar and head pointing towards the road
  l.box(0, h - 3, 0.1, 9, 1.2, 0.3, arrow);
  l.poly([[4.4, h - 1.4, 0.1], [7.4, h - 3, 0.1], [4.4, h - 4.6, 0.1]], arrow);
  l.box(0, h + 10.9, 0, 12.8, 0.4, 0.8, frame);
  return { parts: parts(g, l, s), radius: 0.9, max: 40 };
}

/** Low casino front with a lit canopy and bulb-studded entrance. */
export function casinoFront(rng: Rng, neon: number): PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const w = rng.range(30, 46), h = rng.range(10, 16), d = 18;
  g.box(0, h / 2, 0, w, h, d, [0x2a2236, 0x3a3046]);
  l.box(0, h * 0.55, d / 2 + 0.05, w - 2, h * 0.3, 0.1, rng.pick([0xff3a8a, 0x40f0ff, 0xffd040, 0xff7030]));
  l.box(0, h + 0.3, 0, w + 0.4, 0.6, d + 0.4, neon);
  // entrance canopy with rows of bulbs
  g.box(0, 4, d / 2 + 4, 16, 0.6, 8, 0xffffff);
  for (let i = 0; i < 16; i++) l.box(-7.5 + i, 3.6, d / 2 + 8, 0.3, 0.3, 0.3, i % 2 ? 0xffe060 : 0xffffff);
  return { parts: parts(g, l), radius: 0, max: 40 };
}

// ---------------------------------------------------------------- riviera ----

/** Pastel villa with a terracotta roof, green shutters and a balcony. */
export function villa(rng: Rng): PropDef {
  const g = new GeoBuilder();
  const w = rng.range(10, 16), d = rng.range(8, 11), floors = rng.int(2, 4), fh = 3.2;
  const h = floors * fh;
  g.box(0, h / 2, 0, w, h, d, [0xffffff, 0xf4f0ea]); // tinted per instance
  for (let f = 0; f < floors; f++) {
    for (let x = -w / 2 + 1.6; x < w / 2 - 1; x += 2.8) {
      const y = f * fh + 1.7;
      g.box(x, y, d / 2 + 0.03, 1.1, 1.6, 0.06, 0x2a3a4a);
      g.box(x - 0.8, y, d / 2 + 0.06, 0.45, 1.6, 0.06, 0x2a7a4a);
      g.box(x + 0.8, y, d / 2 + 0.06, 0.45, 1.6, 0.06, 0x2a7a4a);
    }
    if (f > 0) g.box(0, f * fh + 0.2, d / 2 + 0.6, w * 0.5, 0.18, 1.2, 0xf0e8dc);
  }
  // hipped terracotta roof
  const r = 0x3c2e2c, ridge = h + 2.4, o = 0.6;
  const roof = [0xc85a36, 0xb04e30];
  g.quad([-w / 2 - o, h, d / 2 + o], [w / 2 + o, h, d / 2 + o], [w * 0.25, ridge, 0], [-w * 0.25, ridge, 0], roof[0]);
  g.quad([w / 2 + o, h, -d / 2 - o], [-w / 2 - o, h, -d / 2 - o], [-w * 0.25, ridge, 0], [w * 0.25, ridge, 0], roof[1]);
  g.tri([w / 2 + o, h, d / 2 + o], [w / 2 + o, h, -d / 2 - o], [w * 0.25, ridge, 0], roof[1]);
  g.tri([-w / 2 - o, h, -d / 2 - o], [-w / 2 - o, h, d / 2 + o], [-w * 0.25, ridge, 0], roof[0]);
  void r;
  return { parts: [{ geo: g.build(), mat: 'lit', tint: true }], radius: 0, max: 60 };
}

/** Italian cypress: a tall dark spindle. */
export function cypress(): PropDef {
  const g = new GeoBuilder();
  g.prism(0, 0, 0, 1, 0.25, 0.2, 5, 0x5a3e26);
  g.prism(0, 0, 0.6, 5, 0.6, 1.1, 8, [0x24502c, 0x1c4024]);
  g.prism(0, 0, 5, 10.5, 1.1, 0, 8, [0x2a5a32, 0x1e4628]);
  return { parts: parts(g), radius: 0.8, max: 260 };
}

/** Motor yacht moored in the harbour (sits on the sea at absolute height 0). */
export function yacht(rng: Rng): PropDef {
  const g = new GeoBuilder();
  const L = rng.range(18, 34), W = L * 0.24;
  // hull: pointed bow
  const hull: V3[] = [[-W / 2, 0, L / 2], [W / 2, 0, L / 2], [W / 2, 0, -L * 0.25], [0, 0, -L / 2], [-W / 2, 0, -L * 0.25]];
  const deck = hull.map(([x, , z]): V3 => [x * 1.08, 2.4, z]);
  for (let i = 0; i < hull.length; i++) {
    const j = (i + 1) % hull.length;
    g.quad(hull[i], hull[j], deck[j], deck[i], i === 3 || i === 2 ? 0xf4f4f4 : 0xffffff);
  }
  g.poly(deck, 0xd8b088);
  g.box(0, 3.6, L * 0.08, W * 0.75, 2.4, L * 0.45, [0xffffff, 0xf0f0f0]);
  g.box(0, 3.6, L * 0.08, W * 0.77, 0.8, L * 0.42, 0x1a2a3a);
  g.box(0, 5.4, L * 0.12, W * 0.55, 1.4, L * 0.25, [0xffffff, 0xf0f0f0]);
  g.box(0, 0.6, 0, W * 1.1, 0.4, L * 0.9, 0x1a3a7a);
  g.box(0, 7.4, L * 0.1, 0.25, 3, 0.25, 0xd0d0d0);
  return { parts: parts(g), radius: 0, max: 40 };
}

/** Dressed-stone wall, one segment long. */
export function stoneWall(): PropDef {
  const g = new GeoBuilder();
  g.box(0, 0.75, -SEG / 2, 0.8, 1.5, SEG, [0xd8c8a8, 0xe4d6b8]);
  g.box(0, 1.6, -SEG / 2, 1.0, 0.2, SEG, [0xc8b898, 0xf0e4c8]);
  for (let i = 0; i < 4; i++) g.box(0.41, 0.4 + (i % 2) * 0.6, -0.8 - i * 1.4, 0.02, 0.06, 1.2, 0xb8a888);
  return { parts: parts(g), radius: 0, max: 360 };
}
