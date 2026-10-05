import * as THREE from 'three';
import { SignAtlas } from './atlas';
import { CarMats, PlayerCar } from './cars/build';
import { ROSTER } from './cars/roster';
import { CarSpec } from './cars/spec';
import { GFX } from './gfx';
import { Particles } from './particles';
import type { Rival } from './rivals';
import { makeMaterials, PropRenderer } from './props';
import { RoadMesh } from './road';
import { Rng } from './rng';
import { RouteDef, RouteWorld } from './routes/types';
import { LANE_W, LANES, SEG, Track, View } from './track';

export interface TrafficCar {
  d: number; // distance along track
  x: number; // lateral position
  v: number; // speed (units/s)
  t: number; // prop type
  tint: number;
  laneTarget: number;
  passed: boolean;
  wrap?: number;
}

/** Online races: every player's traffic comes from one seed and race time, so all see the same cars. */
interface NetTraffic {
  start: number;
  len: number;
  cars: { d0: number; v: number; lanes: number[]; period: number }[];
}

const tmp = { x: 0, y: 0, z: 0, h: 0 };
const tmp2 = { x: 0, y: 0, z: 0, h: 0 };
const MAX_TRACERS = 48;

/** A bullet streak, kept in track coordinates so it stays put while everything moves. */
interface Tracer { d0: number; x0: number; y0: number; d1: number; x1: number; y1: number; life: number }
/** A bazooka rocket flying straight down the road at fixed x. */
export interface Rocket { d: number; x: number; v: number; travelled: number; mine: boolean; from: string; mesh: THREE.Group; smokeT: number }

/** Olive tube, red warhead, tail fins and an additive exhaust flame; points down -z like the cars. */
function rocketModel(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.9, 10).rotateX(Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0x4a5a2a }));
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 10).rotateX(-Math.PI / 2).translate(0, 0, -0.59), new THREE.MeshLambertMaterial({ color: 0xc81810 }));
  g.add(body, tip);
  const finMat = new THREE.MeshLambertMaterial({ color: 0x2a2a2a, side: THREE.DoubleSide });
  for (const r of [0, Math.PI / 2]) {
    const fin = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.22).rotateY(Math.PI / 2).translate(0, 0, 0.38), finMat);
    fin.rotation.z = r;
    g.add(fin);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.7, 8).rotateX(Math.PI / 2).translate(0, 0, 0.8),
    new THREE.MeshBasicMaterial({ color: 0xffa030, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
  flame.name = 'flame';
  g.add(flame);
  // a hot glow round the exhaust so it reads from behind
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6).translate(0, 0, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffe080, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(glow);
  g.scale.setScalar(1.8); // arcade-sized, so you can follow it down the road
  return g;
}

/** Who a car is shooting at this frame: -1 = the player, a rival index, or null. */
/** The player's gunner this frame: firing straight ahead, muzzle flash, bazooka pose (1 = just fired). */
export interface GunAim { firing: boolean; flash: boolean; rocket: number }

/** One fully built route: scene graph, road, scenery, traffic and the player's car. */
export class World {
  scene = new THREE.Scene();
  data: RouteWorld;
  track: Track;
  view: View;
  road: RoadMesh;
  props: PropRenderer;
  car: PlayerCar;
  traffic: TrafficCar[] = [];
  particles: Particles;
  rivals: Rival[] = [];
  private rivalCars: PlayerCar[] = [];
  private rng = new Rng(7);
  private mats: CarMats;
  private plate: [number, number, number, number];

  constructor(public route: RouteDef) {
    // every route has its own sign texture (there are too many signs for one)
    const atlas = new SignAtlas();
    this.data = route.build(atlas);
    this.track = this.data.track;
    this.view = new View(this.track);
    this.scene.fog = new THREE.Fog(route.fog.color, route.fog.near, route.fog.far);
    this.scene.background = new THREE.Color(route.fog.color);
    if (GFX.modern) {
      // sky-tinted fill from above, warm/dark bounce from below
      this.scene.add(new THREE.AmbientLight(route.ambient.color, route.ambient.intensity * 0.55));
      const [sky, ground] = route.hemi;
      this.scene.add(new THREE.HemisphereLight(sky, ground, route.ambient.intensity * 0.75));
    } else this.scene.add(new THREE.AmbientLight(route.ambient.color, route.ambient.intensity));
    const sun = new THREE.DirectionalLight(route.sun.color, route.sun.intensity);
    sun.position.set(...route.sun.dir);
    this.scene.add(sun);
    this.scene.add(this.data.backdrop.group);

    const mats = makeMaterials(atlas.texture);
    this.road = new RoadMesh(this.data.profiles);
    this.scene.add(this.road.mesh);
    this.props = new PropRenderer(this.data.props, mats, this.scene);
    this.mats = mats;
    this.plate = atlas.add({ bg: route.plate, fg: 0x102060, text: 'TH-86', border: 0x102060 }, 1, 1);
    this.car = new PlayerCar(ROSTER[0], ROSTER[0].paints[0], mats, this.plate, this.route.shadow, this.route.night);
    this.scene.add(this.car.root);
    this.particles = new Particles(this.scene);
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(MAX_TRACERS * 6), 3));
    this.tracerMesh = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({
      color: 0xffe890, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }));
    this.tracerMesh.frustumCulled = false;
    this.scene.add(this.tracerMesh);
  }

  /** Swap the player's car model. */
  setPlayerCar(spec: CarSpec, paint: number) {
    if (this.car.spec === spec && this.carPaint === paint && !this.car.damaged) return;
    this.scene.remove(this.car.root);
    this.car.dispose();
    this.car = new PlayerCar(spec, paint, this.mats, this.plate, this.route.shadow, this.route.night);
    this.carPaint = paint;
    this.scene.add(this.car.root);
  }
  private carPaint = -1;

  /** Builds the rival drivers' car models (empty list clears them). */
  setRivals(rivals: Rival[]) {
    for (const c of this.rivalCars) {
      this.scene.remove(c.root);
      c.dispose();
    }
    this.rivals = rivals;
    this.rivalCars = rivals.map((r) => {
      const car = new PlayerCar(r.spec, r.paint, this.mats, this.plate, this.route.shadow, this.route.night);
      this.scene.add(car.root);
      return car;
    });
  }

  /** Where the sun is on the HUD canvas (for the lens flare), or null. */
  sunOnHud(camera: THREE.Camera, w: number, h: number): { x: number; y: number } | null {
    const p = this.data.backdrop.sunNdc(camera);
    if (!p || Math.abs(p.x) > 1.3 || Math.abs(p.y) > 1.3) return null;
    return { x: ((p.x + 1) / 2) * w, y: ((1 - p.y) / 2) * h };
  }

  // ------------------------------ traffic ---------------------------------
  laneX(l: number) {
    return -LANES * LANE_W / 2 + LANE_W * (l + 0.5);
  }

  spawnCar(d: number): TrafficCar {
    const lane = this.rng.int(0, LANES - 1);
    return {
      d, x: this.laneX(lane), laneTarget: lane, v: this.rng.range(28, 50),
      t: this.rng.pick(this.data.trafficTypes), tint: this.rng.pick(this.route.trafficColors), passed: false,
    };
  }

  resetTraffic(pos: number, count = this.route.trafficCount, from = 160) {
    this.net = null;
    this.traffic = [];
    for (let i = 0; i < count; i++) this.traffic.push(this.spawnCar(pos + from + i * 75 + this.rng.range(0, 40)));
  }

  private net: NetTraffic | null = null;
  private tracers: Tracer[] = [];
  rockets: Rocket[] = [];
  private rocketPool: THREE.Group[] = [];
  private tracerMesh: THREE.LineSegments;
  /** the player's gun this frame (target = rival index) */
  playerGun: GunAim = { firing: false, flash: false, rocket: 0 };

  /**
   * A shot from a car at (d, x) towards (td, tx). Misses fly past and wide.
   * Sparks on a hit; a puff of dust where a miss lands.
   */
  shoot(d: number, x: number, td: number, tx: number, hit: boolean) {
    const side = Math.sign(tx - x) || 1;
    const sx = x + side * 1.0, sy = 1.25;
    let ex = tx, ed = td, ey = 0.8;
    if (!hit) {
      ex += (Math.random() - 0.5) * 6;
      ed += (td - d) * 0.3 + (Math.random() - 0.5) * 6;
      ey = Math.random() < 0.5 ? 0.05 : 1.6 + Math.random();
    }
    if (this.tracers.length >= MAX_TRACERS) this.tracers.shift();
    this.tracers.push({ d0: d + Math.sign(td - d) * 0.5, x0: sx, y0: sy, d1: ed, x1: ex, y1: ey, life: 0.07 });
    const P = this.particles;
    if (hit) {
      for (let i = 0; i < 4; i++) {
        P.spawn(td + (Math.random() - 0.5) * 2, tx + (Math.random() - 0.5) * 1.6, 0.6 + Math.random() * 0.6, 0, (Math.random() - 0.5) * 5,
          2 + Math.random() * 3, 0.3, 0.12, -1, Math.random() < 0.5 ? 0xffe040 : 0xffffff);
      }
    } else if (ey < 0.1) P.spawn(ed, ex, 0.1, 0, 0, 0.6, 0.5, 0.35, 1.5, 0xc8c0a8);
  }


  /** race time driving the shared traffic (online races) */
  netTime = 0;

  /** Seeded traffic spread from the grid to the goal, moving as a function of race time. */
  setNetTraffic(seed: number, startPos: number) {
    const rng = new Rng(seed);
    const start = startPos + 160;
    const len = this.track.goalDist + 100 - start;
    const n = Math.max(6, Math.round((this.route.trafficCount * len) / 1100 * 0.7));
    const net: NetTraffic = { start, len, cars: [] };
    this.traffic = [];
    for (let i = 0; i < n; i++) {
      const lanes: number[] = [rng.int(0, LANES - 1)];
      for (let k = 1; k < 32; k++) lanes.push(Math.max(0, Math.min(LANES - 1, lanes[k - 1] + (rng.chance(0.5) ? rng.sign() : 0))));
      net.cars.push({ d0: ((i + rng.next() * 0.6) / n) * len, v: rng.range(28, 50), lanes, period: rng.range(8, 20) });
      this.traffic.push({
        d: start + net.cars[i].d0, x: this.laneX(lanes[0]), laneTarget: lanes[0], v: net.cars[i].v,
        t: rng.pick(this.data.trafficTypes), tint: rng.pick(this.route.trafficColors), passed: false, wrap: 0,
      });
    }
    this.net = net;
    this.netTime = 0;
  }

  private updateNetTraffic(playerPos: number, onPass: () => void) {
    const net = this.net!, t = this.netTime;
    this.traffic.forEach((c, i) => {
      const nc = net.cars[i];
      const raw = nc.d0 + nc.v * t;
      const wrap = Math.floor(raw / net.len);
      if (wrap !== c.wrap) {
        c.wrap = wrap;
        c.passed = false;
      }
      c.d = net.start + raw - wrap * net.len;
      const k = Math.floor(t / nc.period);
      const lane = nc.lanes[k % nc.lanes.length], prev = nc.lanes[Math.max(0, k - 1) % nc.lanes.length];
      const f = Math.min(1, (t - k * nc.period) / 1.5), e = f * f * (3 - 2 * f);
      c.x = this.laneX(prev) + (this.laneX(lane) - this.laneX(prev)) * e;
      c.laneTarget = lane;
      if (!c.passed && c.d < playerPos - 3 && c.d > playerPos - 40) {
        c.passed = true;
        onPass();
      }
    });
  }

  /** Crash damage on rival i's model (online players' crashes). */
  rivalHit(i: number, severity: number) {
    const wh = ['front', 'rear', 'left', 'right'] as const;
    this.rivalCars[i]?.hit(severity, wh[Math.floor(Math.random() * 4)]);
  }

  /** Smashes a tail lamp on rival i's car. */
  rivalBreakLamp(i: number) {
    this.rivalCars[i]?.breakLamp(Math.random() < 0.5 ? -1 : 1);
  }

  /** Where rival i's car sits on the HUD canvas (for name tags), or null if off screen / far. */
  rivalScreenPos(i: number, camera: THREE.Camera, w: number, h: number): { x: number; y: number; dist: number } | null {
    const car = this.rivalCars[i];
    if (!car || !car.root.visible) return null;
    const p = car.root.position.clone();
    p.y += 1.9;
    const dist = p.distanceTo(camera.position);
    p.project(camera);
    if (p.z > 1 || Math.abs(p.x) > 1.1 || Math.abs(p.y) > 1.1) return null;
    return { x: ((p.x + 1) / 2) * w, y: ((1 - p.y) / 2) * h, dist };
  }

  updateTraffic(dt: number, playerPos: number, onPass: () => void) {
    if (this.net) return this.updateNetTraffic(playerPos, onPass);
    const goal = this.track.goalDist;
    for (const c of this.traffic) {
      c.d += c.v * dt;
      if (this.rng.chance(dt * 0.08)) c.laneTarget = Math.max(0, Math.min(LANES - 1, c.laneTarget + this.rng.sign()));
      const tx = this.laneX(c.laneTarget);
      c.x += Math.sign(tx - c.x) * Math.min(Math.abs(tx - c.x), 3 * dt);
      if (!c.passed && c.d < playerPos - 3) {
        c.passed = true;
        onPass();
      }
      if (c.d < playerPos - 60 || c.d > playerPos + 1500) {
        const fresh = this.spawnCar(playerPos + this.rng.range(900, 1150));
        if (fresh.d > goal + 100) fresh.d = playerPos - 200; // keep the run-out clear past the goal
        Object.assign(c, fresh);
      }
    }
  }

  /** Returns the traffic car overlapping the player, if any. */
  hitTraffic(pos: number, px: number): TrafficCar | null {
    for (const c of this.traffic) {
      const len = this.data.props[c.t].len ?? 4.4;
      if (Math.abs(c.d - pos) < len && Math.abs(c.x - px) < 2.0) return c;
    }
    return null;
  }

  /** True if the player is touching a solid roadside prop. */
  hitProp(pos: number, px: number): boolean {
    const s = Math.floor(pos / SEG);
    for (let i = s - 1; i <= s + 1; i++) {
      const seg = this.track.seg(i);
      const dz = i * SEG - pos;
      if (Math.abs(dz) > 2.4) continue;
      for (const sp of seg.props) {
        const r = this.data.props[sp.t].radius;
        if (r > 0 && Math.abs(sp.x - px) < r * (sp.s ?? 1) + 0.9) return true;
      }
    }
    return false;
  }

  // ------------------------------ frame -----------------------------------
  update(pos: number, px: number, camera: THREE.PerspectiveCamera, shake: number,
    pose: { steer: number; yaw: number; spin: number; bounce: number; brake?: boolean; flame?: number }) {
    const v = this.view;
    v.update(pos);
    this.road.update(v);

    // scenery
    const P = this.props;
    P.begin();
    const { bx, by, bz, bh, yRef } = v;
    for (let k = 0; k < v.count; k++) {
      const seg = this.track.seg(v.start + k);
      if (!seg.props.length) continue;
      const c = Math.cos(bh[k]), s = Math.sin(bh[k]);
      for (const sp of seg.props) {
        const y = sp.abs ? (sp.y ?? 0) - yRef : by[k] + (sp.y ?? 0);
        P.add(sp.t, bx[k] + c * sp.x, y, bz[k] + s * sp.x, -bh[k] + (sp.r ?? 0), sp.s ?? 1, sp.sy ?? 1, sp.tint);
      }
    }
    for (const car of this.traffic) {
      if (!v.sample(car.d, car.x, tmp)) continue;
      P.add(car.t, tmp.x, tmp.y, tmp.z, -tmp.h, 1, 1, car.tint);
    }
    P.end();

    // player car
    v.sample(pos + 2, px, tmp);
    const yF = tmp.y;
    v.sample(pos - 2, px, tmp);
    const yB = tmp.y;
    this.car.root.position.set(px, 0, 0);
    this.car.pose(pose.steer, pose.yaw, pose.spin, pose.bounce, Math.atan2(yF - yB, 4), pose.brake, pose.flame);

    // the player's gunner
    const pg = this.playerGun;
    // out of the window on the side towards the middle of the road; guns and bazooka point dead ahead
    const pside = px > 0 ? -1 : 1;
    if (pg.rocket > 0) this.car.aim(pside, 0, false, pg.rocket);
    else if (pg.firing) this.car.aim(pside, 0, pg.flash);
    else this.car.aim(0);

    // rival drivers
    this.rivals.forEach((r, i) => {
      const car = this.rivalCars[i];
      if (!v.sample(r.d + 2, r.x, tmp)) {
        car.root.visible = false;
        return;
      }
      const f = tmp.y;
      v.sample(r.d - 2, r.x, tmp);
      const b = tmp.y;
      v.sample(r.d, r.x, tmp);
      car.root.visible = true;
      car.setNear(Math.abs(r.d - pos) < 28);
      car.root.position.set(tmp.x, tmp.y, tmp.z);
      car.pose(r.steer, -tmp.h - r.steer * 0.08, r.spin, 0, Math.atan2(f - b, 4), r.braking, r.turboT > 0 ? 1 : 0);
      const side = r.x > 0 ? -1 : 1;
      if (r.rocketT > 0) car.aim(side, 0, false, r.rocketT);
      else if (r.gunT > 0) car.aim(side, 0, Math.random() < 0.5);
      else car.aim(0);
    });

    // camera: low, behind, always looking straight down the player's heading
    v.sample(pos - 8.8, px * 0.9, tmp);
    const camY = Math.max(tmp.y, -0.5) + 3.3;
    v.sample(pos + 40, 0, tmp);
    const lookY = tmp.y * 0.45 + 0.9;
    camera.position.set(px * 0.9 + (Math.random() - 0.5) * shake, camY + (Math.random() - 0.5) * shake, 8.8);
    camera.lookAt(px * 0.82, lookY, -30);
    this.data.backdrop.update(camera.position, v.heading);
    this.particles.render(v, camera);
    this.renderTracers(v);
    this.renderRockets(v);
  }

  private renderTracers(v: View) {
    const attr = this.tracerMesh.geometry.getAttribute('position') as THREE.BufferAttribute;
    let n = 0;
    for (const t of this.tracers) {
      if (!v.sample(t.d0, t.x0, tmp) || !v.sample(t.d1, t.x1, tmp2)) continue;
      attr.setXYZ(n * 2, tmp.x, tmp.y + t.y0, tmp.z);
      attr.setXYZ(n * 2 + 1, tmp2.x, tmp2.y + t.y1, tmp2.z);
      n++;
    }
    attr.needsUpdate = true;
    this.tracerMesh.geometry.setDrawRange(0, n * 2);
  }

  /** Fire a rocket from a car at (d, x) going v m/s: it flies straight down that line. */
  launchRocket(d: number, x: number, v: number, mine: boolean, from: string) {
    const mesh = this.rocketPool.pop() ?? rocketModel();
    mesh.visible = false;
    this.scene.add(mesh);
    this.rockets.push({ d: d + 2.5, x, v, travelled: 0, mine, from, mesh, smokeT: 0 });
    const P = this.particles;
    for (let i = 0; i < 6; i++) P.spawn(d + 2, x + (Math.random() - 0.5), 1.0, -6 + Math.random() * 4, (Math.random() - 0.5) * 3, 1 + Math.random(), 0.6, 0.6, 1.8, 0xd8d0c0);
  }

  /** Moves the rockets and trails their smoke; returns the ones that burned out (call once per frame). */
  moveRockets(dt: number, range: number): Rocket[] {
    const spent: Rocket[] = [];
    for (const r of this.rockets) {
      r.d += r.v * dt;
      r.travelled += r.v * dt;
      r.smokeT -= dt;
      if (r.smokeT <= 0) {
        r.smokeT = 0.015;
        this.particles.spawn(r.d - 1.8, r.x + (Math.random() - 0.5) * 0.3, 1.0 + (Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.8, 0.5, 1.1, 0.6, 1.8, 0xf0ece4);
      }
      if (r.travelled > range) spent.push(r);
    }
    return spent;
  }

  /** Blows a rocket up where it is: fireball, sparks and a smoke cloud. */
  explodeRocket(r: Rocket) {
    this.removeRocket(r);
    const P = this.particles;
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * 7;
      P.spawn(r.d, r.x, 1.0, Math.cos(a) * sp, Math.sin(a) * sp, 2 + Math.random() * 4, 0.35 + Math.random() * 0.25, 0.9, 2.5, i % 3 ? 0xffa020 : 0xffe060);
    }
    for (let i = 0; i < 10; i++) P.spawn(r.d + (Math.random() - 0.5) * 3, r.x + (Math.random() - 0.5) * 3, 0.8 + Math.random(), 0, (Math.random() - 0.5) * 2, 1.5 + Math.random() * 2, 1.4 + Math.random(), 1.4, 2.2, 0x4a4440);
  }

  removeRocket(r: Rocket) {
    this.rockets = this.rockets.filter((o) => o !== r);
    this.scene.remove(r.mesh);
    this.rocketPool.push(r.mesh);
  }

  clearRockets() {
    for (const r of [...this.rockets]) this.removeRocket(r);
  }

  private renderRockets(v: View) {
    for (const r of this.rockets) {
      if (!v.sample(r.d, r.x, tmp)) {
        r.mesh.visible = false;
        continue;
      }
      r.mesh.visible = true;
      r.mesh.position.set(tmp.x, tmp.y + 1.0, tmp.z);
      r.mesh.rotation.set(0, -tmp.h, 0);
      const flame = r.mesh.getObjectByName('flame');
      if (flame) flame.scale.set(1, 1, 0.7 + Math.random() * 0.6);
    }
  }

  /** Ages the bullet streaks (call once per frame). */
  tickTracers(dt: number) {
    for (const t of this.tracers) t.life -= dt;
    this.tracers = this.tracers.filter((t) => t.life > 0);
  }
}
