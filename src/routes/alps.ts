import { SignAtlas } from '../atlas';
import { Backdrop, clouds, disc, discCentre, horizonBand, mountainRing, skyDome } from '../backdrop';
import { TRAFFIC, trafficProp } from '../cars/traffic';
import * as P from '../props';
import * as Q from '../props2';
import { makeProfile, RoadStyle } from '../road';
import { Rng } from '../rng';
import { TILE } from '../textures';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PropReg, RouteDef, RouteWorld } from './types';

const FOG = 0xdfe6f4;
const SNOW: [number, number] = [0xf6f9ff, 0xe8eef8];
const SHOULDER: [number, number] = [0xd8dee8, 0xccd2de];
const ICE: [number, number] = [0xcfe4f2, 0xc2dcee];
const STONE: [number, number] = [0x8a8c98, 0x7c7e8a];

const style: RoadStyle = { road: [0x76787f, 0x6a6c74], line: 0xffffff, edge: 0xffffff, rumble: [0xd02a2a, 0xffffff] };

export const alps: RouteDef = {
  id: 'alps',
  name: 'SWISS ALPS',
  lines: ['SWISS', 'ALPS'],
  night: false,
  hemi: [0xc8d8ff, 0xe8eef8],
  plate: 0xffffff,
  smoke: 0xffffff,
  card: [0x3a6ab8, 0xffffff],
  music: 'alps',
  stageNames: ['LAKESIDE VILLAGE', 'PINE FOREST', 'MOUNTAIN PASS', 'AVALANCHE GALLERY', 'GLACIER SUMMIT'],
  fog: { color: FOG, near: 160, far: 1150 },
  ambient: { color: 0xf0f4ff, intensity: 1.8 },
  sun: { color: 0xffe0e8, intensity: 2.2, dir: [0.5, 0.8, -0.7] },
  startTime: 62,
  extendTime: 42,
  shadow: 0x7a86a0,
  trafficColors: [0xc02a2a, 0x2a4a8a, 0xffffff, 0x2a6a4a, 0xd8a030, 0x5a5a62, 0x1a1a1e],
  trafficCount: 14,
  walls: false,
  offroadLimit: R + 22,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1991);
    const profiles = [
      // 0 lakeside: snowy meadow left, frozen lake right
      makeProfile(style, [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 600, c: SNOW, tex: TILE.SAND }],
        [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 10, dy: -1.2, c: SNOW, tex: TILE.SAND }, { w: 600, dy: 0, c: ICE, tex: TILE.PLAIN }]),
      // 1 forest
      makeProfile(style, [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 600, c: SNOW, tex: TILE.SAND }], [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 600, c: SNOW, tex: TILE.SAND }]),
      // 2 mountain pass: rock face on the left, the valley far below on the right
      makeProfile(style,
        [{ w: 2, c: SHOULDER, tex: TILE.SAND }, { w: 3, dy: 14, c: STONE, tex: TILE.CONCRETE }, { w: 600, dy: 10, c: SNOW, tex: TILE.SAND }],
        [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 30, abs: 0, c: [0xe4eaf4, 0xd8e0ec], tex: TILE.SAND }, { w: 600, abs: 0, c: SNOW, tex: TILE.SAND }]),
      // 3 avalanche gallery (inside): concrete wall left, open pillars right, flat roof
      makeProfile(style,
        [{ w: 1, dy: 0.3, c: [0xa0a2aa, 0x989aa2] }, { w: 0, dy: 6.5, c: [0xc8cad0, 0xbcbec4] }, { w: 1.2, dy: 1.2, c: [0xb0b2b8, 0xa8aab0] }],
        [{ w: 1, dy: 0.3, c: [0xa0a2aa, 0x989aa2] }, { w: 0, dy: 6.5, c: [0xe8f0ff, 0x8a8c94] }, { w: 1.2, dy: 1.2, c: [0xb0b2b8, 0xa8aab0] }],
        [0x7a7c84, 0x72747c]),
      // 4 summit: glacier ice either side
      makeProfile(style, [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 600, dy: 3, c: [0xe2f0fc, 0xd4e8f8], tex: TILE.SAND }],
        [{ w: 3, c: SHOULDER, tex: TILE.SAND }, { w: 600, dy: -6, c: [0xe2f0fc, 0xd4e8f8], tex: TILE.SAND }]),
    ];
    const profileOf = (zone: string, tunnel: boolean) =>
      tunnel ? 3 : zone === 'lake' ? 0 : zone === 'pass' ? 2 : zone === 'summit' ? 4 : 1;

    const b = new TrackBuilder(profileOf, 10);
    b.zone = 'lake';
    b.straight(30);
    b.stageFrom({ zone: 'lake', length: 380, curvy: 0.6, hilly: 0.1, yMin: 8, yMax: 12 }, rng);
    b.stageFrom({ zone: 'forest', length: 400, curvy: 0.8, hilly: 0.6, yMin: 10, yMax: 45 }, rng);
    b.stageFrom({ zone: 'pass', length: 420, curvy: 1, hilly: 1, yMin: 45, yMax: 110 }, rng);
    b.stageFrom({ zone: 'gallery', length: 380, curvy: 0.8, hilly: 0.4, yMin: 85, yMax: 115, tunnels: 0.45 }, rng);
    b.stageFrom({ zone: 'summit', length: 420, curvy: 0.7, hilly: 0.5, yMin: 100, yMax: 140 }, rng);
    const track = b.finish(260);

    // ---- props --------------------------------------------------------------
    const reg = new PropReg();
    const pine = reg.add(Q.snowPine());
    const chalets = [0, 1, 2].map(() => reg.add(Q.chalet(rng)));
    const bank = reg.add(Q.snowBank());
    const gondola = reg.add(Q.gondola());
    const rock = reg.add(P.rock());
    const rail = reg.add(P.guardrail(0xe8e8e8, 0x6a6a72));
    const light = reg.add(P.streetLight(8, 0xfff4d0));
    const portal = reg.add(P.tunnelPortal(0x9a9ca4, 0xffd040, 8));
    const flag = reg.add(P.flag());
    const boards = [
      { bg: 0xd02a2a, fg: 0xffffff, text: 'ALPEN', sub: 'CHOCOLAT', border: 0xffffff },
      { bg: 0xffffff, fg: 0xd02a2a, text: 'SKI', sub: 'SCHOOL', border: 0xd02a2a },
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'FONDUE', sub: 'STUBE', border: 0xffe040 },
      { bg: 0xffe040, fg: 0xd02a2a, text: 'TURBO', sub: 'MOTOR OIL', border: 0xd02a2a },
      { bg: 0x2a7a4a, fg: 0xffffff, text: 'HOTEL', sub: 'EDELWEISS', border: 0xffffff },
    ].map((s) => reg.add(P.billboard(atlas.add(s, 2, 2), 9, 4.5, 0x6a4a2a, 0xf0e8d8)));
    const roadSigns = [
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'ZERMATT', sub: '24', border: 0xffffff },
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'ST. MORITZ', sub: '58', border: 0xffffff },
      { bg: 0x1a7a3a, fg: 0xffffff, text: 'PASS', sub: '2106 M', border: 0xffffff },
    ].map((s) => reg.add(P.roadSign(atlas.add(s, 1, 1))));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0xd02a2a, fg: 0xffffff, text: 'START', border: 0xffffff }, 4, 1), 0x8a5a32, 0xd02a2a));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0x8a5a32, 0x1a5ae0));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0x8a5a32, 0x1a1a1a));
    const banner = reg.add(P.gate(atlas.add({ bg: 0xd02a2a, fg: 0xffffff, text: 'WILLKOMMEN', border: 0xffffff }, 4, 1), 0x8a5a32, 0xd02a2a, 0xffffff));
    const chevR = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'R' }, 2, 1)));
    const chevL = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'L' }, 2, 1)));
    const delR = reg.add(P.delineator(true)), delW = reg.add(P.delineator(false));
    const kms = Array.from({ length: 16 }, (_, k) => reg.add(P.kmPost(atlas.add({ bg: 0x1a5ab8, fg: 0xffffff, text: String(k + 1), border: 0xffffff }, 1, 1))));
    const people = reg.add(P.person(0));
    const T = TRAFFIC;
    const trafficTypes = [T.golf, T.volvo240, T.w124, T.civic, T.cherokee].map((s) => reg.add(trafficProp(s)))
      .concat([reg.add(P.truck(0xd02a2a)), reg.add(P.bus(0xffd040)), reg.add(P.bus(0xffd040))]);
    const JACKETS = [0xd02a2a, 0x1a5ab8, 0xffe040, 0x2a8a5a, 0xff7ab0, 0xffffff];

    // ---- scenery ------------------------------------------------------------
    const segs = track.segs;
    for (let i = 10; i < segs.length; i++) {
      const s = segs[i];
      const pr = s.props;
      if (s.tunnel) {
        if (!segs[i - 1].tunnel || !segs[i + 1]?.tunnel) pr.push({ t: portal, x: 0, r: segs[i - 1].tunnel ? Math.PI : 0 });
        continue;
      }
      const z = s.zone;
      if (i % 3 === 0) pr.push({ t: delR, x: R + 2.6 }, { t: delW, x: -(R + 2.6) });
      if (i % 2 === 0 && z !== 'lake') pr.push({ t: bank, x: R + 3.8 }, { t: bank, x: -(R + 3.8), r: Math.PI });
      if (i % 167 === 100) pr.push({ t: kms[Math.min(kms.length - 1, Math.floor((i * 6) / 1000))], x: R + 3.6, r: -0.3 });
      if (Math.abs(s.curve) > 0.0016 && i % 5 === 0) {
        pr.push(s.curve > 0 ? { t: chevR, x: -(R + 5.5), r: 0.15 } : { t: chevL, x: R + 5.5, r: -0.15 });
      }
      const forest = (dens: number, side: number[]) => {
        for (const sd of side) if (i % 2 === 0 && rng.chance(dens)) pr.push({ t: pine, x: sd * (R + rng.range(7, 60)), s: rng.range(0.8, 1.6), r: rng.range(0, 6) });
      };
      if (z === 'lake') {
        forest(0.35, [-1]);
        if (i % 14 === 3 && rng.chance(0.8)) pr.push({ t: rng.pick(chalets), x: -(R + rng.range(16, 40)), r: rng.range(0.2, 0.6) });
        if (i % 9 === 0) pr.push({ t: light, x: -(R + 3), r: Math.PI });
        if (i % 16 === 8) pr.push({ t: flag, x: R + 4.5, tint: rng.pick([0xd02a2a, 0xffffff]) });
        if (i % 5 === 2 && rng.chance(0.4)) pr.push({ t: people, x: -(R + rng.range(2, 4)), r: rng.range(0, 6), tint: rng.pick(JACKETS) });
        if (i % 50 === 25) pr.push({ t: rng.pick(boards), x: -(R + 12), r: 0.35 });
      } else if (z === 'forest') {
        forest(0.75, [-1, 1]);
        if (i % 30 === 12 && rng.chance(0.6)) pr.push({ t: rng.pick(chalets), x: rng.sign() * (R + rng.range(20, 50)), r: rng.range(-0.6, 0.6) });
        if (i % 60 === 30) pr.push({ t: rng.pick(boards), x: (i % 120 === 30 ? -1 : 1) * (R + 12), r: i % 120 === 30 ? 0.35 : -0.35 });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: R + 3.4, r: -0.2 });
      } else if (z === 'pass' || z === 'gallery') {
        if (i % 2 === 0) pr.push({ t: rail, x: R + 2.4 });
        // pines up on the rock shelf (only the pass has one; the gallery stage's open road is flat)
        if (i % 6 === 0 && rng.chance(0.5)) pr.push({ t: pine, x: -(R + rng.range(8, 40)), y: z === 'pass' ? 14 : 0, s: rng.range(0.7, 1.2), r: rng.range(0, 6) });
        if (i % 7 === 3 && rng.chance(0.5)) pr.push({ t: rock, x: -(R + rng.range(5, 9)), s: rng.range(0.6, 1.4), r: rng.range(0, 6), tint: 0xb0b4c8 });
        if (i % 9 === 0 && rng.chance(0.6)) pr.push({ t: pine, x: R + rng.range(30, 160), y: 0, abs: true, s: rng.range(1, 1.8), r: rng.range(0, 6) });
        if (i % 90 === 45) pr.push({ t: gondola, x: rng.range(-40, 40), y: rng.range(40, 60) });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: R + 3.4, r: -0.2 });
      } else if (z === 'summit') {
        if (i % 2 === 0 && Math.abs(s.curve) > 0.001) pr.push({ t: rail, x: R + 2.4 }, { t: rail, x: -(R + 2.4) });
        if (i % 11 === 0 && rng.chance(0.5)) pr.push({ t: rock, x: rng.sign() * (R + rng.range(8, 40)), s: rng.range(0.8, 2.2), r: rng.range(0, 6), tint: 0xc8d0e4 });
        if (i % 80 === 40) pr.push({ t: gondola, x: rng.range(-40, 40), y: rng.range(30, 50) });
        if (i % 16 === 8) pr.push({ t: flag, x: rng.sign() * (R + 5), tint: rng.pick([0xd02a2a, 0xffffff]) });
      }
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[60].props.push({ t: banner, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    // ---- horizon: dawn over snow-capped peaks ----------------------------------
    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [0, 0xffe0e0], [1.5, 0xffc8d0], [3.5, 0xf0c0d8], [6, 0xd0c8ec], [10, 0xa8c4f0], [16, 0x84b0ec],
      [26, 0x5c94e0], [40, 0x3a78d0], [90, 0x2058b8],
    ], FOG), 0);
    const sunDisc = disc(2500, 0.9, 4, 150, [[1.5, 0xffd8d8], [1.2, 0xffc8b8], [1, 0xfff0d8], [0.7, 0xfffcf0]], 20);
    bd.addLayer(sunDisc, 1);
    bd.sun = { obj: sunDisc, local: discCentre(2500, 0.9, 4) };
    bd.addLayer(clouds(rng, 2350, 10, [0xffffff, 0xfff0f4, 0xd8c8e0]), 0.8);
    bd.addLayer(mountainRing(rng, 2250, 0x8a9ac4, 480, () => 1, 0xffffff, 34, [8, 20]), 1);
    bd.addLayer(mountainRing(rng, 2100, 0x6a7aa8, 300, (a) => (Math.cos(a * 2) > -0.3 ? 1 : 0.5), 0xf4f8ff, 30), 1);
    bd.addLayer(mountainRing(rng, 1990, 0x2a5a48, 70, () => 1, undefined, 240, [1.2, 3.5]), 1);
    bd.addLayer(horizonBand(1900, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
