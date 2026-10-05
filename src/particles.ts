import * as THREE from 'three';
import { GeoBuilder, V3 } from './geom';
import { GFX } from './gfx';
import { View } from './track';

interface P {
  d: number; x: number; y: number; // track distance, lateral, height
  vd: number; vx: number; vy: number;
  life: number; max: number;
  size: number; grow: number;
  color: THREE.Color;
}

const MAX = 160;
const tmp = { x: 0, y: 0, z: 0, h: 0 };

/**
 * Smoke, dust and sparks as flat camera-facing octagon "sprites".
 * Positions live in track space so they stay put on the road as the car moves on.
 */
export class Particles {
  mesh: THREE.InstancedMesh;
  private pool: P[] = [];
  private m = new THREE.Matrix4();
  private s = new THREE.Vector3();
  private p = new THREE.Vector3();

  constructor(parent: THREE.Object3D) {
    const g = new GeoBuilder();
    const oct = (r: number, ox: number, oy: number, z: number, c: number) => {
      const pts: V3[] = [];
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        pts.push([ox + Math.cos(a) * r, oy + Math.sin(a) * r, z]);
      }
      g.poly(pts, c);
    };
    let mat: THREE.Material;
    if (GFX.modern) {
      // soft translucent puff (early-90s alpha-blended sprite)
      const N = 64, cv = document.createElement('canvas');
      cv.width = cv.height = N;
      const c2 = cv.getContext('2d')!;
      const grd = c2.createRadialGradient(N / 2, N / 2, 0, N / 2, N / 2, N / 2);
      grd.addColorStop(0, 'rgba(255,255,255,0.85)');
      grd.addColorStop(0.55, 'rgba(235,235,235,0.45)');
      grd.addColorStop(1, 'rgba(220,220,220,0)');
      c2.fillStyle = grd;
      c2.fillRect(0, 0, N, N);
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      g.quad([-0.6, -0.6, 0], [0.6, -0.6, 0], [0.6, 0.6, 0], [-0.6, 0.6, 0], 0xffffff, [0, 0, 1, 1]);
      mat = new THREE.MeshBasicMaterial({ map: tex, vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide });
    } else {
      oct(0.5, 0, 0, 0, 0xb8b8b8);
      oct(0.34, -0.1, 0.1, 0.01, 0xffffff);
      mat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
    }
    this.mesh = new THREE.InstancedMesh(g.build(), mat, MAX);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.mesh.setColorAt(0, new THREE.Color(1, 1, 1));
    parent.add(this.mesh);
  }

  spawn(d: number, x: number, y: number, vd: number, vx: number, vy: number, life: number, size: number, grow: number, color: number) {
    if (this.pool.length >= MAX) this.pool.shift();
    this.pool.push({ d, x, y, vd, vx, vy, life, max: life, size, grow, color: new THREE.Color(color) });
  }

  clear() {
    this.pool.length = 0;
  }

  update(dt: number) {
    for (const p of this.pool) {
      p.life -= dt;
      p.d += p.vd * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy -= (p.grow < 0 ? 18 : 0) * dt; // sparks fall
      p.vd *= 1 - dt * 2;
      p.vx *= 1 - dt * 2;
    }
    this.pool = this.pool.filter((p) => p.life > 0);
  }

  render(view: View, camera: THREE.Camera) {
    let n = 0;
    for (const p of this.pool) {
      if (!view.sample(p.d, p.x, tmp)) continue;
      const t = 1 - p.life / p.max;
      // grow, then shrink away at the end instead of fading (no alpha on 80s boards)
      const sz = Math.max(0.02, p.size * (1 + Math.max(0, p.grow) * t) * (t > 0.75 ? (1 - t) * 4 : 1));
      this.p.set(tmp.x, tmp.y + p.y, tmp.z);
      this.s.set(sz, sz, sz);
      this.m.compose(this.p, camera.quaternion, this.s);
      this.mesh.setMatrixAt(n, this.m);
      this.mesh.setColorAt(n, p.color);
      n++;
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}
