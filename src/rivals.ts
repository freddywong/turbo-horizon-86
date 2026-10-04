import { ROSTER } from './cars/roster';
import { CarSpec } from './cars/spec';
import { Rng } from './rng';
import { LANE_W, ROAD_HALF, SEG, Track } from './track';
import { TrafficCar } from './world';
import { TURBO_TIME } from './rules';

/** Fictional drivers. skill scales top speed, corner how little they lift in bends. */
const DRIVERS: { name: string; skill: number; corner: number; aggro: number }[] = [
  { name: 'ACE', skill: 1.03, corner: 0.92, aggro: 0.8 },
  { name: 'AOKI', skill: 1.01, corner: 0.95, aggro: 0.5 },
  { name: 'REYES', skill: 1.0, corner: 0.82, aggro: 0.9 },
  { name: 'VOLK', skill: 0.99, corner: 0.88, aggro: 0.7 },
  { name: 'LOLA', skill: 0.97, corner: 0.9, aggro: 0.4 },
  { name: 'BLADE', skill: 0.96, corner: 0.78, aggro: 1.0 },
  { name: 'KENJI', skill: 0.94, corner: 0.95, aggro: 0.3 },
];

export interface Rival {
  name: string;
  spec: CarSpec;
  paint: number;
  d: number; // distance along the track
  x: number; // lateral position
  v: number; // speed, units/s
  vmax: number;
  corner: number;
  aggro: number;
  lane: number; // preferred lateral offset
  steer: number; // for the visual pose
  spin: number; // wheel rotation
  braking: boolean;
  finished: number; // race time when crossing the goal, -1 until then
  bumpT: number;
  turbos: number; // boosts left
  turboT: number; // time left on the active boost
  // condition (computer cars can be shot to a wreck)
  hp: number;
  wrecked: boolean;
  wreckT: number; // time since wrecked
  smokeT: number;
  // weapons
  ammo: number;
  gunTaken: number; // gun damage taken from the player (capped)
  burst: number; // rounds left in the current burst
  fireCool: number;
  gunT: number; // >0 while shooting (gunner leaning out)
  gunTo: number; // target: -1 = the player, otherwise a rival index
  /** online: another human player, driven by their network updates instead of the AI */
  remote?: { id: string; d: number; x: number; v: number; at: number; hp: number };
}

const KMH = 3.6;

/** Builds a field of 7 rivals in different cars, lined up ahead of the player on a 2-wide grid. */
export function makeGrid(playerCar: CarSpec, startPos: number, seed: number, turbos = 3, ammo = 0): Rival[] {
  const rng = new Rng(seed);
  const cars = ROSTER.filter((c) => c !== playerCar);
  // shuffle the cars so every race has a different field
  for (let i = cars.length - 1; i > 0; i--) {
    const j = rng.int(0, i);
    [cars[i], cars[j]] = [cars[j], cars[i]];
  }
  return DRIVERS.map((dr, i) => {
    const spec = cars[i % cars.length];
    const row = Math.floor((DRIVERS.length - i) / 2); // best drivers start at the front
    const side = i % 2 === 0 ? -1 : 1;
    return {
      name: dr.name, spec, paint: rng.pick(spec.paints),
      d: startPos + 9 + row * 9, x: side * LANE_W * 0.55, v: 0,
      vmax: (spec.stats.vmax / KMH) * dr.skill, corner: dr.corner, aggro: dr.aggro,
      lane: side * rng.range(1, 4), steer: 0, spin: 0, braking: false, finished: -1, bumpT: 0,
      turbos, turboT: 0,
      hp: 100, wrecked: false, wreckT: 0, smokeT: 0,
      ammo, gunTaken: 0, burst: 0, fireCool: 0, gunT: 0, gunTo: -1,
    };
  });
}

interface Body { d: number; x: number; v: number; len: number }

/** Local wall clock in seconds, for timing network updates. */
export const raceClock = () => performance.now() / 1000;

/**
 * Arcade AI: drives the racing line, lifts for tight bends, swerves round anything
 * slower in its path and rubber-bands gently so the pack stays in view.
 */
export function updateRivals(rivals: Rival[], dt: number, track: Track, traffic: TrafficCar[], trafficLen: (c: TrafficCar) => number,
  player: { pos: number; px: number; speed: number }, raceTime: number, running: boolean) {
  const goal = track.goalDist;
  for (const r of rivals) {
    if (r.remote) {
      // extrapolate from the last update and ease towards it (updates arrive ~15 times a second)
      const n = r.remote;
      if (raceClock() - n.at > 3) n.v = 0; // they dropped out: the car rolls to a stop
      const age = Math.min(1, raceClock() - n.at);
      const td = n.d + n.v * age;
      r.v = n.v;
      r.d += r.v * dt;
      r.d += (td - r.d) * Math.min(1, dt * 6);
      if (Math.abs(td - r.d) > 30) r.d = td;
      r.x += (n.x - r.x) * Math.min(1, dt * 8);
      r.spin -= (r.v * dt) / 0.37;
      continue;
    }
    if (!running) {
      r.v = 0;
      continue;
    }
    if (r.wrecked) {
      // engine blown: rolls to a stop where it is
      r.wreckT += dt;
      r.v = Math.max(0, r.v - 22 * dt);
      r.d += r.v * dt;
      r.spin -= (r.v * dt) / 0.37;
      r.braking = true;
      r.steer *= 1 - dt * 3;
      continue;
    }
    const seg = track.seg(Math.floor(r.d / SEG));
    const ahead = track.seg(Math.floor((r.d + 70) / SEG));
    const c2 = Math.max(Math.abs(seg.curve), Math.abs(ahead.curve));
    let vt = r.vmax * (1 - Math.min(0.3, c2 * 70 * (1.15 - r.corner)));
    // keep the pack around the player: ease off when far ahead, push when far behind
    const gap = r.d - player.pos;
    if (gap > 450) vt *= 0.9;
    else if (gap > 250) vt *= 0.96;
    else if (gap < -300) vt *= 1.15;
    else if (gap < -120) vt *= 1.08;
    // turbo: fired on a straight while dicing with the player, or when falling behind
    if (r.turboT > 0) {
      r.turboT -= dt;
      vt *= 1.18;
    } else if (r.turbos > 0 && c2 < 0.0009 && r.d < goal - 300 && gap > -200 && gap < 120
      && Math.random() < dt * (0.05 + r.aggro * 0.1)) {
      r.turbos--;
      r.turboT = TURBO_TIME;
    }
    if (r.d > goal + 250) vt = 0; // parked in the run-out after the finish
    if (r.bumpT > 0) {
      r.bumpT -= dt;
      vt *= 0.6;
    }
    if (r.hp < 35) vt *= 0.8 + 0.2 * (r.hp / 35); // badly shot up: limping

    // look for anything slower in our path
    const bodies: Body[] = traffic.map((c) => ({ d: c.d, x: c.x, v: c.v, len: trafficLen(c) }));
    for (const o of rivals) if (o !== r) bodies.push({ d: o.d, x: o.x, v: o.v, len: 4.4 });
    bodies.push({ d: player.pos, x: player.px, v: player.speed, len: 4.4 });
    let block: Body | null = null;
    for (const b of bodies) {
      const dd = b.d - r.d;
      if (dd > 0 && dd < 22 + r.v * 0.5 && Math.abs(b.x - r.x) < 2.6 && b.v < r.v + 2) {
        if (!block || dd < block.d - r.d) block = b;
      }
    }
    // racing line: drift to the inside of the coming bend
    let tx = Math.max(-6, Math.min(6, ahead.curve * 2200)) + r.lane * 0.5;
    if (block) {
      // pick the side with more room; aggressive drivers squeeze through tighter gaps
      const left = block.x - 3.4, right = block.x + 3.4;
      const roomL = left > -ROAD_HALF + 1.2, roomR = right < ROAD_HALF - 1.2;
      tx = roomL && (!roomR || Math.abs(left - r.x) < Math.abs(right - r.x)) ? left : roomR ? right : r.x;
      if (!roomL && !roomR) vt = Math.min(vt, block.v * (0.98 - (1 - r.aggro) * 0.05));
    }
    tx = Math.max(-ROAD_HALF + 1.4, Math.min(ROAD_HALF - 1.4, tx));
    const lat = Math.sign(tx - r.x) * Math.min(Math.abs(tx - r.x), (6 + r.aggro * 4) * dt);
    r.x += lat;
    r.steer += ((lat / Math.max(dt, 1e-3)) / 10 - r.steer) * Math.min(1, dt * 8);

    r.braking = vt < r.v - 3;
    r.v += Math.sign(vt - r.v) * Math.min(Math.abs(vt - r.v), (r.braking ? 40 : r.turboT > 0 ? 40 : 22) * dt);

    // contact with traffic: the AI brakes rather than spins
    for (const c of traffic) {
      if (Math.abs(c.d - r.d) < trafficLen(c) && Math.abs(c.x - r.x) < 2.0) {
        r.v = Math.min(r.v, c.v * 0.9);
        r.x += Math.sign(r.x - c.x || 1) * 0.6;
      }
    }
    // rivals don't drive through each other
    for (const o of rivals) {
      if (o === r) continue;
      if (Math.abs(o.d - r.d) < 4.2 && Math.abs(o.x - r.x) < 1.9) {
        const push = Math.sign(r.x - o.x || 1) * 0.4;
        r.x += push;
        if (r.d < o.d) r.v = Math.min(r.v, o.v);
      }
    }
    r.d += r.v * dt;
    r.spin -= (r.v * dt) / 0.37;
    if (r.finished < 0 && r.d >= goal) r.finished = raceTime;
  }
}

/** 1-based race position of the player. */
export function playerPosition(rivals: Rival[], playerPos: number, playerFinished: number): number {
  let p = 1;
  for (const r of rivals) {
    if (playerFinished >= 0) {
      if (r.finished >= 0 && r.finished < playerFinished) p++;
    } else if (r.finished >= 0 || r.d > playerPos) p++;
  }
  return p;
}

export const ordinal = (n: number) => `${n}${n === 1 ? 'ST' : n === 2 ? 'ND' : n === 3 ? 'RD' : 'TH'}`;

export interface ResultRow { pos: number; name: string; car: string; time: number; player: boolean; estimated: boolean }

/** Final classification; rivals still on track get an estimated time from their pace. */
export function results(rivals: Rival[], track: Track, playerName: string, playerCar: string, playerTime: number, now: number): ResultRow[] {
  const goal = track.goalDist;
  const rows: Omit<ResultRow, 'pos'>[] = rivals.map((r) => ({
    name: r.name, car: r.spec.name,
    time: r.finished >= 0 ? r.finished : r.wrecked ? Infinity : now + Math.max(0, goal - r.d) / Math.max(20, r.v || r.vmax),
    player: false, estimated: r.finished < 0 && !r.wrecked,
  }));
  rows.push({ name: playerName, car: playerCar, time: playerTime, player: true, estimated: false });
  rows.sort((a, b) => a.time - b.time);
  return rows.map((r, i) => ({ ...r, pos: i + 1 }));
}

export const fmtTime = (t: number) => {
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}'${s.toFixed(2).padStart(5, '0')}`;
};
