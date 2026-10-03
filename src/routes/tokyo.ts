import { SignAtlas, SignSpec } from '../atlas';
import { Backdrop, disc, horizonBand, skyDome, skylineRing, stars, volcano } from '../backdrop';
import { GeoBuilder } from '../geom';
import * as P from '../props';
import { makeProfile, RoadStyle, SideStep } from '../road';
import { Rng } from '../rng';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PropReg, RouteDef, RouteWorld } from './types';

const FOG = 0x2c1c50;
const WIN = [0xffe8a0, 0xfff6d8, 0xffd070, 0xa0f0ff, 0xffffff];

const style: RoadStyle = { road: [0x4a4a5a, 0x3c3c4a], line: 0xf0f0f0, edge: 0xf0f0f0, rumble: [0x5a5a68, 0x50505c], rumbleW: 1.4 };

const barrier = (floor: [number, number]): SideStep[] => [
  { w: 0, dy: 1.3, c: [0xbcbcc8, 0xa8a8b6] },
  { w: 0.5, c: [0xdcdce4, 0xd0d0d8] },
  { w: 0, abs: 0, c: [0x3a3a52, 0x3a3a52] },
  { w: 600, abs: 0, c: floor },
];

/** Dark office tower with a scatter of lit windows. Returns def + its height. */
function tower(rng: Rng, w: number, d: number, h: number): P.PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const body = rng.pick([0x1c2244, 0x221c40, 0x182a40, 0x262640]);
  g.box(0, h / 2, 0, w, h, d, [body, 0x2a2e52]);
  if (rng.chance(0.5)) g.box(0, h + 2, 0, w * 0.6, 4, d * 0.6, body);
  const style = rng.int(0, 2);
  const lit = rng.range(0.12, 0.35);
  const faces: [number, number, number, number][] = [
    // [axis x/z, sign, width, depth offset]
    [0, 1, w, d / 2], [0, -1, w, d / 2], [1, 1, d, w / 2], [1, -1, d, w / 2],
  ];
  for (const [ax, sg, fw, off] of faces) {
    for (let y = 4; y < h - 3; y += 3.6) {
      if (style === 1 && rng.chance(0.15)) {
        // whole lit office floor
        const c = rng.pick(WIN);
        const o = off + 0.06;
        if (ax === 0) l.quad([-fw / 2 + 1, y, sg * o], [fw / 2 - 1, y, sg * o], [fw / 2 - 1, y + 1.8, sg * o], [-fw / 2 + 1, y + 1.8, sg * o], c);
        else l.quad([sg * o, y, -fw / 2 + 1], [sg * o, y, fw / 2 - 1], [sg * o, y + 1.8, fw / 2 - 1], [sg * o, y + 1.8, -fw / 2 + 1], c);
        continue;
      }
      for (let x = -fw / 2 + 1.5; x < fw / 2 - 1.5; x += 3) {
        if (!rng.chance(lit)) continue;
        const c = rng.pick(WIN);
        const o = off + 0.06;
        if (ax === 0) l.quad([x, y, sg * o], [x + 1.5, y, sg * o], [x + 1.5, y + 1.8, sg * o], [x, y + 1.8, sg * o], c);
        else l.quad([sg * o, y, x], [sg * o, y, x + 1.5], [sg * o, y + 1.8, x + 1.5], [sg * o, y + 1.8, x], c);
      }
    }
  }
  if (h > 70) l.box(0, h + 4.6, 0, 1.2, 1.2, 1.2, 0xff2020);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: l.build(), mat: 'glow' }], radius: 0, max: 60 };
}

/** Vertical neon sign on a dark mast rising from street level. */
function neonTate(uv: P.UV, frame: number, h: number): P.PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(0, h / 2, -0.4, 1.2, h, 1.2, 0x202030);
  s.quad([-1.6, h, 0.25], [1.6, h, 0.25], [1.6, h + 12, 0.25], [-1.6, h + 12, 0.25], 0xffffff, uv);
  l.box(0, h + 6, 0, 3.8, 12.6, 0.4, frame);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: l.build(), mat: 'glow' }, { geo: s.build(), mat: 'sign' }], radius: 0, max: 50 };
}

/** Horizontal neon billboard on a frame, for rooftops. */
function roofNeon(uv: P.UV, frame: number): P.PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const l = new GeoBuilder();
  g.box(-6, 2, 0, 0.6, 4, 0.6, 0x303040);
  g.box(6, 2, 0, 0.6, 4, 0.6, 0x303040);
  l.box(0, 8, -0.1, 19, 8, 0.3, frame);
  s.quad([-9, 4.4, 0.1], [9, 4.4, 0.1], [9, 11.6, 0.1], [-9, 11.6, 0.1], 0xffffff, uv);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: l.build(), mat: 'glow' }, { geo: s.build(), mat: 'sign' }], radius: 0, max: 40 };
}

/** Green expressway direction gantry spanning the road. */
function gantry(uvL: P.UV, uvR: P.UV): P.PropDef {
  const g = new GeoBuilder();
  const s = new GeoBuilder();
  const X = R + 1.2;
  g.box(-X, 4.5, 0, 0.6, 9, 0.6, 0x8a8a98);
  g.box(X, 4.5, 0, 0.6, 9, 0.6, 0x8a8a98);
  g.box(0, 8.6, -0.3, X * 2, 0.5, 0.5, 0x8a8a98);
  g.box(-5.5, 10, -0.15, 9.4, 4.2, 0.2, 0x0e5a2a);
  g.box(5.5, 10, -0.15, 9.4, 4.2, 0.2, 0x0e5a2a);
  s.quad([-10, 8, 0], [-1, 8, 0], [-1, 12, 0], [-10, 12, 0], 0xffffff, uvL);
  s.quad([1, 8, 0], [10, 8, 0], [10, 12, 0], [1, 12, 0], 0xffffff, uvR);
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: s.build(), mat: 'sign' }], radius: 0, max: 6 };
}

/** Suspension bridge tower with strings of cable lights. */
function bridgeTower(): P.PropDef {
  const g = new GeoBuilder();
  const l = new GeoBuilder();
  const top = 56, base = -70;
  for (const x of [-R - 3, R + 3]) {
    g.box(x, (top + base) / 2, 0, 2.4, top - base, 2.4, [0xd8dce8, 0xffffff]);
    l.box(x, top + 0.8, 0, 1.2, 1.2, 1.2, 0xff2020);
  }
  for (const y of [14, 36, top - 2]) g.box(0, y, 0, (R + 3) * 2, 2.2, 2, 0xd8dce8);
  // cable light strings sagging toward the deck in both directions
  for (const x of [-R - 3, R + 3]) for (const dir of [-1, 1]) {
    for (let i = 1; i <= 16; i++) {
      const t = i / 16;
      const z = dir * t * 64;
      const y = top - (top - 4) * (1 - (1 - t) * (1 - t));
      l.box(x, y, z, 0.6, 0.6, 0.6, i % 2 ? 0xffffff : 0x80e0ff);
    }
  }
  return { parts: [{ geo: g.build(), mat: 'lit' }, { geo: l.build(), mat: 'glow' }], radius: 0, max: 8 };
}

export const tokyo: RouteDef = {
  id: 'tokyo',
  name: 'TOKYO NIGHT HIGHWAY',
  lines: ['TOKYO NIGHT', 'HIGHWAY'],
  stageNames: ['SHUTOKO LOOP', 'NEON DISTRICT', 'UNDERGROUND', 'BAY BRIDGE', 'WANGAN LINE'],
  fog: { color: FOG, near: 140, far: 1150 },
  ambient: { color: 0xc4c4ff, intensity: 1.8 },
  sun: { color: 0xffc0d8, intensity: 1.6, dir: [-0.4, 1, 0.9] },
  carColor: 0xffd020,
  carStripe: 0x1a1a1a,
  startTime: 60,
  extendTime: 40,
  trafficColors: [0xffffff, 0xe03030, 0x40a0ff, 0x30d0a0, 0xffa030, 0xd060ff, 0x9a9aa8],
  trafficCount: 18,
  walls: true,
  offroadLimit: R + 1.0,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1985);
    const profiles = [
      // 0 elevated over the city
      makeProfile(style, barrier([0x1a1c38, 0x16182f]), barrier([0x1a1c38, 0x16182f])),
      // 1 elevated over the bay
      makeProfile(style, barrier([0x0e1c48, 0x0c183e]), barrier([0x0e1c48, 0x0c183e])),
      // 2 tunnel with sodium lights
      makeProfile(style,
        [{ w: 0.8, dy: 0.3, c: [0x707080, 0x686878] }, { w: 0, dy: 4.6, c: [0x8a8478, 0x7e786c] }, { w: 0, dy: 0.7, c: [0xffa030, 0x5e5a50] }, { w: 1.6, dy: 2.6, c: [0x6a665c, 0x625e54] }],
        [{ w: 0.8, dy: 0.3, c: [0x707080, 0x686878] }, { w: 0, dy: 4.6, c: [0x8a8478, 0x7e786c] }, { w: 0, dy: 0.7, c: [0xffa030, 0x5e5a50] }, { w: 1.6, dy: 2.6, c: [0x6a665c, 0x625e54] }],
        [0x34322c, 0x2e2c28]),
    ];
    const profileOf = (zone: string, tunnel: boolean) => (tunnel ? 2 : zone === 'bay' ? 1 : 0);

    const b = new TrackBuilder(profileOf, 26);
    b.zone = 'city';
    b.straight(30);
    b.stageFrom({ zone: 'city', length: 400, curvy: 0.85, hilly: 0.4, yMin: 22, yMax: 40 }, rng);
    b.stageFrom({ zone: 'neon', length: 400, curvy: 0.8, hilly: 0.3, yMin: 22, yMax: 34, tunnels: 0.12 }, rng);
    b.stageFrom({ zone: 'under', length: 420, curvy: 0.7, hilly: 0.4, yMin: 18, yMax: 34, tunnels: 0.4 }, rng);
    b.stageFrom({ zone: 'bay', length: 420, curvy: 0.45, hilly: 1, yMin: 26, yMax: 64 }, rng);
    b.stageFrom({ zone: 'wangan', length: 420, curvy: 0.45, hilly: 0.2, yMin: 22, yMax: 30 }, rng);
    const track = b.finish(260);

    const reg = new PropReg();
    const towers: { t: number; h: number; w: number }[] = [];
    for (let i = 0; i < 8; i++) {
      const w = rng.range(18, 34), d = rng.range(18, 30), h = rng.range(40, 130);
      towers.push({ t: reg.add(tower(rng, w, d, h)), h, w: Math.max(w, d) });
    }
    const lamp = reg.add(P.streetLight(10, 0xffc060, 0x8a8a98, 4));
    const neonCols = [0xff3a8a, 0x40f0ff, 0xffe040, 0xff5030, 0x80ff60, 0xc060ff];
    const tateWords = ['ホテル', 'カラオケ', 'ラーメン', '喫茶店', '電気街', '寿司', 'ゲーム', '居酒屋'];
    const tate = tateWords.map((t, i) => {
      const c = neonCols[i % neonCols.length];
      const spec: SignSpec = { bg: 0x10101c, fg: c, text: t, vertical: true, jp: true, border: c };
      return reg.add(neonTate(atlas.add(spec, 1, 4), c, rng.range(26, 36)));
    });
    const roofWords: SignSpec[] = [
      { bg: 0x10101c, fg: 0xff3a8a, text: 'TURBO', sub: 'GAME CENTER', border: 0xff3a8a },
      { bg: 0x10101c, fg: 0x40f0ff, text: '東京', jp: true, border: 0x40f0ff },
      { bg: 0xe02a2a, fg: 0xffffff, text: 'NEO', sub: 'ELECTRONICS', border: 0xffffff },
      { bg: 0x10101c, fg: 0xffe040, text: 'ネオン', jp: true, border: 0xffe040 },
      { bg: 0x1a40c0, fg: 0xffffff, text: 'SKY', sub: 'HOTEL', border: 0x40f0ff },
      { bg: 0x10101c, fg: 0x80ff60, text: 'カメラ', jp: true, border: 0x80ff60 },
    ];
    const roof = roofWords.map((s, i) => reg.add(roofNeon(atlas.add(s, 2, 1), neonCols[i % neonCols.length])));
    const dirSigns: [SignSpec, SignSpec][] = [
      [{ bg: 0x0e5a2a, fg: 0xffffff, text: '新宿', sub: 'SHINJUKU', jp: true }, { bg: 0x0e5a2a, fg: 0xffffff, text: '銀座', sub: 'GINZA', jp: true }],
      [{ bg: 0x0e5a2a, fg: 0xffffff, text: '渋谷', sub: 'SHIBUYA', jp: true }, { bg: 0x0e5a2a, fg: 0xffffff, text: '羽田', sub: 'HANEDA', jp: true }],
      [{ bg: 0x0e5a2a, fg: 0xffffff, text: '湾岸線', sub: 'WANGAN', jp: true }, { bg: 0x0e5a2a, fg: 0xffffff, text: '横浜', sub: 'YOKOHAMA', jp: true }],
    ];
    const gantries = dirSigns.map(([a, c]) => reg.add(gantry(atlas.add(a, 2, 1), atlas.add(c, 2, 1))));
    const btower = reg.add(bridgeTower());
    const portal = reg.add(P.tunnelPortal(0x6a6a78, 0xffa030, 7.9));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0x10101c, fg: 0x40f0ff, text: 'START', border: 0x40f0ff }, 4, 1), 0x9a9aa8, 0xff3a8a, 0x40f0ff));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0x9a9aa8, 0x1a5ae0, 0xffe040));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0x9a9aa8, 0x1a1a1a, 0xff3a8a));
    const trafficTypes = [reg.add(P.sedan()), reg.add(P.sedan()), reg.add(P.van()), reg.add(P.truck(0xe02a2a)), reg.add(P.truck(0x1a8a3a))];

    const segs = track.segs;
    const city = (i: number, density: number, near: number) => {
      const pr = segs[i].props;
      for (const side of [-1, 1]) {
        if (!rng.chance(density)) continue;
        const tw = rng.pick(towers);
        const s = rng.range(0.85, 1.25);
        const off = rng.range(0, 240);
        const x = side * (R + near + tw.w * s * 0.5 + off);
        // keep the blocks beside the expressway low so the road rides above the city
        const sy = off < 70 ? rng.range(0.25, 0.45) : off < 140 ? rng.range(0.5, 0.9) : rng.range(0.8, 1.5);
        pr.push({ t: tw.t, x, y: 0, abs: true, s, sy, r: rng.range(-0.2, 0.2), tint: rng.pick([0xffffff, 0xd8d0ff, 0xc8e0ff]) });
        if (off < 140 && rng.chance(0.4)) {
          pr.push({ t: rng.pick(roof), x: x - side * tw.w * s * 0.2, y: tw.h * s * sy, abs: true, r: side * -0.4 });
        }
      }
    };
    for (let i = 10; i < segs.length; i++) {
      const s = segs[i];
      const pr = s.props;
      if (s.tunnel) {
        if (!segs[i - 1].tunnel) pr.push({ t: portal, x: 0 });
        continue;
      }
      const z = s.zone;
      if (i % 7 === 0) pr.push({ t: lamp, x: R + 2.6, y: 1.3, r: 0 });
      if (i % 7 === 3) pr.push({ t: lamp, x: -(R + 2.6), y: 1.3, r: Math.PI });
      if (z === 'bay') {
        if (i % 75 === 30) pr.push({ t: btower, x: 0 });
        if (i % 9 === 0) city(i, 0.08, 260);
        continue;
      }
      city(i, z === 'wangan' ? 0.12 : z === 'under' ? 0.22 : 0.3, 18);
      if ((z === 'neon' || z === 'city') && i % 4 === 0 && rng.chance(z === 'neon' ? 0.55 : 0.2)) {
        pr.push({ t: rng.pick(tate), x: rng.sign() * (R + rng.range(10, 22)), y: 0, abs: true, r: rng.range(-0.5, 0.5) });
      }
      if (i % 110 === 55) pr.push({ t: rng.pick(gantries), x: 0 });
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [0.8, 0xff9a5a], [1.8, 0xf27a72], [3.0, 0xd25a86], [4.5, 0xa0448c], [6.5, 0x6e3082], [9, 0x4a2472],
      [13, 0x321c62], [19, 0x221852], [28, 0x161244], [90, 0x0a0a2c],
    ], FOG), 0);
    bd.addLayer(stars(rng, 260), 0.3);
    bd.addLayer(disc(2500, -0.45, 16, 70, [[1, 0xfff4d0], [0.8, 0xffffe8]], 14), 1);
    bd.addLayer(volcano(2300, 0.55, 190, 520, 0x3a2a6a, 0xd8d0f0), 1);
    bd.addLayer(skylineRing(rng, 2100, [0x1a1838, 0x201a40, 0x14163a], WIN, 170, () => 1, 0.75, 0.22), 1);
    bd.addLayer(horizonBand(1950, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
