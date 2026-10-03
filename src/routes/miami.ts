import { SignAtlas } from '../atlas';
import { Backdrop, clouds, disc, horizonBand, mountainRing, skyDome, skylineRing } from '../backdrop';
import * as P from '../props';
import { makeProfile, RoadStyle } from '../road';
import { Rng } from '../rng';
import { ROAD_HALF as R, TrackBuilder } from '../track';
import { PASTELS, PropReg, RouteDef, RouteWorld } from './types';

const SAND: [number, number] = [0xf4dc98, 0xecd088];
const SEA: [number, number] = [0x18a8dc, 0x14a0d4];
const GRASS: [number, number] = [0x64cc4c, 0x58bc44];
const HILLGRASS: [number, number] = [0x4cb43c, 0x42a436];
const WALK: [number, number] = [0xe0d4c4, 0xd4c8b8];
const FOG = 0xbfe6e2;

const style: RoadStyle = { road: [0xa6a6ae, 0x94949c], line: 0xffffff, rumble: [0xff2a2a, 0xffffff] };

export const miami: RouteDef = {
  id: 'miami',
  name: 'MIAMI BEACH',
  lines: ['MIAMI', 'BEACH'],
  stageNames: ['OCEAN DRIVE', 'PASTEL BOULEVARD', 'BAYSIDE CAUSEWAY', 'COCONUT HILLS', 'SUNSET POINT'],
  fog: { color: FOG, near: 160, far: 1150 },
  ambient: { color: 0xffffff, intensity: 1.9 },
  sun: { color: 0xfff2dc, intensity: 2.4, dir: [-0.5, 1, 0.8] },
  carColor: 0xe8202a,
  carStripe: 0xffffff,
  startTime: 60,
  extendTime: 40,
  trafficColors: [0xff5a5a, 0x5ab0ff, 0xffe05a, 0xffffff, 0x60e0a0, 0xff9ad0, 0xffa040],
  trafficCount: 16,
  walls: false,
  offroadLimit: R + 26,

  build(atlas: SignAtlas): RouteWorld {
    const rng = new Rng(1986);
    // ---- road cross-sections --------------------------------------------
    const profiles = [
      // 0 beach: town on the left, sand sloping into the sea on the right
      makeProfile(style, [{ w: 4, c: WALK }, { w: 600, c: GRASS }], [{ w: 6, c: SAND }, { w: 30, abs: 0.4, c: SAND }, { w: 600, abs: 0, c: SEA }]),
      // 1 city boulevard
      makeProfile(style, [{ w: 6, c: WALK }, { w: 600, c: [0x70d258, 0x66c650] }], [{ w: 6, c: WALK }, { w: 600, c: [0x70d258, 0x66c650] }]),
      // 2 causeway: low white wall, then the bay on both sides
      makeProfile(style,
        [{ w: 1, c: WALK }, { w: 0, dy: 0.9, c: [0xffffff, 0xf0f0f0] }, { w: 0.6, c: [0xffffff, 0xffffff] }, { w: 0, abs: 0, c: [0xd0d0d0, 0xc0c0c0] }, { w: 600, abs: 0, c: SEA }],
        [{ w: 1, c: WALK }, { w: 0, dy: 0.9, c: [0xffffff, 0xf0f0f0] }, { w: 0.6, c: [0xffffff, 0xffffff] }, { w: 0, abs: 0, c: [0xd0d0d0, 0xc0c0c0] }, { w: 600, abs: 0, c: SEA }]),
      // 3 hills
      makeProfile(style, [{ w: 3, c: [0xd8c890, 0xccbc84] }, { w: 600, c: HILLGRASS }], [{ w: 3, c: [0xd8c890, 0xccbc84] }, { w: 600, c: HILLGRASS }]),
      // 4 tunnel through the hills
      makeProfile(style,
        [{ w: 1.2, dy: 0.3, c: [0xb0b0b8, 0xa8a8b0] }, { w: 0, dy: 5, c: [0xe8e0c8, 0xd8d0b8] }, { w: 0, dy: 0.8, c: [0xffd060, 0x707080] }, { w: 1.5, dy: 2.8, c: [0xc8c0a8, 0xbcb49c] }],
        [{ w: 1.2, dy: 0.3, c: [0xb0b0b8, 0xa8a8b0] }, { w: 0, dy: 5, c: [0xe8e0c8, 0xd8d0b8] }, { w: 0, dy: 0.8, c: [0xffd060, 0x707080] }, { w: 1.5, dy: 2.8, c: [0xc8c0a8, 0xbcb49c] }],
        [0x585868, 0x50505e]),
    ];
    const profileOf = (zone: string, tunnel: boolean) =>
      tunnel ? 4 : zone === 'city' ? 1 : zone === 'causeway' ? 2 : zone === 'hills' ? 3 : 0;

    // ---- course -----------------------------------------------------------
    const b = new TrackBuilder(profileOf, 3);
    b.zone = 'beach';
    b.straight(30);
    b.stageFrom({ zone: 'beach', length: 400, curvy: 0.75, hilly: 0.1, yMin: 2.5, yMax: 6 }, rng);
    b.stageFrom({ zone: 'city', length: 400, curvy: 0.8, hilly: 0.25, yMin: 3, yMax: 14 }, rng);
    b.stageFrom({ zone: 'causeway', length: 380, curvy: 0.6, hilly: 0.1, yMin: 3, yMax: 5 }, rng);
    b.stageFrom({ zone: 'hills', length: 420, curvy: 1, hilly: 1, yMin: 4, yMax: 70, tunnels: 0.15, tunnelZone: 'hills' }, rng);
    b.stageFrom({ zone: 'beach2', length: 420, curvy: 0.7, hilly: 0.15, yMin: 2.5, yMax: 6 }, rng);
    const track = b.finish(260);

    // ---- props --------------------------------------------------------------
    const reg = new PropReg();
    const palm = reg.add(P.palmTree());
    const tree = reg.add(P.deciduousTree());
    const bush = reg.add(P.bush());
    const rock = reg.add(P.rock());
    const umb = [reg.add(P.umbrella([0xff3040, 0xffffff])), reg.add(P.umbrella([0x2a70ff, 0xffe040])), reg.add(P.umbrella([0x20c0a0, 0xff80b0]))];
    const guard = reg.add(P.lifeguardTower());
    const hotels = [0, 1, 2].map((s) => reg.add(P.hotel(s, rng)));
    const light = reg.add(P.streetLight(8, 0xfff4c0));
    const rail = reg.add(P.guardrail());
    const islet = reg.add(P.islet());
    const portal = reg.add(P.hillPortal());
    const signs = [
      { bg: 0xff5a8a, fg: 0xffffff, text: 'SUNSET', sub: 'COLA', border: 0xffffff },
      { bg: 0x2a8aff, fg: 0xffffff, text: 'SURF', sub: 'SHOP', border: 0xffe040 },
      { bg: 0xffe040, fg: 0xe02a2a, text: 'TURBO', sub: 'MOTOR OIL', border: 0xe02a2a },
      { bg: 0xffffff, fg: 0x1a7ad8, text: 'BEACH', sub: 'CLUB 86', border: 0xff5a8a },
      { bg: 0x20b090, fg: 0xffffff, text: 'PALM', sub: 'RESORT', border: 0xffffff },
      { bg: 0xff8a20, fg: 0xffffff, text: 'MANGO', sub: 'JUICE', border: 0xffffff },
    ].map((s) => reg.add(P.billboard(atlas.add(s, 2, 2), 9, 4.5)));
    const shopSigns = [
      { bg: 0xffffff, fg: 0xff3a6a, text: 'DINER' }, { bg: 0x1a1a3a, fg: 0x40e0ff, text: 'DISCO' },
      { bg: 0xffffff, fg: 0x2a7ad8, text: 'MOTEL' }, { bg: 0xff5a8a, fg: 0xffffff, text: 'ICE CREAM' },
    ].map((s) => reg.add(P.shop(atlas.add(s, 2, 1))));
    const roadSigns = [
      { bg: 0x1a7a3a, fg: 0xffffff, text: 'MIAMI', sub: 'BEACH 12', border: 0xffffff },
      { bg: 0x1a7a3a, fg: 0xffffff, text: 'KEYS', sub: 'NEXT EXIT', border: 0xffffff },
      { bg: 0x1a5ab0, fg: 0xffffff, text: 'ROUTE', sub: 'A1A', border: 0xffffff },
    ].map((s) => reg.add(P.roadSign(atlas.add(s, 1, 1))));
    const gStart = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0xe02a2a, text: 'START', stripes: 0x1a1a1a }, 4, 1)));
    const gCheck = reg.add(P.gate(atlas.add({ bg: 0xffe040, fg: 0x1a1a1a, text: 'CHECKPOINT' }, 4, 1), 0xf0f0f0, 0x1a5ae0));
    const gGoal = reg.add(P.gate(atlas.add({ bg: 0xffffff, fg: 0x000000, text: 'GOAL', stripes: -1 }, 4, 1), 0xf0f0f0, 0x1a1a1a));
    const trafficTypes = [reg.add(P.sedan()), reg.add(P.sedan()), reg.add(P.van()), reg.add(P.truck(0x2a8aff))];

    // ---- scenery placement (sparse on purpose) -----------------------------
    const segs = track.segs;
    for (let i = 10; i < segs.length; i++) {
      const s = segs[i];
      const pr = s.props;
      if (s.tunnel) {
        if (!segs[i - 1].tunnel) pr.push({ t: portal, x: 0 });
        continue;
      }
      const z = s.zone;
      if (z === 'beach' || z === 'beach2') {
        if (i % 7 === 0 && rng.chance(0.85)) pr.push({ t: palm, x: R + rng.range(4.5, 7), s: rng.range(0.9, 1.3), r: rng.range(0, 6) });
        if (i % 7 === 3 && rng.chance(0.5)) pr.push({ t: palm, x: -(R + rng.range(5, 9)), s: rng.range(0.9, 1.3), r: rng.range(0, 6) });
        if (i % 9 === 0 && rng.chance(z === 'beach2' ? 0.75 : 0.45)) {
          pr.push({ t: rng.pick(umb), x: R + rng.range(14, 26), r: rng.range(0, 6) });
          if (rng.chance(0.5)) pr.push({ t: rng.pick(umb), x: R + rng.range(14, 26), r: rng.range(0, 6) });
        }
        if (z === 'beach2' && i % 70 === 35) pr.push({ t: guard, x: R + 22, r: -0.6 });
        if (i % 55 === 20) pr.push({ t: rng.pick(hotels), x: -(R + rng.range(40, 70)), tint: rng.pick(PASTELS), r: rng.range(-0.3, 0.3) });
        if (i % 80 === 50) pr.push({ t: rng.pick(signs), x: -(R + 12), r: 0.35 });
        if (i % 37 === 0 && rng.chance(0.5)) pr.push({ t: rock, x: R + rng.range(24, 32), s: rng.range(0.6, 1.2), r: rng.range(0, 6) });
        if (i % 120 === 60) pr.push({ t: rng.pick(roadSigns), x: R + 3, r: -0.2 });
      } else if (z === 'city') {
        if (i % 14 === 0 && rng.chance(0.75)) pr.push({ t: rng.pick(shopSigns), x: -(R + rng.range(15, 18)), tint: rng.pick(PASTELS), r: 0.5 });
        if (i % 14 === 7 && rng.chance(0.75)) pr.push({ t: rng.pick(shopSigns), x: R + rng.range(15, 18), tint: rng.pick(PASTELS), r: -0.5 });
        if (i % 8 === 0) pr.push({ t: light, x: R + 3, r: 0 }, { t: light, x: -(R + 3), r: Math.PI });
        if (i % 8 === 4) {
          pr.push({ t: palm, x: R + 6.5, s: rng.range(0.9, 1.2), r: rng.range(0, 6) });
          pr.push({ t: palm, x: -(R + 6.5), s: rng.range(0.9, 1.2), r: rng.range(0, 6) });
        }
        if (i % 40 === 20) pr.push({ t: rng.pick(signs), x: (i % 80 === 20 ? -1 : 1) * (R + 11), r: i % 80 === 20 ? 0.35 : -0.35 });
        if (i % 30 === 15) pr.push({ t: rng.pick(hotels), x: rng.sign() * (R + rng.range(50, 80)), tint: rng.pick(PASTELS), r: rng.range(-0.3, 0.3) });
      } else if (z === 'causeway') {
        if (i % 10 === 0) pr.push({ t: light, x: R + 2.4, r: 0 });
        if (i % 10 === 5) pr.push({ t: light, x: -(R + 2.4), r: Math.PI });
        if (i % 45 === 0 && rng.chance(0.8)) pr.push({ t: islet, x: rng.sign() * rng.range(70, 160), y: 0, abs: true, s: rng.range(0.8, 1.4), r: rng.range(0, 6) });
        if (i % 150 === 75) pr.push({ t: rng.pick(roadSigns), x: R + 4, r: -0.2 });
      } else if (z === 'hills') {
        const curvy = Math.abs(s.curve) > 0.0012;
        if (curvy) {
          pr.push({ t: rail, x: R + 2.4 });
          pr.push({ t: rail, x: -(R + 2.4) });
        }
        if (i % 5 === 0 && rng.chance(0.6)) pr.push({ t: tree, x: rng.sign() * (R + rng.range(8, 40)), s: rng.range(0.8, 1.4), r: rng.range(0, 6) });
        if (i % 11 === 0 && rng.chance(0.5)) pr.push({ t: bush, x: rng.sign() * (R + rng.range(5, 12)), s: rng.range(0.7, 1.2), r: rng.range(0, 6) });
        if (i % 23 === 0 && rng.chance(0.6)) pr.push({ t: rock, x: rng.sign() * (R + rng.range(9, 30)), s: rng.range(0.8, 1.8), r: rng.range(0, 6) });
        if (i % 90 === 45) pr.push({ t: rng.pick(signs), x: R + 12, r: -0.35 });
      }
    }
    for (let si = 1; si < track.stageStarts.length; si++) segs[track.stageStarts[si] + 4].props.push({ t: gCheck, x: 0 });
    segs[8].props.push({ t: gStart, x: 0 });
    segs[track.goalSeg].props.push({ t: gGoal, x: 0 });

    // ---- the horizon --------------------------------------------------------
    const bd = new Backdrop();
    bd.addLayer(skyDome([
      [1.0, 0xffe6a8], [2.2, 0xffc888], [3.6, 0xffa880], [5.2, 0xff9a9a], [7.0, 0xf8a8c8], [9.0, 0xd0c4ec],
      [11.5, 0xa0d8f4], [15, 0x70caf4], [20, 0x48b4f2], [27, 0x2c98ea], [36, 0x1c80e2], [90, 0x1468d4],
    ], FOG), 0);
    const ahead = (a: number) => {
      const d = Math.atan2(Math.sin(a), Math.cos(a));
      return d;
    };
    // big low sun over the sea, slightly right of the opening straight
    bd.addLayer(disc(2500, 0.25, 2.6, 300, [[1, 0xff9a3c], [0.8, 0xffc848], [0.55, 0xfff08a]], 18), 1);
    bd.addLayer(clouds(rng, 2350, 12, 0xffffff, 0xffc0d0), 0.8);
    // mountains inland (left), low on the sea side so the sunset reads
    bd.addLayer(mountainRing(rng, 2200, 0x7a8ad0, 230, (a) => {
      const d = ahead(a);
      return d < -0.25 ? 1 : d > 1.6 ? 0.8 : 0.0;
    }, 0xe8eeff, 46), 1);
    bd.addLayer(mountainRing(rng, 2050, 0x5aa0a0, 110, (a) => {
      const d = ahead(a);
      return d < -0.15 ? 1 : d > 1.9 ? 1 : 0;
    }, undefined, 50), 1);
    // distant downtown across the bay
    bd.addLayer(skylineRing(rng, 2000, [0xa8b8d8, 0x98a8cc, 0xb8c4e0], [], 150, (a) => {
      const d = ahead(a);
      return d > 0.7 && d < 1.3 ? 1 : 0;
    }, 0.9), 1);
    bd.addLayer(horizonBand(1900, FOG), 0);
    return { track, profiles, props: reg.defs, backdrop: bd, trafficTypes, gateType: gGoal };
  },
};
