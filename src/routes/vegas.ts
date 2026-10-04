import { SignAtlas, SignSpec } from '../atlas';
import { Backdrop, clouds, disc, horizonBand, mountainRing, skyDome, skylineRing, stars } from '../backdrop';
import { TRAFFIC, trafficProp } from '../cars/traffic';
import * as P from '../props';
import * as Q from '../props2';
import { makeProfile, RoadStyle } from '../road';
import { Rng } from '../rng';
import { TILE } from '../textures';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PropReg, RouteDef, RouteWorld } from './types';

const FOG = 0x241c3a;
const WALK: [number, number] = [0x6a6478, 0x5e5a6c];
const PLAZA: [number, number] = [0x3a3448, 0x342e42];
const NIGHTSAND: [number, number] = [0x4a3a48, 0x42343f];
const CONC: [number, number] = [0x8a8696, 0x7e7a8a];

const style: RoadStyle = { road: [0x3e3e4a, 0x363642], line: 0xf0f0f0, edge: 0xf0f0f0, rumble: [0x5a5a68, 0x50505c] };
const NEON = [0xff3a8a, 0x40f0ff, 0xffe040, 0xff7030, 0x80ff60, 0xc060ff];

export const vegas: RouteDef = {
  id: 'vegas',
  name: 'LAS VEGAS STRIP',
  lines: ['LAS VEGAS', 'STRIP'],
  night: true,
  hemi: [0x9a70e0, 0x3a2040],
  plate: 0xffffff,
  smoke: 0xc8b8d8,
  card: [0x1a0a2a, 0xffe040],
  music: 'vegas',
  stageNames: ['FREMONT STREET', 'THE STRIP', 'CASINO ROW', 'DESERT HIGHWAY', 'HOOVER LIGHTS'],
  fog: { color: FOG, near: 150, far: 1150 },
  ambient: { color: 0xd0c4ff, intensity: 1.75 },
  sun: { color: 0xffc8e0, intensity: 1.5, dir: [0.4, 1, 0.8] },
  startTime: 60,
  extendTime: 40,
  shadow: 0x22202c,
  trafficColors: [0xffffff, 0xe03030, 0x2a2a30, 0xffe040, 0x40a0ff, 0xd060ff, 0x9a9aa8],
  trafficCount: 18,
  walls: false,
  offroadLimit: R + 18,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1955);
    const profiles = [
      // 0 strip: wide pavements and casino forecourts
      makeProfile(style, [{ w: 0.3, dy: 0.2, c: [0xb0b0bc, 0xa8a8b4] }, { w: 6, c: WALK, tex: TILE.PAVING }, { w: 600, c: PLAZA, tex: TILE.PAVING }],
        [{ w: 0.3, dy: 0.2, c: [0xb0b0bc, 0xa8a8b4] }, { w: 6, c: WALK, tex: TILE.PAVING }, { w: 600, c: PLAZA, tex: TILE.PAVING }]),
      // 1 desert at night
      makeProfile(style, [{ w: 3, c: [0x5a4a50, 0x524448], tex: TILE.DIRT }, { w: 600, c: NIGHTSAND, tex: TILE.SAND }],
        [{ w: 3, c: [0x5a4a50, 0x524448], tex: TILE.DIRT }, { w: 600, c: NIGHTSAND, tex: TILE.SAND }]),
      // 2 dam crest by night
      makeProfile(style,
        [{ w: 1, c: CONC, tex: TILE.CONCRETE }, { w: 0, dy: 1.1, c: [0xa8a4b4, 0x9c98a8] }, { w: 0.8, c: CONC }, { w: 40, abs: -20, c: [0x6a6676, 0x625e6e], tex: TILE.CONCRETE }, { w: 600, abs: -20, c: [0x101a30, 0x0e182c], tex: TILE.BAY }],
        [{ w: 1, c: CONC, tex: TILE.CONCRETE }, { w: 0, dy: 1.1, c: [0xa8a4b4, 0x9c98a8] }, { w: 0.8, c: CONC }, { w: 0, abs: 18, c: [0x5a5666, 0x524e5e] }, { w: 600, abs: 18, c: [0x0e1c40, 0x0c183a], tex: TILE.BAY }]),
      // 3 tunnel
      makeProfile(style,
        [{ w: 0.8, dy: 0.3, c: [0x707080, 0x686878] }, { w: 0, dy: 4.6, c: [0x8a8478, 0x7e786c] }, { w: 0, dy: 0.7, c: [0xffa030, 0x5e5a50] }, { w: 1.6, dy: 2.6, c: [0x6a665c, 0x625e54] }],
        [{ w: 0.8, dy: 0.3, c: [0x707080, 0x686878] }, { w: 0, dy: 4.6, c: [0x8a8478, 0x7e786c] }, { w: 0, dy: 0.7, c: [0xffa030, 0x5e5a50] }, { w: 1.6, dy: 2.6, c: [0x6a665c, 0x625e54] }],
        [0x34322c, 0x2e2c28]),
    ];
    const profileOf = (zone: string, tunnel: boolean) => (tunnel ? 3 : zone === 'desert' ? 1 : zone === 'hoover' ? 2 : 0);

    const b = new TrackBuilder(profileOf, 6);
    b.zone = 'fremont';
    b.straight(30);
    b.stageFrom({ zone: 'fremont', length: 360, curvy: 0.5, hilly: 0.05, yMin: 5, yMax: 7 }, rng);
    b.stageFrom({ zone: 'strip', length: 440, curvy: 0.45, hilly: 0.05, yMin: 5, yMax: 8 }, rng);
    b.stageFrom({ zone: 'casino', length: 400, curvy: 0.7, hilly: 0.1, yMin: 5, yMax: 10 }, rng);
    b.stageFrom({ zone: 'desert', length: 420, curvy: 0.8, hilly: 0.6, yMin: 5, yMax: 40 }, rng);
    b.stageFrom({ zone: 'hoover', length: 380, curvy: 0.6, hilly: 0.2, yMin: 26, yMax: 40, tunnels: 0.12 }, rng);
    const track = b.finish(260);

    // ---- props --------------------------------------------------------------
    const reg = new PropReg();
    const names: SignSpec[] = [
      { bg: 0x10101c, fg: 0xffe040, text: 'LUCKY 7', border: 0xff3a8a },
      { bg: 0x10101c, fg: 0x40f0ff, text: 'NEON', sub: 'PALACE', border: 0x40f0ff },
      { bg: 0x10101c, fg: 0xff3a8a, text: 'DESERT', sub: 'ROSE', border: 0xffe040 },
      { bg: 0x10101c, fg: 0xffe040, text: 'GOLDEN', sub: 'STAR', border: 0xffe040 },
      { bg: 0x10101c, fg: 0x80ff60, text: 'JACKPOT', border: 0x80ff60 },
      { bg: 0x10101c, fg: 0xffffff, text: 'SILVER', sub: 'SPUR', border: 0xc060ff },
    ];
    const towers = names.map((n, i) => reg.add(Q.casinoTower(rng, atlas.add(n, 2, 1), NEON[i % NEON.length])));
    const pylonWords: SignSpec[] = [
      { bg: 0x10101c, fg: 0xff3a8a, text: 'CASINO', border: 0xff3a8a },
      { bg: 0x10101c, fg: 0xffe040, text: 'SLOTS', sub: '24 HOURS', border: 0xffe040 },
      { bg: 0x10101c, fg: 0x40f0ff, text: 'BUFFET', sub: '$4.99', border: 0x40f0ff },
      { bg: 0x10101c, fg: 0xffffff, text: 'SHOWS', sub: 'TONIGHT', border: 0xff7030 },
      { bg: 0x10101c, fg: 0xff7ab0, text: 'WEDDING', sub: 'CHAPEL', border: 0xff7ab0 },
      { bg: 0x10101c, fg: 0x80ff60, text: 'MOTEL', sub: 'VACANCY', border: 0x80ff60 },
    ];
    const pylons = pylonWords.map((w, i) => reg.add(Q.neonPylon(atlas.add(w, 2, 2), NEON[i % NEON.length], NEON[(i + 2) % NEON.length], rng.range(10, 18))));
    const fronts = [0, 1, 2].map((i) => reg.add(Q.casinoFront(rng, NEON[(i * 2) % NEON.length])));
    const palm = reg.add(P.palmTree());
    const lamp = reg.add(P.streetLight(10, 0xffd080, 0x8a8a98, 4, true));
    const cactus = reg.add(Q.cactus());
    const joshua = reg.add(Q.joshuaTree());
    const intake = reg.add(Q.intakeTower());
    const people = [reg.add(P.person(0)), reg.add(P.person(1))];
    const portal = reg.add(P.tunnelPortal(0x6a6a78, 0xffa030, 7.9));
    const reflector = reg.add(P.barrierLamp(0xffb030));
    const boards = [
      { bg: 0x10101c, fg: 0xffe040, text: 'WIN BIG', sub: 'LOOSE SLOTS', border: 0xffe040 },
      { bg: 0xe02a2a, fg: 0xffffff, text: 'LIVE', sub: 'ELVIS SHOW', border: 0xffffff },
      { bg: 0xffe040, fg: 0xe02a2a, text: 'TURBO', sub: 'MOTOR OIL', border: 0xe02a2a },
      { bg: 0x1a5ab8, fg: 0xffffff, text: 'HOOVER DAM', sub: 'TOURS', border: 0xffe040 },
    ].map((s) => reg.add(P.billboard(atlas.add(s, 2, 2), 9, 4.5)));
    const welcome = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0xe02a2a, text: 'WELCOME TO LAS VEGAS', border: 0xffe040 }, 4, 1), 0xd8d8e0, 0xff3a8a, 0xffe040));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0x10101c, fg: 0xffe040, text: 'START', border: 0xffe040 }, 4, 1), 0x9a9aa8, 0xff3a8a, 0xffe040));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0x9a9aa8, 0x1a5ae0, 0xffe040));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0x9a9aa8, 0x1a1a1a, 0xff3a8a));
    const chevR = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'R' }, 2, 1)));
    const chevL = reg.add(P.chevron(atlas.add({ bg: 0xffd020, fg: 0x101010, text: '', arrows: 'L' }, 2, 1)));
    const T = TRAFFIC;
    const trafficTypes = [T.caprice, T.crown, T.cherokee, T.w124, T.f150].map((s) => reg.add(trafficProp(s, { night: true })))
      .concat([reg.add(trafficProp(T.caprice, { taxi: true, night: true })), reg.add(trafficProp(T.caprice, { taxi: true, night: true })),
        reg.add(P.bus(0xff3a8a)), reg.add(P.truck(0x2a2a30))]);
    const SHIRTS = [0xff4a6a, 0x2a90ff, 0xffe040, 0xffffff, 0x40d0a0, 0xc060ff];

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
      if (Math.abs(s.curve) > 0.0016 && i % 5 === 0 && z !== 'strip') {
        pr.push(s.curve > 0 ? { t: chevR, x: -(R + 5.5), r: 0.15 } : { t: chevL, x: R + 5.5, r: -0.15 });
      }
      if (z === 'fremont' || z === 'strip' || z === 'casino') {
        if (i % 7 === 0) pr.push({ t: lamp, x: R + 2.4, r: 0 });
        if (i % 7 === 3) pr.push({ t: lamp, x: -(R + 2.4), r: Math.PI });
        if (i % 6 === 1) pr.push({ t: palm, x: rng.sign() * (R + rng.range(4, 6)), s: rng.range(1, 1.3), r: rng.range(0, 6) });
        if (i % 4 === 2 && rng.chance(z === 'fremont' ? 0.6 : 0.35)) pr.push({ t: rng.pick(people), x: rng.sign() * (R + rng.range(2, 5)), r: rng.range(0, 6), tint: rng.pick(SHIRTS) });
        const tdens = z === 'strip' ? 0.7 : z === 'casino' ? 0.55 : 0.3;
        if (i % 24 === 0 && rng.chance(tdens)) pr.push({ t: rng.pick(towers), x: -(R + rng.range(45, 90)), r: rng.range(0.1, 0.4) });
        if (i % 24 === 12 && rng.chance(tdens)) pr.push({ t: rng.pick(towers), x: R + rng.range(45, 90), r: -rng.range(0.1, 0.4) });
        if (i % 10 === 4 && rng.chance(0.75)) pr.push({ t: rng.pick(pylons), x: -(R + rng.range(9, 14)), r: 0.45 });
        if (i % 10 === 9 && rng.chance(0.75)) pr.push({ t: rng.pick(pylons), x: R + rng.range(9, 14), r: -0.45 });
        if (i % 16 === 6 && rng.chance(0.7)) pr.push({ t: rng.pick(fronts), x: rng.sign() * (R + rng.range(26, 34)), r: rng.range(-0.3, 0.3) });
      } else if (z === 'desert') {
        if (i % 2 === 0) pr.push({ t: reflector, x: R + 2.6, y: 0.4 }, { t: reflector, x: -(R + 2.6), y: 0.4 });
        if (i % 4 === 0 && rng.chance(0.5)) pr.push({ t: cactus, x: rng.sign() * (R + rng.range(6, 40)), s: rng.range(0.8, 1.3), r: rng.range(0, 6), tint: 0x9a9ab8 });
        if (i % 6 === 3 && rng.chance(0.4)) pr.push({ t: joshua, x: rng.sign() * (R + rng.range(8, 50)), s: rng.range(0.8, 1.3), r: rng.range(0, 6), tint: 0x9a9ab8 });
        if (i % 60 === 30) pr.push({ t: rng.pick(boards), x: (i % 120 === 30 ? -1 : 1) * (R + 12), r: i % 120 === 30 ? 0.35 : -0.35 });
        if (i % 90 === 45) pr.push({ t: rng.pick(pylons), x: R + 14, r: -0.4 });
      } else if (z === 'hoover') {
        if (i % 6 === 0) pr.push({ t: lamp, x: R + 2.4, r: 0 });
        if (i % 6 === 3) pr.push({ t: lamp, x: -(R + 2.4), r: Math.PI });
        if (i % 70 === 25) pr.push({ t: intake, x: R + rng.range(40, 70), y: 18, abs: true });
      }
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[track.stageStarts[1] + 20].props.push({ t: welcome, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    // ---- horizon: desert night, the glow of the Strip ---------------------------
    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [0, 0xc05a9a], [1.5, 0x9a4a96], [3.5, 0x6a3a8a], [6, 0x46307a], [10, 0x2e226a],
      [18, 0x1c1858], [30, 0x100e40], [90, 0x05051e],
    ], FOG), 0);
    bd.addLayer(stars(rng, 340), 0.3);
    bd.addLayer(disc(2500, 0.8, 22, 60, [[1.6, 0x4a3a7a], [1.3, 0x8a7aaa], [1, 0xfff6d8], [0.8, 0xffffee]], 16), 1);
    bd.addLayer(clouds(rng, 2380, 6, [0x6a3a80, 0x4a2a66, 0xd05a98], -Math.PI, Math.PI, [5, 14]), 0.7);
    bd.addLayer(mountainRing(rng, 2250, 0x2a2244, 200, () => 1, undefined, 34), 1);
    bd.addLayer(skylineRing(rng, 2050, [0x1a1630, 0x221c3a, 0x2a2244], [0xffe060, 0xff3a8a, 0x40f0ff, 0xffffff], 170, (a) => {
      const d = Math.atan2(Math.sin(a), Math.cos(a));
      return Math.abs(d) < 1.2 ? 1 : 0;
    }, 0.9, 0.5), 1);
    bd.addLayer(horizonBand(1900, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
