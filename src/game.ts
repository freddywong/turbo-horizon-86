import * as THREE from 'three';
import { Audio } from './audio';
import { CYAN, Hud, HUD_H, HUD_W, ORANGE, PINK, RED, WHITE, YELLOW } from './hud';
import { Input } from './input';
import { ROAD_HALF, SEG } from './track';
import { World } from './world';

type State = 'attract' | 'select' | 'countdown' | 'race' | 'goal' | 'over';

const VMAX = 82; // ~295 km/h
const KMH = 3.6;
const GEARS = [0, 18, 34, 50, 66, 84];
const STEER_RATE = 25;
const CF = 0.82; // centrifugal push in curves

const loadHi = (): number => {
  try {
    return parseInt(localStorage.getItem('th86-hi') ?? '0', 10) || 0;
  } catch {
    return 0;
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

  constructor(private worlds: World[], private camera: THREE.PerspectiveCamera, private input: Input,
    private audio: Audio, private hud: Hud) {
    this.world = worlds[0];
    this.resetPlayer(true);
  }

  private setWorld(i: number) {
    if (this.world === this.worlds[i] && this.routeIdx === i) return;
    this.routeIdx = i;
    this.world = this.worlds[i];
  }

  private resetPlayer(demo: boolean) {
    this.pos = 3 * SEG;
    this.px = demo ? this.world.laneX(1) : 0;
    this.speed = demo ? 50 : 0;
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

  private flash(a: string, b = '', dur = 2) {
    this.msg = a;
    this.msg2 = b;
    this.msgUntil = this.clock + dur;
  }

  startRace() {
    this.paused = false;
    this.resetPlayer(false);
    this.timeLeft = this.world.route.startTime;
    this.score = 0;
    this.lastBeep = -1;
    this.msg = '';
    this.go('countdown');
    this.audio.music(this.world.route.id);
  }

  // ------------------------------------------------------------------ update
  update(dt: number) {
    const inp = this.input;
    this.clock += dt;
    if (inp.hit('KeyM')) this.audio.toggleMute();

    if (this.paused) {
      if (inp.hit('Escape')) this.paused = false;
      else if (inp.hit('KeyR')) this.startRace();
      else if (inp.hit('KeyQ')) { this.paused = false; this.toSelect(); }
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
          this.resetPlayer(true);
        }
        this.drive(dt, this.autopilot(), true);
        if (inp.confirm) {
          this.audio.coin();
          this.toSelect();
        }
        break;
      }
      case 'select': {
        this.drive(dt, this.autopilot(), true);
        if (inp.hit('ArrowLeft', 'KeyA', 'ArrowRight', 'KeyD', 'ArrowUp', 'ArrowDown', 'KeyW', 'KeyS')) {
          this.audio.blip();
          this.setWorld(1 - this.routeIdx);
          this.resetPlayer(true);
        }
        if (inp.hit('Escape')) { this.go('attract'); this.audio.music('title'); }
        else if (inp.confirm || this.t > 20) { this.audio.coin(); this.startRace(); }
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
        this.drive(dt, { accel: inp.accel, brake: inp.brake, steer: inp.steer, drift: inp.drift }, false);
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
          this.go('goal');
          this.audio.fanfare();
          this.audio.music(null);
        } else if (this.timeLeft <= 0) {
          this.timeLeft = 0;
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
        if (this.t > 3 && this.bonusLeft <= 0 && (inp.confirm || this.t > 14)) this.toSelect();
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
      case 'over': {
        this.drive(dt, { accel: false, brake: this.t > 1, steer: 0, drift: false }, false);
        if (this.t > 2.5 && (inp.confirm || this.t > 12)) this.toSelect();
        if (inp.hit('KeyR')) this.startRace();
        break;
      }
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
    this.resetPlayer(true);
    this.audio.music('title');
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
      if (c.accel) this.speed += 30 * (1 - Math.pow(v / VMAX, 1.8)) * dt + 2 * dt;
      else if (c.brake) this.speed -= 58 * dt;
      else this.speed -= (3 + v * 0.035) * dt;

      // steering: snappy, scaled by speed
      const target = c.steer;
      const rate = target === 0 ? 9 : 7;
      this.steer += Math.sign(target - this.steer) * Math.min(Math.abs(target - this.steer), rate * dt);
      let lat = this.steer * STEER_RATE * Math.min(1, v / 22);
      let cf = seg.curve * v * v * CF;
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
    }
    this.speed = Math.max(0, Math.min(VMAX, this.speed));
    this.pos += this.speed * dt;
    this.wheelSpin -= this.speed * dt / 0.37;
    if ((this.state === 'attract' || this.state === 'select') && this.pos > track.goalDist - 200) this.resetPlayer(true);

    w.updateTraffic(dt, this.pos, () => {
      if (this.state === 'race') this.score += 2000;
    });

    // engine audio: automatic gearbox
    let g = 1;
    while (g < GEARS.length - 1 && this.speed > GEARS[g]) g++;
    const rpm = 0.25 + 0.75 * Math.min(1, (this.speed - GEARS[g - 1]) / (GEARS[g] - GEARS[g - 1]));
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
    const fov = 54 + 14 * f * f;
    if (Math.abs(cam.fov - fov) > 0.01) {
      cam.fov = fov;
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
    const blink = Math.floor(this.clock * 2.5) % 2 === 0;
    const route = this.world.route;
    switch (this.state) {
      case 'attract': {
        h.logo('TURBO', HUD_W / 2, 70, 64, YELLOW, ORANGE, 0xb01818);
        h.logo('HORIZON', HUD_W / 2, 150, 56, 0x80f8ff, 0x2a90ff, 0x1a2a90);
        h.text("'86", HUD_W / 2 + 230, 210, 24, PINK, 'left');
        h.text('ARCADE  ROAD  RACING', HUD_W / 2, 236, 16, WHITE, 'center');
        if (blink) h.text('PRESS ENTER', HUD_W / 2, 320, 24, YELLOW, 'center');
        h.text(`HI-SCORE ${String(this.hi).padStart(8, '0')}`, HUD_W / 2, 20, 16, CYAN, 'center');
        h.text('FREE PLAY', HUD_W - 20, HUD_H - 30, 16, WHITE, 'right');
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
        h.text('<  >  CHOOSE    ENTER  START', HUD_W / 2, 296, 16, WHITE, 'center');
        h.text(`${Math.max(0, Math.ceil(20 - this.t))}`, HUD_W / 2, 92, 32, ORANGE, 'center');
        break;
      }
      default: {
        this.raceHud(blink);
        if (this.state === 'countdown') {
          const n = 3 - Math.floor(this.t);
          if (n > 0) h.text(String(n), HUD_W / 2, 180, 64, n === 1 ? RED : YELLOW, 'center');
          h.text(route.stageNames[0], HUD_W / 2, 280, 16, WHITE, 'center');
        }
        if (this.state === 'goal') {
          h.text('GOAL!', HUD_W / 2, 140, 64, YELLOW, 'center');
          h.text('CONGRATULATIONS', HUD_W / 2, 230, 24, CYAN, 'center');
          h.text(`TIME BONUS  ${Math.ceil(this.bonusLeft * 10000)}`, HUD_W / 2, 280, 16, WHITE, 'center');
          if (this.t > 3 && this.bonusLeft <= 0 && blink) h.text('PRESS ENTER', HUD_W / 2, 330, 24, YELLOW, 'center');
        }
        if (this.state === 'over') {
          if (this.t < 2.5) h.text('TIME UP', HUD_W / 2, 180, 48, RED, 'center');
          else {
            h.text('GAME OVER', HUD_W / 2, 170, 48, RED, 'center');
            h.text(`SCORE ${this.score}`, HUD_W / 2, 250, 24, WHITE, 'center');
            if (blink) h.text('PRESS ENTER', HUD_W / 2, 310, 24, YELLOW, 'center');
          }
        }
        if (this.clock < this.msgUntil && (this.msg === 'GO!' || blink)) {
          h.text(this.msg, HUD_W / 2, 150, this.msg === 'GO!' ? 64 : 32, this.msg === 'GO!' ? YELLOW : CYAN, 'center');
          if (this.msg2) h.text(this.msg2, HUD_W / 2, 200, 24, YELLOW, 'center');
        }
        if (this.paused) {
          h.box(HUD_W / 2 - 220, 150, 440, 170, 0x101030, WHITE);
          h.text('PAUSE', HUD_W / 2, 180, 32, YELLOW, 'center');
          h.text('ESC  RESUME', HUD_W / 2, 236, 16, WHITE, 'center');
          h.text('R  RESTART', HUD_W / 2, 262, 16, WHITE, 'center');
          h.text('Q  QUIT', HUD_W / 2, 288, 16, WHITE, 'center');
        }
      }
    }
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

    // speed + tach
    const kmh = Math.round(this.speed * KMH);
    h.text('SPEED', 20, HUD_H - 92, 16, YELLOW);
    h.text(String(kmh).padStart(3, ' '), 20, HUD_H - 66, 32, WHITE);
    h.text('KM/H', 130, HUD_H - 50, 16, CYAN);
    h.tach(220, HUD_H - 24, this.speed / VMAX);

    // course progress bar
    const x0 = HUD_W - 250, x1 = HUD_W - 24, y = HUD_H - 34;
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
