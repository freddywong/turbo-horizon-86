import * as THREE from 'three';

export const PIXEL_FONT = '"Press Start 2P", monospace';
const JP_FONT = '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif';

export interface SignSpec {
  bg: number;
  fg: number;
  text: string;
  sub?: string;
  border?: number;
  jp?: boolean; // use a CJK font for the main text
  vertical?: boolean; // stack characters vertically (Japanese tate signs)
  stripes?: number; // decorative stripe colour (checkered banners use -1)
}

const hex = (h: number) => '#' + h.toString(16).padStart(6, '0');

/**
 * A single small texture page holding every sign face, drawn at low
 * resolution so it reads like hand-pixelled sprite art.
 */
export class SignAtlas {
  readonly cw = 64;
  readonly ch = 32;
  readonly cols = 8;
  readonly rows = 32;
  canvas: HTMLCanvasElement;
  texture: THREE.CanvasTexture;
  private ctx: CanvasRenderingContext2D;
  private used: boolean[] = [];

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.cw * this.cols;
    this.canvas.height = this.ch * this.rows;
    this.ctx = this.canvas.getContext('2d')!;
    this.ctx.imageSmoothingEnabled = false;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.minFilter = THREE.NearestMipmapNearestFilter;
    this.texture.colorSpace = THREE.SRGBColorSpace;
  }

  private alloc(w: number, h: number): [number, number] {
    for (let r = 0; r + h <= this.rows; r++) for (let c = 0; c + w <= this.cols; c++) {
      let free = true;
      for (let y = r; y < r + h && free; y++) for (let x = c; x < c + w; x++) if (this.used[y * this.cols + x]) { free = false; break; }
      if (!free) continue;
      for (let y = r; y < r + h; y++) for (let x = c; x < c + w; x++) this.used[y * this.cols + x] = true;
      return [c, r];
    }
    throw new Error('sign atlas full');
  }

  /** Draws a sign into the next free cell(s); returns its uv rect [u0,v0,u1,v1]. */
  add(spec: SignSpec, wCells = 1, hCells = 1): [number, number, number, number] {
    const [col, row] = this.alloc(wCells, hCells);
    const cx = col * this.cw;
    const cy = row * this.ch;
    const w = this.cw * wCells, h = this.ch * hCells;
    const g = this.ctx;
    g.save();
    g.beginPath();
    g.rect(cx, cy, w, h);
    g.clip();
    g.fillStyle = hex(spec.bg);
    g.fillRect(cx, cy, w, h);
    if (spec.stripes === -1) {
      // checkered flag banner
      const sq = 8;
      for (let y = 0; y < h; y += sq) for (let x = 0; x < w; x += sq)
        if (((x + y) / sq) % 2 === 0) { g.fillStyle = '#000'; g.fillRect(cx + x, cy + y, sq, sq); }
    } else if (spec.stripes !== undefined) {
      g.fillStyle = hex(spec.stripes);
      g.fillRect(cx, cy + h - 6, w, 3);
      g.fillRect(cx, cy + 3, w, 3);
    }
    if (spec.border !== undefined) {
      g.strokeStyle = hex(spec.border);
      g.lineWidth = 3;
      g.strokeRect(cx + 1.5, cy + 1.5, w - 3, h - 3);
    }
    g.fillStyle = hex(spec.fg);
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const font = spec.jp ? JP_FONT : PIXEL_FONT;
    if (spec.vertical) {
      const chars = [...spec.text];
      const size = Math.min(w - 6, Math.floor((h - 6) / chars.length));
      g.font = `bold ${size}px ${font}`;
      chars.forEach((ch, i) => g.fillText(ch, cx + w / 2, cy + 4 + size * (i + 0.5)));
    } else {
      const lines = spec.sub ? 2 : 1;
      const maxH = spec.jp ? (h - 6) / lines : 8 * Math.max(1, Math.floor((h - 8) / lines / 10));
      let size = Math.floor(maxH);
      g.font = `bold ${size}px ${font}`;
      while (size > 6 && g.measureText(spec.text).width > w - 6) {
        size -= spec.jp ? 1 : 8;
        if (size < 8 && !spec.jp) { size = 8; break; }
        g.font = `bold ${size}px ${font}`;
      }
      const ty = spec.sub ? cy + h * 0.34 : cy + h / 2 + 1;
      g.fillText(spec.text, cx + w / 2, ty);
      if (spec.sub) {
        g.font = `8px ${PIXEL_FONT}`;
        g.fillText(spec.sub, cx + w / 2, cy + h * 0.74);
      }
    }
    g.restore();
    this.texture.needsUpdate = true;
    const W = this.canvas.width, H = this.canvas.height;
    // canvas y down -> uv v up
    return [cx / W, 1 - (cy + h) / H, (cx + w) / W, 1 - cy / H];
  }
}
