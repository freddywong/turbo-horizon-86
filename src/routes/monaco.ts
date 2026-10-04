import { SignAtlas } from '../atlas';
import { Backdrop, clouds, disc, discCentre, horizonBand, mountainRing, seaGlitter, ships, skyDome, skylineRing } from '../backdrop';
import { TRAFFIC, trafficProp } from '../cars/traffic';
import * as P from '../props';
import * as Q from '../props2';
import { makeProfile, RoadStyle } from '../road';
import { Rng } from '../rng';
import { TILE } from '../textures';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PASTELS, PropReg, RouteDef, RouteWorld } from './types';

const FOG = 0xcde4f2;
const SEA: [number, number] = [0x1478c8, 0x1270c0];
const QUAY: [number, number] = [0xe8dcc4, 0xdcd0b8];
const GARDEN: [number, number] = [0x5aa84a, 0x509c42];
const LIME: [number, number] = [0xd8c8a0, 0xccbc94];
const SCRUB: [number, number] = [0x8a9a5a, 0x7e8e52];

const style: RoadStyle = { road: [0x8e8e98, 0x82828c], line: 0xffffff, edge: 0xffffff, rumble: [0xe02a2a, 0xffffff] };

export const monaco: RouteDef = {
  id: 'monaco',
  name: 'MONACO RIVIERA',
  lines: ['MONACO', 'RIVIERA'],
  night: false,
  hemi: [0xa8d8ff, 0xd8c8a0],
  plate: 0xffffff,
  smoke: 0xffffff,
  card: [0x1a7ac8, 0xffffff],
  music: 'riviera',
  stageNames: ['HARBOUR FRONT', 'CASINO SQUARE', 'HARBOUR TUNNEL', 'CORNICHE CLIFFS', 'CAP MARTIN'],
  fog: { color: FOG, near: 170, far: 1180 },
  ambient: { color: 0xffffff, intensity: 1.9 },
  sun: { color: 0xfff4e0, intensity: 2.4, dir: [-0.6, 1, 0.5] },
  startTime: 60,
  extendTime: 40,
  shadow: 0x5c5c66,
  trafficColors: [0xffffff, 0xd81818, 0x1a3a8a, 0xffe040, 0x2a2a2e, 0xc0c0c8, 0x2a7a4a],
  trafficCount: 16,
  walls: false,
  offroadLimit: R + 14,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1929);
    const profiles = [
      // 0 harbour: promenade and town on the left, quay and water on the right
      makeProfile(style, [{ w: 0.3, dy: 0.2, c: [0xf0f0f0, 0xe8e8e8] }, { w: 7, c: QUAY, tex: TILE.PAVING }, { w: 600, c: [0xd8c8b0, 0xccbca4], tex: TILE.PAVING }],
        [{ w: 0.3, dy: 0.2, c: [0xf0f0f0, 0xe8e8e8] }, { w: 10, c: QUAY, tex: TILE.PAVING }, { w: 0, abs: 0, c: [0xc8bca4, 0xbcb098] }, { w: 600, abs: 0, c: SEA, tex: TILE.SEA }]),
      // 1 casino square: paving and clipped gardens
      makeProfile(style, [{ w: 0.3, dy: 0.2, c: [0xf0f0f0, 0xe8e8e8] }, { w: 6, c: QUAY, tex: TILE.PAVING }, { w: 600, c: GARDEN, tex: TILE.GRASS }],
        [{ w: 0.3, dy: 0.2, c: [0xf0f0f0, 0xe8e8e8] }, { w: 6, c: QUAY, tex: TILE.PAVING }, { w: 600, c: GARDEN, tex: TILE.GRASS }]),
      // 2 harbour tunnel: white tiles, strip lights
      makeProfile(style,
        [{ w: 1.2, dy: 0.3, c: [0xb8b8c0, 0xb0b0b8] }, { w: 0, dy: 5, c: [0xf0f0f0, 0xe4e4e4] }, { w: 0, dy: 0.8, c: [0xfff0c0, 0x8a8a90] }, { w: 1.5, dy: 2.8, c: [0xd8d8dc, 0xd0d0d4] }],
        [{ w: 1.2, dy: 0.3, c: [0xb8b8c0, 0xb0b0b8] }, { w: 0, dy: 5, c: [0xf0f0f0, 0xe4e4e4] }, { w: 0, dy: 0.8, c: [0xfff0c0, 0x8a8a90] }, { w: 1.5, dy: 2.8, c: [0xd8d8dc, 0xd0d0d4] }],
        [0x6a6a72, 0x62626a]),
      // 3 corniche: limestone cliff up on the left, the sea far below on the right
      makeProfile(style,
        [{ w: 2, c: LIME, tex: TILE.DIRT }, { w: 2, dy: 13, c: LIME, tex: TILE.DIRT }, { w: 600, dy: 8, c: SCRUB, tex: TILE.GRASS }],
        [{ w: 2, c: QUAY, tex: TILE.PAVING }, { w: 8, abs: 0, c: LIME, tex: TILE.DIRT }, { w: 4, abs: 0, c: [0xffffff, 0xe0f4ff], tex: TILE.FOAM }, { w: 600, abs: 0, c: SEA, tex: TILE.SEA }]),
      // 4 cap martin: pine slopes left, low wall and the sea right
      makeProfile(style, [{ w: 2, c: QUAY, tex: TILE.PAVING }, { w: 600, dy: 6, c: SCRUB, tex: TILE.GRASS }],
        [{ w: 2, c: QUAY, tex: TILE.PAVING }, { w: 14, abs: 0, c: [0xcab88a, 0xbeac80], tex: TILE.SAND }, { w: 600, abs: 0, c: SEA, tex: TILE.SEA }]),
    ];
    const profileOf = (zone: string, tunnel: boolean) =>
      tunnel ? 2 : zone === 'harbour' ? 0 : zone === 'square' ? 1 : zone === 'corniche' ? 3 : 4;

    const b = new TrackBuilder(profileOf, 3);
    b.zone = 'harbour';
    b.straight(30);
    b.stageFrom({ zone: 'harbour', length: 380, curvy: 0.75, hilly: 0.05, yMin: 3, yMax: 4 }, rng);
    b.stageFrom({ zone: 'square', length: 380, curvy: 0.9, hilly: 0.5, yMin: 4, yMax: 22 }, rng);
    b.stageFrom({ zone: 'tunnel', length: 300, curvy: 0.6, hilly: 0.1, yMin: 4, yMax: 8, tunnels: 0.9, tunnelZone: 'tunnel' }, rng);
    b.stageFrom({ zone: 'corniche', length: 440, curvy: 1, hilly: 0.6, yMin: 40, yMax: 80 }, rng);
    b.stageFrom({ zone: 'cap', length: 420, curvy: 0.75, hilly: 0.3, yMin: 18, yMax: 34 }, rng);
    const track = b.finish(260);

    // ---- props --------------------------------------------------------------
    const reg = new PropReg();
    const villas = [0, 1, 2, 3].map(() => reg.add(Q.villa(rng)));
    const cypress = reg.add(Q.cypress());
    const yachts = [0, 1, 2].map(() => reg.add(Q.yacht(rng)));
    const wall = reg.add(Q.stoneWall());
    const palm = reg.add(P.palmTree());
    const pine = reg.add(P.pine());
    const boat = reg.add(P.sailboat());
    const hotels = [0, 1].map((st) => reg.add(P.hotel(st, rng)));
    const light = reg.add(P.streetLight(7, 0xfff4c0, 0x2a3a2a, 2));
    const rail = reg.add(P.guardrail());
    const flag = reg.add(P.flag());
    const hedge = reg.add(P.hedge());
    const gulls = reg.add(P.seagulls(rng));
    const people = [reg.add(P.person(0)), reg.add(P.person(1))];
    const portal = reg.add(P.tunnelPortal(0xe0d8c4, 0xe02a2a, 7.9));
    const boards = [
      { bg: 0xffffff, fg: 0xe02a2a, text: 'GELATO', sub: 'ARTIGIANALE', border: 0xe02a2a },
      { bg: 0x1a7ac8, fg: 0xffffff, text: 'RIVIERA', sub: 'YACHT CLUB', border: 0xffffff },
      { bg: 0xffe040, fg: 0xe02a2a, text: 'TURBO', sub: 'MOTOR OIL', border: 0xe02a2a },
      { bg: 0xe02a2a, fg: 0xffffff, text: 'GRAND', sub: 'PRIX 86', border: 0xffffff },
      { bg: 0x2a7a4a, fg: 0xffffff, text: 'HOTEL', sub: 'DE PARIS', border: 0xffe040 },
    ].map((s) => reg.add(P.billboard(atlas.add(s, 2, 2), 9, 4.5)));
    const roadSigns = [
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'NICE', sub: '18', border: 0xffffff },
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'MENTON', sub: '9', border: 0xffffff },
      { bg: 0xffffff, fg: 0x1a1a1a, text: 'ITALIA', sub: '12', border: 0xe02a2a },
    ].map((s) => reg.add(P.roadSign(atlas.add(s, 1, 1))));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0xe02a2a, text: 'START', stripes: 0xe02a2a }, 4, 1), 0xf0f0f0, 0xe02a2a));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0xf0f0f0, 0x1a5ae0));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0xf0f0f0, 0x1a1a1a));
    const banner = reg.add(P.gate(atlas.add({ bg: 0xe02a2a, fg: 0xffffff, text: 'BIENVENUE A MONACO', border: 0xffffff }, 4, 1), 0xffffff, 0xe02a2a, 0xffffff));
    const chevR = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'R' }, 2, 1)));
    const chevL = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'L' }, 2, 1)));
    const delR = reg.add(P.delineator(true)), delW = reg.add(P.delineator(false));
    const T = TRAFFIC;
    const trafficTypes = [T.golf, T.civic, T.w124, T.ae86, T.volvo240].map((s) => reg.add(trafficProp(s)))
      .concat([reg.add(P.bus(0x1a7ac8)), reg.add(P.truck(0xe02a2a))]);
    const SHIRTS = [0xffffff, 0x1a3a8a, 0xe02a2a, 0xffe8c8, 0x40a0d0, 0xff8ab0];

    // ---- scenery ------------------------------------------------------------
    const segs = track.segs;
    for (let i = 10; i < segs.length; i++) {
      const s = segs[i];
      const pr = s.props;
      if (s.tunnel) {
        if (!segs[i - 1].tunnel) pr.push({ t: portal, x: 0 });
        continue;
      }
      const z = s.zone;
      if (Math.abs(s.curve) > 0.0016 && i % 5 === 0 && z !== 'harbour') {
        pr.push(s.curve > 0 ? { t: chevR, x: -(R + 5.2), r: 0.15 } : { t: chevL, x: R + 5.2, r: -0.15 });
      }
      if (z === 'harbour') {
        if (i % 8 === 0) pr.push({ t: light, x: R + 2.6, r: 0 }, { t: light, x: -(R + 2.6), r: Math.PI });
        if (i % 6 === 3) pr.push({ t: palm, x: -(R + rng.range(4, 6)), s: rng.range(0.9, 1.2), r: rng.range(0, 6) });
        if (i % 7 === 0 && rng.chance(0.8)) pr.push({ t: rng.pick(yachts), x: R + rng.range(18, 60), y: 0, abs: true, r: rng.range(-0.3, 0.3) + Math.PI / 2 });
        if (i % 13 === 5 && rng.chance(0.6)) pr.push({ t: boat, x: R + rng.range(70, 200), y: 0, abs: true, s: rng.range(0.9, 1.3), r: rng.range(-0.6, 0.6) });
        if (i % 9 === 4 && rng.chance(0.85)) pr.push({ t: rng.pick(villas), x: -(R + rng.range(14, 24)), tint: rng.pick(PASTELS), r: rng.range(0.1, 0.4) });
        if (i % 16 === 8) pr.push({ t: flag, x: R + 4.5, tint: rng.pick([0xe02a2a, 0xffffff]) });
        if (i % 4 === 1 && rng.chance(0.4)) pr.push({ t: rng.pick(people), x: rng.sign() * (R + rng.range(2, 5)), r: rng.range(0, 6), tint: rng.pick(SHIRTS) });
        if (i % 40 === 10) pr.push({ t: gulls, x: R + rng.range(15, 50), y: rng.range(14, 24), r: rng.range(0, 6) });
        if (i % 50 === 25) pr.push({ t: rng.pick(boards), x: -(R + 11), r: 0.35 });
      } else if (z === 'square' || z === 'tunnel') {
        if (i % 30 > 3) pr.push({ t: hedge, x: R + 9 }, { t: hedge, x: -(R + 9) });
        if (i % 8 === 0) pr.push({ t: light, x: R + 2.6, r: 0 }, { t: light, x: -(R + 2.6), r: Math.PI });
        if (i % 8 === 4) pr.push({ t: palm, x: rng.sign() * (R + 6), s: rng.range(0.9, 1.2), r: rng.range(0, 6) });
        if (i % 22 === 11 && rng.chance(0.8)) pr.push({ t: rng.pick(hotels), x: rng.sign() * (R + rng.range(30, 60)), tint: rng.pick(PASTELS), r: rng.range(-0.3, 0.3) });
        if (i % 7 === 2 && rng.chance(0.8)) pr.push({ t: rng.pick(villas), x: rng.sign() * (R + rng.range(14, 22)), tint: rng.pick(PASTELS), r: rng.range(-0.4, 0.4) });
        if (i % 5 === 1 && rng.chance(0.4)) pr.push({ t: rng.pick(people), x: rng.sign() * (R + rng.range(2, 5)), r: rng.range(0, 6), tint: rng.pick(SHIRTS) });
        if (i % 40 === 20) pr.push({ t: rng.pick(boards), x: (i % 80 === 20 ? -1 : 1) * (R + 11), r: i % 80 === 20 ? 0.35 : -0.35 });
      } else if (z === 'corniche') {
        if (i % 1 === 0) pr.push({ t: wall, x: R + 2.6 });
        if (i % 5 === 0 && rng.chance(0.6)) pr.push({ t: cypress, x: -(R + rng.range(6, 20)), y: 13, s: rng.range(0.8, 1.2), r: rng.range(0, 6) });
        if (i % 9 === 0 && rng.chance(0.5)) pr.push({ t: rng.pick(villas), x: -(R + rng.range(14, 30)), y: 14, tint: rng.pick(PASTELS), r: rng.range(-0.4, 0.4) });
        if (i % 17 === 0 && rng.chance(0.6)) pr.push({ t: boat, x: R + rng.range(90, 260), y: 0, abs: true, s: rng.range(1, 1.5), r: rng.range(-0.6, 0.6) });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: -(R + 3.2), r: 0.2 });
      } else {
        if (i % 3 === 0) pr.push({ t: delR, x: R + 2.6 }, { t: delW, x: -(R + 2.6) });
        if (i % 2 === 0 && Math.abs(s.curve) > 0.0012) pr.push({ t: rail, x: R + 2.4 });
        if (i % 4 === 1 && rng.chance(0.55)) pr.push({ t: rng.chance(0.5) ? pine : cypress, x: -(R + rng.range(6, 40)), s: rng.range(0.8, 1.3), r: rng.range(0, 6) });
        if (i % 12 === 6 && rng.chance(0.6)) pr.push({ t: rng.pick(villas), x: -(R + rng.range(18, 40)), tint: rng.pick(PASTELS), r: rng.range(-0.4, 0.4) });
        if (i % 10 === 5 && rng.chance(0.5)) pr.push({ t: palm, x: R + rng.range(5, 9), s: rng.range(0.9, 1.2), r: rng.range(0, 6) });
        if (i % 19 === 0 && rng.chance(0.6)) pr.push({ t: boat, x: R + rng.range(60, 220), y: 0, abs: true, s: rng.range(0.9, 1.4), r: rng.range(-0.6, 0.6) });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: R + 3.4, r: -0.2 });
      }
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[track.stageStarts[1] + 40].props.push({ t: banner, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    // ---- horizon: Mediterranean afternoon --------------------------------------
    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [0, 0xfff4d8], [1.4, 0xf0f0e0], [3, 0xd8ecf4], [6, 0xb0dcf6], [10, 0x80c8f4], [16, 0x5ab0ee],
      [26, 0x3a94e4], [40, 0x2278d8], [90, 0x1458c0],
    ], FOG), 0);
    const sunDisc = disc(2500, 1.1, 16, 120, [[1.6, 0xfff8e0], [1.2, 0xfff0c8], [1, 0xfffbe8], [0.6, 0xffffff]], 20);
    bd.addLayer(sunDisc, 1);
    bd.sun = { obj: sunDisc, local: discCentre(2500, 1.1, 16) };
    bd.addLayer(clouds(rng, 2350, 12, [0xffffff, 0xf4f8ff, 0xc8d8e8]), 0.8);
    bd.addLayer(mountainRing(rng, 2250, 0x8a9ab0, 260, (a) => {
      const d = Math.atan2(Math.sin(a), Math.cos(a));
      return d < 0.2 ? 1 : 0.15;
    }, undefined, 30), 1);
    bd.addLayer(mountainRing(rng, 2050, 0x4a7a50, 120, (a) => {
      const d = Math.atan2(Math.sin(a), Math.cos(a));
      return d < 0 ? 1 : 0;
    }, undefined, 200, [1.2, 3.5]), 1);
    bd.addLayer(skylineRing(rng, 2000, [0xf0e0c8, 0xe8d0b0, 0xf8ecd8, 0xe0c8a8], [0x8aa0b8, 0xc8a080], 60, (a) => {
      const d = Math.atan2(Math.sin(a), Math.cos(a));
      return d < -0.3 && d > -1.4 ? 1 : 0;
    }, 0.6, 0.2), 1);
    bd.addLayer(ships(rng, 1880, 0.4, 2.2, 7), 1);
    bd.addLayer(seaGlitter(rng, 1880, 1.1, 160), 1);
    bd.addLayer(horizonBand(1900, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
