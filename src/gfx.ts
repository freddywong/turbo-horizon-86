import * as THREE from 'three';

/**
 * Graphics generation. '92 (default) is the early-90s 3D arcade look: higher
 * resolution, texture-mapped ground with filtering, smooth skies, glossy cars,
 * light halos and lens flare. '86 keeps the original flat 1986 look.
 */
export type GfxMode = '86' | '92';

/** The 1986 look has been retired: the game always runs in the 1992 look. */
const read = (): GfxMode => '92';

export const GFX = {
  mode: read(),
  get modern() {
    return this.mode === '92';
  },
  /** internal render size */
  get width() {
    return this.modern ? 640 : 426;
  },
  get height() {
    return this.modern ? 360 : 240;
  },
};

export function setGfx(mode: GfxMode) {
  try {
    localStorage.setItem('th86-gfx', mode);
  } catch {
    /* storage unavailable: the switch lasts until reload */
  }
}

/**
 * Small tiling detail texture for the ground: fine noise plus faint streaks
 * running along the road (worn tyre lines), centred on white so it only
 * modulates the vertex colours.
 */
export function groundTexture(): THREE.Texture {
  const N = 128;
  const cv = document.createElement('canvas');
  cv.width = cv.height = N;
  const g = cv.getContext('2d')!;
  const img = g.createImageData(N, N);
  let seed = 12345;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const streak = new Float32Array(N);
  for (let x = 0; x < N; x++) streak[x] = rnd() < 0.12 ? 0.94 : 1;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const n = 0.9 + rnd() * 0.1;
      const v = Math.min(255, Math.round(255 * n * streak[x] * (0.97 + 0.03 * Math.sin((y / N) * Math.PI * 8))));
      const i = (y * N + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Soft radial glow used for light halos. */
export function haloTexture(): THREE.Texture {
  const N = 64;
  const cv = document.createElement('canvas');
  cv.width = cv.height = N;
  const g = cv.getContext('2d')!;
  const grd = g.createRadialGradient(N / 2, N / 2, 0, N / 2, N / 2, N / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, N, N);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
