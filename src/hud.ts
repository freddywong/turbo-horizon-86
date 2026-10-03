import { PIXEL_FONT } from './atlas';

export const HUD_W = 852;
export const HUD_H = 480;

const hex = (h: number) => '#' + h.toString(16).padStart(6, '0');
export const YELLOW = 0xffe040, WHITE = 0xffffff, ORANGE = 0xff9a20, RED = 0xff3030, CYAN = 0x40f0ff, PINK = 0xff5aa0, GREEN = 0x40e040;

/** Arcade overlay drawn on its own pixel canvas (2x the 3D resolution). */
export class Hud {
  g: CanvasRenderingContext2D;
  constructor(public canvas: HTMLCanvasElement) {
    canvas.width = HUD_W;
    canvas.height = HUD_H;
    this.g = canvas.getContext('2d')!;
    this.g.imageSmoothingEnabled = false;
  }

  clear() {
    this.g.clearRect(0, 0, HUD_W, HUD_H);
  }

  text(s: string, x: number, y: number, size: number, color: number, align: CanvasTextAlign = 'left', shadow = 0x000000) {
    const g = this.g;
    g.font = `${size}px ${PIXEL_FONT}`;
    g.textAlign = align;
    g.textBaseline = 'top';
    const o = Math.max(2, size / 8);
    g.fillStyle = hex(shadow);
    g.fillText(s, x + o, y + o);
    g.fillStyle = hex(color);
    g.fillText(s, x, y);
  }

  box(x: number, y: number, w: number, h: number, fill: number, border: number, bw = 4) {
    const g = this.g;
    g.fillStyle = hex(border);
    g.fillRect(x, y, w, h);
    g.fillStyle = hex(fill);
    g.fillRect(x + bw, y + bw, w - bw * 2, h - bw * 2);
  }

  rect(x: number, y: number, w: number, h: number, c: number) {
    this.g.fillStyle = hex(c);
    this.g.fillRect(x, y, w, h);
  }

  /** Chunky extruded 80s logo text. */
  logo(s: string, x: number, y: number, size: number, top: number, bottom: number, extrude: number) {
    const g = this.g;
    g.font = `${size}px ${PIXEL_FONT}`;
    g.textAlign = 'center';
    g.textBaseline = 'top';
    for (let i = size / 6; i > 0; i -= 2) {
      g.fillStyle = hex(extrude);
      g.fillText(s, x + i * 0.5, y + i);
    }
    g.fillStyle = '#000';
    for (const [dx, dy] of [[-3, 0], [3, 0], [0, -3], [0, 3]]) g.fillText(s, x + dx, y + dy);
    g.save();
    g.beginPath();
    g.rect(0, y - 4, HUD_W, size * 0.5 + 4);
    g.clip();
    g.fillStyle = hex(top);
    g.fillText(s, x, y);
    g.restore();
    g.save();
    g.beginPath();
    g.rect(0, y + size * 0.5, HUD_W, size);
    g.clip();
    g.fillStyle = hex(bottom);
    g.fillText(s, x, y);
    g.restore();
  }

  tach(x: number, y: number, frac: number) {
    const n = 24;
    const lit = Math.round(frac * n);
    for (let i = 0; i < n; i++) {
      const c = i < 13 ? GREEN : i < 20 ? YELLOW : RED;
      const h = 8 + Math.floor(i * 0.9);
      this.rect(x + i * 12, y - h, 10, h, i < lit ? c : 0x203020);
    }
  }
}
