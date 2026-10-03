import * as THREE from 'three';

export type V3 = [number, number, number];

/**
 * Hand-modelling helper: accumulates flat-coloured polygons into one
 * non-indexed BufferGeometry (one colour per face, like an old polygon board).
 */
export class GeoBuilder {
  private pos: number[] = [];
  private col: number[] = [];
  private uvs: number[] = [];
  private hasUv = false;
  private m: THREE.Matrix4 | null = null;
  private tmp = new THREE.Vector3();
  private c = new THREE.Color();

  /** Apply a transform to every point added inside fn. */
  with(m: THREE.Matrix4, fn: () => void): this {
    const prev = this.m;
    this.m = prev ? prev.clone().multiply(m) : m;
    fn();
    this.m = prev;
    return this;
  }

  private push(p: V3, color: number, uv?: [number, number]) {
    this.tmp.set(p[0], p[1], p[2]);
    if (this.m) this.tmp.applyMatrix4(this.m);
    this.pos.push(this.tmp.x, this.tmp.y, this.tmp.z);
    this.c.setHex(color);
    this.col.push(this.c.r, this.c.g, this.c.b);
    if (uv) this.hasUv = true;
    this.uvs.push(uv ? uv[0] : 0, uv ? uv[1] : 0);
  }

  tri(a: V3, b: V3, c: V3, color: number, uv?: [[number, number], [number, number], [number, number]]): this {
    this.push(a, color, uv?.[0]);
    this.push(b, color, uv?.[1]);
    this.push(c, color, uv?.[2]);
    return this;
  }

  /** Quad a-b-c-d (any winding; materials that need it are double sided). */
  quad(a: V3, b: V3, c: V3, d: V3, color: number, uv?: [number, number, number, number]): this {
    if (uv) {
      const [u0, v0, u1, v1] = uv;
      this.tri(a, b, c, color, [[u0, v0], [u1, v0], [u1, v1]]);
      this.tri(a, c, d, color, [[u0, v0], [u1, v1], [u0, v1]]);
    } else {
      this.tri(a, b, c, color);
      this.tri(a, c, d, color);
    }
    return this;
  }

  /** Convex polygon as a triangle fan. */
  poly(pts: V3[], color: number): this {
    for (let i = 1; i < pts.length - 1; i++) this.tri(pts[0], pts[i], pts[i + 1], color);
    return this;
  }

  /** Axis aligned box centred at (cx, cy, cz). Colours: [sides, top, front(-z), back(+z)]. */
  box(cx: number, cy: number, cz: number, w: number, h: number, d: number, color: number | number[]): this {
    const cs = Array.isArray(color) ? color : [color];
    const side = cs[0];
    const top = cs[1] ?? side;
    const front = cs[2] ?? side;
    const back = cs[3] ?? side;
    const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = cz - d / 2, z1 = cz + d / 2;
    this.quad([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], top);
    this.quad([x0, y0, z0], [x0, y0, z1], [x1, y0, z1], [x1, y0, z0], side);
    this.quad([x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], front);
    this.quad([x1, y0, z1], [x0, y0, z1], [x0, y1, z1], [x1, y1, z1], back);
    this.quad([x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], side);
    this.quad([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], side);
    return this;
  }

  /** Vertical n-sided prism / frustum from y0 to y1. colors may alternate per side. */
  prism(cx: number, cz: number, y0: number, y1: number, r0: number, r1: number, n: number,
    color: number | number[], cap: number | null = null, rot = 0): this {
    const cs = Array.isArray(color) ? color : [color];
    for (let i = 0; i < n; i++) {
      const a0 = rot + (i / n) * Math.PI * 2, a1 = rot + ((i + 1) / n) * Math.PI * 2;
      const p0: V3 = [cx + Math.cos(a0) * r0, y0, cz + Math.sin(a0) * r0];
      const p1: V3 = [cx + Math.cos(a1) * r0, y0, cz + Math.sin(a1) * r0];
      const q1: V3 = [cx + Math.cos(a1) * r1, y1, cz + Math.sin(a1) * r1];
      const q0: V3 = [cx + Math.cos(a0) * r1, y1, cz + Math.sin(a0) * r1];
      if (r1 <= 0.0001) this.tri(p0, p1, q0, cs[i % cs.length]);
      else this.quad(p0, p1, q1, q0, cs[i % cs.length]);
    }
    if (cap !== null && r1 > 0.0001) {
      const pts: V3[] = [];
      for (let i = 0; i < n; i++) {
        const a = rot + (i / n) * Math.PI * 2;
        pts.push([cx + Math.cos(a) * r1, y1, cz + Math.sin(a) * r1]);
      }
      this.poly(pts, cap);
    }
    return this;
  }

  /** Low-poly lump (icosahedron, detail 0) - trees, rocks, bushes. */
  blob(cx: number, cy: number, cz: number, rx: number, ry: number, rz: number, color: number | number[]): this {
    const g = new THREE.IcosahedronGeometry(1, 0);
    const p = g.attributes.position;
    const cs = Array.isArray(color) ? color : [color];
    for (let i = 0; i < p.count; i += 3) {
      const v = (k: number): V3 => [cx + p.getX(k) * rx, cy + p.getY(k) * ry, cz + p.getZ(k) * rz];
      // shade by facing up/down for a two-tone sprite look
      const ny = p.getY(i) + p.getY(i + 1) + p.getY(i + 2);
      const col = cs.length > 1 ? (ny > 0.3 ? cs[0] : cs[1]) : cs[0];
      this.tri(v(i), v(i + 1), v(i + 2), col);
    }
    g.dispose();
    return this;
  }

  build(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    if (this.hasUv) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs, 2));
    g.computeVertexNormals();
    g.computeBoundingSphere();
    return g;
  }

  get empty(): boolean {
    return this.pos.length === 0;
  }
}

export function rotY(a: number): THREE.Matrix4 {
  return new THREE.Matrix4().makeRotationY(a);
}
export function at(x: number, y: number, z: number): THREE.Matrix4 {
  return new THREE.Matrix4().makeTranslation(x, y, z);
}
