import * as THREE from 'three';
import { Audio, TRACKS } from './audio';
import { GFX } from './gfx';
import { CYAN, GREEN, Hud, HUD_H, HUD_W, ORANGE, PINK, RED, WHITE, YELLOW } from './hud';
import { Input } from './input';
import { LANE_W, ROAD_HALF, SEG } from './track';
import { ROSTER } from './cars/roster';
import { CATCHUP_FROM, CATCHUP_FULL, CATCHUP_MAX, SLIP_BUILD, SLIP_SPEED, SLIP_TIME } from './rules';
import { fmtTime, makeGrid, ordinal, playerPosition, raceClock, results, ResultRow, Rival, updateRivals } from './rivals';
import { GoMsg, HitMsg, Net, RaceSettings, RkMsg, roomFromHash, StMsg } from './net';
import { NameBox } from './nameui';
import { CATCHUP_ACCEL_MAX, VS_AI_DAMAGE, AI_GUN_CAP, AMMO_DEFAULT, AMMO_DEFAULT_ONLINE, AMMO_STEPS, FIRE_RATE, GUN_CAP, GUN_WIDTH, PER_HIT, AI_PER_HIT, PVP_PER_HIT, PVP_ROCKET_DAMAGE, RANGE_AHEAD, ROCKET_DAMAGE, ROCKET_RANGE, ROCKET_SPEED, ROCKET_WIDTH, ROCKETS_DEFAULT, ROCKETS_MAX, TURBO_DEFAULT, TURBO_SPEED, TURBO_TIME } from './rules';
import { CarSpec } from './cars/spec';
import { World } from './world';
import type { RouteDef } from './routes/types';

type State = 'attract' | 'select' | 'carselect' | 'name' | 'lobby' | 'countdown' | 'race' | 'goal' | 'over';
type Mode = 'arcade' | 'rivals' | 'online';
const MODES: Mode[] = ['arcade', 'rivals', 'online'];
// route-select grid
const CARD_X = 39, CARD_Y = 52, CARD_STEP_X = 262, CARD_STEP_Y = 106;
/** Route select: mode tabs and the GO button under the course map. */
const MODE_X = 39, MODE_STEP = 262, MODE_W = 250, MODE_Y = 330, MODE_H = 46, GO_Y = 396;
/** Online lobby left panel: positions shared by the drawing and the tap zones. */
const LOBBY = { x0: 16, x1: 330, mid: 173, carY: 64, carH: 44, paintY: 112, turbY: 132, weapY: 154, ammoY: 176, rockY: 198, chipH: 20, minusX: 170, plusX: 262, ctrlY: 289 }; // ctrlY: the controls guide under the host's panel
const GREY = 0x8a8aa8;
/** Car select: side arrows, the two bottom panels and the RACE button. */
const CSEL = { arrowX: 14, arrowY: 170, arrowW: 46, arrowH: 84, lx: 20, py: 274, ph: 124, paintY: 284, swX: 106, turbY: 308, weapY: 330, ammoY: 352, rockY: 374, minusX: 146, plusX: 234, goY: 410 };

const VMAX = 82; // reference top speed (~295 km/h) for camera / gearing
const KMH = 3.6;
/** m/s² lost at full steering lock at top speed (scales with speed²). */
const CORNER_SCRUB = 8;
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
  /**
   * Hidden test mode (?test=pvp): a VS RIVALS race where the computer cars play by human-player rules,
   * both ways, with a damage log on screen. For checking online damage feels right.
   */
  readonly testPvp = new URLSearchParams(location.search).get('test') === 'pvp';
  /** test mode: cars on the grid including you (?players=2..8, default 8) */
  readonly testPlayers = Math.max(2, Math.min(8, Math.round(Number(new URLSearchParams(location.search).get('players')) || 8)));
  private testLog: { text: string; col: number; n: number }[] = [];
  private testDealt = new Map<string, number>();
  private testScrape = 0;
  private testTaken = new Map<string, number>();
  private testNote(text: string, col: number) {
    const last = this.testLog[this.testLog.length - 1];
    if (last && last.text === text) {
      last.n++;
      return;
    }
    this.testLog.push({ text, col, n: 1 });
    if (this.testLog.length > 8) this.testLog.shift();
  }
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
  /** turbo layers firing at once (seconds left on each): they stack, multiplying the boost */
  turboLayers: number[] = [];
  /** speed multiplier from the turbos firing now: TURBO_SPEED per layer, compounded */
  private get turboMul() {
    return Math.pow(TURBO_SPEED, this.turboLayers.length);
  }
  /** menu settings: boosts per race (1-9) and weapons on/off (VS RIVALS, online) */
  turboCount = Math.max(1, Math.min(9, loadNum('th86-turbos', TURBO_DEFAULT) || TURBO_DEFAULT));
  weaponsSetting = loadNum('th86-weapons', 1) === 1;
  ammoCount = AMMO_STEPS.includes(loadNum('th86-ammo', AMMO_DEFAULT)) ? loadNum('th86-ammo', AMMO_DEFAULT) : AMMO_DEFAULT;
  raceAmmo = AMMO_DEFAULT;
  rocketCount = Math.max(1, Math.min(ROCKETS_MAX, loadNum('th86-rockets', ROCKETS_DEFAULT) || ROCKETS_DEFAULT));
  raceRockets = ROCKETS_DEFAULT;
  rockets = 0;
  // this race
  raceTurbos = TURBO_DEFAULT;
  weapons = false;
  ammo = 0;
  private fireCool = 0;
  private firingT = 0;
  private lastGunTarget: number | null = null;
  private noTargetT = 0;
  private rocketMsgT = 0;
  /** lobby: the driving-controls card is folded away unless asked for */
  // ---- help for whoever's behind
  /** catch-up: extra top speed (0-0.06) when well behind the leading car */
  private catchUp = 0;
  /** slipstream: tow builds 0-1 behind another car; full gives a SLIPSTREAM burst for slipT seconds */
  private tow = 0;
  private slipT = 0;
  private bazookaT = 0;
  private lastHitT = 0;
  private muteToast = -1;
  private notice = '';
  private noticeUntil = -1;
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
  private msgPrio = 0;
  /** pause menu: RESTART was pressed once; a second press before this time restarts */
  private restartArm = 0;
  private msgQueue: { a: string; b: string; dur: number; prio: number; at: number }[] = [];
  carIdx = loadCar()[0];
  paintIdx = loadCar()[1];
  touch = false; // set by the touch controls; changes prompts

  get spec(): CarSpec {
    return ROSTER[this.carIdx];
  }
  get vmax(): number {
    return this.spec.stats.vmax / KMH;
  }
  /** How much of each hit the player's car feels: tough cars (high HP) take less. */
  private get frail() {
    return 100 / this.spec.stats.hp;
  }

  private applyCar(spec = this.spec, paint = spec.paints[this.paintIdx % spec.paints.length]) {
    this.audio.setEngine(spec.engine);
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
    this.turboLayers = [];
    this.steer = 0;
    this.driftYaw = 0;
    this.crashT = 0;
    this.crashYaw = 0; // restarting mid-spin used to leave the car facing sideways
    this.bounce = 0;
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

  /**
   * Big message in the middle of the screen. One at a time: a more important one (prio) takes over
   * straight away, a less important one waits its turn (and is dropped if it's gone stale).
   */
  private flash(a: string, b = '', dur = 2, prio = 1) {
    const busy = this.clock < this.msgUntil && this.msg;
    if (busy && prio < this.msgPrio) {
      this.msgQueue = this.msgQueue.filter((m) => m.a !== a);
      this.msgQueue.push({ a, b, dur, prio, at: this.clock });
      this.msgQueue.sort((p, q) => q.prio - p.prio);
      return;
    }
    this.msg = a;
    this.msg2 = b;
    this.msgPrio = prio;
    this.msgUntil = this.clock + dur;
  }

  /** The next queued message, once the current one has finished. */
  private nextMsg() {
    if (this.clock < this.msgUntil) return;
    this.msgPrio = 0;
    while (this.msgQueue.length) {
      const m = this.msgQueue.shift()!;
      if (this.clock - m.at < 3) return this.flash(m.a, m.b, Math.min(m.dur, 1.5), m.prio);
    }
  }

  startRace() {
    this.paused = false;
    this.restartArm = 0;
    this.resetPlayer(false);
    this.hp = 100;
    this.wrecked = false;
    this.applyCar();
    const go = this.mode === 'online' ? this.onlineGo : null;
    this.raceTurbos = go ? go.turbos : this.turboCount;
    this.turbos = this.raceTurbos;
    this.turboT = 0;
    this.turboLayers = [];
    this.weapons = go ? go.weapons : this.mode === 'rivals' && this.weaponsSetting;
    this.raceAmmo = go ? go.ammo : this.ammoCount;
    this.ammo = this.weapons ? this.raceAmmo : 0;
    if (this.testPvp && this.mode === 'rivals') this.weapons = true;
    this.raceRockets = go ? go.rockets : this.rocketCount;
    this.rockets = this.weapons ? this.raceRockets : 0;
    this.world.clearRockets();
    this.catchUp = this.tow = this.slipT = 0;
    this.testLog = [];
    this.testDealt.clear();
    this.testScrape = 0;
    this.testTaken.clear();
    this.fireCool = 0;
    this.firingT = 0;
    this.lastGunTarget = null;
    this.lastHitT = 0;
    this.bazookaT = 0;
    this.hitFlash = 0;
    this.gunFrom.clear();
    this.pendingHits.clear();
    this.raceTime = 0;
    this.finishTime = -1;
    this.table = [];
    if (this.mode === 'rivals') {
      // start from the back of the grid; lighter traffic, pushed further up the road
      const grid = makeGrid(this.spec, this.pos, Date.now() & 0xffff, this.raceTurbos, this.weapons ? this.raceAmmo : 0);
      // test mode: only as many computer cars as the players asked for (the ones nearest the front of the grid)
      this.world.setRivals(this.testPvp ? grid.slice(0, this.testPlayers - 1) : grid);
      if (this.testPvp) for (const r of this.world.rivals) r.rockets = this.raceRockets;
      this.world.resetTraffic(this.pos, 10, 520);
      this.place = 8;
    } else this.world.setRivals([]);
    this.timeLeft = this.world.route.startTime;
    this.score = 0;
    this.lastBeep = -1;
    this.msg = this.msg2 = '';
    this.msgUntil = this.msgPrio = 0;
    this.msgQueue = [];
    this.go('countdown');
    this.audio.music(this.trackId());
  }

  // ------------------------------------------------------------------ update
  update(dt: number) {
    const inp = this.input;
    this.clock += dt;
    if (inp.hit('KeyM')) {
      this.audio.toggleMute();
      this.muteToast = this.clock + 1.5;
    }
    if (!this.paused && inp.hit('KeyN') && ['carselect', 'countdown', 'race'].includes(this.state)) this.nextTrack();

    if (this.paused) {
      let act = inp.hit('Escape') ? 'resume' : inp.hit('Backspace') ? 'restart' : inp.hit('KeyQ') ? 'quit' : '';
      for (const tp of inp.taps) {
        if (tp.y > 222 && tp.y < 254) act = 'resume';
        else if (tp.y >= 254 && tp.y < 280) act = 'restart';
        else if (tp.y >= 280 && tp.y < 310) act = 'quit';
      }
      if (act === 'resume') this.paused = false;
      else if (act === 'restart' && this.mode !== 'online') {
        // restarting throws the race away, so it takes a second press to confirm
        if (this.clock < this.restartArm) this.startRace();
        else {
          this.restartArm = this.clock + 2;
          this.audio.blip();
        }
      }
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
          if (tp.y > CARD_Y - 4 && tp.y < CARD_Y + 2 * CARD_STEP_Y - 8 && tp.x > CARD_X && tp.x < CARD_X + 3 * CARD_STEP_X - 12) {
            const i = Math.floor((tp.y - CARD_Y + 4) / CARD_STEP_Y) * 3 + Math.floor((tp.x - CARD_X) / CARD_STEP_X);
            if (i === this.routeIdx) go = true;
            else if (i < nr) pick = i;
          } else if (tp.y >= MODE_Y - 4 && tp.y < MODE_Y + MODE_H + 6) {
            const m = MODES[Math.max(0, Math.min(2, Math.floor((tp.x - MODE_X) / MODE_STEP)))];
            if (m !== this.mode) {
              this.mode = m;
              this.audio.blip();
            }
          } else if (tp.y >= GO_Y - 6) go = true;
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
        let dc = 0, dp = 0, go = inp.confirm || this.t > 25, back = false;
        if (inp.hit('ArrowLeft', 'KeyA')) dc = -1;
        if (inp.hit('ArrowRight', 'KeyD')) dc = 1;
        if (inp.hit('ArrowUp', 'KeyW', 'ArrowDown', 'KeyS')) dp = 1;
        if (inp.hit('KeyT')) this.cycleTurbos();
        if (inp.hit('KeyV') && this.mode === 'rivals') this.toggleWeapons();
        if (inp.hit('KeyB') && this.mode === 'rivals') this.cycleAmmo();
        if (inp.hit('KeyK') && this.mode === 'rivals') this.cycleRockets();
        let paint = -1;
        const C = CSEL, rx = HUD_W - C.lx - 300;
        for (const tp of inp.taps) {
          const row = (y: number) => tp.y >= y - 3 && tp.y < y + LOBBY.chipH + 3;
          const at = (x0: number, w: number) => tp.x >= rx + x0 - 4 && tp.x < rx + x0 + w + 4;
          if (tp.y < 44 && tp.x < 150) back = true;
          else if (tp.y >= C.goY - 4 && Math.abs(tp.x - HUD_W / 2) < 134) go = true;
          else if (tp.y >= C.goY - 4 && tp.x < HUD_W / 2 - 134) this.nextTrack();
          else if (tp.y >= C.goY - 4) dc = 1;
          else if (tp.x >= rx && tp.y >= C.py && tp.y < C.py + C.ph) {
            const np = this.spec.paints.length;
            if (row(C.paintY) && tp.x >= rx + C.swX - 3 && tp.x < rx + C.swX + np * 24) paint = Math.floor((tp.x - rx - C.swX + 3) / 24);
            else if (row(C.turbY) && at(C.minusX, 28)) this.cycleTurbos(-1);
            else if (row(C.turbY) && at(C.plusX, 28)) this.cycleTurbos(1);
            else if (this.mode === 'rivals' && row(C.weapY) && at(C.minusX, C.plusX + 28 - C.minusX)) this.toggleWeapons();
            else if (this.mode === 'rivals' && row(C.ammoY) && at(C.minusX, 28)) this.cycleAmmo(-1);
            else if (this.mode === 'rivals' && row(C.ammoY) && at(C.plusX, 28)) this.cycleAmmo(1);
            else if (this.mode === 'rivals' && row(C.rockY) && at(C.minusX, 28)) this.cycleRockets(-1);
            else if (this.mode === 'rivals' && row(C.rockY) && at(C.plusX, 28)) this.cycleRockets(1);
          } else if (tp.y >= C.py) { /* performance panel: nothing to tap */ }
          else if (tp.x < C.arrowX + C.arrowW + 50) dc = -1;
          else if (tp.x > HUD_W - C.arrowX - C.arrowW - 50) dc = 1;
          else if (tp.y > 150) dp = 1;
        }
        if (paint >= 0 && paint < this.spec.paints.length && paint !== this.paintIdx) {
          this.paintIdx = paint;
          this.audio.blip();
          this.applyCar();
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
        if (inp.hit('Escape') || back) this.toSelect();
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
          this.flash('GO!', '', 1.0, 3);
        }
        if (inp.hit('Escape')) this.paused = true;
        break;
      }
      case 'race': {
        if (inp.hit('ShiftLeft', 'ShiftRight') && this.turbos > 0 && this.crashT <= 0) {
          // turbos stack: firing one while another burns adds a layer on top
          this.turbos--;
          this.turboLayers.push(TURBO_TIME);
          this.turboT = Math.max(...this.turboLayers);
          this.audio.turbo();
          const n = this.turboLayers.length;
          this.flash(n > 1 ? `TURBO x${n}!` : 'TURBO!', '', 1.0);
        }
        this.assists(dt);
        this.drive(dt, { accel: inp.accel || this.turboT > 0, brake: inp.brake, steer: inp.steer, drift: inp.drift }, false);
        this.timeLeft -= dt;
        this.score += Math.floor(this.speed * KMH * dt * 9);
        if (this.drifting && this.speed > 45) this.score += Math.floor(dt * 3000);
        const seg = this.world.track.seg(Math.floor(this.pos / SEG));
        if (seg.stage > this.stage) {
          this.stage = seg.stage;
          this.timeLeft += this.world.route.extendTime;
          const field = this.world.rivals.length + 1;
          const place = field > 1 ? playerPosition(this.world.rivals, this.pos, -1) : 1;
          if (this.mode !== 'arcade' && field > 1 && place > Math.ceil(field / 2)) {
            // back half of the field: the turbo bar fills right back up (and a rocket when weapons are on)
            this.turbos = Math.max(this.turbos, this.raceTurbos);
            const gotRocket = this.weapons && this.rockets < ROCKETS_MAX; // never more than 5 rockets
            if (gotRocket) {
              this.rockets++;
              this.raceRockets = Math.max(this.raceRockets, this.rockets);
            }
            this.flash('CHECKPOINT!', `TURBOS REFILLED${gotRocket ? ' + ROCKET' : ''}`, 2.5, 2);
          } else this.flash('CHECKPOINT!', 'EXTENDED PLAY', 2.5, 2);
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
        break;
      }
      case 'over': {
        this.drive(dt, { accel: false, brake: this.t > 1, steer: 0, drift: false }, false);
        if (this.t > 2.5 && (inp.confirm || inp.taps.length || this.t > 12)) this.afterRace();
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
  private cycleTurbos(dir = 1) {
    this.turboCount = ((this.turboCount - 1 + dir + 9) % 9) + 1;
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
  private cycleAmmo(dir = 1) {
    const n = AMMO_STEPS.length;
    this.ammoCount = AMMO_STEPS[(Math.max(0, AMMO_STEPS.indexOf(this.ammoCount)) + dir + n) % n];
    saveNum(this.mode === 'online' || this.testPvp ? 'th86-ammo-online' : 'th86-ammo', this.ammoCount);
    this.audio.blip();
  }
  /** Car parked on the start straight, camera circling it (car select, lobby). */
  private showroom(dt: number) {
    this.updateWorld(dt, { steer: 0, yaw: 0, spin: 0, bounce: 0 });
    const a = this.t * 0.45 + 0.6;
    const cam = this.camera;
    cam.fov = 40;
    cam.updateProjectionMatrix();
    const lobby = this.state === 'lobby', r = lobby ? 6.6 : 7;
    cam.position.set(this.px + Math.sin(a) * r, lobby ? 1.8 : 2.0, Math.cos(a) * r);
    cam.lookAt(this.px, 0.35, 0);
  }

  // ------------------------------------------------------------------ online
  /** Deep link (#join): straight to the name box. */
  boot() {
    if (this.testPvp) {
      this.mode = 'rivals';
      const oa = loadNum('th86-ammo-online', AMMO_DEFAULT_ONLINE); // test mode plays with the online ammo setting
      this.ammoCount = AMMO_STEPS.includes(oa) ? oa : AMMO_DEFAULT_ONLINE;
    }
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
    // online keeps its own ammo setting (default 100)
    const oa = loadNum('th86-ammo-online', AMMO_DEFAULT_ONLINE);
    this.ammoCount = AMMO_STEPS.includes(oa) ? oa : AMMO_DEFAULT_ONLINE;
    if (!this.net || this.net.status === 'error') {
      this.net?.leave();
      const local = new URLSearchParams(location.search).get('net') === 'local';
      this.net = new Net(roomFromHash() ?? 'lobby', local);
      this.net.onGo = (m) => this.acceptGo(m);
      this.net.onSt = (m, from) => this.gotSt(m, from);
      this.net.onHit = (m, from) => this.gotHit(m, from);
      this.net.onRk = (m, from) => this.gotRk(m, from);
      this.net.onPeer = (p) => this.playerJoined(p.name);
      this.net.onKicked = () => {
        this.leaveOnline();
        this.notice = 'THE HOST REMOVED YOU FROM THE LOBBY';
        this.noticeUntil = this.clock + 4;
      };
      // desktop: ask once (on the JOIN click) whether we may pop up "X joined" while you're in another window
      if (!this.touch && 'Notification' in window && Notification.permission === 'default') Notification.requestPermission().catch(() => {});
    }
    this.net.setMe({ name, car: this.carIdx, paint: this.paintIdx, status: 'lobby', raceId: '' });
    this.toLobby();
  }

  private toLobby() {
    this.paused = false;
    this.pending = null;
    this.raceId = '';
    this.world.setRivals([]);
    this.net?.setMe({ status: 'lobby', raceId: '', ready: false }); // say READY again for the next race
    this.go('lobby');
    this.applyCar();
    this.resetPlayer(false);
    this.px = 0;
    this.audio.music(this.trackId());
  }

  /** Take the host's race settings (not saved: your own come back when you leave online). */
  private adoptSettings(set: RaceSettings | null) {
    if (!set) return;
    if (set.route !== this.routeIdx && set.route < this.routes.length) {
      this.setWorld(set.route);
      this.applyCar();
      this.resetPlayer(false);
      this.px = 0;
      this.audio.music(this.trackId());
    }
    this.turboCount = set.turbos;
    this.weaponsSetting = set.weapons;
    this.ammoCount = set.ammo;
    this.rocketCount = set.rockets;
  }

  /** K: rockets per race 1-5 (wraps). */
  private cycleRockets(dir = 1) {
    this.rocketCount = ((this.rocketCount - 1 + dir + ROCKETS_MAX) % ROCKETS_MAX) + 1;
    saveNum('th86-rockets', this.rocketCount);
    this.audio.blip();
  }

  /** Your own saved race settings. */
  private loadSettings() {
    this.turboCount = Math.max(1, Math.min(9, loadNum('th86-turbos', TURBO_DEFAULT) || TURBO_DEFAULT));
    this.weaponsSetting = loadNum('th86-weapons', 1) === 1;
    const a = loadNum('th86-ammo', AMMO_DEFAULT);
    this.ammoCount = AMMO_STEPS.includes(a) ? a : AMMO_DEFAULT;
    this.rocketCount = Math.max(1, Math.min(ROCKETS_MAX, loadNum('th86-rockets', ROCKETS_DEFAULT) || ROCKETS_DEFAULT));
  }

  /** Someone joined: if you're looking at another window or app, tell you (notification, tab title, chime). */
  private playerJoined(name: string) {
    if (this.state !== 'lobby') return;
    const away = document.hidden || !document.hasFocus();
    if (!away) return;
    this.audio.chime();
    try {
      if ('Notification' in window && Notification.permission === 'granted') {
        const n = new Notification(`${name} joined the lobby`, { body: "Turbo Horizon '86 - click to race", tag: 'th86-join' });
        n.onclick = () => {
          window.focus();
          n.close();
        };
      }
    } catch {
      /* notifications not available */
    }
    this.flashTitle(`${name} JOINED!`);
  }

  private titleTimer = 0;
  /** Blinks the tab title until you come back to the game. */
  private flashTitle(msg: string) {
    const base = "Turbo Horizon '86";
    window.clearInterval(this.titleTimer);
    let on = false;
    this.titleTimer = window.setInterval(() => {
      if (!document.hidden && document.hasFocus()) {
        window.clearInterval(this.titleTimer);
        document.title = base;
        return;
      }
      on = !on;
      document.title = on ? `>> ${msg}` : base;
    }, 900);
  }

  private leaveOnline() {
    this.loadSettings(); // your own (offline) settings again
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
    let turb = inp.hit('KeyT') ? 1 : 0, weap = inp.hit('KeyV'), ammo = inp.hit('KeyB') ? 1 : 0, rock = inp.hit('KeyK') ? 1 : 0, paint = -1;
    let exit = inp.hit('Escape', 'KeyQ');
    const L = LOBBY;
    for (const tp of inp.taps) {
      const inX = (x0: number, w: number) => tp.x >= x0 - 4 && tp.x < x0 + w + 4;
      const row = (y: number) => tp.y >= y - 3 && tp.y < y + L.chipH + 3;
      // host: REMOVE chip on another player's row in the list
      const lx = HUD_W - 320, ly = 70, row1 = Math.floor((tp.y - ly - 40) / 34);
      const others = net?.list() ?? [];
      if (net?.status === 'online' && net.isHost() && tp.x >= lx + 226 && tp.x < lx + 294 && row1 >= 1 && row1 <= Math.min(7, others.length) && tp.y - (ly + 40 + row1 * 34) >= 13) {
        const p = others[row1 - 1];
        net?.kick(p.id);
        this.audio.blip();
        continue;
      }
      if (tp.y > 405 && Math.abs(tp.x - HUD_W / 2) < 150) start = true;
      else if (tp.y > 405 && tp.x < HUD_W / 2 - 160) route = true;
      else if (tp.y < 50 && tp.x < 150) exit = true;
      else if (tp.y >= L.carY && tp.y < L.carY + L.carH && tp.x < L.x1) dc = tp.x < L.x0 + 40 ? -1 : 1;
      else if (tp.y >= L.paintY - 4 && tp.y < L.paintY + 16 && tp.x < L.x1) {
        const n = this.spec.paints.length, sx = L.mid - (n * 22 - 6) / 2;
        const k = Math.floor((tp.x - sx + 3) / 22);
        paint = k >= 0 && k < n ? k : -1;
        if (paint < 0) dp = 1;
      } else if (row(L.turbY) && inX(L.minusX, 28)) turb = -1;
      else if (row(L.turbY) && inX(L.plusX, 28)) turb = 1;
      else if (row(L.weapY) && inX(L.minusX, L.plusX + 28 - L.minusX)) weap = true;
      else if (row(L.ammoY) && inX(L.minusX, 28)) ammo = -1;
      else if (row(L.ammoY) && inX(L.plusX, 28)) ammo = 1;
      else if (row(L.rockY) && inX(L.minusX, 28)) rock = -1;
      else if (row(L.rockY) && inX(L.plusX, 28)) rock = 1;
      else if (tp.y >= 135 && tp.y < 400 && tp.x > L.x1 && tp.x < HUD_W - 330) dp = 1;
    }
    if (exit) return this.leaveOnline();
    const host = !net || net.status !== 'online' || net.isHost();
    if (!host) {
      route = false;
      turb = 0;
      weap = false;
      ammo = 0;
      rock = 0;
    }
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
      if (paint >= 0 && paint !== this.paintIdx) {
        this.paintIdx = paint;
        dp = 1;
      }
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
      if (turb) this.cycleTurbos(turb);
      if (weap) this.toggleWeapons();
      if (ammo) this.cycleAmmo(ammo);
      if (rock) this.cycleRockets(rock);
      // the host advertises the race settings; everyone else takes them
      if (net?.status === 'online') {
        if (host) net.setMe({ set: { route: this.routeIdx, turbos: this.turboCount, weapons: this.weaponsSetting, ammo: this.ammoCount, rockets: this.rocketCount } });
        else this.adoptSettings(net.host().set);
      }
      if (start && net?.status === 'online') {
        if (host) this.startOnline(); // only the host starts the race
        else {
          // everyone else tells the host they're ready (or not, again)
          net.setMe({ ready: !net.me.ready });
          this.audio.blip();
        }
      }
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
      rockets: this.rocketCount,
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
        hp: 100, wrecked: false, wreckT: 0, smokeT: 0, ammo: 0, gunTaken: 0, burst: 0, fireCool: 0, gunT: 0, gunTo: -2, rocketT: 0,
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
      r.gunTo = -2; // straight ahead
      r.gunT = 0.3;
    }
  }

  /** Rounds another player says hit us. */
  private gotHit(m: HitMsg, from: string) {
    if (!this.raceId || m.r !== this.raceId || m.to !== this.net?.selfId) return;
    if (m.rk) this.takeRocketHit(from);
    else if (m.n > 0) this.takeGunHit(from, m.n);
  }

  /** Another player fired a rocket: fly it here too (they decide what it hits). */
  private gotRk(m: RkMsg, from: string) {
    if (!this.raceId || m.r !== this.raceId || this.state !== 'race') return;
    this.world.launchRocket(m.d, m.x, m.v, false, from);
    const r = this.world.rivals.find((q) => q.remote?.id === from);
    if (r) r.rocketT = 1.1;
    this.audio.rocket(0.45);
  }

  /** Player-vs-player damage per round. */
  private pvpPerHit(): number {
    return PVP_PER_HIT;
  }

  /** A rocket hit us: a big jolt and a chunk of the bar (counts toward that shooter's cap). */
  private takeRocketHit(from: string) {
    if (this.state !== 'race' || this.wrecked) return;
    const taken = this.gunFrom.get(from) ?? 0;
    const dmg = PVP_ROCKET_DAMAGE * this.frail;
    this.speed *= 0.55;
    this.shakeKick = Math.max(this.shakeKick, 0.7);
    this.hitFlash = 0.5;
    this.world.car.hit(0.6, Math.random() < 0.5 ? 'left' : 'rear');
    this.audio.boom();
    this.flash('ROCKET HIT!', '', 1.2, 3);
    if (this.testPvp && from.startsWith('p:')) {
      const who = from.slice(2);
      this.testTaken.set(who, (this.testTaken.get(who) ?? 0) + Math.max(0, dmg));
      this.testNote(`${who} > YOU ROCKET ${Math.max(0, dmg).toFixed(1)}${dmg <= 0 ? ' (CAPPED)' : ''}`, ORANGE);
    }
    if (dmg <= 0) return;
    this.gunFrom.set(from, taken + PVP_ROCKET_DAMAGE);
    this.hp = Math.max(0, this.hp - dmg);
    this.afterDamage(dmg);
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
        gun: this.firingT > 0 ? 'fwd' : '',
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
      const slip = this.slipT > 0 ? SLIP_SPEED : 0;
      const vlim = this.vmax * this.turboMul * this.limp() * (1 + this.catchUp + slip);
      const help = 1 + Math.min(this.catchUp, CATCHUP_ACCEL_MAX) * 3 + (slip ? 0.4 : 0);
      if (c.accel) this.speed += 30 * st.accel * (boost ? 1 + 0.9 * this.turboLayers.length : 1) * help * (1 - Math.pow(Math.min(1, v / vlim), 1.8)) * dt + 2 * dt;
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
      // tyre scrub: turning bleeds off speed, gently at low speed and hard flat out; grippy cars lose less
      const vr = v / this.vmax;
      this.speed -= CORNER_SCRUB * Math.abs(this.steer) * vr * vr / st.grip * dt;
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
            this.hp -= 3 * dt * this.frail;
            if (this.testPvp) this.testScrape += 3 * dt * this.frail;
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
    // nothing pulls you back below what turbo, catch-up and slipstream allow
    const cap = this.vmax * this.turboMul * (1 + this.catchUp + (this.slipT > 0 ? SLIP_SPEED : 0));
    if (this.speed > cap) this.speed = Math.max(cap, this.speed - 14 * dt);
    this.speed = Math.max(0, this.speed);
    if (this.turboLayers.length) {
      this.turboLayers = this.turboLayers.map((t) => t - dt).filter((t) => t > 0);
      this.turboT = this.turboLayers.length ? Math.max(...this.turboLayers) : 0;
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
    amount *= this.frail;
    if (this.testPvp) this.testNote(`CRASH ${where.toUpperCase()} ${amount.toFixed(1)}`, CYAN);
    this.hp = Math.max(0, this.hp - amount);
    this.dmgCool = 0.5;
    this.world.car.hit(severity, where);
    this.afterDamage(amount);
  }

  private afterDamage(amount: number) {
    const before = this.hp + amount;
    if (before >= 55 && this.hp < 55) this.world.car.breakLamp(Math.random() < 0.5 ? -1 : 1);
    if (this.hp <= 0) this.wreck();
    else if (this.hp < 25 && before >= 25) this.flash('WARNING!', 'LOW HP', 2.0, 3);
  }

  /** Bullets hit us: small dents, and no one shooter can take more than half the bar. */
  private takeGunHit(from: string, n: number) {
    if (this.state !== 'race' || this.wrecked) return;
    const taken = this.gunFrom.get(from) ?? 0;
    // another player (or a test-mode car): flat damage, no cap; computer drivers: capped as before
    let dmg = from.startsWith('ai:') ? Math.min(n * AI_PER_HIT, GUN_CAP - taken) : n * this.pvpPerHit();
    if (from.startsWith('ai:')) {
      // the computer drivers together can only take a fifth of the bar
      let ai = 0;
      for (const [k, v] of this.gunFrom) if (k.startsWith('ai:')) ai += v;
      dmg = Math.min(dmg, AI_GUN_CAP - ai);
    }
    dmg *= this.frail; // tough cars feel less of it (the caps above scale with it)
    if (this.testPvp && from.startsWith('p:')) {
      const who = from.slice(2);
      this.testTaken.set(who, (this.testTaken.get(who) ?? 0) + Math.max(0, dmg));
      this.testNote(`${who} > YOU GUN ${Math.max(0, dmg).toFixed(1)}${dmg <= 0 ? ' (CAPPED)' : ''}`, dmg <= 0 ? GREY : RED);
    }
    if (dmg <= 0) return;
    this.gunFrom.set(from, taken + dmg / this.frail);
    this.hp = Math.max(0, this.hp - dmg);
    const wh = ['left', 'right', 'rear'] as const;
    this.world.car.hit(0.1, wh[Math.floor(Math.random() * 3)]);
    this.hitFlash = 0.25;
    this.shakeKick = Math.max(this.shakeKick, 0.15);
    this.audio.ping();
    this.afterDamage(dmg);
  }

  /** Our round hit rival i. */
  private hitRival(i: number, rocket = false) {
    const r = this.world.rivals[i];
    if (r.remote) {
      if (rocket) this.net?.sendHit({ r: this.raceId, to: r.remote.id, n: 1, rk: true });
      else this.pendingHits.set(r.remote.id, (this.pendingHits.get(r.remote.id) ?? 0) + 1);
      return;
    }
    if (r.wrecked) return;
    // computer cars: your bullets do triple damage and can finish them off; a rocket finishes them outright
    let dmg = (rocket ? ROCKET_DAMAGE : PER_HIT) * VS_AI_DAMAGE;
    if (this.testPvp) {
      // test mode: exactly what a real player would take from you
      dmg = rocket ? PVP_ROCKET_DAMAGE : this.pvpPerHit();
      this.testDealt.set(r.name, (this.testDealt.get(r.name) ?? 0) + dmg);
      this.testNote(`YOU > ${r.name} ${rocket ? 'ROCKET' : 'GUN'} ${dmg.toFixed(1)}${dmg === 0 ? ' (CAPPED)' : ''}`, dmg === 0 ? GREY : YELLOW);
      if (dmg <= 0) return;
    }
    // tough cars take less (but a rocket still finishes a computer car)
    if (!(rocket && !this.testPvp)) dmg *= 100 / r.spec.stats.hp;
    const before = r.hp;
    r.hp = Math.max(0, r.hp - dmg);
    r.gunTaken += dmg;
    r.bumpT = Math.max(r.bumpT, rocket ? 1.2 : 0.25 + (1 - r.hp / 100) * 0.35);
    this.world.rivalHit(i, rocket ? 1 : 0.16);
    if (before >= 55 && r.hp < 55) this.world.rivalBreakLamp(i);
    if (r.hp <= 0) {
      r.wrecked = true;
      r.gunT = 0;
      r.burst = 0;
      this.score += 50000;
      this.flash(`${r.name} WRECKED!`, '+50000', 2.0, 2);
      this.audio.crash(true);
      this.audio.pop();
    }
  }

  /**
   * First car in the line of fire from (d, x): rivals, the player (unless it's us shooting) and traffic,
   * up to the gun's range. Returns the rival index, -1 for the player, -3 for traffic, or null, plus where it is.
   */
  private lineOfFire(d: number, x: number, self: number | 'player'): { hit: number | null; d: number; x: number } {
    let best: number | null = null, bd = RANGE_AHEAD, bx = x;
    this.world.rivals.forEach((r, i) => {
      if (i === self || r.wrecked) return;
      const dd = r.d - d;
      if (dd > 0.5 && dd < bd && Math.abs(r.x - x) < GUN_WIDTH) { best = i; bd = dd; bx = r.x; }
    });
    if (self !== 'player') {
      const dd = this.pos - d;
      if (dd > 0.5 && dd < bd && Math.abs(this.px - x) < GUN_WIDTH) { best = -1; bd = dd; bx = this.px; }
    }
    for (const c of this.world.traffic) {
      const dd = c.d - d;
      if (dd > 0.5 && dd < bd && Math.abs(c.x - x) < GUN_WIDTH + 0.4) { best = -3; bd = dd; bx = c.x; }
    }
    return { hit: best, d: d + bd, x: bx };
  }

  /** Weapons: guns fire dead ahead (no auto-aim); computer drivers shoot when you're in front of them. */
  private guns(dt: number) {
    const w = this.world, rivals = w.rivals, inp = this.input;
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.firingT = Math.max(0, this.firingT - dt);
    this.noTargetT = Math.max(0, this.noTargetT - dt);
    this.fireCool = Math.max(0, this.fireCool - dt);
    this.bazookaT = Math.max(0, this.bazookaT - dt);
    w.playerGun.flash = false;
    const firing = this.weapons && this.state === 'race' && !this.wrecked && this.crashT <= 0 && inp.held('KeyF');
    if (firing && this.ammo <= 0) this.noTargetT = 0.3;
    if (firing && this.ammo > 0) {
      this.firingT = 0.35;
      if (this.fireCool <= 0) {
        this.fireCool = 1 / FIRE_RATE;
        this.ammo--;
        const lf = this.lineOfFire(this.pos, this.px, 'player');
        // a rival in your line: every round hits; otherwise it flies off down the road
        w.shoot(this.pos, this.px, lf.hit === null ? this.pos + RANGE_AHEAD : lf.d, lf.x, lf.hit !== null);
        w.playerGun.flash = true;
        this.audio.gun();
        if (lf.hit !== null && lf.hit >= 0) {
          this.hitRival(lf.hit);
          this.lastGunTarget = lf.hit;
          this.lastHitT = 1.2;
        }
      }
    }
    this.lastHitT = Math.max(0, this.lastHitT - dt);
    w.playerGun.firing = this.firingT > 0;
    w.playerGun.rocket = this.bazookaT;

    rivals.forEach((r, i) => {
      r.gunT = Math.max(0, r.gunT - dt);
      r.rocketT = Math.max(0, r.rocketT - dt);
      if (r.remote) {
        // another player firing straight ahead: show it (their hits arrive as messages)
        if (r.gunT <= 0) return;
        r.fireCool -= dt;
        if (r.fireCool > 0) return;
        r.fireCool = 1 / FIRE_RATE;
        const lf = this.lineOfFire(r.d, r.x, i);
        w.shoot(r.d, r.x, lf.hit === null ? r.d + RANGE_AHEAD : lf.d, lf.x, lf.hit !== null);
        this.audio.gun(0.4);
        return;
      }
      // computer drivers: short bursts, only when you're in front of them in their line
      if (!this.weapons || this.state !== 'race' || this.wrecked || r.wrecked || r.ammo <= 0 || r.finished >= 0) return;
      const lf = this.lineOfFire(r.d, r.x, i);
      if (lf.hit !== -1) {
        r.burst = 0;
        return;
      }
      if (this.testPvp) {
        // test mode: they fire like a player would, holding the trigger while you're in their sights,
        // and use their rockets when you're well lined up
        if ((r.rockets ?? 0) > 0 && lf.d - r.d < 120 && Math.random() < dt * 0.6) {
          r.rockets = (r.rockets ?? 0) - 1;
          r.rocketT = 1.1;
          w.launchRocket(r.d, r.x, Math.max(r.v, 15) + ROCKET_SPEED, false, `p:${r.name}`);
          this.audio.rocket(0.5);
        }
        r.burst = Math.max(r.burst, 1);
      }
      if (r.burst <= 0) {
        if (Math.random() < dt * (0.06 + r.aggro * 0.14)) r.burst = 3 + Math.floor(Math.random() * 4);
        return;
      }
      r.gunT = 0.35;
      r.fireCool -= dt;
      if (r.fireCool > 0) return;
      r.fireCool = 1 / FIRE_RATE;
      if (!this.testPvp) r.burst--;
      r.ammo--;
      w.shoot(r.d, r.x, this.pos, this.px, true);
      this.audio.gun(0.5);
      this.takeGunHit(this.testPvp ? `p:${r.name}` : `ai:${r.name}`, 1);
    });
    this.rocketsTick(dt);
    w.tickTracers(dt);
  }

  /**
   * Help for whoever's behind, in races with other cars: catch-up when well behind the leader,
   * and a slipstream tow from driving close behind any car.
   */
  private assists(dt: number) {
    const w = this.world;
    this.slipT = Math.max(0, this.slipT - dt);
    if (this.mode === 'arcade' && !w.traffic.length) return;
    // catch-up: from 150 m behind the leading car, rising to the full boost at 400 m
    let lead = -Infinity;
    for (const r of w.rivals) if (!r.wrecked) lead = Math.max(lead, r.d);
    const gap = lead - this.pos;
    const target = this.mode === 'arcade' || !Number.isFinite(gap) ? 0 : CATCHUP_MAX * Math.max(0, Math.min(1, (gap - CATCHUP_FROM) / (CATCHUP_FULL - CATCHUP_FROM)));
    this.catchUp += (target - this.catchUp) * Math.min(1, dt * 2);
    // slipstream: close behind a car in its lane, at speed
    let towing = false;
    if (this.speed * KMH > 100 && this.crashT <= 0) {
      const behind = (d: number, x: number) => d - this.pos > 4 && d - this.pos < 30 && Math.abs(x - this.px) < 1.6;
      towing = w.rivals.some((r) => !r.wrecked && behind(r.d, r.x)) || w.traffic.some((c) => behind(c.d, c.x));
    }
    if (towing && this.slipT <= 0) {
      this.tow = Math.min(1, this.tow + dt / SLIP_BUILD);
      if (this.tow >= 1) {
        this.tow = 0;
        this.slipT = SLIP_TIME;
        this.audio.turbo();
      }
    } else if (!towing) this.tow = Math.max(0, this.tow - dt * 1.2);
  }

  /** Bazooka: E fires a rocket straight down your line (no auto-aim); it blows up on the first car in its path. */
  private rocketsTick(dt: number) {
    const w = this.world, inp = this.input;
    this.rocketMsgT = Math.max(0, this.rocketMsgT - dt);
    if (this.weapons && this.state === 'race' && !this.wrecked && this.crashT <= 0 && inp.hit('KeyR')) {
      if (this.rockets > 0) {
        this.rockets--;
        const v = Math.max(this.speed, 15) + ROCKET_SPEED;
        w.launchRocket(this.pos, this.px, v, true, 'me');
        this.bazookaT = 1.1;
        this.audio.rocket();
        this.shakeKick = Math.max(this.shakeKick, 0.2);
        if (this.mode === 'online' && this.raceId) this.net?.sendRk({ r: this.raceId, d: this.pos, x: this.px, v });
      } else this.rocketMsgT = 1;
    }
    for (const rk of w.moveRockets(dt, ROCKET_RANGE, this.pos)) w.explodeRocket(rk);
    for (const rk of [...w.rockets]) {
      const d0 = rk.d - rk.v * dt - 2.3, d1 = rk.d + 2.3;
      const inPath = (d: number, x: number) => d >= d0 && d <= d1 && Math.abs(x - rk.x) < ROCKET_WIDTH;
      let hit = -2; // -2 nothing, -1 the player, >= 0 a rival
      w.rivals.forEach((r, i) => {
        if (hit !== -2 || r.wrecked || r.remote?.id === rk.from || `p:${r.name}` === rk.from) return;
        if (inPath(r.d, r.x)) hit = i;
      });
      if (hit === -2 && !rk.mine && inPath(this.pos, this.px)) hit = -1;
      const traffic = hit === -2 && w.traffic.some((c) => inPath(c.d, c.x));
      if (hit === -2 && !traffic) continue;
      w.explodeRocket(rk);
      this.audio.boom(Math.max(0.25, Math.min(1, 60 / (Math.abs(rk.d - this.pos) + 20))));
      if (rk.mine && hit >= 0) {
        this.hitRival(hit, true);
        this.score += 5000;
      }
      if (this.testPvp && hit === -1 && rk.from.startsWith('p:')) this.takeRocketHit(rk.from);
    }
  }

  /** Out of condition: the engine blows, the car rolls to a stop in a cloud of smoke. */
  private wreck() {
    if (this.wrecked) return;
    this.hp = 0;
    this.wrecked = true;
    this.turboT = 0;
    this.turboLayers = [];
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
    const fov = 54 + 14 * Math.min(1.3, f) * Math.min(1.3, f) + (this.turboT > 0 ? Math.min(30, 6 * this.turboLayers.length) : 0);
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
        h.text('SELECT  YOUR  ROUTE', HUD_W / 2, 12, 24, YELLOW, 'center');
        h.text(`${Math.max(0, Math.ceil(20 - this.t))}`, HUD_W - 30, 12, 24, ORANGE, 'right');
        // postcards, three across
        const cw = CARD_STEP_X - 12, ch = CARD_STEP_Y - 8, art = 68;
        this.routes.forEach((rt, i) => {
          const sel = i === this.routeIdx;
          const x = CARD_X + (i % 3) * CARD_STEP_X, y = CARD_Y + Math.floor(i / 3) * CARD_STEP_Y - (sel ? 3 : 0);
          if (sel) h.rect(x + 5, y + 6, cw, ch, 0x000000);
          h.postcard(rt.id, x, y, cw, art, this.clock);
          h.rect(x, y + art, cw, ch - art, sel ? 0x2a1a50 : 0x101028);
          const name = `${rt.lines[0]} ${rt.lines[1]}`;
          const fs = name.length <= 15 ? 16 : 12;
          h.text(name, x + cw / 2, y + art + (ch - art - fs) / 2 + 1, fs, sel ? YELLOW : rt.card[1], 'center');
          if (!sel) h.shade(x, y, cw, ch, 0.35);
          const fc = sel ? (blink ? YELLOW : WHITE) : 0x3a3a5a, bw = sel ? 4 : 2;
          h.rect(x - bw, y - bw, cw + bw * 2, bw, fc);
          h.rect(x - bw, y + ch, cw + bw * 2, bw, fc);
          h.rect(x - bw, y, bw, ch, fc);
          h.rect(x + cw, y, bw, ch, fc);
        });
        // the chosen route: day/night, its song, and the five stages as a course map
        const rt = this.world.route, iy = 262;
        h.shade(CARD_X - 4, iy, 3 * CARD_STEP_X - 4, 58, 0.72);
        h.sky(rt.night, CARD_X + 12, iy + 13);
        h.text(`${rt.lines[0]} ${rt.lines[1]}`, CARD_X + 30, iy + 6, 16, WHITE);
        const song = TRACKS.find((tr) => tr.id === rt.music)?.name ?? '';
        h.note(HUD_W - CARD_X - 8 - song.length * 8 - 14, iy + 12, PINK);
        h.text(song, HUD_W - CARD_X - 8, iy + 9, 8, PINK, 'right');
        const sx0 = CARD_X + 70, sx1 = HUD_W - CARD_X - 70, dy = iy + 34;
        h.rect(sx0, dy - 1, sx1 - sx0, 2, 0x5a5a8a);
        rt.stageNames.forEach((nm, k) => {
          const sx = sx0 + ((sx1 - sx0) * k) / (rt.stageNames.length - 1);
          h.rect(sx - 4, dy - 4, 8, 8, k === 0 ? GREEN : k === rt.stageNames.length - 1 ? YELLOW : CYAN);
          h.text(nm, sx, dy + 9, 8, k === 0 ? GREEN : WHITE, 'center');
        });
        // modes
        const modes: [Mode, string, string, 'clock' | 'flag' | 'globe'][] = [
          ['arcade', 'ARCADE', 'BEAT THE CLOCK', 'clock'], ['rivals', 'VS RIVALS', '8-CAR RACE', 'flag'], ['online', 'ONLINE', 'RACE REAL PLAYERS', 'globe']];
        modes.forEach(([m, label, sub, ic], i) => {
          const x = MODE_X + i * MODE_STEP, sel = m === this.mode;
          h.box(x, MODE_Y, MODE_W, MODE_H, sel ? 0x2a1a50 : 0x141428, sel ? (blink ? PINK : WHITE) : 0x3a3a5a, sel ? 4 : 2);
          h.icon(ic, x + 26, MODE_Y + MODE_H / 2, sel ? YELLOW : GREY);
          h.text(label, x + 48, MODE_Y + 9, 16, sel ? YELLOW : GREY);
          h.text(sub, x + 48, MODE_Y + 29, 8, sel ? WHITE : GREY);
        });
        // GO, with the keys either side
        h.box(HUD_W / 2 - 120, GO_Y, 240, 46, 0x1a8a3a, blink ? YELLOW : WHITE);
        h.text(this.touch ? 'TAP TO GO' : 'ENTER  GO', HUD_W / 2, GO_Y + 15, 16, WHITE, 'center');
        if (this.touch) {
          h.text('TAP A ROUTE', CARD_X, GO_Y + 12, 8, GREY);
          h.text('TAP IT AGAIN TO GO', CARD_X, GO_Y + 26, 8, GREY);
        } else {
          let kx = CARD_X;
          kx += h.keycap(kx, GO_Y + 13, '←', 18) + 3;
          kx += h.keycap(kx, GO_Y + 13, '→', 18) + 3;
          h.text('ROUTE', kx + 5, GO_Y + 18, 8, WHITE);
          h.text('MODE', HUD_W - CARD_X, GO_Y + 18, 8, WHITE, 'right');
          kx = HUD_W - CARD_X - 38 - 5 * 8 - 6;
          kx += h.keycap(kx, GO_Y + 13, '↑', 18) + 3;
          h.keycap(kx, GO_Y + 13, '↓', 18);
        }
        break;
      }
      case 'carselect': {
        const s = this.spec, C = CSEL, kb = !this.touch;
        h.text(this.touch ? '< BACK' : 'ESC BACK', 20, 14, 16, GREY);
        h.text('SELECT  YOUR  CAR', HUD_W / 2, 12, 24, YELLOW, 'center');
        h.text(`${Math.max(0, Math.ceil(25 - this.t))}`, HUD_W - 30, 12, 24, ORANGE, 'right');
        // name plate
        h.text(s.make, HUD_W / 2, 46, 16, CYAN, 'center');
        if (s.country) h.flag(s.country, HUD_W / 2 - s.make.length * 8 - 34, 46, 24, 16);
        h.text(s.name, HUD_W / 2, 66, s.name.length > 14 ? 24 : 32, WHITE, 'center');
        const tag = `${s.year}  ${s.group}`, tw = tag.length * 8 + 20;
        h.box(HUD_W / 2 - tw / 2, 104, tw, 18, 0x2a1a50, PINK, 1);
        h.text(tag, HUD_W / 2, 109, 8, PINK, 'center');
        // where you are in the line-up
        const n = ROSTER.length, px0 = HUD_W / 2 - (n * 16) / 2;
        for (let i = 0; i < n; i++) h.rect(px0 + i * 16 + (i === this.carIdx ? 0 : 3), 130 + (i === this.carIdx ? 0 : 3), i === this.carIdx ? 12 : 6, i === this.carIdx ? 12 : 6, i === this.carIdx ? YELLOW : 0x5a5a8a);
        // side arrows
        h.chip(C.arrowX, C.arrowY, C.arrowW, C.arrowH, '←', blink ? YELLOW : WHITE, 8, 0x141428);
        h.chip(HUD_W - C.arrowX - C.arrowW, C.arrowY, C.arrowW, C.arrowH, '→', blink ? YELLOW : WHITE, 8, 0x141428);
        if (kb) {
          h.text('PREV', C.arrowX + C.arrowW / 2, C.arrowY + C.arrowH + 6, 8, GREY, 'center');
          h.text('NEXT', HUD_W - C.arrowX - C.arrowW / 2, C.arrowY + C.arrowH + 6, 8, GREY, 'center');
        }
        // performance
        h.shade(C.lx, C.py, 300, C.ph, 0.68);
        h.text('PERFORMANCE', C.lx + 12, C.py + 8, 8, YELLOW);
        const bars: [string, number, number, string][] = [
          ['SPEED', (s.stats.vmax - 230) / 120, RED, `${s.stats.vmax}KM/H`],
          ['ACCEL', (s.stats.accel - 0.85) / 0.35, ORANGE, ''],
          ['GRIP', (s.stats.grip - 0.82) / 0.38, GREEN, ''],
          ['HP', (s.stats.hp - 70) / 60, CYAN, String(s.stats.hp)],
        ];
        bars.forEach(([label, v, c, note], i) => {
          const y = C.py + 26 + i * 22;
          h.text(label, C.lx + 12, y + 2, 8, WHITE);
          const lit = Math.round(Math.max(0.1, Math.min(1, v)) * 12);
          for (let k = 0; k < 12; k++) h.rect(C.lx + 64 + k * 12, y, 10, 12, k < lit ? c : 0x202040);
          if (note) h.text(note, C.lx + 288, y + 2, 8, WHITE, 'right');
        });
        // paint + race settings
        const rx = HUD_W - C.lx - 300;
        h.shade(rx, C.py, 300, C.ph, 0.68);
        h.text('PAINT', rx + 12, C.paintY + 3, 16, WHITE);
        const np = s.paints.length;
        s.paints.forEach((c, i) => {
          const on = i === this.paintIdx % np, x = rx + C.swX + i * 24;
          h.rect(x - 2, C.paintY - 2, 22, 20, on ? YELLOW : 0x3a3a5a);
          h.rect(x, C.paintY, 18, 16, c);
        });
        if (kb) {
          h.keycap(rx + 300 - 46, C.paintY, '↑');
          h.keycap(rx + 300 - 28, C.paintY, '↓');
        }
        const row = (y: number, label: string, val: string, on: boolean, key: string, toggle: boolean) =>
          this.settingRow(rx + 12, y, rx + C.minusX, rx + C.plusX, kb ? rx + 300 - 34 : -1, label, val, on, key, toggle);
        row(C.turbY, 'TURBOS', String(this.turboCount), true, 'T', false);
        if (this.mode === 'rivals') {
          row(C.weapY, 'WEAPONS', this.weaponsSetting ? 'ON' : 'OFF', this.weaponsSetting, 'V', true);
          row(C.ammoY, 'AMMO', String(this.ammoCount), this.weaponsSetting, 'B', false);
          row(C.rockY, 'ROCKETS', String(this.rocketCount), this.weaponsSetting, 'K', false);
        }
        // music, race
        h.note(C.lx + 10, C.goY + 21, PINK);
        h.text(this.musicLabel(), C.lx + 24, C.goY + 12, 8, PINK);
        if (kb) {
          h.keycap(C.lx + 24, C.goY + 26, 'N');
          h.text('CHANGE SONG', C.lx + 46, C.goY + 30, 8, GREY);
        } else h.text('TAP TO CHANGE', C.lx + 24, C.goY + 28, 8, GREY);
        h.box(HUD_W / 2 - 130, C.goY, 260, 48, 0x1a8a3a, blink ? YELLOW : WHITE);
        h.text(this.touch ? 'TAP TO RACE' : 'ENTER  RACE', HUD_W / 2, C.goY + 16, 16, WHITE, 'center');
        h.text(this.touch ? 'TAP THE CAR: NEXT PAINT' : 'CAR', HUD_W - C.lx, C.goY + 18, 8, GREY, 'right');
        if (kb) {
          h.keycap(HUD_W - C.lx - 70, C.goY + 14, '←', 18);
          h.keycap(HUD_W - C.lx - 49, C.goY + 14, '→', 18);
        }
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
          this.countdownHelp();
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
        // big messages sit under the status line (which is under the timer / position)
        const my = this.touch ? 200 : 180;
        if (this.clock < this.musicToast && this.state !== 'goal' && this.state !== 'over') {
          const ty = this.clock < this.msgUntil ? my + 90 : my;
          h.box(HUD_W / 2 - 200, ty - 4, 400, 34, 0x101030, PINK, 3);
          h.text(`MUSIC  ${this.musicLabel()}`, HUD_W / 2, ty + 6, 16, WHITE, 'center');
        }
        this.nextMsg();
        if (this.clock < this.msgUntil && (this.msg === 'GO!' || blink)) {
          h.text(this.msg, HUD_W / 2, my, this.msg === 'GO!' ? 64 : 32, this.msg === 'GO!' ? YELLOW : CYAN, 'center');
          if (this.msg2) h.text(this.msg2, HUD_W / 2, my + 44, 24, YELLOW, 'center');
        }
        if (this.paused) {
          h.box(HUD_W / 2 - 220, 150, 440, 170, 0x101030, WHITE);
          h.text('PAUSE', HUD_W / 2, 180, 32, YELLOW, 'center');
          h.text(this.touch ? 'RESUME' : 'ESC  RESUME', HUD_W / 2, 230, 16, WHITE, 'center');
          if (this.mode === 'online') h.text('RESTART (NOT ONLINE)', HUD_W / 2, 260, 16, GREY, 'center');
          else if (this.clock < this.restartArm) h.text(this.touch ? 'TAP AGAIN TO RESTART' : 'BACKSPACE AGAIN TO RESTART', HUD_W / 2, 260, 16, blink ? RED : WHITE, 'center');
          else h.text(this.touch ? 'RESTART' : 'BACKSPACE  RESTART', HUD_W / 2, 260, 16, WHITE, 'center');
          h.text(this.touch ? 'QUIT' : 'Q  QUIT', HUD_W / 2, 290, 16, WHITE, 'center');
        }
      }
    }
    if (this.clock < this.noticeUntil) {
      const w = this.notice.length * 8 + 40;
      h.box(HUD_W / 2 - w / 2, 244, w, 34, 0x101030, ORANGE, 3);
      h.text(this.notice, HUD_W / 2, 257, 8, WHITE, 'center');
    }
    // mute, on every screen: a toast when M is pressed and a badge while it's off
    if (this.clock < this.muteToast) {
      h.box(HUD_W / 2 - 110, 196, 220, 40, 0x101030, this.audio.muted ? RED : GREEN, 3);
      h.text(this.audio.muted ? 'SOUND OFF' : 'SOUND ON', HUD_W / 2, 208, 16, WHITE, 'center');
    }
    if (this.audio.muted) {
      h.box(8, HUD_H - 19, 62, 15, 0x101030, RED, 1);
      h.text('MUTED', 39, HUD_H - 15, 8, RED, 'center');
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
    // your car and stats on a compact panel (plus the race settings for the host), the driving controls under it
    const L = LOBBY, kb = !this.touch;
    const host = net?.status === 'online' ? net.host() : null, amHost = !host || host.id === net?.selfId;
    const statsY = amHost ? 237 : 140, ctrlY = amHost ? L.ctrlY : 197;
    h.shade(L.x0, 60, L.x1 - L.x0, statsY + 46 - 60);
    // car: arrows either side of the name, paint swatches under it
    h.chip(L.x0 + 6, L.carY + 4, 30, L.carH - 8, '←', YELLOW);
    h.chip(L.x1 - 36, L.carY + 4, 30, L.carH - 8, '→', YELLOW);
    h.text(s.make, L.mid, L.carY + 2, 16, CYAN, 'center');
    if (s.country) h.flag(s.country, L.mid - s.make.length * 8 - 26, L.carY + 3, 18, 12);
    const ns = s.name.length <= 9 ? 24 : s.name.length <= 14 ? 16 : 12;
    h.text(s.name, L.mid, L.carY + (ns === 24 ? 20 : ns === 16 ? 24 : 26), ns, WHITE, 'center');
    const n = s.paints.length, sx = L.mid - (n * 22 - 6) / 2;
    s.paints.forEach((c, i) => {
      const on = i === this.paintIdx % n;
      h.rect(sx + i * 22 - 2, L.paintY - 2, 20, 16, on ? YELLOW : 0x3a3a5a);
      h.rect(sx + i * 22, L.paintY, 16, 12, c);
    });
    if (kb) {
      h.keycap(L.x0 + 10, L.paintY - 2, '←');
      h.keycap(L.x0 + 28, L.paintY - 2, '→');
      h.text('CAR', L.x0 + 50, L.paintY + 2, 8, GREY);
      h.text('PAINT', L.x1 - 46, L.paintY + 2, 8, GREY, 'right');
      h.keycap(L.x1 - 42, L.paintY - 2, '↑');
      h.keycap(L.x1 - 24, L.paintY - 2, '↓');
    }
    // race settings, host only: < value > chips, with the key that changes each
    if (amHost) {
      const setting = (y: number, label: string, val: string, on: boolean, key: string, toggle: boolean) =>
        this.settingRow(L.x0 + 10, y, L.minusX, L.plusX, kb ? L.x1 - 30 : -1, label, val, on, key, toggle);
      setting(L.turbY, 'TURBOS', String(this.turboCount), true, 'T', false);
      setting(L.weapY, 'WEAPONS', this.weaponsSetting ? 'ON' : 'OFF', this.weaponsSetting, 'V', true);
      setting(L.ammoY, 'AMMO', String(this.ammoCount), this.weaponsSetting, 'B', false);
      setting(L.rockY, 'ROCKETS', String(this.rocketCount), this.weaponsSetting, 'K', false);
      h.text(others.length ? 'YOU ARE THE HOST: YOU SET THE RACE' : 'FIRST IN IS THE HOST: YOU SET THE RACE', L.mid, 223, 8, ORANGE, 'center');
    }
    // the car's stats, as on the car-select screen
    const bars: [string, number, number][] = [
      ['SPEED', (s.stats.vmax - 230) / 120, RED], ['ACCEL', (s.stats.accel - 0.85) / 0.35, ORANGE], ['GRIP', (s.stats.grip - 0.82) / 0.38, GREEN], ['HP', (s.stats.hp - 70) / 60, CYAN],
    ];
    bars.forEach(([label, v, c], i) => {
      const y = statsY + i * 11;
      h.text(label, L.x0 + 10, y + 1, 8, YELLOW);
      const lit = Math.round(Math.max(0.1, Math.min(1, v)) * 12);
      for (let k = 0; k < 12; k++) h.rect(L.x0 + 66 + k * 11, y, 9, 8, k < lit ? c : 0x202040);
    });
    h.text(`${s.stats.vmax} KM/H`, L.x1 - 10, statsY + 1, 8, WHITE, 'right');
    h.text(`${s.stats.hp} HP`, L.x1 - 10, statsY + 34, 8, WHITE, 'right');
    // the driving controls (hidden under the countdown)
    if (!this.pending) {
      h.shade(L.x0, ctrlY, kb ? L.x1 - L.x0 : 346, 98, 0.8);
      if (kb) this.keyGuide(L.x0 + 10, ctrlY + 6);
      else this.buttonGuide(L.x0 + 4, ctrlY + 4);
    }
    // player list
    const lx = HUD_W - 320, ly = 70;
    h.box(lx, ly, 300, 40 + Math.min(8, others.length + 1) * 34 + (others.length > 7 ? 16 : 0), 0x101030, 0x3a3a5a, 3);
    h.text('PLAYERS', lx + 14, ly + 12, 16, YELLOW);
    const rows = [{ name: this.playerName || 'PLAYER', car: s.name, st: 'YOU', me: true, host: amHost },
      ...others.map((p) => ({ name: p.name, car: ROSTER[p.car % ROSTER.length].name, st: p.status === 'race' ? 'RACING' : p.id === host?.id ? '' : p.ready ? 'READY' : 'NOT READY', me: false, host: p.id === host?.id }))];
    if (!amHost) rows[0].st = net?.me.ready ? 'READY' : 'NOT READY';
    rows.slice(0, 8).forEach((r, i) => {
      const y = ly + 40 + i * 34;
      h.text(r.name, lx + 14, y, 16, r.me ? YELLOW : WHITE);
      if (r.host) {
        h.box(lx + 190, y + 1, 44, 14, 0x3a2410, ORANGE, 1);
        h.text('HOST', lx + 212, y + 4, 8, ORANGE, 'center');
      }
      if (amHost && !r.me) h.chip(lx + 230, y + 15, 60, 15, 'REMOVE', RED, 8, 0x2a1014);
      if (r.st === 'READY') {
        h.box(lx + 238, y + 1, 50, 14, 0x103a18, 0x40e040, 1);
        h.text('READY', lx + 263, y + 4, 8, 0x40e040, 'center');
      } else if (r.st) h.text(r.st, lx + 286, y + 4, 8, r.st === 'RACING' ? ORANGE : r.st === 'NOT READY' ? GREY : YELLOW, 'right');
      h.text(r.car, lx + 14, y + 19, 8, 0x8a8aa8);
    });
    if (rows.length > 8) h.text(`+${rows.length - 8} MORE`, lx + 14, ly + 40 + 8 * 34, 8, WHITE);
    // route + start
    const route = this.world.route;
    h.box(20, 410, 250, 50, 0x141428, WHITE, 3);
    h.text(amHost ? `${this.touch ? 'TAP' : 'R'}  ROUTE` : "HOST'S ROUTE", 145, 418, 8, 0x8a8aa8, 'center');
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
      h.shade(HUD_W / 2 - 270, 156, 540, 176, 0.85);
      h.text('STARTING IN', HUD_W / 2, 170, 24, CYAN, 'center');
      h.text(String(n), HUD_W / 2, 206, 64, YELLOW, 'center');
      const rt = this.routes[this.pending.go.route] ?? this.world.route;
      h.text(`${rt.lines[0]} ${rt.lines[1]}`, HUD_W / 2, 284, 16, WHITE, 'center');
      const g = this.pending.go;
      h.text(`TURBOS ${g.turbos}   WEAPONS ${g.weapons ? `ON  AMMO ${g.ammo}  ROCKETS ${g.rockets}` : 'OFF'}`, HUD_W / 2, 308, 16, g.weapons ? ORANGE : YELLOW, 'center');
      return;
    }
    if (others.some((p) => p.status === 'race')) h.text('RACE IN PROGRESS - JOIN THE NEXT ONE', HUD_W / 2, 395, 8, ORANGE, 'center');
    else if (!others.length) h.text('SHARE THIS PAGE LINK TO INVITE PLAYERS', HUD_W / 2, 395, 8, WHITE, 'center');
    const online = net?.status === 'online';
    const canStart = online && amHost;
    const lobbyOthers = others.filter((p) => p.status === 'lobby');
    const nReady = lobbyOthers.filter((p) => p.ready).length;
    if (online && !amHost) {
      // not the host: a READY button, so the host knows they can start
      const me = net!.me.ready;
      h.box(HUD_W / 2 - 150, 410, 300, 50, me ? 0x1a8a3a : 0x1a5ab8, !me && blink ? YELLOW : me ? 0x40e040 : WHITE);
      h.text(me ? "YOU'RE READY!" : this.touch ? "TAP WHEN YOU'RE READY" : "ENTER  I'M READY", HUD_W / 2, 418, 16, WHITE, 'center');
      h.text(me ? `WAITING FOR ${host?.name ?? 'THE HOST'}  -  ${this.touch ? 'TAP' : 'ENTER'} TO UNDO` : `${host?.name ?? 'THE HOST'} STARTS THE RACE`, HUD_W / 2, 441, 8, me ? 0xc0ffc0 : 0xc0d0ff, 'center');
    } else {
      h.box(HUD_W / 2 - 150, 410, 300, 50, canStart ? 0x1a8a3a : 0x202030, canStart && blink ? YELLOW : 0x5a5a7a);
      const tally = canStart && lobbyOthers.length;
      h.text(this.touch ? 'TAP TO START' : 'ENTER  START', HUD_W / 2, tally ? 418 : 427, 16, canStart ? WHITE : 0x8a8aa8, 'center');
      if (tally) {
        const all = nReady === lobbyOthers.length;
        h.text(all ? 'EVERYONE IS READY!' : `${nReady} OF ${lobbyOthers.length} READY`, HUD_W / 2, 441, 8, all ? YELLOW : 0xc0ffc0, 'center');
      }
    }
  }

  /** A race-setting row: label, then < value > chips (or one ON/OFF chip), then the key that changes it. */
  private settingRow(x: number, y: number, minusX: number, plusX: number, keyX: number, label: string, val: string, on: boolean, key: string, toggle: boolean, locked = false) {
    const h = this.hud, H = LOBBY.chipH;
    h.text(label, x, y + 3, 16, on ? YELLOW : GREY);
    if (locked) {
      // set by the host: show the value, no buttons
      h.text(val, (minusX + plusX + 28) / 2, y + 3, 16, toggle ? (on ? ORANGE : GREY) : on ? WHITE : GREY, 'center');
      return;
    }
    if (toggle) h.chip(minusX, y, plusX + 28 - minusX, H, val, on ? ORANGE : GREY, 16, on ? 0x5a2a10 : 0x1a1a3a);
    else {
      h.chip(minusX, y, 28, H, '←', on ? CYAN : GREY);
      h.text(val, (minusX + plusX + 28) / 2, y + 3, 16, on ? WHITE : GREY, 'center');
      h.chip(plusX, y, 28, H, '→', on ? CYAN : GREY);
    }
    if (keyX >= 0) h.keycap(keyX, y + 1, key, 18);
  }

  /** Desktop: two columns of keycaps, each action in its touch button's colour. */
  private keyGuide(x: number, y: number) {
    const h = this.hud, fire = this.weaponsSetting;
    const rows: [string[], string, number][][] = [
      [[['↑'], 'GAS', GREEN], [['SPACE'], 'DRIFT', CYAN]],
      [[['↓'], 'BRAKE', RED], [['SHIFT'], 'TURBO', ORANGE]],
      [[['←', '→'], 'STEER', WHITE], [['F'], fire ? 'GUN' : 'GUN (OFF)', fire ? RED : GREY]],
      [[['ESC'], 'PAUSE', GREY], [['R'], fire ? 'ROCKET' : 'ROCKET (OFF)', fire ? ORANGE : GREY]],
      [[['M'], 'MUTE', GREY], [['N'], 'MUSIC', PINK]],
    ];
    rows.forEach((r, i) => r.forEach(([keys, act, c], j) => {
      let kx = x + j * 168;
      for (const k of keys) kx += h.keycap(kx, y + i * 17, k, 15) + 3;
      h.text(act, kx + 5, y + i * 17 + 4, 8, c);
    }));
  }

  /** Touch: the on-screen buttons in their real places, same border colours. */
  private buttonGuide(x: number, y: number) {
    const h = this.hud, w = 330, ht = 88, fire = this.weaponsSetting;
    h.box(x, y, w, ht, 0x0a0a1a, 0x3a3a5a, 1); // the phone screen
    // left thumb: steer pads
    h.text('STEER', x + 45, y + ht - 50, 8, WHITE, 'center');
    h.chip(x + 8, y + ht - 38, 34, 30, '←', WHITE);
    h.chip(x + 48, y + ht - 38, 34, 30, '→', WHITE);
    // right thumb: inner column fire / drift / brake, outer turbo / gas
    const ox = x + w - 66, ix = x + w - 128;
    if (fire) h.chip(ix, y + 6, 56, 18, 'FIRE', RED);
    h.chip(ix, y + 28, 56, 18, 'DRIFT', CYAN);
    h.chip(ix, y + 50, 56, 30, 'BRAKE', RED);
    if (fire) h.chip(ox, y + 4, 58, 16, 'ROCKET', ORANGE);
    h.chip(ox, y + 24, 58, 20, 'TURBO', ORANGE);
    h.chip(ox, y + 48, 58, 32, 'GAS', GREEN);
    // middle: auto gas, and the small buttons along the top
    h.text('MUSIC AUTO II', x + 140, y + 8, 8, GREY, 'center');
    h.text('AUTO GAS', x + 140, y + 30, 8, GREEN, 'center');
    h.text('IS ON', x + 140, y + 42, 8, GREEN, 'center');
    h.text('TAP AUTO', x + 140, y + 58, 8, GREY, 'center');
    h.text('TO TURN OFF', x + 140, y + 70, 8, GREY, 'center');
  }

  /** While the gun fires: a crosshair where the rounds land, red and tighter when a car is in your line. */
  private crosshair() {
    const h = this.hud;
    const lf = this.lineOfFire(this.pos, this.px, 'player');
    const onCar = lf.hit !== null && lf.hit !== -3;
    // on the car in your line, or 45 m straight down the road
    const p = onCar || lf.hit === -3 ? this.world.roadScreenPos(lf.d, lf.x, 0.9, this.camera, HUD_W, HUD_H)
      : this.world.roadScreenPos(this.pos + 45, this.px, 0.9, this.camera, HUD_W, HUD_H);
    if (!p) return;
    const c = onCar ? RED : WHITE, r = Math.round(Math.max(16, Math.min(34, (onCar ? 900 : 1100) / p.dist)));
    const x = Math.round(p.x), y = Math.round(p.y);
    // corner brackets, four ticks and a centre dot; drawn twice, a dark outline then the colour, so it reads on any background
    const shape = (o: number, col: number) => {
      const t = 3 + o * 2, L = 9 + o * 2;
      for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        h.rect(x + sx * r - (sx > 0 ? L - o : o), y + sy * r - (sy > 0 ? t - o : o), L, t, col);
        h.rect(x + sx * r - (sx > 0 ? t - o : o), y + sy * r - (sy > 0 ? L - o : o), t, L, col);
      }
      h.rect(x - r - 12 - o, y - 1 - o, 8 + o * 2, t, col);
      h.rect(x + r + 4 - o, y - 1 - o, 8 + o * 2, t, col);
      h.rect(x - 1 - o, y - r - 12 - o, t, 8 + o * 2, col);
      h.rect(x - 1 - o, y + r + 4 - o, t, 8 + o * 2, col);
      h.rect(x - 1 - o, y - 1 - o, t, t, col);
    };
    shape(1, 0x000000);
    shape(0, c);
  }

  /** Test mode (?test=pvp): every car's condition, what you dealt it and took from it, and the last hits. */
  private testPanel() {
    const h = this.hud, x = 14, y0 = 118, w = 270;
    const rows = this.world.rivals;
    h.shade(x - 6, y0 - 6, w, 36 + (rows.length + 1) * 10 + this.testLog.length * 10 + 16, 0.7);
    h.text(`TEST  ${this.world.rivals.length + 1} PLAYERS  ${this.pvpPerHit()}% A ROUND`, x, y0, 8, ORANGE);
    h.text(`YOU ${(100 - this.hp).toFixed(1)}% DAMAGE`, x, y0 + 11, 8, damageColour(1 - this.hp / 100));
    if (this.testScrape > 0.05) h.text(`WALLS ${this.testScrape.toFixed(1)}`, x + w - 12, y0 + 11, 8, CYAN, 'right');
    h.text('CAR       DMG   YOU>  >YOU', x, y0 + 25, 8, GREY);
    rows.forEach((r, i) => {
      const y = y0 + 35 + i * 10;
      const dmg = 100 - r.hp, dealt = this.testDealt.get(r.name) ?? 0, taken = this.testTaken.get(r.name) ?? 0;
      const c = r.wrecked ? RED : WHITE;
      h.text(r.name.slice(0, 8), x, y, 8, c);
      h.text(r.wrecked ? 'WRECK' : `${dmg.toFixed(0)}%`, x + 112, y, 8, c, 'right');
      h.text(dealt.toFixed(1), x + 168, y, 8, YELLOW, 'right');
      h.text(taken.toFixed(1), x + 224, y, 8, RED, 'right');
      h.text(`R${r.rockets ?? 0}`, x + 252, y, 8, ORANGE, 'right');
    });
    const ly = y0 + 41 + rows.length * 10;
    this.testLog.forEach((l, i) => h.text(l.n > 1 ? `${l.text} x${l.n}` : l.text, x, ly + i * 10, 8, l.col));
  }

  /** Under the 3-2-1: the few controls you need to get going. */
  private countdownHelp() {
    const h = this.hud, fire = this.weapons, y = 318;
    if (this.touch) {
      const items: [string, number][] = [['STEER LEFT THUMB', WHITE], ['GAS', GREEN], ['BRAKE', RED], ['DRIFT', CYAN], ['TURBO', ORANGE]];
      if (fire) items.push(['FIRE', RED], ['ROCKET', ORANGE]);
      const ws = items.map(([t]) => t.length * 8 + 16), tot = ws.reduce((a, b) => a + b, 0) + (items.length - 1) * 8;
      let x = HUD_W / 2 - tot / 2;
      h.shade(x - 8, y - 6, tot + 16, 34, 0.5);
      items.forEach(([t, c], i) => {
        h.chip(x, y, ws[i], 22, t, c);
        x += ws[i] + 8;
      });
      return;
    }
    const items: [string[], string, number][] = [[['↑'], 'GAS', GREEN], [['↓'], 'BRAKE', RED], [['←', '→'], 'STEER', WHITE], [['SPACE'], 'DRIFT', CYAN], [['SHIFT'], 'TURBO', ORANGE]];
    if (fire) items.push([['F'], 'GUN', RED], [['R'], 'ROCKET', ORANGE]);
    const width = (it: [string[], string, number]) => it[0].reduce((a, k) => a + h.keyW(k, 18) + 3, 0) + 5 + it[1].length * 8;
    const tot = items.reduce((a, it) => a + width(it), 0) + (items.length - 1) * 18;
    let x = HUD_W / 2 - tot / 2;
    h.shade(x - 10, y - 6, tot + 20, 32, 0.5);
    for (const it of items) {
      let kx = x;
      for (const k of it[0]) kx += h.keycap(kx, y, k, 18) + 3;
      h.text(it[1], kx + 5, y + 5, 8, it[2]);
      x += width(it) + 18;
    }
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
    const t = this.touch;
    // where everything goes. Computer: speed + revs bottom left; what you use up (turbo, ammo,
    // rockets) in a column bottom right, stacked up from the bottom; course top right; the HP meter
    // bottom centre, under the car. Phone: the thumbs cover the bottom corners, so speed, revs and
    // turbo go top left and ammo and rockets top right, under the MUSIC / AUTO / pause buttons.
    const colX = HUD_W - 20 - 170;
    const W = this.weapons;
    const rockY = t ? 196 : HUD_H - 46;
    const ammoY = t ? 150 : rockY - 46;
    const turboY = W ? ammoY - 54 : HUD_H - 50;
    const sy = t ? 70 : HUD_H - 100; // speed
    const x0 = t ? HUD_W / 2 - 120 : HUD_W - 250, x1 = t ? HUD_W / 2 + 120 : HUD_W - 20, cy = t ? 118 : 44; // course bar

    h.text('SCORE', 20, 16, 16, YELLOW);
    h.text(String(this.score).padStart(8, '0'), 20, 38, 16, WHITE);
    h.text('TIME', HUD_W / 2, 12, 16, YELLOW, 'center');
    const tl = Math.ceil(this.timeLeft);
    const low = this.timeLeft < 10 && this.state === 'race';
    if (!low || blink) h.text(String(tl).padStart(2, '0'), HUD_W / 2, 34, 48, low ? RED : ORANGE, 'center');
    if (this.mode !== 'arcade' && this.world.rivals.length && this.state === 'race') {
      // live race position, in the gap under the timer
      // on phones the course bar sits under the timer, so the position goes under the turbo lamps
      const p = ordinal(this.place);
      const px = t ? 84 : HUD_W / 2 - 52, py = t ? 222 : 90;
      h.text('POS', px - 12, py + 8, 16, YELLOW, 'right');
      h.text(p, px, py, 32, this.place === 1 ? YELLOW : WHITE);
      h.text(`/${this.world.rivals.length + 1}`, px + p.length * 32 + 4, py + 16, 16, WHITE);
      // the gaps that matter: the car just ahead, the car just behind, and the leader
      this.gaps(t ? 20 : HUD_W / 2 + 96, t ? 260 : 92);
    }
    if (this.state === 'race') this.statusLine();

    // HP meter, bottom centre under the car: empties as it takes hits (empty = wrecked), green ->
    // yellow -> red, blinking when critical. The number is in the car's own HP (Charger 130, F1 80).
    {
      const n = 20, sw = 11, bw = n * (sw + 2) - 2, bx = HUD_W / 2 - bw / 2, by = HUD_H - 22;
      const max = this.spec.stats.hp;
      const left = Math.max(0, Math.min(1, this.hp / 100));
      const col = damageColour(1 - left);
      const crit = this.hp < 25 && this.state === 'race';
      h.text('HP', bx, by - 22, 16, crit && blink ? RED : YELLOW);
      h.text(`${Math.ceil(left * max)}/${max}`, bx + bw, by - 22, 16, crit ? RED : WHITE, 'right');
      const lit = this.hp <= 0 ? 0 : Math.max(1, Math.ceil(left * n));
      h.rect(bx - 2, by - 2, bw + 4, 16, 0x000000);
      for (let i = 0; i < n; i++) h.rect(bx + i * (sw + 2), by, sw, 12, i < lit && (!crit || blink) ? col : 0x202040);
    }

    // speed + tach
    const kmh = Math.round(this.speed * KMH);
    h.text('SPEED', 20, sy, 16, YELLOW);
    h.text(String(kmh).padStart(3, ' '), 20, sy + 22, 32, WHITE);
    h.text('KM/H', 130, sy + 38, 16, CYAN);
    if (t) h.tach(20, sy + 100, this.speed / this.vmax, 11);
    else h.tach(20, HUD_H - 10, this.speed / this.vmax, 9);
    // turbo stock: one lamp per boost left, and a draining bar while one is firing
    const tn = this.raceTurbos, ts = tn > 5 ? 13 : 20, tstep = ts + (tn > 5 ? 4 : 6);
    // phones: label and lamps on one row; computers: label over the lamps, in the bottom-right column
    const tx = t ? 20 : colX, ty = t ? sy + 112 : turboY;
    const lx = t ? tx + 92 : tx, ly = t ? ty : ty + 20; // where the lamps start
    h.text('TURBO', tx, ty, 16, this.turboT > 0 && blink ? WHITE : ORANGE);
    // stacked turbos: x2, x3... after the lamps
    if (this.turboLayers.length > 1) h.text(`x${this.turboLayers.length}`, t ? lx + 4 + tn * tstep : tx + 92, ty, 16, blink ? YELLOW : RED);
    for (let i = 0; i < tn; i++) h.box(lx + i * tstep, ly - 2 + (20 - ts) / 2, ts, ts, i < this.turbos ? ORANGE : 0x202030, i < this.turbos ? YELLOW : 0x404058, tn > 5 ? 2 : 3);
    if (this.turboT > 0) h.rect(lx, ly + 22, (this.turboT / TURBO_TIME) * (tn * tstep - 6), 5, YELLOW);
    if (W) {
      // ammo: count and a strip that empties
      h.text('AMMO', colX, ammoY, 16, this.ammo ? CYAN : RED);
      h.text(String(this.ammo).padStart(3, '0'), colX + 170, ammoY, 16, WHITE, 'right');
      const lit = Math.ceil((this.ammo / Math.max(1, this.raceAmmo)) * 30);
      for (let i = 0; i < 30; i++) h.rect(colX + i * 5.7, ammoY + 22, 3, 10, i < lit ? YELLOW : 0x303040);
      // rockets: the key, then a rocket per shot left
      h.text('ROCKETS', colX, rockY, 16, this.rockets ? ORANGE : 0x6a6a7a);
      if (!t) h.keycap(colX + 170 - 18, rockY - 1, 'R');
      for (let i = 0; i < this.raceRockets; i++) this.rocketIcon(colX + 4 + i * 30, rockY + 22, i < this.rockets);
      if (this.lastHitT > 0 && this.lastGunTarget !== null && this.state === 'race') {
        // the computer car you're hitting: its condition over its roof
        const tr = this.world.rivals[this.lastGunTarget];
        const p = tr && !tr.remote ? this.world.rivalScreenPos(this.lastGunTarget, this.camera, HUD_W, HUD_H) : null;
        if (p) {
          const bw = 44, bx = p.x - bw / 2, by = p.y - 14, f = Math.max(0, Math.min(1, tr.hp / 100));
          h.rect(bx - 1, by - 1, bw + 2, 7, 0x000000);
          h.rect(bx, by, bw * f, 5, damageColour(1 - f));
        }
      }
      if (this.firingT > 0 && this.state === 'race' && !this.wrecked) this.crosshair();
      if (this.testPvp) this.testPanel();
      if (this.hitFlash > 0) {
        h.rect(0, 0, HUD_W, 6, RED);
        h.rect(0, HUD_H - 6, HUD_W, 6, RED);
        h.rect(0, 0, 6, HUD_H, RED);
        h.rect(HUD_W - 6, 0, 6, HUD_H, RED);
      }
    }

    // course progress bar, named with the stage you're on
    h.text('COURSE', x0, cy - 26, 16, YELLOW);
    h.rect(x0, cy, x1 - x0, 8, 0x202040);
    const goal = this.world.track.goalDist;
    const starts = this.world.track.stageStarts;
    for (const s of starts) h.rect(x0 + ((s * SEG) / goal) * (x1 - x0) - 1, cy - 4, 4, 16, WHITE);
    const p = Math.min(1, this.pos / goal);
    h.rect(x0, cy, p * (x1 - x0), 8, PINK);
    // everyone else: a dot in their car's paint (grey once wrecked), under your marker
    if (this.mode !== 'arcade' && this.state !== 'attract') {
      for (const r of this.world.rivals) {
        const rx = x0 + Math.max(0, Math.min(1, r.d / goal)) * (x1 - x0);
        h.rect(rx - 4, cy - 3, 8, 14, r.wrecked ? 0x404040 : 0xd0d0d0);
        h.rect(rx - 3, cy - 2, 6, 12, r.wrecked ? 0x707070 : r.paint);
      }
    }
    h.rect(x0 + p * (x1 - x0) - 4, cy - 6, 8, 20, YELLOW);
    const si = Math.min(this.stage, route.stageNames.length - 1);
    h.text(`STAGE ${si + 1}  ${route.stageNames[si]}`, x1, cy + 14, 8, WHITE, 'right');
  }

  /** Who's just ahead and just behind (and the leader, if that's someone else), with the gap in metres. */
  private gaps(x: number, y: number) {
    const h = this.hud, me = this.pos;
    const live = this.world.rivals.filter((r) => !r.wrecked);
    let ahead: (typeof live)[number] | null = null, behind: (typeof live)[number] | null = null, lead: (typeof live)[number] | null = null;
    for (const r of live) {
      if (r.d > me && (!ahead || r.d < ahead.d)) ahead = r;
      if (r.d <= me && (!behind || r.d > behind.d)) behind = r;
      if (r.d > me && (!lead || r.d > lead.d)) lead = r;
    }
    const nm = (r: { name: string }) => r.name.slice(0, 7);
    const m = (d: number) => `${Math.round(Math.abs(d))}M`;
    const rows: [string, string, number, 'up' | 'down' | null][] = [];
    if (lead && lead !== ahead) rows.push([`LEADER ${nm(lead)}`, `+${m(lead.d - me)}`, ORANGE, null]);
    if (ahead) rows.push([nm(ahead), `+${m(ahead.d - me)}`, WHITE, 'up']);
    if (behind) rows.push([nm(behind), `-${m(me - behind.d)}`, GREY, 'down']);
    rows.forEach(([name, gap, c, dir], i) => {
      const ry = y + i * 18;
      if (dir) h.arrow(x + 5, ry + 4, dir, 8, dir === 'up' ? GREEN : RED);
      h.text(name, x + (dir ? 16 : 0), ry, 8, c);
      h.text(gap, x + 196, ry, 8, c, 'right');
    });
  }

  /** Under the timer: catch-up on its own line, then ONE status line (most urgent first). */
  private statusLine() {
    const h = this.hud, cy = this.touch ? 150 : 128, y = cy + 22;
    const pct = Math.round(this.catchUp * 100);
    if (pct >= 1) {
      // catch-up: how much extra speed you're getting for being behind
      const s = `CATCH-UP +${pct}%`, bw = s.length * 8 + 16;
      h.box(HUD_W / 2 - bw / 2, cy, bw, 16, 0x0a2a3a, CYAN, 1);
      h.text(s, HUD_W / 2, cy + 4, 8, CYAN, 'center');
    }
    const flick = Math.floor(this.clock * 8) % 2;
    const pill = (s: string, c: number, bg: number) => {
      const bw = s.length * 16 + 20;
      h.box(HUD_W / 2 - bw / 2, y - 3, bw, 22, bg, c, 1);
      h.text(s, HUD_W / 2, y, 16, c, 'center');
    };
    if (this.weapons && this.rocketMsgT > 0) pill('NO ROCKETS LEFT', RED, 0x2a1014);
    else if (this.weapons && this.noTargetT > 0) pill('OUT OF AMMO', RED, 0x2a1014);
    else if (this.slipT > 0) pill('SLIPSTREAM', flick ? WHITE : CYAN, 0x0a2a3a);
    else if (this.tow > 0.05) {
      // the tow building behind a car
      h.text('SLIPSTREAM', HUD_W / 2 - 4, y + 1, 8, CYAN, 'right');
      h.rect(HUD_W / 2 + 2, y + 1, 100, 10, 0x000000);
      h.rect(HUD_W / 2 + 3, y + 2, 98 * this.tow, 8, CYAN);
    }
  }

  /** One rocket in the HUD's rocket row: a green tube with a red warhead and tail fins. */
  private rocketIcon(x: number, y: number, on: boolean) {
    const h = this.hud, off = 0x303040;
    h.rect(x, y - 2, 4, 14, on ? 0x2a2a2a : off); // fins
    h.rect(x + 4, y + 1, 14, 8, on ? 0x6a7a3a : off); // tube
    h.rect(x + 18, y + 1, 5, 8, on ? RED : off); // warhead
    h.rect(x + 23, y + 3, 2, 4, on ? RED : off);
  }
}
