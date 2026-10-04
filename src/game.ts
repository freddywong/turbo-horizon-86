import * as THREE from 'three';
import { Audio, TRACKS } from './audio';
import { GFX, setGfx } from './gfx';
import { CYAN, Hud, HUD_H, HUD_W, ORANGE, PINK, RED, WHITE, YELLOW } from './hud';
import { Input } from './input';
import { ROAD_HALF, SEG } from './track';
import { ROSTER } from './cars/roster';
import { fmtTime, makeGrid, ordinal, playerPosition, results, ResultRow, updateRivals } from './rivals';
import { CarSpec } from './cars/spec';
import { World } from './world';

type State = 'attract' | 'select' | 'carselect' | 'countdown' | 'race' | 'goal' | 'over';

const VMAX = 82; // reference top speed (~295 km/h) for camera / gearing
const KMH = 3.6;
const GEARS = [0, 18, 34, 50, 66, 84];
const STEER_RATE = 25;
const CF = 0.82; // centrifugal push in curves
export const TURBOS = 3; // boosts per race, for every driver
const TURBO_TIME = 3; // seconds
const TURBO_SPEED = 1.18; // top speed multiplier while boosting

const loadHi = (): number => {
  try {
    return parseInt(localStorage.getItem('th86-hi') ?? '0', 10) || 0;
  } catch {
    return 0;
  }
};
const loadCar = (): [number, number] => {
  try {
    const v = JSON.parse(localStorage.getItem('th86-car') ?? '[0,0]');
    return [Math.min(ROSTER.length - 1, v[0] | 0), v[1] | 0];
  } catch {
    return [0, 0];
  }
};
const saveCar = (c: number, p: number) => {
  try {
    localStorage.setItem('th86-car', JSON.stringify([c, p]));
  } catch {
    /* storage unavailable */
  }
};
const loadMusic = (): number => {
  try {
    const v = parseInt(localStorage.getItem('th86-music') ?? '-1', 10);
    return v >= -1 && v < TRACKS.length ? v : -1;
  } catch {
    return -1;
  }
};
const saveMusic = (v: number) => {
  try {
    localStorage.setItem('th86-music', String(v));
  } catch {
    /* storage unavailable */
  }
};
const saveHi = (v: number) => {
  try {
    localStorage.setItem('th86-hi', String(v));
  } catch {
    /* storage unavailable */
  }
};

export class Game {
  state: State = 'attract';
  t = 0; // time in state
  paused = false;
  routeIdx = 0;
  world: World;

  // player
  pos = 0;
  px = 0;
  speed = 0;
  steer = 0;
  driftYaw = 0;
  crashT = 0;
  crashYaw = 0;
  wheelSpin = 0;
  bounce = 0;
  shakeKick = 0;
  drifting = false;
  gear = 1;
  flameT = 0;
  wasAccel = false;

  // run
  timeLeft = 0;
  score = 0;
  stage = 0;
  hi = loadHi();
  msg = '';
  msg2 = '';
  msgUntil = 0;
  bonusLeft = 0;
  demoClock = 0;
  attractRoute = 0;
  clock = 0;
  private lastBeep = -1;
  /** -1 = the route's own theme, otherwise an index into TRACKS. */
  musicIdx = loadMusic();
  /** ARCADE: classic time attack. RIVALS: an 8-car race against computer drivers. */
  mode: 'arcade' | 'rivals' = 'arcade';
  raceTime = 0;
  /** turbo boosts left this race, and time left on the active one */
  turbos = 3;
  turboT = 0;
  finishTime = -1;
  place = 8;
  private table: ResultRow[] = [];
  private musicToast = 0;
  carIdx = loadCar()[0];
  paintIdx = loadCar()[1];
  touch = false; // set by the touch controls; changes prompts

  get spec(): CarSpec {
    return ROSTER[this.carIdx];
  }
  get vmax(): number {
    return this.spec.stats.vmax / KMH;
  }
  private applyCar(spec = this.spec, paint = spec.paints[this.paintIdx % spec.paints.length]) {
    this.world.setPlayerCar(spec, paint);
  }

  constructor(private worlds: World[], private camera: THREE.PerspectiveCamera, private input: Input,
    private audio: Audio, private hud: Hud) {
    this.world = worlds[0];
    this.resetPlayer(true);
  }

  private setWorld(i: number) {
    if (this.world === this.worlds[i] && this.routeIdx === i) return;
    this.routeIdx = i;
    this.world = this.worlds[i];
    if (this.state !== 'attract') this.applyCar();
  }

  private resetPlayer(demo: boolean) {
    this.pos = 3 * SEG;
    this.px = demo ? this.world.laneX(1) : 0;
    this.speed = demo ? 50 : 0;
    this.turboT = 0;
    this.steer = 0;
    this.driftYaw = 0;
    this.crashT = 0;
    this.stage = 0;
    this.world.resetTraffic(this.pos);
    this.world.particles.clear();
  }

  private go(s: State) {
    this.state = s;
    this.t = 0;
  }

  private trackId(): string {
    return this.musicIdx < 0 ? this.world.route.id : TRACKS[this.musicIdx].id;
  }
  musicLabel(): string {
    return this.musicIdx < 0 ? `ROUTE THEME` : TRACKS[this.musicIdx].name;
  }
  /** Next radio station; plays it straight away. */
  private nextTrack() {
    this.musicIdx = this.musicIdx + 1 >= TRACKS.length ? -1 : this.musicIdx + 1;
    saveMusic(this.musicIdx);
    this.audio.music(this.trackId());
    this.musicToast = this.clock + 2.5;
  }

  private flash(a: string, b = '', dur = 2) {
    this.msg = a;
    this.msg2 = b;
    this.msgUntil = this.clock + dur;
  }

  startRace() {
    this.paused = false;
    this.resetPlayer(false);
    this.turbos = TURBOS;
    this.turboT = 0;
    this.raceTime = 0;
    this.finishTime = -1;
    this.table = [];
    if (this.mode === 'rivals') {
      // start from the back of the grid; lighter traffic, pushed further up the road
      this.world.setRivals(makeGrid(this.spec, this.pos, Date.now() & 0xffff));
      this.world.resetTraffic(this.pos, 10, 520);
      this.place = 8;
    } else this.world.setRivals([]);
    this.timeLeft = this.world.route.startTime;
    this.score = 0;
    this.lastBeep = -1;
    this.msg = '';
    this.go('countdown');
    this.audio.music(this.trackId());
  }

  // ------------------------------------------------------------------ update
  update(dt: number) {
    const inp = this.input;
    this.clock += dt;
    if (inp.hit('KeyM')) this.audio.toggleMute();
    if (!this.paused && inp.hit('KeyN') && ['carselect', 'countdown', 'race'].includes(this.state)) this.nextTrack();

    if (this.paused) {
      let act = inp.hit('Escape') ? 'resume' : inp.hit('KeyR') ? 'restart' : inp.hit('KeyQ') ? 'quit' : '';
      for (const tp of inp.taps) {
        if (tp.y > 222 && tp.y < 254) act = 'resume';
        else if (tp.y >= 254 && tp.y < 280) act = 'restart';
        else if (tp.y >= 280 && tp.y < 310) act = 'quit';
      }
      if (act === 'resume') this.paused = false;
      else if (act === 'restart') this.startRace();
      else if (act === 'quit') { this.paused = false; this.toSelect(); }
      this.audio.engine(false, 0, 0);
      this.audio.skid(0);
      return;
    }
    this.t += dt;

    switch (this.state) {
      case 'attract': {
        this.demoClock += dt;
        if (this.demoClock > 24) {
          this.demoClock = 0;
          this.attractRoute = 1 - this.attractRoute;
          this.setWorld(this.attractRoute);
          const s = ROSTER[Math.floor(Math.random() * ROSTER.length)];
          this.world.setPlayerCar(s, s.paints[0]);
          this.resetPlayer(true);
        }
        this.drive(dt, this.autopilot(), true);
        const gfxTap = inp.taps.some((tp) => tp.y > 400 && tp.y < 440 && Math.abs(tp.x - HUD_W / 2) < 200);
        if (inp.hit('KeyG') || gfxTap) {
          // switching the look rebuilds every texture and material, so restart the page
          setGfx(GFX.modern ? '86' : '92');
          location.reload();
        } else if (inp.confirm || inp.taps.length) {
          this.audio.coin();
          this.toSelect();
        }
        break;
      }
      case 'select': {
        this.drive(dt, this.autopilot(), true);
        let pick = -1, go = inp.confirm || this.t > 20;
        if (inp.hit('ArrowLeft', 'KeyA', 'ArrowRight', 'KeyD')) pick = 1 - this.routeIdx;
        let toggle = inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS');
        for (const tp of inp.taps) {
          if (tp.y > 140 && tp.y < 280) {
            const i = tp.x < HUD_W / 2 ? 0 : 1;
            if (i === this.routeIdx) go = true;
            else pick = i;
          } else if (tp.y >= 320 && tp.y < 380) {
            const m = tp.x < HUD_W / 2 ? 'arcade' : 'rivals';
            if (m !== this.mode) toggle = true;
          } else if (tp.y >= 380) go = true;
        }
        if (toggle) {
          this.mode = this.mode === 'arcade' ? 'rivals' : 'arcade';
          this.audio.blip();
        }
        if (pick >= 0) {
          this.audio.blip();
          this.setWorld(pick);
          this.resetPlayer(true);
        }
        if (inp.hit('Escape')) { this.go('attract'); this.audio.music('title'); }
        else if (go) { this.audio.coin(); this.toCarSelect(); }
        break;
      }
      case 'carselect': {
        // parked on the start straight, camera circles the car
        this.speed = 0;
        let dc = 0, dp = 0, go = inp.confirm || this.t > 25;
        if (inp.hit('ArrowLeft', 'KeyA')) dc = -1;
        if (inp.hit('ArrowRight', 'KeyD')) dc = 1;
        if (inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS')) dp = 1;
        for (const tp of inp.taps) {
          if (tp.y > 370 && tp.y < 405 && tp.x > HUD_W / 2) this.nextTrack();
          else if (tp.y > 405 && tp.x > HUD_W / 2 - 150 && tp.x < HUD_W / 2 + 150) go = true;
          else if (tp.x < 160) dc = -1;
          else if (tp.x > HUD_W - 160) dc = 1;
          else dp = 1;
        }
        if (dc) {
          this.carIdx = (this.carIdx + dc + ROSTER.length) % ROSTER.length;
          this.paintIdx = 0;
          this.audio.blip();
        }
        if (dp) {
          this.paintIdx = (this.paintIdx + 1) % this.spec.paints.length;
          this.audio.blip();
        }
        if (dc || dp) this.applyCar();
        if (inp.hit('Escape')) this.toSelect();
        else if (go) {
          saveCar(this.carIdx, this.paintIdx);
          this.audio.coin();
          this.startRace();
        }
        this.updateWorld(dt, { steer: 0, yaw: 0, spin: 0, bounce: 0 });
        const a = this.t * 0.45 + 0.6;
        const cam = this.camera;
        cam.fov = 40;
        cam.updateProjectionMatrix();
        cam.position.set(this.px + Math.sin(a) * 7, 2.0, Math.cos(a) * 7);
        cam.lookAt(this.px, 0.35, 0);
        break;
      }
      case 'countdown': {
        const n = Math.floor(this.t);
        if (n !== this.lastBeep && n <= 3) {
          this.lastBeep = n;
          this.audio.countBeep(n === 3);
        }
        // rev the engine on the line
        const rev = inp.accel ? 0.9 : 0.15;
        this.audio.engine(true, rev, inp.accel ? 1 : 0);
        this.updateWorld(0, { steer: 0, yaw: 0, spin: 0, bounce: inp.accel ? Math.random() * 0.02 : 0 });
        if (this.t >= 3) {
          this.go('race');
          this.flash('GO!', '', 1.0);
        }
        if (inp.hit('Escape')) this.paused = true;
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
      case 'race': {
        if (inp.hit('KeyT', 'ShiftLeft', 'ShiftRight') && this.turbos > 0 && this.turboT <= 0 && this.crashT <= 0) {
          this.turbos--;
          this.turboT = TURBO_TIME;
          this.audio.turbo();
          this.flash('TURBO!', '', 1.0);
        }
        this.drive(dt, { accel: inp.accel || this.turboT > 0, brake: inp.brake, steer: inp.steer, drift: inp.drift }, false);
        this.timeLeft -= dt;
        this.score += Math.floor(this.speed * KMH * dt * 9);
        if (this.drifting && this.speed > 45) this.score += Math.floor(dt * 3000);
        const seg = this.world.track.seg(Math.floor(this.pos / SEG));
        if (seg.stage > this.stage) {
          this.stage = seg.stage;
          this.timeLeft += this.world.route.extendTime;
          this.flash('CHECKPOINT!', 'EXTENDED PLAY', 2.5);
          this.audio.jingle();
        }
        if (this.pos >= this.world.track.goalDist) {
          this.bonusLeft = Math.max(0, this.timeLeft);
          if (this.mode === 'rivals') {
            this.finishTime = this.raceTime;
            this.place = playerPosition(this.world.rivals, this.pos, this.finishTime);
            this.score += [1000000, 600000, 400000, 250000, 150000, 100000, 50000, 20000][this.place - 1];
            this.table = results(this.world.rivals, this.world.track, 'YOU', this.spec.name, this.finishTime, this.raceTime);
          }
          this.go('goal');
          this.audio.fanfare();
          this.audio.music(null);
        } else if (this.timeLeft <= 0) {
          this.timeLeft = 0;
          if (this.mode === 'rivals') this.table = results(this.world.rivals, this.world.track, 'YOU', this.spec.name, Infinity, this.raceTime);
          this.go('over');
          this.audio.sad();
          this.audio.music(null);
          this.saveScore();
        }
        if (inp.hit('Escape')) this.paused = true;
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
      case 'goal': {
        const ap = this.autopilot();
        this.drive(dt, { ...ap, accel: false, brake: this.speed > 20 }, true);
        if (this.t > 1.5 && this.bonusLeft > 0) {
          const step = Math.min(this.bonusLeft, dt * 12);
          this.bonusLeft -= step;
          this.score += Math.floor(step * 10000);
          this.timeLeft = this.bonusLeft;
          if (Math.floor(this.t * 12) % 2 === 0) this.audio.blip();
          if (this.bonusLeft <= 0) this.saveScore();
        }
        if (this.t > 3 && this.bonusLeft <= 0 && (inp.confirm || inp.taps.length || this.t > 14)) this.toSelect();
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
      case 'over': {
        this.drive(dt, { accel: false, brake: this.t > 1, steer: 0, drift: false }, false);
        if (this.t > 2.5 && (inp.confirm || inp.taps.length || this.t > 12)) this.toSelect();
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
    }
    // rival drivers
    const w = this.world;
    if (w.rivals.length && ['countdown', 'race', 'goal', 'over'].includes(this.state)) {
      const running = this.state !== 'countdown';
      if (this.state === 'race') this.raceTime += dt;
      updateRivals(w.rivals, dt, w.track, w.traffic, (c) => w.data.props[c.t].len ?? 4.4,
        { pos: this.pos, px: this.px, speed: this.speed }, this.raceTime, running);
      if (this.state === 'race' || this.state === 'countdown') this.place = playerPosition(w.rivals, this.pos, -1);
    }
  }

  private saveScore() {
    if (this.score > this.hi) {
      this.hi = this.score;
      saveHi(this.hi);
    }
  }

  private toSelect() {
    this.go('select');
    for (const wd of this.worlds) wd.setRivals([]);
    this.applyCar();
    this.resetPlayer(true);
    this.audio.music('title');
  }

  private toCarSelect() {
    this.go('carselect');
    this.audio.music(this.trackId()); // preview the race music
    this.applyCar();
    this.resetPlayer(false);
    this.px = 0;
  }

  /** Simple demo driver: hold a lane, dodge traffic, counter the curve push. */
  private autopilot() {
    const w = this.world;
    let lane = Math.round((this.px + ROAD_HALF) / (ROAD_HALF * 2 / 4) - 0.5);
    lane = Math.max(0, Math.min(3, lane));
    let blocked = false;
    for (const c of w.traffic) {
      const d = c.d - this.pos;
      if (d > 0 && d < 70 && Math.abs(c.x - w.laneX(lane)) < 2.5) blocked = true;
    }
    if (blocked) {
      for (const alt of [lane - 1, lane + 1, lane - 2, lane + 2]) {
        if (alt < 0 || alt > 3) continue;
        if (!w.traffic.some((c) => c.d - this.pos > -8 && c.d - this.pos < 90 && Math.abs(c.x - w.laneX(alt)) < 2.5)) { lane = alt; break; }
      }
    }
    const curve = w.track.seg(Math.floor(this.pos / SEG)).curve;
    const want = (w.laneX(lane) - this.px) * 2.2 + curve * this.speed * this.speed * CF;
    const steer = Math.max(-1, Math.min(1, want / STEER_RATE));
    return { accel: this.speed < 68, brake: false, steer, drift: false };
  }

  /** Arcade handling model. */
  private drive(dt: number, c: { accel: boolean; brake: boolean; steer: number; drift: boolean }, demo: boolean) {
    const w = this.world;
    const track = w.track;
    const route = w.route;
    const seg = track.seg(Math.floor(this.pos / SEG));
    let skid = 0;
    let offroad = false;
    let scrape = 0;

    if (this.crashT > 0) {
      this.crashT -= dt;
      this.speed = Math.max(0, this.speed - 60 * dt);
      this.crashYaw += dt * 9 * Math.max(0, this.crashT);
      const target = Math.max(-ROAD_HALF + 3, Math.min(ROAD_HALF - 3, this.px));
      this.px += (target - this.px) * Math.min(1, dt * 1.5);
      this.bounce = Math.abs(Math.sin(this.crashT * 9)) * 0.4 * this.crashT;
      skid = this.crashT > 0.6 ? 1 : 0;
      if (this.crashT <= 0) this.crashYaw = 0;
    } else {
      const v = this.speed;
      const st = this.spec.stats;
      const boost = this.turboT > 0;
      const vlim = this.vmax * (boost ? TURBO_SPEED : 1);
      if (c.accel) this.speed += 30 * st.accel * (boost ? 1.9 : 1) * (1 - Math.pow(Math.min(1, v / vlim), 1.8)) * dt + 2 * dt;
      else if (c.brake) this.speed -= 58 * dt;
      else this.speed -= (3 + v * 0.035) * dt;

      // steering: snappy, scaled by speed
      const target = c.steer;
      const rate = target === 0 ? 9 : 7;
      this.steer += Math.sign(target - this.steer) * Math.min(Math.abs(target - this.steer), rate * dt);
      let lat = this.steer * STEER_RATE * st.grip * Math.min(1, v / 22);
      let cf = (seg.curve * v * v * CF) / st.grip;
      this.drifting = c.drift && v > 30 && Math.abs(c.steer) > 0;
      if (this.drifting) {
        lat *= 1.45;
        cf *= 0.45;
        this.speed -= 5 * dt;
        skid = 1;
      } else if (Math.abs(this.steer) > 0.8 && v > 62 && Math.abs(seg.curve) > 0.0014) {
        skid = 0.6; // tyres squeal when pushing hard through a bend
      }
      const yawTarget = this.drifting ? this.steer * -0.5 : this.steer * -0.12;
      this.driftYaw += (yawTarget - this.driftYaw) * Math.min(1, dt * 6);
      this.px += (lat - cf) * dt;

      // run-off, walls and scenery
      const walls = route.walls || seg.tunnel;
      const lim = walls ? ROAD_HALF + (seg.tunnel ? 1.0 : 1.0) : route.offroadLimit;
      if (Math.abs(this.px) > lim) {
        this.px = Math.sign(this.px) * lim;
        if (walls && v > 15) {
          scrape = Math.sign(this.px);
          this.speed -= v * 0.9 * dt;
          this.shakeKick = 0.25;
          if (Math.random() < dt * 12) this.audio.scrape();
        }
      }
      offroad = Math.abs(this.px) > ROAD_HALF + 1.0;
      if (offroad) {
        if (this.speed > 32) this.speed -= 40 * dt;
        this.bounce = Math.random() * 0.08 * Math.min(1, v / 30);
        this.shakeKick = Math.max(this.shakeKick, 0.12);
      } else this.bounce = 0;
      if (!demo && offroad && v > 12 && w.hitProp(this.pos, this.px)) this.crash(true);

      const car = w.hitTraffic(this.pos, this.px);
      if (car) {
        if (demo) this.speed = Math.min(this.speed, car.v * 0.9);
        else if (v - car.v > 36) this.crash(true);
        else {
          this.speed = car.v * 0.75;
          this.px += Math.sign(this.px - car.x || 1) * 1.2;
          this.shakeKick = 0.3;
          this.audio.crash(false);
        }
      }
      // door-to-door with the rivals: a bump, not a wreck
      for (const r of w.rivals) {
        if (Math.abs(r.d - this.pos) > 4.3 || Math.abs(r.x - this.px) > 1.95) continue;
        const side = Math.sign(this.px - r.x || 1);
        this.px += side * 0.9;
        r.x -= side * 0.9;
        if (r.d > this.pos) {
          // we ran into the back of them
          if (v - r.v > 45 && !demo) this.crash(true);
          else this.speed = Math.min(this.speed, r.v * 0.92);
        } else {
          r.bumpT = 0.6;
        }
        this.shakeKick = Math.max(this.shakeKick, 0.25);
        if (!demo) this.audio.crash(false);
      }
    }
    // after a boost the car bleeds back down to its normal top speed instead of snapping
    const cap = this.vmax * (this.turboT > 0 ? TURBO_SPEED : 1);
    if (this.speed > cap) this.speed = Math.max(cap, this.speed - 14 * dt);
    this.speed = Math.max(0, this.speed);
    if (this.turboT > 0) {
      this.turboT = Math.max(0, this.turboT - dt);
      this.flameT = Math.max(this.flameT, 0.08);
      this.shakeKick = Math.max(this.shakeKick, 0.1);
    }
    this.pos += this.speed * dt;
    this.wheelSpin -= this.speed * dt / 0.37;
    if ((this.state === 'attract' || this.state === 'select') && this.pos > track.goalDist - 200) this.resetPlayer(true);

    w.updateTraffic(dt, this.pos, () => {
      if (this.state === 'race') this.score += 2000;
    });

    // engine audio: automatic gearbox
    let g = 1;
    const gs = this.vmax / VMAX;
    while (g < GEARS.length - 1 && this.speed > GEARS[g] * gs) g++;
    const rpm = 0.25 + 0.75 * Math.min(1, (this.speed - GEARS[g - 1] * gs) / ((GEARS[g] - GEARS[g - 1]) * gs));
    const audible = this.state !== 'attract' && this.state !== 'select';
    this.audio.engine(audible, rpm, c.accel ? 1 : 0);
    this.audio.skid(audible ? skid * Math.min(1, this.speed / 20) : 0);

    // backfire on up-shifts and when lifting off at speed
    if (g > this.gear && c.accel && this.speed > 20) {
      this.flameT = 0.12;
      if (audible) this.audio.pop();
    }
    if (this.wasAccel && !c.accel && this.speed > 55 && this.crashT <= 0) {
      this.flameT = 0.2;
      if (audible) this.audio.pop();
    }
    this.gear = g;
    this.wasAccel = c.accel;
    this.flameT = Math.max(0, this.flameT - dt);

    // tyre smoke, dust and sparks
    const P = w.particles;
    const n = Math.random() < dt * 45 ? 1 : 0;
    if (n && skid > 0 && this.speed > 12) {
      const col = route.id === 'tokyo' ? 0xb8b8d0 : 0xffffff;
      for (const sx of [-0.9, 0.9]) P.spawn(this.pos - 1.4, this.px + sx, 0.35, this.speed * 0.6, sx, 0.8, 0.8, 0.45, 2.6, col);
    }
    if (n && offroad && this.speed > 15) {
      const sand = seg.zone.startsWith('beach') && this.px > 0;
      const col = sand ? 0xf2dca0 : seg.zone === 'hills' ? 0xc8b07a : 0xd8c898;
      for (const sx of [-0.9, 0.9]) P.spawn(this.pos - 1.5, this.px + sx, 0.3, this.speed * 0.5, sx * 2, 1.8, 0.6, 0.4, 2.2, col);
    }
    if (scrape && Math.random() < dt * 60) {
      for (let i = 0; i < 2; i++) P.spawn(this.pos + Math.random() * 2 - 1, this.px + scrape * 0.9, 0.5, this.speed * 0.8, -scrape * (2 + Math.random() * 3), 3 + Math.random() * 3, 0.35, 0.13, -1, Math.random() < 0.5 ? 0xffe040 : 0xff8a20);
    }
    P.update(dt);

    this.updateWorld(dt, {
      steer: this.steer, yaw: this.driftYaw + this.crashYaw, spin: this.wheelSpin, bounce: this.bounce,
      brake: (c.brake && this.speed > 1) || this.crashT > 0, flame: this.flameT,
    });
  }

  private crash(big: boolean) {
    if (this.crashT > 0) return;
    this.crashT = big ? 1.6 : 0.8;
    this.speed *= 0.35;
    this.shakeKick = 0.6;
    this.audio.crash(big);
    for (let i = 0; i < 14; i++) {
      this.world.particles.spawn(this.pos + Math.random() * 3 - 1.5, this.px + Math.random() * 3 - 1.5, 0.4 + Math.random(),
        this.speed * 0.5, Math.random() * 4 - 2, 1 + Math.random() * 2, 1.1, 0.7, 2.5, i % 3 ? 0xd8d8d8 : 0x8a8a8a);
    }
  }

  private updateWorld(dt: number, pose: { steer: number; yaw: number; spin: number; bounce: number; brake?: boolean; flame?: number }) {
    const f = this.speed / VMAX;
    const cam = this.camera;
    const fov = 54 + 14 * Math.min(1.3, f) * Math.min(1.3, f) + (this.turboT > 0 ? 6 : 0);
    if (Math.abs(cam.fov - fov) > 0.01) {
      // ease small changes (turbo), snap big ones (coming back from the car-select camera)
      cam.fov = Math.abs(fov - cam.fov) > 8 ? fov : cam.fov + (fov - cam.fov) * Math.min(1, dt * 5);
      cam.updateProjectionMatrix();
    }
    this.shakeKick = Math.max(0, this.shakeKick - dt * 1.5);
    const shake = Math.max(0, f - 0.7) * 0.12 + this.shakeKick * 0.5;
    this.world.update(this.pos, this.px, cam, shake, pose);
  }

  // -------------------------------------------------------------------- draw
  draw() {
    const h = this.hud;
    h.clear();
    if (GFX.modern && this.state !== 'carselect') {
      const s = this.world.sunOnHud(this.camera, HUD_W, HUD_H);
      if (s) {
        // fade as the sun nears the screen edge
        const edge = Math.max(Math.abs(s.x / HUD_W - 0.5), Math.abs(s.y / HUD_H - 0.5)) * 2;
        h.flare(s.x, s.y, Math.max(0, Math.min(1, 1.25 - edge)));
      }
    }
    const blink = Math.floor(this.clock * 2.5) % 2 === 0;
    const route = this.world.route;
    switch (this.state) {
      case 'attract': {
        h.logo('TURBO', HUD_W / 2, 70, 64, YELLOW, ORANGE, 0xb01818);
        h.logo('HORIZON', HUD_W / 2, 150, 56, 0x80f8ff, 0x2a90ff, 0x1a2a90);
        h.text("'86", HUD_W / 2 + 230, 210, 24, PINK, 'left');
        h.text('ARCADE  ROAD  RACING', HUD_W / 2, 236, 16, WHITE, 'center');
        if (blink) h.text(this.touch ? 'TAP TO START' : 'PRESS ENTER', HUD_W / 2, 320, 24, YELLOW, 'center');
        h.text(`HI-SCORE ${String(this.hi).padStart(8, '0')}`, HUD_W / 2, 20, 16, CYAN, 'center');
        h.text('FREE PLAY', HUD_W - 20, HUD_H - 30, 16, WHITE, 'right');
        h.text(`${this.touch ? 'TAP' : 'G'}  GRAPHICS  ${GFX.modern ? '1992' : '1986'}`, HUD_W / 2, 412, 16, CYAN, 'center');
        h.text('©1986 HORIZON SOFT', 20, HUD_H - 30, 16, WHITE, 'left');
        break;
      }
      case 'select': {
        h.text('SELECT  YOUR  ROUTE', HUD_W / 2, 44, 24, YELLOW, 'center');
        const bw = 330, bh = 120, y = 150;
        this.worlds.forEach((w, i) => {
          const x = i === 0 ? HUD_W / 2 - bw - 20 : HUD_W / 2 + 20;
          const sel = i === this.routeIdx;
          const border = sel ? (blink ? YELLOW : WHITE) : 0x3a3a5a;
          h.box(x, y, bw, bh, i === 0 ? 0x1a5ab8 : 0x24104a, border, sel ? 6 : 4);
          const col = i === 0 ? 0xffe8a0 : 0xff6ab0;
          h.text(w.route.lines[0], x + bw / 2, y + 30, 24, col, 'center');
          h.text(w.route.lines[1], x + bw / 2, y + 66, 24, col, 'center');
        });
        h.text(this.touch ? 'TAP A ROUTE, TAP AGAIN TO GO' : '< >  ROUTE   ^ v  MODE   ENTER  NEXT', HUD_W / 2, 290, 16, WHITE, 'center');
        // mode boxes
        const modes: ['arcade' | 'rivals', string, string][] = [['arcade', 'ARCADE', 'BEAT THE CLOCK'], ['rivals', 'VS RIVALS', '8-CAR RACE']];
        modes.forEach(([m, label, sub], i) => {
          const x = i === 0 ? HUD_W / 2 - bw - 20 : HUD_W / 2 + 20;
          const sel = m === this.mode;
          h.box(x, 324, bw, 54, sel ? 0x2a1a50 : 0x141428, sel ? (blink ? PINK : WHITE) : 0x3a3a5a, sel ? 5 : 3);
          h.text(label, x + bw / 2, 334, 16, sel ? YELLOW : 0x8a8aa8, 'center');
          h.text(sub, x + bw / 2, 356, 8, sel ? WHITE : 0x8a8aa8, 'center');
        });
        h.text(`${Math.max(0, Math.ceil(20 - this.t))}`, HUD_W / 2, 92, 32, ORANGE, 'center');
        break;
      }
      case 'carselect': {
        const s = this.spec;
        h.text('SELECT  YOUR  CAR', HUD_W / 2, 20, 24, YELLOW, 'center');
        h.text(`${Math.max(0, Math.ceil(25 - this.t))}`, HUD_W - 30, 20, 24, ORANGE, 'right');
        h.text(s.make, HUD_W / 2, 64, 16, CYAN, 'center');
        h.text(s.name, HUD_W / 2, 88, 32, WHITE, 'center');
        h.text(`${s.year}  ${s.group}`, HUD_W / 2, 130, 16, PINK, 'center');
        // big arrows
        h.text('<', 40, 210, 48, blink ? YELLOW : WHITE, 'center');
        h.text('>', HUD_W - 40, 210, 48, blink ? YELLOW : WHITE, 'center');
        // stat bars
        const bars: [string, number][] = [
          ['SPEED', (s.stats.vmax - 260) / 90], ['ACCEL', (s.stats.accel - 0.85) / 0.3], ['GRIP', (s.stats.grip - 0.82) / 0.38],
        ];
        bars.forEach(([label, v], i) => {
          const y = 330 + i * 22;
          h.text(label, 40, y, 16, YELLOW);
          for (let k = 0; k < 12; k++) h.rect(150 + k * 14, y, 11, 16, k < Math.round(Math.max(0.1, Math.min(1, v)) * 12) ? (i === 0 ? RED : i === 1 ? ORANGE : 0x40e040) : 0x202040);
        });
        h.text(`${s.stats.vmax} KM/H`, 340, 330, 16, WHITE);
        h.text(`CAR ${this.carIdx + 1}/${ROSTER.length}`, HUD_W - 30, 330, 16, WHITE, 'right');
        h.text(this.touch ? 'TAP CAR: COLOUR' : '^ v  COLOUR', HUD_W - 30, 356, 16, CYAN, 'right');
        h.text(`${this.touch ? 'TAP' : 'N'}  MUSIC: ${this.musicLabel()}`, HUD_W - 30, 382, 16, PINK, 'right');
        h.box(HUD_W / 2 - 150, 410, 300, 50, 0x1a5ab8, blink ? YELLOW : WHITE);
        h.text(this.touch ? 'TAP TO RACE' : 'ENTER  RACE', HUD_W / 2, 427, 16, WHITE, 'center');
        break;
      }
      default: {
        this.raceHud(blink);
        if (this.state === 'countdown') {
          const n = 3 - Math.floor(this.t);
          if (n > 0) h.text(String(n), HUD_W / 2, 180, 64, n === 1 ? RED : YELLOW, 'center');
          h.text(route.stageNames[0], HUD_W / 2, 280, 16, WHITE, 'center');
        }
        if (this.table.length && (this.state === 'goal' ? this.t > 2.5 : this.t > 2.5)) {
          this.resultsTable(blink);
        } else if (this.state === 'goal' && this.mode === 'rivals') {
          h.text(this.place === 1 ? 'YOU WIN!' : `${ordinal(this.place)} PLACE`, HUD_W / 2, 150, 64, this.place === 1 ? YELLOW : CYAN, 'center');
          h.text(fmtTime(this.finishTime), HUD_W / 2, 240, 24, WHITE, 'center');
        } else if (this.state === 'goal') {
          h.text('GOAL!', HUD_W / 2, 140, 64, YELLOW, 'center');
          h.text('CONGRATULATIONS', HUD_W / 2, 230, 24, CYAN, 'center');
          h.text(`TIME BONUS  ${Math.ceil(this.bonusLeft * 10000)}`, HUD_W / 2, 280, 16, WHITE, 'center');
          if (this.t > 3 && this.bonusLeft <= 0 && blink) h.text(this.touch ? 'TAP TO CONTINUE' : 'PRESS ENTER', HUD_W / 2, 330, 24, YELLOW, 'center');
        }
        if (this.state === 'over' && !(this.table.length && this.t > 2.5)) {
          if (this.t < 2.5) h.text('TIME UP', HUD_W / 2, 180, 48, RED, 'center');
          else {
            h.text('GAME OVER', HUD_W / 2, 170, 48, RED, 'center');
            h.text(`SCORE ${this.score}`, HUD_W / 2, 250, 24, WHITE, 'center');
            if (blink) h.text(this.touch ? 'TAP TO CONTINUE' : 'PRESS ENTER', HUD_W / 2, 310, 24, YELLOW, 'center');
          }
        }
        if (this.clock < this.musicToast && this.state !== 'goal' && this.state !== 'over') {
          h.box(HUD_W / 2 - 200, 150 - 4, 400, 34, 0x101030, PINK, 3);
          h.text(`MUSIC  ${this.musicLabel()}`, HUD_W / 2, 156, 16, WHITE, 'center');
        }
        if (this.clock < this.msgUntil && (this.msg === 'GO!' || blink)) {
          h.text(this.msg, HUD_W / 2, 150, this.msg === 'GO!' ? 64 : 32, this.msg === 'GO!' ? YELLOW : CYAN, 'center');
          if (this.msg2) h.text(this.msg2, HUD_W / 2, 200, 24, YELLOW, 'center');
        }
        if (this.paused) {
          h.box(HUD_W / 2 - 220, 150, 440, 170, 0x101030, WHITE);
          h.text('PAUSE', HUD_W / 2, 180, 32, YELLOW, 'center');
          h.text(this.touch ? 'RESUME' : 'ESC  RESUME', HUD_W / 2, 230, 16, WHITE, 'center');
          h.text(this.touch ? 'RESTART' : 'R  RESTART', HUD_W / 2, 260, 16, WHITE, 'center');
          h.text(this.touch ? 'QUIT' : 'Q  QUIT', HUD_W / 2, 290, 16, WHITE, 'center');
        }
      }
    }
  }

  /** Final classification after a race against the rivals. */
  private resultsTable(blink: boolean) {
    const h = this.hud;
    const x0 = HUD_W / 2 - 330, w = 660, y0 = 96;
    h.box(x0, y0, w, 330, 0x101030, this.place === 1 && this.finishTime >= 0 ? YELLOW : WHITE, 4);
    const title = this.finishTime < 0 ? 'TIME UP  -  DID NOT FINISH' : this.place === 1 ? 'YOU WIN!' : `YOU FINISHED ${ordinal(this.place)}`;
    h.text(title, HUD_W / 2, y0 + 16, 16, this.finishTime < 0 ? RED : YELLOW, 'center');
    this.table.forEach((r, i) => {
      const y = y0 + 52 + i * 30;
      if (r.player) h.rect(x0 + 10, y - 6, w - 20, 28, 0x3a2a70);
      const c = r.player ? YELLOW : WHITE;
      h.text(ordinal(r.pos), x0 + 24, y, 16, r.pos === 1 ? ORANGE : c);
      h.text(r.name, x0 + 110, y, 16, c);
      h.text(r.car, x0 + 230, y, 16, r.player ? YELLOW : CYAN);
      const t = !Number.isFinite(r.time) ? 'DNF' : (r.estimated ? '~' : ' ') + fmtTime(r.time);
      h.text(t, x0 + w - 24, y, 16, c, 'right');
    });
    if (blink && this.t > 3.5) h.text(this.touch ? 'TAP TO CONTINUE' : 'PRESS ENTER', HUD_W / 2, y0 + 340, 16, YELLOW, 'center');
  }

  private raceHud(blink: boolean) {
    const h = this.hud;
    const route = this.world.route;
    h.text('SCORE', 20, 16, 16, YELLOW);
    h.text(String(this.score).padStart(8, '0'), 20, 38, 16, WHITE);
    h.text('TIME', HUD_W / 2, 12, 16, YELLOW, 'center');
    const tl = Math.ceil(this.timeLeft);
    const low = this.timeLeft < 10 && this.state === 'race';
    if (!low || blink) h.text(String(tl).padStart(2, '0'), HUD_W / 2, 34, 48, low ? RED : ORANGE, 'center');
    h.text(`STAGE ${Math.min(this.stage + 1, route.stageNames.length)}`, HUD_W - 20, 16, 16, YELLOW, 'right');
    const km = Math.max(0, (this.pos - 3 * SEG) / 1000);
    h.text(`${km.toFixed(1)}KM`, HUD_W - 20, 38, 16, WHITE, 'right');
    if (this.mode === 'rivals' && this.world.rivals.length && this.state === 'race') {
      // live race position, in the gap under the timer
      // on phones the course bar sits under the timer, so the position goes under the speed gauge
      const p = ordinal(this.place);
      const px = this.touch ? 84 : HUD_W / 2 - 52, py = this.touch ? 222 : 90;
      h.text('POS', px - 12, py + 8, 16, YELLOW, 'right');
      h.text(p, px, py, 32, this.place === 1 ? YELLOW : WHITE);
      h.text('/8', px + p.length * 32 + 4, py + 16, 16, WHITE);
    }

    // speed + tach
    const kmh = Math.round(this.speed * KMH);
    // on phones the thumbs cover the bottom corners, so the gauges move up
    const t = this.touch;
    const sy = t ? 70 : HUD_H - 92;
    h.text('SPEED', 20, sy, 16, YELLOW);
    h.text(String(kmh).padStart(3, ' '), 20, sy + 26, 32, WHITE);
    h.text('KM/H', 130, sy + 42, 16, CYAN);
    if (t) h.tach(20, sy + 100, this.speed / this.vmax);
    else h.tach(220, HUD_H - 24, this.speed / this.vmax);
    // turbo stock: one lamp per boost left, and a draining bar while one is firing
    const tx = t ? 20 : 220, ty = t ? sy + 112 : HUD_H - 80;
    h.text('TURBO', tx, ty, 16, this.turboT > 0 && blink ? WHITE : ORANGE);
    for (let i = 0; i < TURBOS; i++) h.box(tx + 92 + i * 26, ty - 2, 20, 20, i < this.turbos ? ORANGE : 0x202030, i < this.turbos ? YELLOW : 0x404058, 3);
    if (this.turboT > 0) h.rect(tx + 92, ty + 22, (this.turboT / TURBO_TIME) * (TURBOS * 26 - 6), 5, YELLOW);

    // course progress bar
    const x0 = t ? HUD_W / 2 - 120 : HUD_W - 250, x1 = t ? HUD_W / 2 + 120 : HUD_W - 24, y = t ? 118 : HUD_H - 34;
    h.text('COURSE', x0, y - 26, 16, YELLOW);
    h.rect(x0, y, x1 - x0, 8, 0x202040);
    const goal = this.world.track.goalDist;
    const starts = this.world.track.stageStarts;
    for (const s of starts) h.rect(x0 + ((s * SEG) / goal) * (x1 - x0) - 1, y - 4, 4, 16, WHITE);
    const p = Math.min(1, this.pos / goal);
    h.rect(x0, y, p * (x1 - x0), 8, PINK);
    h.rect(x0 + p * (x1 - x0) - 4, y - 6, 8, 20, YELLOW);
    h.text(route.stageNames[Math.min(this.stage, route.stageNames.length - 1)], x1, y + 14, 8, WHITE, 'right');
  }
}
