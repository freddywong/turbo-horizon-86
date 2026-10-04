import * as THREE from 'three';
import { Audio, TRACKS } from './audio';
import { GFX } from './gfx';
import { CYAN, Hud, HUD_H, HUD_W, ORANGE, PINK, RED, WHITE, YELLOW } from './hud';
import { Input } from './input';
import { LANE_W, ROAD_HALF, SEG } from './track';
import { ROSTER } from './cars/roster';
import { fmtTime, makeGrid, ordinal, playerPosition, raceClock, results, ResultRow, Rival, updateRivals } from './rivals';
import { GoMsg, HitMsg, Net, roomFromHash, StMsg } from './net';
import { NameBox } from './nameui';
import { VS_AI_DAMAGE, AI_GUN_CAP, AMMO_DEFAULT, AMMO_STEPS, FIRE_RATE, GUN_CAP, hitChance, inRange, PER_HIT, TURBO_DEFAULT, TURBO_SPEED, TURBO_TIME } from './rules';
import { CarSpec } from './cars/spec';
import { World } from './world';
import type { RouteDef } from './routes/types';

type State = 'attract' | 'select' | 'carselect' | 'name' | 'lobby' | 'countdown' | 'race' | 'goal' | 'over';
type Mode = 'arcade' | 'rivals' | 'online';
const MODES: Mode[] = ['arcade', 'rivals', 'online'];
// route-select grid
const CARD_X = 39, CARD_Y = 80, CARD_STEP_X = 262, CARD_STEP_Y = 100;

const VMAX = 82; // reference top speed (~295 km/h) for camera / gearing
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
/** Damage bar colour by how full it is (full = wrecked). */
const damageColour = (f: number) => (f < 0.4 ? 0x40e040 : f < 0.7 ? YELLOW : RED);

const loadNum = (key: string, def: number): number => {
  try {
    const v = localStorage.getItem(key);
    return v === null ? def : parseInt(v, 10);
  } catch {
    return def;
  }
};
const saveNum = (key: string, v: number) => {
  try {
    localStorage.setItem(key, String(v));
  } catch {
    /* storage unavailable */
  }
};
const loadName = (): string => {
  try {
    return localStorage.getItem('th86-name') ?? '';
  } catch {
    return '';
  }
};
const saveName = (v: string) => {
  try {
    localStorage.setItem('th86-name', v);
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
  /** car condition 0..100; at 0 the engine gives out and the run is over */
  hp = 100;
  wrecked = false;
  private dmgCool = 0;
  private scrapeDmg = 0;
  private smokeT = 0;
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
  mode: Mode = 'arcade';
  // online play
  net: Net | null = null;
  nameBox: NameBox | null = null;
  playerName = loadName();
  private pending: { go: GoMsg; at: number } | null = null;
  private raceId = '';
  private netSendT = 0;
  private tableT = 0;
  raceTime = 0;
  /** turbo boosts left this race, and time left on the active one */
  turbos = TURBO_DEFAULT;
  turboT = 0;
  /** menu settings: boosts per race (1-9) and weapons on/off (VS RIVALS, online) */
  turboCount = Math.max(1, Math.min(9, loadNum('th86-turbos', TURBO_DEFAULT) || TURBO_DEFAULT));
  weaponsSetting = loadNum('th86-weapons', 1) === 1;
  ammoCount = AMMO_STEPS.includes(loadNum('th86-ammo', AMMO_DEFAULT)) ? loadNum('th86-ammo', AMMO_DEFAULT) : AMMO_DEFAULT;
  raceAmmo = AMMO_DEFAULT;
  // this race
  raceTurbos = TURBO_DEFAULT;
  weapons = false;
  ammo = 0;
  private fireCool = 0;
  private firingT = 0;
  private gunTarget: number | null = null;
  private lastGunTarget: number | null = null;
  private gunP = 0;
  private noTargetT = 0;
  private hitFlash = 0;
  /** gun damage taken so far from each shooter (capped at GUN_CAP each) */
  private gunFrom = new Map<string, number>();
  private pendingHits = new Map<string, number>();
  private hitSendT = 0;
  private onlineGo: GoMsg | null = null;
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

  /** routes are built the first time they're needed (building all six up front is slow on phones) */
  private worlds: (World | null)[];

  constructor(private routes: RouteDef[], private camera: THREE.PerspectiveCamera, private input: Input,
    private audio: Audio, private hud: Hud) {
    this.worlds = routes.map(() => null);
    this.world = this.getWorld(0);
    this.resetPlayer(true);
  }

  private getWorld(i: number): World {
    return (this.worlds[i] ??= new World(this.routes[i]));
  }

  private setWorld(i: number) {
    if (this.world === this.worlds[i] && this.routeIdx === i) return;
    this.routeIdx = i;
    this.world = this.getWorld(i);
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
    this.wrecked = false;
    this.world.resetTraffic(this.pos);
    this.world.particles.clear();
  }

  private go(s: State) {
    this.state = s;
    this.t = 0;
  }

  private trackId(): string {
    return this.musicIdx < 0 ? this.world.route.music : TRACKS[this.musicIdx].id;
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
    this.hp = 100;
    this.wrecked = false;
    this.applyCar();
    const go = this.mode === 'online' ? this.onlineGo : null;
    this.raceTurbos = go ? go.turbos : this.turboCount;
    this.turbos = this.raceTurbos;
    this.turboT = 0;
    this.weapons = go ? go.weapons : this.mode === 'rivals' && this.weaponsSetting;
    this.raceAmmo = go ? go.ammo : this.ammoCount;
    this.ammo = this.weapons ? this.raceAmmo : 0;
    this.fireCool = 0;
    this.firingT = 0;
    this.gunTarget = this.lastGunTarget = null;
    this.hitFlash = 0;
    this.gunFrom.clear();
    this.pendingHits.clear();
    this.raceTime = 0;
    this.finishTime = -1;
    this.table = [];
    if (this.mode === 'rivals') {
      // start from the back of the grid; lighter traffic, pushed further up the road
      this.world.setRivals(makeGrid(this.spec, this.pos, Date.now() & 0xffff, this.raceTurbos, this.weapons ? this.raceAmmo : 0));
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
      else if (act === 'restart' && this.mode !== 'online') this.startRace();
      else if (act === 'quit') { this.paused = false; if (this.mode === 'online') this.toLobby(); else this.toSelect(); }
      this.audio.engine(false, 0, 0);
      this.audio.skid(0);
      this.netTick(dt);
      return;
    }
    this.t += dt;

    switch (this.state) {
      case 'attract': {
        this.demoClock += dt;
        if (this.demoClock > 24) {
          this.demoClock = 0;
          this.attractRoute = (this.attractRoute + 1) % this.routes.length;
          this.setWorld(this.attractRoute);
          const s = ROSTER[Math.floor(Math.random() * ROSTER.length)];
          this.world.setPlayerCar(s, s.paints[0]);
          this.resetPlayer(true);
        }
        this.drive(dt, this.autopilot(), true);
        if (inp.confirm || inp.taps.length) {
          this.audio.coin();
          this.toSelect();
        }
        break;
      }
      case 'select': {
        this.drive(dt, this.autopilot(), true);
        let pick = -1, go = inp.confirm || this.t > 20;
        const nr = this.routes.length;
        if (inp.hit('ArrowLeft', 'KeyA')) pick = (this.routeIdx + nr - 1) % nr;
        if (inp.hit('ArrowRight', 'KeyD')) pick = (this.routeIdx + 1) % nr;
        let toggle = inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS');
        for (const tp of inp.taps) {
          if (tp.y > CARD_Y && tp.y < CARD_Y + 2 * CARD_STEP_Y - 12 && tp.x > CARD_X && tp.x < CARD_X + 3 * CARD_STEP_X - 12) {
            const i = Math.floor((tp.y - CARD_Y) / CARD_STEP_Y) * 3 + Math.floor((tp.x - CARD_X) / CARD_STEP_X);
            if (i === this.routeIdx) go = true;
            else if (i < nr) pick = i;
          } else if (tp.y >= 320 && tp.y < 380) {
            const m = MODES[Math.max(0, Math.min(2, Math.floor((tp.x - (HUD_W / 2 - 375)) / 250)))];
            if (m !== this.mode) {
              this.mode = m;
              this.audio.blip();
            }
          } else if (tp.y >= 380) go = true;
        }
        if (toggle) {
          const dn = inp.hit('ArrowDown', 'KeyS') ? 1 : 2;
          this.mode = MODES[(MODES.indexOf(this.mode) + dn) % 3];
          this.audio.blip();
        }
        if (pick >= 0) {
          this.audio.blip();
          this.setWorld(pick);
          this.resetPlayer(true);
        }
        if (inp.hit('Escape')) { this.go('attract'); this.audio.music('title'); }
        else if (go) {
          this.audio.coin();
          if (this.mode === 'online') this.toName();
          else this.toCarSelect();
        }
        break;
      }
      case 'carselect': {
        // parked on the start straight, camera circles the car
        this.speed = 0;
        let dc = 0, dp = 0, go = inp.confirm || this.t > 25;
        if (inp.hit('ArrowLeft', 'KeyA')) dc = -1;
        if (inp.hit('ArrowRight', 'KeyD')) dc = 1;
        if (inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS')) dp = 1;
        if (inp.hit('KeyT')) this.cycleTurbos();
        if (inp.hit('KeyV') && this.mode === 'rivals') this.toggleWeapons();
        if (inp.hit('KeyB') && this.mode === 'rivals') this.cycleAmmo();
        for (const tp of inp.taps) {
          if (tp.y > 150 && tp.y < 186) {
            if (this.mode !== 'rivals' || tp.x < HUD_W * 0.33) this.cycleTurbos();
            else if (tp.x < HUD_W * 0.66) this.toggleWeapons();
            else this.cycleAmmo();
          } else if (tp.y > 370 && tp.y < 405 && tp.x > HUD_W / 2) this.nextTrack();
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
        this.showroom(dt);
        break;
      }
      case 'name': {
        this.speed = 0;
        if (inp.hit('Escape') && this.nameBox) {
          this.nameBox.hide();
          this.toSelect();
        }
        this.showroom(dt);
        break;
      }
      case 'lobby': {
        this.lobby(dt);
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
        if (inp.hit('KeyR') && this.mode !== 'online') this.startRace();
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
          if (this.mode !== 'arcade') {
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
          if (this.mode !== 'arcade') this.table = results(this.world.rivals, this.world.track, 'YOU', this.spec.name, Infinity, this.raceTime);
          this.go('over');
          this.audio.sad();
          this.audio.music(null);
          this.saveScore();
        }
        if (inp.hit('Escape')) this.paused = true;
        if (inp.hit('KeyR') && this.mode !== 'online') this.startRace();
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
        if (this.t > 3 && this.bonusLeft <= 0 && (inp.confirm || inp.taps.length || this.t > 14)) this.afterRace();
        if (inp.hit('KeyR') && this.mode !== 'online') this.startRace();
        break;
      }
      case 'over': {
        this.drive(dt, { accel: false, brake: this.t > 1, steer: 0, drift: false }, false);
        if (this.t > 2.5 && (inp.confirm || inp.taps.length || this.t > 12)) this.afterRace();
        if (inp.hit('KeyR') && this.mode !== 'online') this.startRace();
        break;
      }
    }
    if (['race', 'goal', 'over'].includes(this.state)) this.guns(dt);
    // rival drivers
    const w = this.world;
    if (w.rivals.length && ['countdown', 'race', 'goal', 'over'].includes(this.state)) {
      const running = this.state !== 'countdown';
      if (this.state === 'race') this.raceTime += dt;
      updateRivals(w.rivals, dt, w.track, w.traffic, (c) => w.data.props[c.t].len ?? 4.4,
        { pos: this.pos, px: this.px, speed: this.speed }, this.raceTime, running);
      if (this.state === 'race' || this.state === 'countdown') this.place = playerPosition(w.rivals, this.pos, -1);
    }
    w.netTime = this.raceTime;
    this.netTick(dt);
  }

  private saveScore() {
    if (this.score > this.hi) {
      this.hi = this.score;
      saveHi(this.hi);
    }
  }

  /** T: boosts per race 1-9 (wraps). */
  private cycleTurbos() {
    this.turboCount = (this.turboCount % 9) + 1;
    saveNum('th86-turbos', this.turboCount);
    this.audio.blip();
  }
  /** V: weapons on/off. */
  private toggleWeapons() {
    this.weaponsSetting = !this.weaponsSetting;
    saveNum('th86-weapons', this.weaponsSetting ? 1 : 0);
    this.audio.blip();
  }
  /** B: rounds per race (30-150). */
  private cycleAmmo() {
    this.ammoCount = AMMO_STEPS[(AMMO_STEPS.indexOf(this.ammoCount) + 1) % AMMO_STEPS.length];
    saveNum('th86-ammo', this.ammoCount);
    this.audio.blip();
  }
  /** One-line summary of the race settings. */
  private settingsLine(weapons: boolean) {
    const k = (key: string) => (this.touch ? '' : `${key} `);
    return `${k('T')}TURBOS ${this.turboCount}${weapons ? `  ${k('V')}WEAPONS ${this.weaponsSetting ? 'ON' : 'OFF'}  ${k('B')}AMMO ${this.ammoCount}` : ''}`;
  }

  /** Car parked on the start straight, camera circling it (car select, lobby). */
  private showroom(dt: number) {
    this.updateWorld(dt, { steer: 0, yaw: 0, spin: 0, bounce: 0 });
    const a = this.t * 0.45 + 0.6;
    const cam = this.camera;
    cam.fov = 40;
    cam.updateProjectionMatrix();
    cam.position.set(this.px + Math.sin(a) * 7, 2.0, Math.cos(a) * 7);
    cam.lookAt(this.px, 0.35, 0);
  }

  // ------------------------------------------------------------------ online
  /** Deep link (#join): straight to the name box. */
  boot() {
    if (roomFromHash() !== null) {
      this.mode = 'online';
      this.toName();
    }
  }

  private toName() {
    this.mode = 'online';
    this.go('name');
    this.applyCar();
    this.resetPlayer(false);
    this.px = 0;
    if (!this.nameBox) return this.joinLobby(this.playerName || 'PLAYER');
    this.nameBox.show(this.playerName, (name) => {
      this.input.fireFirst(); // the JOIN click unlocks audio
      this.playerName = name;
      saveName(name);
      this.joinLobby(name);
    });
  }

  private joinLobby(name: string) {
    if (!this.net || this.net.status === 'error') {
      this.net?.leave();
      const local = new URLSearchParams(location.search).get('net') === 'local';
      this.net = new Net(roomFromHash() ?? 'lobby', local);
      this.net.onGo = (m) => this.acceptGo(m);
      this.net.onSt = (m, from) => this.gotSt(m, from);
      this.net.onHit = (m, from) => this.gotHit(m, from);
    }
    this.net.setMe({ name, car: this.carIdx, paint: this.paintIdx, status: 'lobby', raceId: '' });
    this.toLobby();
  }

  private toLobby() {
    this.paused = false;
    this.pending = null;
    this.raceId = '';
    this.world.setRivals([]);
    this.net?.setMe({ status: 'lobby', raceId: '' });
    this.go('lobby');
    this.applyCar();
    this.resetPlayer(false);
    this.px = 0;
    this.audio.music(this.trackId());
  }

  private leaveOnline() {
    this.net?.leave();
    this.net = null;
    this.pending = null;
    this.mode = 'arcade';
    this.toSelect();
  }

  /** After the results: online players go back to the lobby, everyone else to route select. */
  private afterRace() {
    if (this.mode === 'online' && this.net) this.toLobby();
    else this.toSelect();
  }

  private lobby(dt: number) {
    const inp = this.input, net = this.net;
    this.speed = 0;
    let dc = 0, dp = 0, route = false, start = inp.confirm;
    if (inp.hit('ArrowLeft', 'KeyA')) dc = -1;
    if (inp.hit('ArrowRight', 'KeyD')) dc = 1;
    if (inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS')) dp = 1;
    if (inp.hit('KeyR')) route = true;
    let turb = inp.hit('KeyT'), weap = inp.hit('KeyV'), ammo = inp.hit('KeyB');
    let exit = inp.hit('Escape', 'KeyQ');
    for (const tp of inp.taps) {
      if (tp.y > 405 && Math.abs(tp.x - HUD_W / 2) < 150) start = true;
      else if (tp.y > 405 && tp.x < HUD_W / 2 - 160) route = true;
      else if (tp.y < 50 && tp.x < 150) exit = true;
      else if (tp.y >= 140 && tp.y < 218 && tp.x < 330) {
        if (tp.y < 166) turb = true;
        else if (tp.y < 192) weap = true;
        else ammo = true;
      } else if (tp.y > 60 && tp.y < 135 && tp.x < HUD_W - 330) dc = 1;
      else if (tp.y >= 135 && tp.y < 400 && tp.x < HUD_W - 330) dp = 1;
    }
    if (exit) return this.leaveOnline();
    if (net?.status === 'error') {
      if (start) this.joinLobby(this.playerName || 'PLAYER');
      this.showroom(dt);
      return;
    }
    const locked = !!this.pending;
    if (!locked) {
      if (dc) {
        this.carIdx = (this.carIdx + dc + ROSTER.length) % ROSTER.length;
        this.paintIdx = 0;
      }
      if (dp) this.paintIdx = (this.paintIdx + 1) % this.spec.paints.length;
      if (dc || dp) {
        this.audio.blip();
        this.applyCar();
        saveCar(this.carIdx, this.paintIdx);
        net?.setMe({ car: this.carIdx, paint: this.paintIdx });
      }
      if (route) {
        this.audio.blip();
        this.setWorld((this.routeIdx + 1) % this.routes.length);
        this.applyCar();
        this.resetPlayer(false);
        this.px = 0;
        this.audio.music(this.trackId());
      }
      if (turb) this.cycleTurbos();
      if (weap) this.toggleWeapons();
      if (ammo) this.cycleAmmo();
      if (start && net?.status === 'online') this.startOnline();
    }
    if (this.pending && raceClock() >= this.pending.at) this.beginOnlineRace(this.pending.go);
    this.showroom(dt);
  }

  /** Anyone may start: everyone in the lobby (up to 8) is put on the grid. */
  private startOnline() {
    const net = this.net!;
    const others = net.list().filter((p) => p.status === 'lobby').slice(0, 7);
    const go: GoMsg = {
      raceId: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      route: this.routeIdx,
      seed: Math.floor(Math.random() * 1e9),
      turbos: this.turboCount,
      weapons: this.weaponsSetting,
      ammo: this.ammoCount,
      players: [{ id: net.selfId, name: this.playerName || 'PLAYER', car: this.carIdx, paint: this.paintIdx },
        ...others.map((p) => ({ id: p.id, name: p.name, car: p.car, paint: p.paint }))],
    };
    net.sendGo(go);
    this.acceptGo(go);
  }

  private acceptGo(go: GoMsg) {
    if (this.state !== 'lobby' || !this.net) return;
    if (!go.players.some((p) => p.id === this.net!.selfId)) return; // joined after it was called
    // two players pressing START at once: everyone keeps the lowest race id
    if (this.pending && this.pending.go.raceId <= go.raceId) return;
    this.onlineGo = go;
    this.pending = { go, at: raceClock() + 2 };
    this.audio.coin();
  }

  private beginOnlineRace(go: GoMsg) {
    const net = this.net!;
    this.pending = null;
    this.onlineGo = go;
    this.setWorld(go.route);
    this.raceId = go.raceId;
    this.startRace();
    // grid: two abreast, in the starter's player order
    const n = go.players.length, rows = Math.ceil(n / 2);
    const slot = (i: number) => ({ d: 3 * SEG + (rows - 1 - Math.floor(i / 2)) * 9, x: (i % 2 ? 1 : -1) * LANE_W * 0.55 });
    const rivals: Rival[] = [];
    go.players.forEach((p, i) => {
      const g = slot(i);
      if (p.id === net.selfId) {
        this.pos = g.d;
        this.px = g.x;
        return;
      }
      const spec = ROSTER[p.car % ROSTER.length];
      rivals.push({
        name: p.name, spec, paint: spec.paints[p.paint % spec.paints.length], d: g.d, x: g.x, v: 0, vmax: 0, corner: 0, aggro: 0,
        lane: 0, steer: 0, spin: 0, braking: false, finished: -1, bumpT: 0, turbos: 0, turboT: 0,
        hp: 100, wrecked: false, wreckT: 0, smokeT: 0, ammo: 0, gunTaken: 0, burst: 0, fireCool: 0, gunT: 0, gunTo: -1,
        remote: { id: p.id, d: g.d, x: g.x, v: 0, at: raceClock(), hp: 100 },
      });
    });
    this.world.setRivals(rivals);
    this.world.setNetTraffic(go.seed, 3 * SEG);
    this.place = n;
    net.setMe({ status: 'race', raceId: go.raceId });
  }

  private gotSt(m: StMsg, from: string) {
    if (!this.raceId || m.r !== this.raceId) return;
    const i = this.world.rivals.findIndex((r) => r.remote?.id === from);
    if (i < 0) return;
    const r = this.world.rivals[i], n = r.remote!;
    n.d = m.d;
    n.x = m.x;
    n.v = m.v;
    n.at = raceClock();
    r.steer = m.steer;
    r.braking = m.br;
    r.turboT = m.tb ? 1 : 0;
    if (m.hp < n.hp - 0.5) {
      // their crash or our bullets: dent their car on our screen too
      this.world.rivalHit(i, Math.min(1, (n.hp - m.hp) / 25));
      if (n.hp >= 55 && m.hp < 55) this.world.rivalBreakLamp(i);
      n.hp = m.hp;
    }
    r.hp = m.hp;
    if (m.hp <= 0 && !r.wrecked) {
      r.wrecked = true;
      r.wreckT = 0;
    }
    if (m.fin >= 0 && r.finished < 0) r.finished = m.fin;
    // their gunner: who they're shooting at
    if (m.gun) {
      const to = m.gun === this.net?.selfId ? -1 : this.world.rivals.findIndex((o) => o.remote?.id === m.gun);
      if (to !== i) {
        r.gunTo = to;
        r.gunT = 0.3;
      }
    }
  }

  /** Rounds another player says hit us. */
  private gotHit(m: HitMsg, from: string) {
    if (!this.raceId || m.r !== this.raceId || m.to !== this.net?.selfId) return;
    if (m.n > 0) this.takeGunHit(from, m.n);
  }

  /** Online bookkeeping every frame: heartbeat, our position at ~15 Hz, live results. */
  private netTick(dt: number) {
    const net = this.net;
    if (!net) return;
    net.update(dt);
    if (this.mode !== 'online' || !this.raceId || !['countdown', 'race', 'goal', 'over'].includes(this.state)) return;
    this.netSendT -= dt;
    if (this.netSendT <= 0) {
      this.netSendT = 1 / 15;
      net.sendSt({
        r: this.raceId, d: this.pos, x: this.px, v: this.speed, steer: this.steer, br: this.input.brake && this.speed > 1,
        tb: this.turboT > 0, hp: this.hp, fin: this.finishTime,
        gun: this.firingT > 0 && this.lastGunTarget !== null ? this.world.rivals[this.lastGunTarget]?.remote?.id ?? '' : '',
      });
    }
    // our hits on other players, batched
    this.hitSendT -= dt;
    if (this.hitSendT <= 0 && this.pendingHits.size) {
      this.hitSendT = 0.2;
      for (const [to, n] of this.pendingHits) net.sendHit({ r: this.raceId, to, n });
      this.pendingHits.clear();
    }
    // results fill in as the others cross the line
    if (this.table.length && (this.state === 'goal' || this.state === 'over')) {
      this.tableT -= dt;
      if (this.tableT <= 0) {
        this.tableT = 1;
        this.table = results(this.world.rivals, this.world.track, 'YOU', this.spec.name,
          this.finishTime >= 0 ? this.finishTime : Infinity, this.raceTime);
        this.place = this.table.find((r) => r.player)?.pos ?? this.place;
      }
    }
  }

  private toSelect() {
    this.go('select');
    for (const wd of this.worlds) wd?.setRivals([]);
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
      const vlim = this.vmax * (boost ? TURBO_SPEED : 1) * this.limp();
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
          if (!demo && this.state === 'race') {
            this.hp -= 3 * dt;
            this.scrapeDmg += dt;
            if (this.scrapeDmg > 0.6) {
              this.scrapeDmg = 0;
              this.world.car.hit(0.12, scrape > 0 ? 'right' : 'left');
            }
            if (this.hp <= 0) this.wreck();
          }
        }
      }
      offroad = Math.abs(this.px) > ROAD_HALF + 1.0;
      if (offroad) {
        if (this.speed > 32) this.speed -= 40 * dt;
        this.bounce = Math.random() * 0.08 * Math.min(1, v / 30);
        this.shakeKick = Math.max(this.shakeKick, 0.12);
      } else this.bounce = 0;
      if (!demo && offroad && v > 12 && w.hitProp(this.pos, this.px)) {
        this.damage(12 + v * 0.12, 0.6 + Math.min(0.4, v / 200), this.px > 0 ? 'right' : 'left');
        this.crash(true);
      }

      const car = w.hitTraffic(this.pos, this.px);
      if (car) {
        if (demo) this.speed = Math.min(this.speed, car.v * 0.9);
        else if (v - car.v > 36) {
          this.damage(10 + (v - car.v) * 0.14, 0.5 + Math.min(0.5, (v - car.v) / 150), 'front');
          this.crash(true);
        } else {
          if (this.dmgCool <= 0) this.damage(5, 0.25, car.x > this.px ? 'right' : 'left');
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
          if (v - r.v > 45 && !demo) {
            this.damage(9 + (v - r.v) * 0.1, 0.5, 'front');
            this.crash(true);
          } else {
            this.speed = Math.min(this.speed, r.v * 0.92);
            if (!demo && this.dmgCool <= 0) this.damage(2.5, 0.15, 'front');
          }
        } else {
          r.bumpT = 0.6;
          if (!demo && this.dmgCool <= 0) this.damage(2, 0.15, Math.abs(r.d - this.pos) < 2 ? (side > 0 ? 'left' : 'right') : 'rear');
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
    this.audio.engine(audible && !this.wrecked, rpm, c.accel ? 1 : 0);
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
      const col = route.smoke;
      for (const sx of [-0.9, 0.9]) P.spawn(this.pos - 1.4, this.px + sx, 0.35, this.speed * 0.6, sx, 0.8, 0.8, 0.45, 2.6, col);
    }
    if (n && offroad && this.speed > 15) {
      const sand = seg.zone.startsWith('beach') && this.px > 0;
      const col = sand ? 0xf2dca0 : seg.zone === 'hills' ? 0xc8b07a : 0xd8c898;
      for (const sx of [-0.9, 0.9]) P.spawn(this.pos - 1.5, this.px + sx, 0.3, this.speed * 0.5, sx * 2, 1.8, 0.6, 0.4, 2.2, col);
    }
    this.dmgCool = Math.max(0, this.dmgCool - dt);
    this.engineSmoke(dt);
    if (scrape && Math.random() < dt * 60) {
      for (let i = 0; i < 2; i++) P.spawn(this.pos + Math.random() * 2 - 1, this.px + scrape * 0.9, 0.5, this.speed * 0.8, -scrape * (2 + Math.random() * 3), 3 + Math.random() * 3, 0.35, 0.13, -1, Math.random() < 0.5 ? 0xffe040 : 0xff8a20);
    }
    P.update(dt);

    this.updateWorld(dt, {
      steer: this.steer, yaw: this.driftYaw + this.crashYaw, spin: this.wheelSpin, bounce: this.bounce,
      brake: (c.brake && this.speed > 1) || this.crashT > 0, flame: this.flameT,
    });
  }

  /** Top-speed factor: a badly damaged car limps. */
  private limp() {
    return this.hp >= 35 ? 1 : 0.86 + 0.14 * (this.hp / 35);
  }

  /** Takes condition off the car and dents the model where it was hit. */
  private damage(amount: number, severity: number, where: 'front' | 'rear' | 'left' | 'right') {
    if (this.state !== 'race' || this.wrecked) return;
    this.hp = Math.max(0, this.hp - amount);
    this.dmgCool = 0.5;
    this.world.car.hit(severity, where);
    this.afterDamage(amount);
  }

  private afterDamage(amount: number) {
    const before = this.hp + amount;
    if (before >= 55 && this.hp < 55) this.world.car.breakLamp(Math.random() < 0.5 ? -1 : 1);
    if (this.hp <= 0) this.wreck();
    else if (this.hp < 25 && before >= 25) this.flash('WARNING!', 'HEAVY DAMAGE', 2.0);
  }

  /** Bullets hit us: small dents, and no one shooter can take more than half the bar. */
  private takeGunHit(from: string, n: number) {
    if (this.state !== 'race' || this.wrecked) return;
    const taken = this.gunFrom.get(from) ?? 0;
    let dmg = Math.min(n * PER_HIT, GUN_CAP - taken);
    if (from.startsWith('ai:')) {
      // the computer drivers together can only take a fifth of the bar
      let ai = 0;
      for (const [k, v] of this.gunFrom) if (k.startsWith('ai:')) ai += v;
      dmg = Math.min(dmg, AI_GUN_CAP - ai);
    }
    if (dmg <= 0) return;
    this.gunFrom.set(from, taken + dmg);
    this.hp = Math.max(0, this.hp - dmg);
    const wh = ['left', 'right', 'rear'] as const;
    this.world.car.hit(0.1, wh[Math.floor(Math.random() * 3)]);
    this.hitFlash = 0.25;
    this.shakeKick = Math.max(this.shakeKick, 0.15);
    this.audio.ping();
    this.afterDamage(dmg);
  }

  /** Our round hit rival i. */
  private hitRival(i: number) {
    const r = this.world.rivals[i];
    if (r.remote) {
      this.pendingHits.set(r.remote.id, (this.pendingHits.get(r.remote.id) ?? 0) + 1);
      return;
    }
    if (r.wrecked) return;
    // computer cars: your bullets do triple damage and can finish them off
    const dmg = PER_HIT * VS_AI_DAMAGE, before = r.hp;
    r.hp = Math.max(0, r.hp - dmg);
    r.gunTaken += dmg;
    r.bumpT = Math.max(r.bumpT, 0.25 + (1 - r.hp / 100) * 0.35);
    this.world.rivalHit(i, 0.16);
    if (before >= 55 && r.hp < 55) this.world.rivalBreakLamp(i);
    if (r.hp <= 0) {
      r.wrecked = true;
      r.gunT = 0;
      r.burst = 0;
      this.score += 50000;
      this.flash(`${r.name} WRECKED!`, '+50000', 2.0);
      this.audio.crash(true);
      this.audio.pop();
    }
  }

  /** Weapons: auto-aim, our fire, the computer drivers shooting back, other players' gunfire. */
  private guns(dt: number) {
    const w = this.world, rivals = w.rivals, inp = this.input;
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.firingT = Math.max(0, this.firingT - dt);
    this.noTargetT = Math.max(0, this.noTargetT - dt);
    this.fireCool = Math.max(0, this.fireCool - dt);
    w.playerGun.flash = false;
    // auto-aim: the nearest racer in range, ahead or (closer) behind
    let best: number | null = null, bd = Infinity;
    if (this.weapons && !this.wrecked) {
      rivals.forEach((r, i) => {
        const dd = r.d - this.pos, dx = r.x - this.px;
        if (r.wrecked || !inRange(dd, dx)) return;
        const dist = Math.hypot(dd, dx);
        if (dist < bd) {
          bd = dist;
          best = i;
        }
      });
    }
    this.gunTarget = best;
    this.gunP = best !== null ? hitChance(bd) : 0;
    const firing = this.weapons && this.state === 'race' && !this.wrecked && this.crashT <= 0 && inp.held('KeyF');
    if (firing && (best === null || this.ammo <= 0)) this.noTargetT = 0.3;
    if (firing && best !== null && this.ammo > 0) {
      this.firingT = 0.35;
      this.lastGunTarget = best;
      if (this.fireCool <= 0) {
        this.fireCool = 1 / FIRE_RATE;
        this.ammo--;
        const r = rivals[best];
        const hit = Math.random() < this.gunP;
        w.shoot(this.pos, this.px, r.d, r.x, hit);
        w.playerGun.flash = true;
        this.audio.gun();
        if (hit) this.hitRival(best);
      }
    }
    w.playerGun.target = this.firingT > 0 ? this.lastGunTarget : null;

    rivals.forEach((r) => {
      r.gunT = Math.max(0, r.gunT - dt);
      if (r.remote) {
        // another player firing: show it (their hits arrive as messages)
        if (r.gunT <= 0) return;
        r.fireCool -= dt;
        if (r.fireCool > 0) return;
        r.fireCool = 1 / FIRE_RATE;
        const t = r.gunTo === -1 ? { d: this.pos, x: this.px } : rivals[r.gunTo];
        if (!t) return;
        w.shoot(r.d, r.x, t.d, t.x, Math.random() < hitChance(Math.hypot(t.d - r.d, t.x - r.x)));
        this.audio.gun(0.4);
        return;
      }
      // the computer drivers shoot back in bursts
      if (!this.weapons || this.state !== 'race' || this.wrecked || r.wrecked || r.ammo <= 0 || r.finished >= 0) return;
      const dd = this.pos - r.d, dx = this.px - r.x;
      if (!inRange(dd, dx)) {
        r.burst = 0;
        return;
      }
      if (r.burst <= 0) {
        if (Math.random() < dt * (0.06 + r.aggro * 0.14)) r.burst = 3 + Math.floor(Math.random() * 4);
        return;
      }
      r.gunT = 0.35;
      r.gunTo = -1;
      r.fireCool -= dt;
      if (r.fireCool > 0) return;
      r.fireCool = 1 / FIRE_RATE;
      r.burst--;
      r.ammo--;
      const hit = Math.random() < hitChance(Math.hypot(dd, dx));
      w.shoot(r.d, r.x, this.pos, this.px, hit);
      this.audio.gun(0.5);
      if (hit) this.takeGunHit(`ai:${r.name}`, 1);
    });
    w.tickTracers(dt);
  }

  /** Out of condition: the engine blows, the car rolls to a stop in a cloud of smoke. */
  private wreck() {
    if (this.wrecked) return;
    this.hp = 0;
    this.wrecked = true;
    this.turboT = 0;
    this.audio.crash(true);
    this.audio.pop();
    if (this.mode !== 'arcade') this.table = results(this.world.rivals, this.world.track, 'YOU', this.spec.name, Infinity, this.raceTime);
    this.go('over');
    this.audio.sad();
    this.audio.music(null);
    this.saveScore();
  }

  /** Smoke (and at the end fire) from the engine bay as the condition drops. */
  private engineSmoke(dt: number) {
    if (['race', 'over', 'goal'].includes(this.state)) {
      const acc = { t: this.smokeT };
      this.smokeFrom(acc, dt, this.spec, this.pos, this.px, this.speed, this.hp, this.wrecked, this.t);
      this.smokeT = acc.t;
    }
    // shot-up computer cars smoke too
    for (const r of this.world.rivals) {
      if (r.remote && r.wrecked) r.wreckT += dt; // other players' wrecks burn for a while too
      const acc = { t: r.smokeT };
      this.smokeFrom(acc, dt, r.spec, r.d, r.x, r.v, r.hp, r.wrecked, r.wreckT);
      r.smokeT = acc.t;
    }
  }

  /** Smoke (and right after a wreck, fire) from a car's engine bay as its condition drops. */
  private smokeFrom(acc: { t: number }, dt: number, spec: CarSpec, pos: number, px: number, speed: number, hp: number, wrecked: boolean, sinceWreck: number) {
    if (hp >= 50) return;
    acc.t += dt * (wrecked ? 30 : hp < 25 ? 14 : 5);
    if (acc.t < 1) return;
    acc.t -= 1;
    const st = spec.stations;
    const front = ['r32', 'supra', 'rx7'].includes(spec.id);
    const z = front ? st[0].z + 0.9 : st[st.length - 1].z - 0.9;
    const top = front ? st[1].top : st[st.length - 2].top;
    const d = pos - z, x = px + (Math.random() - 0.5) * 0.6;
    const col = wrecked ? (Math.random() < 0.5 ? 0x222222 : 0x3a3a3a) : hp < 25 ? 0x6a6a6a : 0xb8b8b8;
    const P = this.world.particles;
    P.spawn(d, x, top + 0.1, speed * 0.85, (Math.random() - 0.5) * 0.8, 1.2 + Math.random(), 1.6 + Math.random(), 0.45, 3, col);
    if (wrecked && sinceWreck < 6 && Math.random() < 0.5) {
      P.spawn(d, x, top + 0.05, speed * 0.9, (Math.random() - 0.5) * 0.4, 1.5, 0.35, 0.3, 0.5, Math.random() < 0.5 ? 0xff8a20 : 0xffd040);
    }
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
        h.text('©1986 HORIZON SOFT', 20, HUD_H - 30, 16, WHITE, 'left');
        break;
      }
      case 'select': {
        h.text('SELECT  YOUR  ROUTE', HUD_W / 2, 44, 24, YELLOW, 'center');
        // a card per route, three across
        this.routes.forEach((rt, i) => {
          const x = CARD_X + (i % 3) * CARD_STEP_X, y = CARD_Y + Math.floor(i / 3) * CARD_STEP_Y;
          const bw = CARD_STEP_X - 12, bh = CARD_STEP_Y - 12;
          const sel = i === this.routeIdx;
          h.box(x, y, bw, bh, rt.card[0], sel ? (blink ? YELLOW : WHITE) : 0x3a3a5a, sel ? 6 : 3);
          h.text(rt.lines[0], x + bw / 2, y + 18, 16, rt.card[1], 'center');
          h.text(rt.lines[1], x + bw / 2, y + 44, 16, rt.card[1], 'center');
        });
        h.text(this.touch ? 'TAP A ROUTE, TAP AGAIN TO GO' : '< >  ROUTE   ^ v  MODE   ENTER  NEXT', HUD_W / 2, 290, 16, WHITE, 'center');
        // mode boxes
        const modes: [Mode, string, string][] = [['arcade', 'ARCADE', 'BEAT THE CLOCK'], ['rivals', 'VS RIVALS', '8-CAR RACE'], ['online', 'ONLINE', 'RACE REAL PLAYERS']];
        modes.forEach(([m, label, sub], i) => {
          const mw = 236, x = HUD_W / 2 - 375 + i * 250 + 7;
          const sel = m === this.mode;
          h.box(x, 324, mw, 54, sel ? 0x2a1a50 : 0x141428, sel ? (blink ? PINK : WHITE) : 0x3a3a5a, sel ? 5 : 3);
          h.text(label, x + mw / 2, 334, 16, sel ? YELLOW : 0x8a8aa8, 'center');
          h.text(sub, x + mw / 2, 356, 8, sel ? WHITE : 0x8a8aa8, 'center');
        });
        h.text(`${Math.max(0, Math.ceil(20 - this.t))}`, HUD_W - 30, 20, 24, ORANGE, 'right');
        break;
      }
      case 'carselect': {
        const s = this.spec;
        h.text('SELECT  YOUR  CAR', HUD_W / 2, 20, 24, YELLOW, 'center');
        h.text(`${Math.max(0, Math.ceil(25 - this.t))}`, HUD_W - 30, 20, 24, ORANGE, 'right');
        h.text(s.make, HUD_W / 2, 64, 16, CYAN, 'center');
        h.text(s.name, HUD_W / 2, 88, 32, WHITE, 'center');
        h.text(`${s.year}  ${s.group}`, HUD_W / 2, 130, 16, PINK, 'center');
        h.text(this.settingsLine(this.mode === 'rivals'), HUD_W / 2, 160, 16, YELLOW, 'center');
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
      case 'name': {
        h.text('ONLINE  RACE', HUD_W / 2, 20, 24, YELLOW, 'center');
        break;
      }
      case 'lobby': {
        this.lobbyHud(blink);
        break;
      }
      default: {
        this.raceHud(blink);
        if (this.mode === 'online') this.nameTags();
        if (this.state === 'countdown') {
          const n = 3 - Math.floor(this.t);
          if (n > 0) h.text(String(n), HUD_W / 2, 180, 64, n === 1 ? RED : YELLOW, 'center');
          h.text(route.stageNames[0], HUD_W / 2, 280, 16, WHITE, 'center');
        }
        if (this.table.length && (this.state === 'goal' ? this.t > 2.5 : this.t > 2.5)) {
          this.resultsTable(blink);
        } else if (this.state === 'goal' && this.mode !== 'arcade') {
          h.text(this.place === 1 ? 'YOU WIN!' : `${ordinal(this.place)} PLACE`, HUD_W / 2, 150, 64, this.place === 1 ? YELLOW : CYAN, 'center');
          h.text(fmtTime(this.finishTime), HUD_W / 2, 240, 24, WHITE, 'center');
        } else if (this.state === 'goal') {
          h.text('GOAL!', HUD_W / 2, 140, 64, YELLOW, 'center');
          h.text('CONGRATULATIONS', HUD_W / 2, 230, 24, CYAN, 'center');
          h.text(`TIME BONUS  ${Math.ceil(this.bonusLeft * 10000)}`, HUD_W / 2, 280, 16, WHITE, 'center');
          if (this.t > 3 && this.bonusLeft <= 0 && blink) h.text(this.touch ? 'TAP TO CONTINUE' : 'PRESS ENTER', HUD_W / 2, 330, 24, YELLOW, 'center');
        }
        if (this.state === 'over' && !(this.table.length && this.t > 2.5)) {
          if (this.t < 2.5) {
            h.text(this.wrecked ? 'WRECKED' : 'TIME UP', HUD_W / 2, 180, 48, RED, 'center');
            if (this.wrecked) h.text('ENGINE BLOWN', HUD_W / 2, 240, 24, ORANGE, 'center');
          }
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

  /** The online waiting room: who's here, your car, the route and START. */
  private lobbyHud(blink: boolean) {
    const h = this.hud, net = this.net, s = this.spec;
    h.text('ONLINE  LOBBY', HUD_W / 2, 14, 24, YELLOW, 'center');
    h.text(this.touch ? '< EXIT' : 'ESC EXIT', 20, 18, 16, 0x8a8aa8);
    const others = net?.list() ?? [];
    const status = !net || net.status === 'connecting' ? 'CONNECTING...'
      : net.status === 'error' ? "COULDN'T CONNECT" : others.length ? `${others.length + 1} PLAYERS HERE` : 'WAITING FOR PLAYERS...';
    h.text(status, HUD_W / 2, 46, 16, net?.status === 'error' ? RED : CYAN, 'center');
    // your car, settings, stats and controls on a see-through panel
    h.shade(28, 68, 350, 316);
    h.text(s.make, 40, 76, 16, CYAN);
    h.text(s.name, 40, 98, 24, WHITE);
    h.text(this.touch ? 'TAP NAME: CAR   TAP CAR: COLOUR' : '< > CAR   ^ v COLOUR', 40, 130, 8, 0x8a8aa8);
    h.text(`${this.touch ? 'TAP ' : 'T  '}TURBOS ${this.turboCount}`, 40, 148, 16, YELLOW);
    h.text(`${this.touch ? 'TAP ' : 'V  '}WEAPONS ${this.weaponsSetting ? 'ON' : 'OFF'}`, 40, 174, 16, this.weaponsSetting ? ORANGE : 0x8a8aa8);
    h.text(`${this.touch ? 'TAP ' : 'B  '}AMMO ${this.ammoCount}`, 40, 200, 16, this.weaponsSetting ? YELLOW : 0x8a8aa8);
    h.text('YOUR SETTINGS APPLY IF YOU PRESS START', 40, 224, 8, 0x8a8aa8);
    // the car's stats, as on the car-select screen
    const bars: [string, number, number][] = [
      ['SPEED', (s.stats.vmax - 260) / 90, RED], ['ACCEL', (s.stats.accel - 0.85) / 0.3, ORANGE], ['GRIP', (s.stats.grip - 0.82) / 0.38, 0x40e040],
    ];
    bars.forEach(([label, v, c], i) => {
      const y = 244 + i * 16;
      h.text(label, 40, y + 1, 8, YELLOW);
      const lit = Math.round(Math.max(0.1, Math.min(1, v)) * 12);
      for (let k = 0; k < 12; k++) h.rect(96 + k * 11, y, 9, 10, k < lit ? c : 0x202040);
    });
    h.text(`${s.stats.vmax} KM/H`, 236, 245, 8, WHITE);
    // how to drive
    h.text('CONTROLS', 40, 300, 8, YELLOW);
    const lines = this.touch
      ? ['< > STEER   GAS  BRAKE  DRIFT', 'TURBO BUTTON   FIRE BUTTON (WEAPONS)', 'AUTO GAS HOLDS THE THROTTLE', 'II PAUSE   MUSIC CHANGES THE SONG']
      : ['UP GAS   DOWN BRAKE   < > STEER', 'SPACE DRIFT   T OR SHIFT TURBO', 'F FIRE (WEAPONS ON)   N MUSIC', 'ESC PAUSE   M MUTE'];
    lines.forEach((t, i) => h.text(t, 40, 316 + i * 14, 8, WHITE));
    // player list
    const lx = HUD_W - 320, ly = 70;
    h.box(lx, ly, 300, 40 + Math.min(8, others.length + 1) * 34 + (others.length > 7 ? 16 : 0), 0x101030, 0x3a3a5a, 3);
    h.text('PLAYERS', lx + 14, ly + 12, 16, YELLOW);
    const rows = [{ name: this.playerName || 'PLAYER', car: s.name, st: 'YOU', me: true },
      ...others.map((p) => ({ name: p.name, car: ROSTER[p.car % ROSTER.length].name, st: p.status === 'race' ? 'RACING' : 'READY', me: false }))];
    rows.slice(0, 8).forEach((r, i) => {
      const y = ly + 40 + i * 34;
      h.text(r.name, lx + 14, y, 16, r.me ? YELLOW : WHITE);
      h.text(r.st, lx + 286, y + 4, 8, r.st === 'RACING' ? ORANGE : r.me ? YELLOW : 0x40e040, 'right');
      h.text(r.car, lx + 14, y + 19, 8, 0x8a8aa8);
    });
    if (rows.length > 8) h.text(`+${rows.length - 8} MORE`, lx + 14, ly + 40 + 8 * 34, 8, WHITE);
    // route + start
    const route = this.world.route;
    h.box(20, 410, 250, 50, 0x141428, WHITE, 3);
    h.text(`${this.touch ? 'TAP' : 'R'}  ROUTE`, 145, 418, 8, 0x8a8aa8, 'center');
    h.text(`${route.lines[0]} ${route.lines[1]}`.slice(0, 15), 145, 434, 16, YELLOW, 'center');
    if (net?.status === 'error') {
      h.text('CHECK YOUR CONNECTION, OR PLAY ONLINE AT', HUD_W / 2, 320, 8, WHITE, 'center');
      h.text('FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86', HUD_W / 2, 340, 16, CYAN, 'center');
      h.box(HUD_W / 2 - 150, 410, 300, 50, 0x1a5ab8, blink ? YELLOW : WHITE);
      h.text(this.touch ? 'TAP TO RETRY' : 'ENTER  RETRY', HUD_W / 2, 427, 16, WHITE, 'center');
      return;
    }
    if (this.pending) {
      const n = Math.max(1, Math.ceil(this.pending.at - raceClock()));
      h.text('STARTING IN', HUD_W / 2, 170, 24, CYAN, 'center');
      h.text(String(n), HUD_W / 2, 206, 64, YELLOW, 'center');
      const rt = this.routes[this.pending.go.route] ?? this.world.route;
      h.text(`${rt.lines[0]} ${rt.lines[1]}`, HUD_W / 2, 284, 16, WHITE, 'center');
      const g = this.pending.go;
      h.text(`TURBOS ${g.turbos}   WEAPONS ${g.weapons ? `ON  AMMO ${g.ammo}` : 'OFF'}`, HUD_W / 2, 308, 16, g.weapons ? ORANGE : YELLOW, 'center');
      return;
    }
    if (others.some((p) => p.status === 'race')) h.text('RACE IN PROGRESS - JOIN THE NEXT ONE', HUD_W / 2, 386, 8, ORANGE, 'center');
    else if (!others.length) h.text('SHARE THIS PAGE LINK TO INVITE PLAYERS', HUD_W / 2, 386, 8, WHITE, 'center');
    const ready = net?.status === 'online';
    h.box(HUD_W / 2 - 150, 410, 300, 50, ready ? 0x1a8a3a : 0x202030, ready && blink ? YELLOW : WHITE);
    h.text(this.touch ? 'TAP TO START' : 'ENTER  START', HUD_W / 2, 427, 16, ready ? WHITE : 0x8a8aa8, 'center');
  }

  /** Online: name tags over the other players' cars. */
  private nameTags() {
    const h = this.hud;
    this.world.rivals.forEach((r, i) => {
      const p = this.world.rivalScreenPos(i, this.camera, HUD_W, HUD_H);
      if (!p || p.dist > 140) return;
      // small and unobtrusive far away, growing as you close in
      const k = Math.max(0, Math.min(1, (75 - p.dist) / 60));
      const size = Math.round(5 + 11 * k);
      h.text(r.wrecked ? `${r.name} WRECKED` : r.name, p.x, p.y - size, size, r.wrecked ? RED : r.finished >= 0 ? YELLOW : WHITE, 'center');
      // their damage bar under the name
      const bw = Math.round(14 + 50 * k), bh = Math.round(2 + 4 * k), f = Math.min(1, 1 - r.hp / 100);
      const bx = p.x - bw / 2, by = p.y + 1 + Math.round(3 * k);
      h.rect(bx - 1, by - 1, bw + 2, bh + 2, 0x000000);
      h.rect(bx, by, bw * f, bh, damageColour(f));
    });
  }

  /** Final classification after a race against the rivals. */
  private resultsTable(blink: boolean) {
    const h = this.hud;
    const x0 = HUD_W / 2 - 330, w = 660, y0 = 96;
    h.box(x0, y0, w, 330, 0x101030, this.place === 1 && this.finishTime >= 0 ? YELLOW : WHITE, 4);
    const title = this.finishTime < 0 ? `${this.wrecked ? 'WRECKED' : 'TIME UP'}  -  DID NOT FINISH` : this.place === 1 ? 'YOU WIN!' : `YOU FINISHED ${ordinal(this.place)}`;
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
    if (this.mode !== 'arcade' && this.world.rivals.length && this.state === 'race') {
      // live race position, in the gap under the timer
      // on phones the course bar sits under the timer, so the position goes under the speed gauge
      const p = ordinal(this.place);
      const px = this.touch ? 84 : HUD_W / 2 - 52, py = this.touch ? 222 : 90;
      h.text('POS', px - 12, py + 8, 16, YELLOW, 'right');
      h.text(p, px, py, 32, this.place === 1 ? YELLOW : WHITE);
      h.text(`/${this.world.rivals.length + 1}`, px + p.length * 32 + 4, py + 16, 16, WHITE);
    }

    // damage bar: fills up as the car takes damage (full = wrecked), green -> yellow -> red, blinking when critical
    {
      const n = 10, sw = 15;
      const bx = this.touch ? 20 : HUD_W - 20 - n * (sw + 2), by = this.touch ? (this.mode !== 'arcade' ? 270 : 236) : 64;
      const dmg = Math.min(1, 1 - this.hp / 100);
      const col = damageColour(dmg);
      const crit = this.hp < 25 && this.state === 'race';
      h.text('DAMAGE', bx, by, 16, crit && blink ? RED : YELLOW);
      const lit = this.hp >= 100 ? 0 : Math.max(1, Math.ceil(dmg * n));
      for (let i = 0; i < n; i++) h.rect(bx + i * (sw + 2), by + 22, sw, 12, i < lit && (!crit || blink) ? col : 0x202040);
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
    const tn = this.raceTurbos, ts = tn > 5 ? 13 : 20, tstep = ts + (tn > 5 ? 4 : 6);
    for (let i = 0; i < tn; i++) h.box(tx + 92 + i * tstep, ty - 2 + (20 - ts) / 2, ts, ts, i < this.turbos ? ORANGE : 0x202030, i < this.turbos ? YELLOW : 0x404058, tn > 5 ? 2 : 3);
    if (this.turboT > 0) h.rect(tx + 92, ty + 22, (this.turboT / TURBO_TIME) * (tn * tstep - 6), 5, YELLOW);
    if (this.weapons) {
      // ammo strip, lock-on bracket over the target, NO TARGET, red flash when we're hit
      const ax = t ? 20 : HUD_W - 190, ay = t ? 314 : 106;
      h.text('AMMO', ax, ay, 16, this.ammo ? CYAN : RED);
      h.text(String(this.ammo).padStart(3, '0'), ax + 120, ay, 16, WHITE);
      const lit = Math.ceil((this.ammo / Math.max(1, this.raceAmmo)) * 30);
      for (let i = 0; i < 30; i++) h.rect(ax + i * 5.6, ay + 22, 3, 10, i < lit ? YELLOW : 0x303040);
      if (this.gunTarget !== null && this.state === 'race') {
        const p = this.world.rivalScreenPos(this.gunTarget, this.camera, HUD_W, HUD_H);
        if (p) {
          const c = this.gunP > 0.6 ? RED : YELLOW, r = Math.max(10, Math.min(34, 700 / p.dist)), cy = p.y + r * 1.1;
          for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
            h.rect(p.x + sx * r - (sx > 0 ? 10 : 0), cy + sy * r - (sy > 0 ? 3 : 0), 10, 3, c);
            h.rect(p.x + sx * r - (sx > 0 ? 3 : 0), cy + sy * r - (sy > 0 ? 10 : 0), 3, 10, c);
          }
          const tr = this.world.rivals[this.gunTarget];
          if (!tr.remote) {
            // computer car's condition under the bracket
            const bw = 44, bx = p.x - bw / 2, by = cy + r + 6, f = Math.min(1, 1 - tr.hp / 100);
            h.rect(bx - 1, by - 1, bw + 2, 7, 0x000000);
            h.rect(bx, by, bw * f, 5, damageColour(f));
          }
        }
      }
      if (this.noTargetT > 0) h.text(this.ammo ? 'NO TARGET' : 'OUT OF AMMO', HUD_W / 2, 124, 16, this.ammo ? WHITE : RED, 'center');
      if (this.hitFlash > 0) {
        h.rect(0, 0, HUD_W, 6, RED);
        h.rect(0, HUD_H - 6, HUD_W, 6, RED);
        h.rect(0, 0, 6, HUD_H, RED);
        h.rect(HUD_W - 6, 0, 6, HUD_H, RED);
      }
    }

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
