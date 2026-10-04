import * as THREE from 'three';

/**
 * Procedurally painted texture atlases for the '92 look. Every tile is drawn
 * at 128x128 with hand-placed detail (cracks, tufts, ripples, windows...) and
 * repeats on its own inside the atlas via a small shader patch (atlasPatch).
 */

export const TILE = {
  ASPHALT: 0, PAINT: 1, KERB: 2, GRASS: 3, SAND: 4, SEA: 5, CONCRETE: 6, TUNNEL: 7,
  PAVING: 8, CITY: 9, BAY: 10, SHALLOW: 11, FOAM: 12, CEILING: 13, DIRT: 14, PLAIN: 15,
} as const;

/** Water tiles scroll slowly so the sea moves. */
export const SCROLL: Record<number, number> = { [TILE.SEA]: 0.04, [TILE.BAY]: 0.03, [TILE.SHALLOW]: 0.06, [TILE.FOAM]: 0.09 };

const T = 128;
const COLS = 4;

class Painter {
  g: CanvasRenderingContext2D;
  private s = 1;
  constructor(public cv: HTMLCanvasElement) {
    this.g = cv.getContext('2d', { willReadFrequently: true })!;
  }
  seed(n: number) {
    this.s = n;
  }
  rnd() {
    this.s = (this.s * 1103515245 + 12345) & 0x7fffffff;
    return this.s / 0x7fffffff;
  }
  /** fills a tile with a base grey plus per-pixel noise */
  noise(ox: number, oy: number, base: number, amp: number, tint: [number, number, number] = [1, 1, 1]) {
    const img = this.g.createImageData(T, T);
    for (let i = 0; i < T * T; i++) {
      const v = Math.max(0, Math.min(1, base + (this.rnd() - 0.5) * 2 * amp));
      img.data[i * 4] = 255 * v * tint[0];
      img.data[i * 4 + 1] = 255 * v * tint[1];
      img.data[i * 4 + 2] = 255 * v * tint[2];
      img.data[i * 4 + 3] = 255;
    }
    this.g.putImageData(img, ox, oy);
  }
  /** a rectangle that wraps round the tile edges, so the tile still repeats seamlessly */
  wrapRect(ox: number, oy: number, x: number, y: number, w: number, h: number, style: string) {
    const g = this.g;
    g.fillStyle = style;
    for (const dx of [0, -T]) for (const dy of [0, -T]) {
      const rx = x + dx, ry = y + dy;
      if (rx + w <= 0 || ry + h <= 0 || rx >= T || ry >= T) continue;
      g.fillRect(ox + Math.max(0, rx), oy + Math.max(0, ry), Math.min(T, rx + w) - Math.max(0, rx), Math.min(T, ry + h) - Math.max(0, ry));
    }
  }
  dot(ox: number, oy: number, style: string, size = 1) {
    this.wrapRect(ox, oy, Math.floor(this.rnd() * T), Math.floor(this.rnd() * T), size, size, style);
  }
  grey(v: number, a = 1) {
    const c = Math.round(255 * v);
    return `rgba(${c},${c},${c},${a})`;
  }
}

function paintSurface(p: Painter, tile: number) {
  const ox = (tile % COLS) * T, oy = Math.floor(tile / COLS) * T;
  const g = p.g;
  p.seed(tile * 7919 + 13);
  g.save();
  g.beginPath();
  g.rect(ox, oy, T, T);
  g.clip();
  switch (tile) {
    case TILE.ASPHALT: {
      p.noise(ox, oy, 0.88, 0.05);
      for (let i = 0; i < 700; i++) p.dot(ox, oy, p.grey(p.rnd() < 0.5 ? 0.97 : 0.72));
      // a repair patch and tar-filled cracks
      p.wrapRect(ox, oy, 70, 20, 34, 22, p.grey(0.8));
      p.wrapRect(ox, oy, 70, 20, 34, 1, p.grey(0.68));
      p.wrapRect(ox, oy, 70, 41, 34, 1, p.grey(0.68));
      g.strokeStyle = p.grey(0.6);
      g.lineWidth = 1;
      for (let c = 0; c < 3; c++) {
        g.beginPath();
        let x = ox + p.rnd() * T, y = oy + p.rnd() * T;
        g.moveTo(x, y);
        for (let k = 0; k < 7; k++) {
          x += (p.rnd() - 0.5) * 14;
          y += 3 + p.rnd() * 7;
          g.lineTo(x, y);
        }
        g.stroke();
      }
      // faint darker tyre-worn bands
      p.wrapRect(ox, oy, 26, 0, 14, T, 'rgba(0,0,0,0.05)');
      p.wrapRect(ox, oy, 88, 0, 14, T, 'rgba(0,0,0,0.05)');
      break;
    }
    case TILE.PAINT: {
      p.noise(ox, oy, 0.97, 0.03);
      for (let i = 0; i < 160; i++) p.dot(ox, oy, p.grey(0.78 + p.rnd() * 0.1), p.rnd() < 0.3 ? 2 : 1);
      break;
    }
    case TILE.KERB: {
      for (let x = 0; x < T; x++) {
        const v = 0.78 + 0.22 * Math.sin((x / T) * Math.PI);
        g.fillStyle = p.grey(v);
        g.fillRect(ox + x, oy, 1, T);
      }
      for (let y = 0; y < T; y += 32) p.wrapRect(ox, oy, 0, y, T, 2, p.grey(0.55));
      for (let i = 0; i < 200; i++) p.dot(ox, oy, 'rgba(0,0,0,0.12)');
      break;
    }
    case TILE.GRASS: {
      p.noise(ox, oy, 0.84, 0.06);
      for (let i = 0; i < 40; i++) {
        const x = p.rnd() * T, y = p.rnd() * T, r = 4 + p.rnd() * 8;
        p.wrapRect(ox, oy, x, y, r, r * 0.6, 'rgba(0,0,0,0.08)');
      }
      for (let i = 0; i < 420; i++) {
        const x = Math.floor(p.rnd() * T), y = Math.floor(p.rnd() * T), light = p.rnd() < 0.6;
        p.wrapRect(ox, oy, x, y, 1, 2 + Math.floor(p.rnd() * 3), light ? p.grey(1, 0.85) : 'rgba(0,0,0,0.25)');
      }
      for (let i = 0; i < 14; i++) p.dot(ox, oy, 'rgba(255,255,255,1)', 2);
      break;
    }
    case TILE.DIRT: {
      p.noise(ox, oy, 0.85, 0.08);
      for (let i = 0; i < 120; i++) p.dot(ox, oy, p.rnd() < 0.5 ? p.grey(1) : p.grey(0.62), p.rnd() < 0.3 ? 2 : 1);
      break;
    }
    case TILE.SAND: {
      for (let y = 0; y < T; y++) {
        for (let x = 0; x < T; x++) {
          const r = Math.sin((x / T) * Math.PI * 8 + Math.sin((y / T) * Math.PI * 2) * 2.2);
          const v = 0.9 + r * 0.04 + (p.rnd() - 0.5) * 0.06;
          g.fillStyle = p.grey(v);
          g.fillRect(ox + x, oy + y, 1, 1);
        }
      }
      for (let i = 0; i < 70; i++) p.dot(ox, oy, p.grey(1), p.rnd() < 0.3 ? 2 : 1);
      // a trail of footprints
      for (let k = 0; k < 8; k++) p.wrapRect(ox, oy, 40 + (k % 2) * 7 + k * 2, k * 16, 4, 7, 'rgba(0,0,0,0.13)');
      break;
    }
    case TILE.SEA:
    case TILE.BAY:
    case TILE.SHALLOW: {
      const base = tile === TILE.SHALLOW ? 0.86 : 0.8;
      p.noise(ox, oy, base, 0.03);
      if (tile === TILE.SHALLOW) {
        // caustic net
        g.strokeStyle = p.grey(1, 0.55);
        for (let i = 0; i < 26; i++) {
          g.beginPath();
          const x = ox + p.rnd() * T, y = oy + p.rnd() * T;
          g.moveTo(x, y);
          g.quadraticCurveTo(x + (p.rnd() - 0.5) * 30, y + (p.rnd() - 0.5) * 30, x + (p.rnd() - 0.5) * 40, y + (p.rnd() - 0.5) * 40);
          g.stroke();
        }
      }
      // wave crests and troughs, longer across the view than along it
      for (let i = 0; i < 60; i++) {
        const x = p.rnd() * T, y = p.rnd() * T, w = 6 + p.rnd() * 16;
        p.wrapRect(ox, oy, x, y + 1, w, 1, 'rgba(0,0,0,0.12)');
        p.wrapRect(ox, oy, x + 2, y, w - 3, 1, p.grey(1, tile === TILE.BAY ? 0.55 : 0.9));
      }
      for (let i = 0; i < 40; i++) p.dot(ox, oy, p.grey(1));
      break;
    }
    case TILE.FOAM: {
      p.noise(ox, oy, 0.93, 0.07);
      for (let i = 0; i < 80; i++) p.wrapRect(ox, oy, p.rnd() * T, p.rnd() * T, 3 + p.rnd() * 8, 2, 'rgba(0,0,0,0.08)');
      break;
    }
    case TILE.CONCRETE: {
      p.noise(ox, oy, 0.88, 0.04);
      for (let i = 0; i < 10; i++) p.wrapRect(ox, oy, p.rnd() * T, p.rnd() * T, 6 + p.rnd() * 20, 4 + p.rnd() * 14, 'rgba(0,0,0,0.05)');
      // panel joints
      p.wrapRect(ox, oy, 0, 0, 2, T, p.grey(0.6));
      p.wrapRect(ox, oy, 64, 0, 1, T, p.grey(0.72));
      p.wrapRect(ox, oy, 0, 0, T, 1, p.grey(0.72));
      // drain stains
      for (let k = 0; k < 4; k++) p.wrapRect(ox, oy, 10 + k * 31, 0, 2, 20 + p.rnd() * 40, 'rgba(0,0,0,0.07)');
      break;
    }
    case TILE.TUNNEL: {
      p.noise(ox, oy, 0.93, 0.03);
      for (let y = 0; y < T; y += 16) p.wrapRect(ox, oy, 0, y, T, 1, p.grey(0.72));
      for (let y = 0; y < T; y += 16) for (let x = (y / 16) % 2 ? 8 : 0; x < T; x += 16) p.wrapRect(ox, oy, x, y, 1, 16, p.grey(0.76));
      for (let i = 0; i < 6; i++) p.wrapRect(ox, oy, p.rnd() * T, p.rnd() * T, 10, 6, 'rgba(0,0,0,0.08)');
      break;
    }
    case TILE.CEILING: {
      p.noise(ox, oy, 0.86, 0.04);
      for (let x = 0; x < T; x += 32) p.wrapRect(ox, oy, x, 0, 2, T, p.grey(0.6));
      p.wrapRect(ox, oy, 0, 60, T, 6, p.grey(0.7));
      break;
    }
    case TILE.PAVING: {
      p.noise(ox, oy, 0.9, 0.04);
      for (let y = 0; y < T; y += 16) {
        p.wrapRect(ox, oy, 0, y, T, 1, p.grey(0.68));
        for (let x = (y / 16) % 2 ? 16 : 0; x < T; x += 32) p.wrapRect(ox, oy, x, y, 1, 16, p.grey(0.68));
      }
      for (let i = 0; i < 12; i++) p.wrapRect(ox, oy, Math.floor(p.rnd() * 4) * 32 + 1, Math.floor(p.rnd() * 8) * 16 + 1, 31, 15, 'rgba(0,0,0,0.05)');
      break;
    }
    case TILE.CITY: {
      // night streets seen from the expressway: dark blocks, lit roads, windows and moving tail-lights
      g.fillStyle = '#16182c';
      g.fillRect(ox, oy, T, T);
      for (let k = 0; k < 4; k++) {
        const y = k * 32 + 14;
        p.wrapRect(ox, oy, 0, y, T, 3, '#3a3a50');
        p.wrapRect(ox, oy, k * 32 + 14, 0, 3, T, '#3a3a50');
        for (let x = 2; x < T; x += 8) p.wrapRect(ox, oy, x, y - 1, 1, 1, '#ffd890');
      }
      for (let i = 0; i < 90; i++) {
        const c = ['#ffe8a0', '#fff6d8', '#a0f0ff', '#ffb060'][Math.floor(p.rnd() * 4)];
        p.dot(ox, oy, c);
      }
      for (let i = 0; i < 18; i++) {
        const y = Math.floor(p.rnd() * 4) * 32 + 15;
        p.wrapRect(ox, oy, p.rnd() * T, y, 2, 1, p.rnd() < 0.5 ? '#ff3020' : '#ffffff');
      }
      break;
    }
    default: {
      g.fillStyle = '#ffffff';
      g.fillRect(ox, oy, T, T);
    }
  }
  g.restore();
}

/** The ground tiles as one texture array (16 layers of 128x128). */
export function surfaceAtlas(): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = cv.height = T * COLS;
  const p = new Painter(cv);
  for (let t = 0; t < 16; t++) paintSurface(p, t);
  return arrayTexture(cv);
}

/**
 * Slices a 4x4 painted sheet into a 16-layer texture array, so every tile
 * repeats on its own in hardware (wrap + mipmaps) with no atlas tricks.
 */
function arrayTexture(cv: HTMLCanvasElement): THREE.DataArrayTexture {
  const g = cv.getContext('2d')!;
  const data = new Uint8Array(T * T * 4 * 16);
  for (let t = 0; t < 16; t++) {
    const img = g.getImageData((t % COLS) * T, Math.floor(t / COLS) * T, T, T).data;
    // flip rows so v runs bottom-up like a normal texture
    for (let y = 0; y < T; y++) data.set(img.subarray((T - 1 - y) * T * 4, (T - y) * T * 4), (t * T * T + y * T) * 4);
  }
  const tex = new THREE.DataArrayTexture(data, T, T, 16);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** Per-vertex tile id for geometry (x = texture-array layer; y unused). */
export function tileOffset(tile: number): [number, number] {
  return [tile, 0];
}

const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
white.needsUpdate = true;

/**
 * Makes a material sample a repeating tile from a texture array: geometry
 * carries uv in "repeat units" plus a per-vertex `tile` attribute (layer, -, scroll).
 */
export function atlasPatch(mat: THREE.Material & { map: THREE.Texture | null }, arr: THREE.Texture, time?: { value: number }) {
  const t = time ?? { value: 0 };
  mat.map = white; // turns on the uv/map path; the real colour comes from the array
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = t;
    sh.uniforms.uArr = { value: arr };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 tile;\nvarying vec3 vTile;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvTile = tile;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTile;\nuniform float uTime;\nuniform highp sampler2DArray uArr;')
      .replace('#include <map_fragment>', `
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`);
  };
  mat.customProgramCacheKey = () => 'tilearray';
  return t;
}

// --------------------------------------------------------------------------
// Building façades
// --------------------------------------------------------------------------

/** Façade tiles. Index 12 is plain white: untextured faces sample (0,0) = that tile. */
export const FACADE = {
  HOTEL: 0, DECO: 1, SHOP: 2, MOTEL: 3,
  OFFICE_WARM: 4, OFFICE_COOL: 5, OFFICE_DARK: 6, APARTMENT: 7,
  STONE: 8, PLAIN: 12,
} as const;

function paintFacade(p: Painter, tile: number) {
  const ox = (tile % COLS) * T, oy = Math.floor(tile / COLS) * T;
  const g = p.g;
  p.seed(tile * 104729 + 7);
  const R = (x: number, y: number, w: number, h: number, c: string) => { g.fillStyle = c; g.fillRect(ox + x, oy + y, w, h); };
  g.save();
  g.beginPath();
  g.rect(ox, oy, T, T);
  g.clip();
  switch (tile) {
    case FACADE.HOTEL: {
      // 4 windows x 4 floors, white render, blue glass, balcony rails
      R(0, 0, T, T, '#f4f2ec');
      for (let fy = 0; fy < 4; fy++) {
        const y = fy * 32;
        R(0, y + 30, T, 2, '#d8d4cc'); // slab shadow
        for (let fx = 0; fx < 4; fx++) {
          const x = fx * 32 + 5;
          R(x - 1, y + 5, 24, 20, '#c8c8c8');
          const grd = g.createLinearGradient(0, oy + y + 6, 0, oy + y + 24);
          grd.addColorStop(0, '#2a6aa8');
          grd.addColorStop(1, '#6ab4e4');
          g.fillStyle = grd;
          g.fillRect(ox + x, oy + y + 6, 22, 18);
          R(x + 10, y + 6, 2, 18, '#e8e8e8'); // mullion
          g.fillStyle = 'rgba(255,255,255,0.35)';
          g.beginPath();
          g.moveTo(ox + x + 2, oy + y + 22); g.lineTo(ox + x + 9, oy + y + 7); g.lineTo(ox + x + 12, oy + y + 7); g.lineTo(ox + x + 5, oy + y + 22);
          g.fill();
          // balcony rail
          R(x - 3, y + 21, 28, 2, '#ffffff');
          for (let k = 0; k < 7; k++) R(x - 2 + k * 4, y + 23, 1, 5, '#ffffff');
          R(x - 3, y + 28, 28, 2, '#bdbab2');
        }
      }
      break;
    }
    case FACADE.DECO: {
      R(0, 0, T, T, '#f6f0e4');
      for (let x = 0; x < T; x += 32) { R(x, 0, 4, T, '#e2dacb'); R(x + 4, 0, 1, T, '#cfc6b4'); }
      for (let fy = 0; fy < 4; fy++) {
        const y = fy * 32;
        R(0, y, T, 3, '#e8e0d0');
        for (let fx = 0; fx < 4; fx++) {
          const x = fx * 32 + 9;
          // porthole + slit windows
          g.fillStyle = '#3a78a8';
          g.beginPath(); g.arc(ox + x + 7, oy + y + 13, 6, 0, Math.PI * 2); g.fill();
          g.strokeStyle = '#ffffff'; g.lineWidth = 1.5; g.stroke();
          R(x + 2, y + 22, 10, 6, '#3a78a8');
          R(x + 1, y + 21, 12, 1, '#ffffff');
        }
      }
      break;
    }
    case FACADE.SHOP: {
      // one storey: glass shop front with goods, door, cornice, small upper windows
      R(0, 0, T, T, '#f2eee6');
      R(0, 0, T, 10, '#e4ddd0');
      for (let fx = 0; fx < 4; fx++) R(fx * 32 + 8, 18, 16, 14, '#4a86b8');
      R(0, 40, T, 4, '#d0c8b8');
      R(4, 52, 120, 70, '#2a3a4c');
      for (let i = 0; i < 30; i++) R(6 + p.rnd() * 110, 70 + p.rnd() * 44, 4 + p.rnd() * 6, 3 + p.rnd() * 6,
        ['#ff6a8a', '#ffe060', '#60d0ff', '#ffffff', '#90e060'][Math.floor(p.rnd() * 5)]);
      R(4, 52, 120, 3, '#8ab8d8');
      R(54, 64, 20, 58, '#1a2430');
      R(70, 92, 2, 4, '#e0c060');
      for (let x = 4; x < 124; x += 30) R(x, 52, 2, 70, '#d8d8d8');
      break;
    }
    case FACADE.MOTEL: {
      R(0, 0, T, T, '#f4efe6');
      for (let fy = 0; fy < 2; fy++) {
        const y = fy * 64;
        R(0, y + 58, T, 6, '#d6d0c4');
        R(0, y + 54, T, 2, '#ffffff');
        for (let k = 0; k < 16; k++) R(k * 8, y + 54, 1, 6, '#ffffff');
        for (let fx = 0; fx < 2; fx++) {
          const x = fx * 64;
          R(x + 6, y + 14, 16, 38, ['#2a8a8a', '#c85a4a'][fx]);
          R(x + 18, y + 32, 2, 3, '#e0c060');
          R(x + 30, y + 18, 26, 18, '#4a7aa8');
          R(x + 30, y + 18, 26, 2, '#ffffff');
          R(x + 34, y + 38, 14, 8, '#c8c8c8'); // AC unit
          R(x + 35, y + 39, 12, 1, '#9a9a9a');
        }
      }
      break;
    }
    case FACADE.OFFICE_WARM:
    case FACADE.OFFICE_COOL:
    case FACADE.OFFICE_DARK: {
      R(0, 0, T, T, '#1a1e36');
      const lit = tile === FACADE.OFFICE_WARM ? 0.42 : tile === FACADE.OFFICE_COOL ? 0.55 : 0.12;
      const warm = ['#ffe6a0', '#ffd27a', '#fff2c8'], cool = ['#e8f6ff', '#c8ecff', '#ffffff'];
      for (let fy = 0; fy < 8; fy++) {
        const y = fy * 16;
        const floorLit = tile === FACADE.OFFICE_COOL && p.rnd() < 0.5;
        for (let fx = 0; fx < 8; fx++) {
          const x = fx * 16;
          const on = floorLit || p.rnd() < lit;
          const c = on ? p.rnd() < 0.15 ? '#8adfff' : (tile === FACADE.OFFICE_COOL ? cool : warm)[Math.floor(p.rnd() * 3)] : '#262c4c';
          R(x + 2, y + 3, 12, 10, c);
          if (on && p.rnd() < 0.4) for (let k = 0; k < 4; k++) R(x + 2, y + 4 + k * 3, 12, 1, 'rgba(0,0,0,0.25)'); // blinds
          if (on && p.rnd() < 0.2) R(x + 5, y + 8, 3, 5, 'rgba(20,20,40,0.6)'); // someone at a desk
          if (!on) R(x + 3, y + 4, 4, 1, 'rgba(120,140,200,0.4)'); // reflection glint
        }
        R(0, y, T, 2, '#2a3054');
      }
      for (let x = 0; x < T; x += 16) R(x, 0, 2, T, '#2c3258');
      break;
    }
    case FACADE.APARTMENT: {
      R(0, 0, T, T, '#2a2440');
      for (let fy = 0; fy < 6; fy++) {
        const y = fy * 21;
        for (let fx = 0; fx < 4; fx++) {
          const x = fx * 32;
          const on = p.rnd() < 0.5;
          R(x + 4, y + 3, 24, 13, on ? ['#ffb860', '#ffd890', '#fff0c8'][Math.floor(p.rnd() * 3)] : '#3a3456');
          if (on) R(x + 4 + p.rnd() * 18, y + 3, 6, 13, 'rgba(255,240,220,0.6)'); // curtain
          R(x + 2, y + 15, 28, 2, '#8a86a0'); // balcony rail
          for (let k = 0; k < 7; k++) R(x + 3 + k * 4, y + 17, 1, 3, '#6a6680');
          if (p.rnd() < 0.3) R(x + 24, y + 9, 4, 6, '#b0b0c0'); // AC unit
        }
      }
      break;
    }
    case FACADE.STONE: {
      p.noise(ox, oy, 0.9, 0.05);
      for (let y = 0; y < T; y += 16) R(0, y, T, 1, 'rgba(0,0,0,0.18)');
      break;
    }
    default:
      R(0, 0, T, T, '#ffffff');
  }
  g.restore();
}

/** The façade tiles as a 16-layer texture array. */
export function facadeAtlas(): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = cv.height = T * COLS;
  const p = new Painter(cv);
  for (let t = 0; t < 16; t++) paintFacade(p, t);
  return arrayTexture(cv);
}
