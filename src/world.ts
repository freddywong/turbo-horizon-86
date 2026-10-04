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
}

const tmp = { x: 0, y: 0, z: 0, h: 0 };

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

  constructor(public route: RouteDef, atlas: SignAtlas) {
    this.data = route.build(atlas);
    this.track = this.data.track;
    this.view = new View(this.track);
    this.scene.fog = new THREE.Fog(route.fog.color, route.fog.near, route.fog.far);
    this.scene.background = new THREE.Color(route.fog.color);
    if (GFX.modern) {
      // sky-tinted fill from above, warm/dark bounce from below
      this.scene.add(new THREE.AmbientLight(route.ambient.color, route.ambient.intensity * 0.55));
      const [sky, ground] = route.id === 'tokyo' ? [0x8a70e0, 0x2a2040] : [0xa0dcff, 0xd8c090];
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
    this.plate = atlas.add({ bg: route.id === 'tokyo' ? 0xf0f0e8 : 0xffe040, fg: 0x102060, text: 'TH-86', border: 0x102060 }, 1, 1);
    this.car = new PlayerCar(ROSTER[0], ROSTER[0].paints[0], mats, this.plate, this.route.shadow, this.route.id === 'tokyo');
    this.scene.add(this.car.root);
    this.particles = new Particles(this.scene);
  }

  /** Swap the player's car model. */
  setPlayerCar(spec: CarSpec, paint: number) {
    if (this.car.spec === spec && this.carPaint === paint) return;
    this.scene.remove(this.car.root);
    this.car.dispose();
    this.car = new PlayerCar(spec, paint, this.mats, this.plate, this.route.shadow, this.route.id === 'tokyo');
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
      const car = new PlayerCar(r.spec, r.paint, this.mats, this.plate, this.route.shadow, this.route.id === 'tokyo');
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
    this.traffic = [];
    for (let i = 0; i < count; i++) this.traffic.push(this.spawnCar(pos + from + i * 75 + this.rng.range(0, 40)));
  }

  updateTraffic(dt: number, playerPos: number, onPass: () => void) {
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
  }
}
