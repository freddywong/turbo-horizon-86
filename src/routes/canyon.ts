import { SignAtlas } from '../atlas';
import { Backdrop, clouds, disc, discCentre, horizonBand, mesaRing, mountainRing, skyDome } from '../backdrop';
import { TRAFFIC, trafficProp } from '../cars/traffic';
import * as P from '../props';
import * as Q from '../props2';
import { makeProfile, RoadStyle } from '../road';
import { Rng } from '../rng';
import { TILE } from '../textures';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PropReg, RouteDef, RouteWorld } from './types';

const FOG = 0xf2cfa4;
const DIRT: [number, number] = [0xc8784a, 0xbc6e42];
const DESERT: [number, number] = [0xdc9a5e, 0xd09056];
const PALE: [number, number] = [0xe8b880, 0xdcac74];
const ROCK: [number, number] = [0xb05a36, 0xa04e2e];
const LAKE: [number, number] = [0x1a6aa8, 0x1862a0];
const CONC: [number, number] = [0xe4dccc, 0xd8d0c0];

const style: RoadStyle = { road: [0x8a8288, 0x7e767c], line: 0xffd040, edge: 0xffffff, rumble: [0xffffff, 0xd05030] };

export const canyon: RouteDef = {
  id: 'canyon',
  name: 'GRAND CANYON',
  lines: ['GRAND', 'CANYON'],
  night: false,
  hemi: [0xa8d0ff, 0xd88a50],
  plate: 0xffffff,
  smoke: 0xe8c8a0,
  card: [0xc0582a, 0xffe8a0],
  music: 'desert',
  stageNames: ['ROUTE 66 DINER', 'PAINTED DESERT', 'CANYON RIM', 'HOOVER DAM', 'MONUMENT VALLEY'],
  fog: { color: FOG, near: 180, far: 1200 },
  ambient: { color: 0xfff0e0, intensity: 1.85 },
  sun: { color: 0xffe2b8, intensity: 2.5, dir: [0.6, 0.9, -0.6] },
  startTime: 60,
  extendTime: 40,
  shadow: 0x6a4a3a,
  trafficColors: [0xd8d0c0, 0x8a2a20, 0x2a4a8a, 0xffffff, 0x4a6a3a, 0xc89a40, 0x6a6a72],
  trafficCount: 14,
  walls: false,
  offroadLimit: R + 26,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1966);
    const t = (tex: number) => tex;
    const profiles = [
      // 0 open desert
      makeProfile(style, [{ w: 4, c: DIRT, tex: TILE.DIRT }, { w: 600, c: DESERT, tex: TILE.SAND }], [{ w: 4, c: DIRT, tex: TILE.DIRT }, { w: 600, c: DESERT, tex: TILE.SAND }]),
      // 1 roadside strip: gravel lots
      makeProfile(style, [{ w: 2, c: DIRT, tex: TILE.DIRT }, { w: 24, c: [0xb8a890, 0xac9c84], tex: TILE.PAVING }, { w: 600, c: DESERT, tex: TILE.SAND }],
        [{ w: 2, c: DIRT, tex: TILE.DIRT }, { w: 24, c: [0xb8a890, 0xac9c84], tex: TILE.PAVING }, { w: 600, c: DESERT, tex: TILE.SAND }]),
      // 2 canyon rim: rock wall on the left, sheer drop on the right
      makeProfile(style,
        [{ w: 2.5, c: DIRT, tex: TILE.DIRT }, { w: 1.5, dy: 16, c: ROCK, tex: TILE.DIRT }, { w: 600, dy: 4, c: [0xc8703e, 0xbc6838], tex: TILE.DIRT }],
        [{ w: 3, c: DIRT, tex: TILE.DIRT }, { w: 6, abs: 0, c: ROCK, tex: TILE.DIRT }, { w: 600, abs: 0, c: [0xa85434, 0x9c4c2e], tex: TILE.DIRT }]),
      // 3 dam crest: parapets, the dam face plunging on the left, the reservoir on the right
      makeProfile(style,
        [{ w: 1, c: CONC, tex: TILE.CONCRETE }, { w: 0, dy: 1.1, c: [0xf0e8d8, 0xe8e0d0] }, { w: 0.8, c: CONC }, { w: 40, abs: -30, c: [0xd0c8b8, 0xc4bcac], tex: TILE.CONCRETE }, { w: 600, abs: -30, c: [0x2a7a6a, 0x26705e], tex: t(TILE.BAY) }],
        [{ w: 1, c: CONC, tex: TILE.CONCRETE }, { w: 0, dy: 1.1, c: [0xf0e8d8, 0xe8e0d0] }, { w: 0.8, c: CONC }, { w: 0, abs: 34, c: [0xc8c0b0, 0xbcb4a4] }, { w: 600, abs: 34, c: LAKE, tex: TILE.BAY }]),
      // 4 monument valley: paler sand
      makeProfile(style, [{ w: 4, c: DIRT, tex: TILE.DIRT }, { w: 600, c: PALE, tex: TILE.SAND }], [{ w: 4, c: DIRT, tex: TILE.DIRT }, { w: 600, c: PALE, tex: TILE.SAND }]),
      // 5 tunnel cut through red rock
      makeProfile(style,
        [{ w: 1.2, dy: 0.3, c: [0x9a8a82, 0x8e7e76] }, { w: 0, dy: 5, c: [0xa0583a, 0x944e34] }, { w: 0, dy: 0.8, c: [0xffd060, 0x6a5040] }, { w: 1.5, dy: 2.8, c: [0x8a4a30, 0x80442c] }],
        [{ w: 1.2, dy: 0.3, c: [0x9a8a82, 0x8e7e76] }, { w: 0, dy: 5, c: [0xa0583a, 0x944e34] }, { w: 0, dy: 0.8, c: [0xffd060, 0x6a5040] }, { w: 1.5, dy: 2.8, c: [0x8a4a30, 0x80442c] }],
        [0x5a3426, 0x522e22]),
    ];
    const profileOf = (zone: string, tunnel: boolean) =>
      tunnel ? 5 : zone === 'diner' ? 1 : zone === 'rim' ? 2 : zone === 'dam' ? 3 : zone === 'valley' ? 4 : 0;

    const b = new TrackBuilder(profileOf, 6);
    b.zone = 'diner';
    b.straight(30);
    b.stageFrom({ zone: 'diner', length: 380, curvy: 0.55, hilly: 0.2, yMin: 5, yMax: 12 }, rng);
    b.stageFrom({ zone: 'painted', length: 400, curvy: 0.7, hilly: 0.6, yMin: 5, yMax: 34 }, rng);
    b.stageFrom({ zone: 'rim', length: 420, curvy: 1, hilly: 0.5, yMin: 60, yMax: 90, tunnels: 0.14 }, rng);
    b.stageFrom({ zone: 'dam', length: 300, curvy: 0.3, hilly: 0.02, yMin: 40, yMax: 40 }, rng);
    b.stageFrom({ zone: 'valley', length: 440, curvy: 0.6, hilly: 0.35, yMin: 5, yMax: 22 }, rng);
    const track = b.finish(260);

    // ---- props --------------------------------------------------------------
    const reg = new PropReg();
    const cactus = reg.add(Q.cactus());
    const joshua = reg.add(Q.joshuaTree());
    const buttes = [0, 1, 2].map(() => reg.add(Q.butte(rng)));
    const arch = reg.add(Q.rockArch());
    const intake = reg.add(Q.intakeTower());
    const rock = reg.add(P.rock());
    const bush = reg.add(P.bush());
    const rail = reg.add(P.guardrail());
    const light = reg.add(P.streetLight(9, 0xfff0c0));
    const motel = reg.add(P.hotel(2, rng));
    const portal = reg.add(P.tunnelPortal(0xa0583a, 0xffd040, 7.9));
    const shops = [
      { bg: 0xffffff, fg: 0xe02a2a, text: 'DINER' }, { bg: 0x1a3a8a, fg: 0xffe040, text: 'GAS' },
      { bg: 0xffffff, fg: 0x1a7a3a, text: 'MOTEL' }, { bg: 0xe02a2a, fg: 0xffffff, text: 'CAFE' },
      { bg: 0xffe040, fg: 0x1a1a1a, text: 'TRADING POST' },
    ].map((s) => reg.add(P.shop(atlas.add(s, 2, 1))));
    const boards = [
      { bg: 0xffffff, fg: 0x1a1a1a, text: 'ROUTE 66', sub: 'HISTORIC HIGHWAY', border: 0x1a1a1a },
      { bg: 0xe02a2a, fg: 0xffffff, text: 'LAST GAS', sub: '80 MILES', border: 0xffffff },
      { bg: 0xffe040, fg: 0xe02a2a, text: 'TURBO', sub: 'MOTOR OIL', border: 0xe02a2a },
      { bg: 0x1a6ab8, fg: 0xffffff, text: 'CANYON', sub: 'VIEWPOINT 5 MI', border: 0xffe040 },
      { bg: 0xff8a20, fg: 0xffffff, text: 'COLD', sub: 'ROOT BEER', border: 0xffffff },
    ].map((s) => reg.add(P.billboard(atlas.add(s, 2, 2), 9, 4.5, 0x8a6a4a, 0xf0e8d8)));
    const roadSigns = [
      { bg: 0x1a7a3a, fg: 0xffffff, text: 'FLAGSTAFF', sub: '62', border: 0xffffff },
      { bg: 0x1a7a3a, fg: 0xffffff, text: 'LAS VEGAS', sub: '104', border: 0xffffff },
      { bg: 0xffffff, fg: 0x1a1a1a, text: 'US', sub: '66', border: 0x1a1a1a },
    ].map((s) => reg.add(P.roadSign(atlas.add(s, 1, 1))));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0xc0381a, text: 'START', stripes: 0x1a1a1a }, 4, 1), 0xd8c8b0, 0xc0381a));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0xd8c8b0, 0x1a5ae0));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0xd8c8b0, 0x1a1a1a));
    const archSign = reg.add(P.gate(atlas.add({ bg: 0x8a3a1a, fg: 0xffe8a0, text: 'GRAND CANYON', border: 0xffe8a0 }, 4, 1), 0x6a4a2a, 0x8a3a1a, 0xffe8a0));
    const chevR = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'R' }, 2, 1)));
    const chevL = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'L' }, 2, 1)));
    const delR = reg.add(P.delineator(true)), delW = reg.add(P.delineator(false));
    const kms = Array.from({ length: 16 }, (_, k) => reg.add(P.kmPost(atlas.add({ bg: 0x1a7a3a, fg: 0xffffff, text: String(k + 1), border: 0xffffff }, 1, 1))));
    const T = TRAFFIC;
    const trafficTypes = [T.f150, T.cherokee, T.caprice, T.volvo240, T.golf, T.w124].map((s) => reg.add(trafficProp(s)))
      .concat([reg.add(P.truck(0xc0381a)), reg.add(P.truck(0x1a5ab8)), reg.add(P.bus(0x3a8a5a))]);

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
      if (i % 3 === 0 && z !== 'dam') pr.push({ t: delR, x: R + 2.6 }, { t: delW, x: -(R + 2.6) });
      if (i % 167 === 100) pr.push({ t: kms[Math.min(kms.length - 1, Math.floor((i * 6) / 1000))], x: R + 3.6, r: -0.3 });
      if (Math.abs(s.curve) > 0.0016 && i % 5 === 0 && z !== 'dam') {
        pr.push(s.curve > 0 ? { t: chevR, x: -(R + 5.5), r: 0.15 } : { t: chevL, x: R + 5.5, r: -0.15 });
      }
      const scrub = (dens: number, near: number) => {
        if (i % 4 === 0 && rng.chance(dens)) pr.push({ t: cactus, x: rng.sign() * (R + rng.range(near, near + 30)), s: rng.range(0.8, 1.3), r: rng.range(0, 6) });
        if (i % 6 === 1 && rng.chance(dens * 0.7)) pr.push({ t: joshua, x: rng.sign() * (R + rng.range(near, near + 40)), s: rng.range(0.8, 1.4), r: rng.range(0, 6) });
        if (i % 7 === 3 && rng.chance(dens)) pr.push({ t: bush, x: rng.sign() * (R + rng.range(5, 30)), s: rng.range(0.3, 0.6), sy: 0.6, r: rng.range(0, 6), tint: 0xb8a060 });
        if (i % 19 === 0 && rng.chance(0.5)) pr.push({ t: rock, x: rng.sign() * (R + rng.range(10, 40)), s: rng.range(0.8, 2), r: rng.range(0, 6), tint: 0xffb090 });
      };
      if (z === 'diner') {
        if (i % 18 === 6 && rng.chance(0.8)) pr.push({ t: rng.pick(shops), x: -(R + rng.range(14, 18)), tint: rng.pick([0xffffff, 0xffe8c8, 0xd8f0ff]), r: 0.4 });
        if (i % 18 === 15 && rng.chance(0.8)) pr.push({ t: rng.pick(shops), x: R + rng.range(14, 18), tint: rng.pick([0xffffff, 0xffe8c8, 0xd8f0ff]), r: -0.4 });
        if (i % 60 === 30) pr.push({ t: motel, x: rng.sign() * (R + rng.range(40, 60)), tint: rng.pick([0xffffff, 0xfff0d8]), r: rng.range(-0.3, 0.3) });
        if (i % 9 === 0) pr.push({ t: light, x: R + 3, r: 0 });
        if (i % 45 === 20) pr.push({ t: rng.pick(boards), x: (i % 90 === 20 ? -1 : 1) * (R + 12), r: i % 90 === 20 ? 0.35 : -0.35 });
        scrub(0.25, 30);
      } else if (z === 'painted' || z === 'valley') {
        scrub(z === 'valley' ? 0.45 : 0.6, 6);
        if (i % 30 === 10 && rng.chance(0.85)) {
          const near = z === 'valley' ? rng.range(60, 180) : rng.range(140, 320);
          pr.push({ t: rng.pick(buttes), x: rng.sign() * (R + near), s: rng.range(0.8, 1.4), sy: rng.range(0.8, 1.3), r: rng.range(0, 6) });
        }
        if (i % 70 === 35) pr.push({ t: rng.pick(boards), x: (i % 140 === 35 ? -1 : 1) * (R + 12), r: i % 140 === 35 ? 0.35 : -0.35 });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: R + 3.4, r: -0.2 });
      } else if (z === 'rim') {
        if (i % 2 === 0) pr.push({ t: rail, x: R + 2.4 });
        if (i % 5 === 0 && rng.chance(0.5)) pr.push({ t: rock, x: -(R + rng.range(6, 18)), y: rng.range(14, 18), s: rng.range(0.6, 1.4), r: rng.range(0, 6), tint: 0xffa080 });
        if (i % 8 === 2 && rng.chance(0.4)) pr.push({ t: cactus, x: -(R + rng.range(8, 30)), y: 16, s: rng.range(0.8, 1.2), r: rng.range(0, 6) });
        if (i % 26 === 13 && rng.chance(0.7)) pr.push({ t: rng.pick(buttes), x: R + rng.range(80, 260), y: 0, abs: true, s: rng.range(0.9, 1.6), sy: rng.range(1.2, 2), r: rng.range(0, 6) });
      } else if (z === 'dam') {
        if (i % 8 === 0) pr.push({ t: light, x: R + 2.6, r: 0 });
        if (i % 8 === 4) pr.push({ t: light, x: -(R + 2.6), r: Math.PI });
        if (i % 70 === 25) pr.push({ t: intake, x: R + rng.range(40, 70), y: 34, abs: true });
      }
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[track.stageStarts[2] + 30].props.push({ t: archSign, x: 0 });
    segs[track.stageStarts[4] + 180].props.push({ t: arch, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    // ---- horizon --------------------------------------------------------------
    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [0, 0xffe2b0], [1.5, 0xffcc8c], [3.5, 0xf8b07a], [6, 0xd8b8b0], [9, 0xa8c8e4], [14, 0x78b4e8],
      [22, 0x4c98e0], [35, 0x2c7ed4], [90, 0x1a5cb8],
    ], FOG), 0);
    const sunDisc = disc(2500, -0.7, 9, 150, [[1.5, 0xffe8c0], [1.2, 0xffd8a0], [1, 0xfff0c0], [0.7, 0xfffbe8]], 20);
    bd.addLayer(sunDisc, 1);
    bd.sun = { obj: sunDisc, local: discCentre(2500, -0.7, 9) };
    bd.addLayer(clouds(rng, 2350, 8, [0xffffff, 0xffe8d0, 0xe0a890]), 0.8);
    bd.addLayer(mountainRing(rng, 2250, 0x9a86b8, 220, () => 1, undefined, 30), 1);
    bd.addLayer(mesaRing(rng, 2100, [0x9a4428, 0xb8583a, 0xd0744a, 0xb05a3a, 0xe08c58], 170, (a) => (Math.sin(a * 3) > -0.6 ? 1 : 0.4), 26), 1);
    bd.addLayer(horizonBand(1900, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
