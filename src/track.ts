import { Rng } from './rng';

/** Length of one road segment in world units (~metres). */
export const SEG = 6;
/** Segments per light/dark stripe band (the classic arcade speed cue). */
export const STRIPE = 3;
export const ROAD_HALF = 11; // half road width
export const LANES = 4;
export const LANE_W = (ROAD_HALF * 2) / LANES;

export interface PropSpawn {
  t: number; // prop type index
  x: number; // lateral offset from road centre
  y?: number; // height offset (relative to road, or absolute when abs)
  abs?: boolean;
  s?: number; // uniform scale
  sy?: number; // extra vertical scale
  r?: number; // extra yaw
  tint?: number; // instance colour
}

export interface Segment {
  curve: number; // heading change per world unit (rad)
  y: number; // road height at segment start
  heading: number; // accumulated heading at segment start
  stage: number;
  zone: string;
  profile: number;
  tunnel: boolean;
  props: PropSpawn[];
}

export class Track {
  segs: Segment[] = [];
  stageStarts: number[] = [];
  goalSeg = 0;

  seg(i: number): Segment {
    const n = this.segs.length;
    return this.segs[i < 0 ? 0 : i >= n ? n - 1 : i];
  }
  /** heading at boundary i (start of segment i) */
  H(i: number): number {
    const n = this.segs.length;
    if (i <= 0) return this.segs[0].heading;
    if (i >= n) return this.segs[n - 1].heading + this.segs[n - 1].curve * SEG;
    return this.segs[i].heading;
  }
  Y(i: number): number {
    return this.seg(i).y;
  }
  get goalDist(): number {
    return this.goalSeg * SEG;
  }
}

const easeIn = (a: number, b: number, t: number) => a + (b - a) * t * t;
const easeOut = (a: number, b: number, t: number) => a + (b - a) * (1 - (1 - t) * (1 - t));
const easeInOut = (a: number, b: number, t: number) => a + (b - a) * (-Math.cos(t * Math.PI) / 2 + 0.5);

export interface StageSpec {
  zone: string;
  length: number; // segments
  curvy: number; // 0..1
  hilly: number; // 0..1
  yMin: number;
  yMax: number;
  tunnels?: number; // probability per section of a tunnel
  tunnelZone?: string;
}

/** Builds an OutRun-style course from eased curve / hill sections. */
export class TrackBuilder {
  track = new Track();
  y: number;
  heading = 0;
  stage = 0;
  zone = '';
  tunnel = false;
  constructor(public profileOf: (zone: string, tunnel: boolean) => number, startY = 0) {
    this.y = startY;
  }

  private push(curve: number, y: number) {
    this.track.segs.push({
      curve, y, heading: this.heading, stage: this.stage, zone: this.zone,
      profile: this.profileOf(this.zone, this.tunnel), tunnel: this.tunnel, props: [],
    });
    this.heading += curve * SEG;
  }

  section(enter: number, hold: number, leave: number, curve: number, dy: number) {
    const total = enter + hold + leave;
    const y0 = this.y;
    let n = 0;
    for (let i = 0; i < enter; i++, n++) this.push(easeIn(0, curve, i / enter), easeInOut(y0, y0 + dy, n / total));
    for (let i = 0; i < hold; i++, n++) this.push(curve, easeInOut(y0, y0 + dy, n / total));
    for (let i = 0; i < leave; i++, n++) this.push(easeOut(curve, 0, i / leave), easeInOut(y0, y0 + dy, n / total));
    this.y = y0 + dy;
  }

  straight(n: number, dy = 0) {
    this.section(0, n, 0, 0, dy);
  }

  /** Procedurally fills a stage with curves, S-bends and hills. */
  stageFrom(spec: StageSpec, rng: Rng) {
    this.zone = spec.zone;
    this.track.stageStarts.push(this.track.segs.length);
    const end = this.track.segs.length + spec.length;
    // pull the height into range first
    const target = Math.min(spec.yMax, Math.max(spec.yMin, this.y));
    if (Math.abs(target - this.y) > 0.5) this.straight(40, target - this.y);
    else this.straight(20);
    let tunnels = 0;
    while (this.track.segs.length < end) {
      const remaining = end - this.track.segs.length;
      const force = !!spec.tunnels && tunnels === 0 && remaining < spec.length * 0.55;
      this.tunnel = !!spec.tunnels && (force || rng.chance(spec.tunnels)) && remaining > 120;
      if (this.tunnel) tunnels++;
      const prevZone = this.zone;
      if (this.tunnel && spec.tunnelZone) this.zone = spec.tunnelZone;
      // keep the overall heading near 0 so the horizon composition stays framed
      let dir = rng.sign();
      if (this.heading > 0.7) dir = -1;
      if (this.heading < -0.7) dir = 1;
      const amt = rng.range(0.0009, 0.0032) * spec.curvy;
      let dy = 0;
      if (rng.chance(0.25 + spec.hilly * 0.6)) {
        dy = rng.range(10, 45) * spec.hilly * rng.sign();
        if (this.y + dy > spec.yMax) dy = spec.yMax - this.y;
        if (this.y + dy < spec.yMin) dy = spec.yMin - this.y;
      }
      const kind = rng.next();
      if (this.tunnel) {
        this.section(20, rng.int(40, 80), 20, amt * 0.5 * dir, Math.min(dy, 0));
      } else if (kind < 0.18) {
        this.straight(rng.int(25, 60), dy);
      } else if (kind < 0.42) {
        // S-bend
        const h = rng.int(15, 35);
        this.section(15, h, 15, amt * dir, dy * 0.5);
        this.section(15, h, 15, -amt * dir, dy * 0.5);
      } else {
        this.section(rng.int(15, 30), rng.int(25, 80), rng.int(15, 30), amt * dir, dy);
      }
      this.tunnel = false;
      this.zone = prevZone;
    }
    this.stage++;
  }

  finish(tail: number): Track {
    this.stage--; // the tail belongs to the last stage
    this.track.goalSeg = this.track.segs.length;
    this.straight(tail);
    return this.track;
  }
}

export const BACK = 6;
export const AHEAD = 200;
const NB = BACK + AHEAD + 1;

/**
 * The visible window of road, re-expressed every frame in player-relative
 * space (player at origin, heading 0 = -Z). Keeps numbers small and curves
 * exaggerated without float drift.
 */
export class View {
  start = 0;
  bx = new Float32Array(NB);
  by = new Float32Array(NB);
  bz = new Float32Array(NB);
  bh = new Float32Array(NB);
  yRef = 0;
  heading = 0; // global heading at player (drives background scroll)
  readonly count = BACK + AHEAD; // segments

  constructor(public track: Track) {}

  update(pos: number) {
    const t = this.track;
    const s = Math.floor(pos / SEG);
    const f = pos / SEG - s;
    const thp = t.H(s) + t.seg(s).curve * f * SEG;
    this.heading = thp;
    this.yRef = t.Y(s) + (t.Y(s + 1) - t.Y(s)) * f;
    this.start = s - BACK;
    const { bx, bz, bh, by } = this;
    const k0 = BACK;
    const k1 = BACK + 1;
    // boundary s+1
    let h = t.H(s + 1) - thp;
    let d = (1 - f) * SEG;
    bh[k1] = h;
    bx[k1] = Math.sin(h / 2) * d;
    bz[k1] = -Math.cos(h / 2) * d;
    for (let k = k1 + 1; k < NB; k++) {
      h = t.H(this.start + k) - thp;
      const mid = (bh[k - 1] + h) / 2;
      bh[k] = h;
      bx[k] = bx[k - 1] + Math.sin(mid) * SEG;
      bz[k] = bz[k - 1] - Math.cos(mid) * SEG;
    }
    // boundary s and behind
    h = t.H(s) - thp;
    d = f * SEG;
    bh[k0] = h;
    bx[k0] = -Math.sin(h / 2) * d;
    bz[k0] = Math.cos(h / 2) * d;
    for (let k = k0 - 1; k >= 0; k--) {
      h = t.H(this.start + k) - thp;
      const mid = (bh[k + 1] + h) / 2;
      bh[k] = h;
      bx[k] = bx[k + 1] - Math.sin(mid) * SEG;
      bz[k] = bz[k + 1] + Math.cos(mid) * SEG;
    }
    for (let k = 0; k < NB; k++) by[k] = t.Y(this.start + k) - this.yRef;
  }

  /** Local-space point on the road centre at track distance dist (+ lateral x). */
  sample(dist: number, x: number, out: { x: number; y: number; z: number; h: number }): boolean {
    const u = dist / SEG;
    const j = Math.floor(u);
    const fr = u - j;
    const k = j - this.start;
    if (k < 0 || k >= this.count) return false;
    const h = this.bh[k] + (this.bh[k + 1] - this.bh[k]) * fr;
    out.h = h;
    out.x = this.bx[k] + (this.bx[k + 1] - this.bx[k]) * fr + Math.cos(h) * x;
    out.z = this.bz[k] + (this.bz[k + 1] - this.bz[k]) * fr + Math.sin(h) * x;
    out.y = this.by[k] + (this.by[k + 1] - this.by[k]) * fr;
    return true;
  }
}
