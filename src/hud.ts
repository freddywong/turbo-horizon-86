import { PIXEL_FONT } from './atlas';

export const HUD_W = 852;
export const HUD_H = 480;

const hex = (h: number) => '#' + h.toString(16).padStart(6, '0');
const scaleHex = (c: number, k: number) => (Math.round(((c >> 16) & 255) * k) << 16) | (Math.round(((c >> 8) & 255) * k) << 8) | Math.round((c & 255) * k);
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
    const o = size < 8 ? 1 : Math.max(2, size / 8);
    g.fillStyle = hex(shadow);
    g.fillText(s, x + o, y + o);
    g.fillStyle = hex(color);
    g.fillText(s, x, y);
  }

  /** See-through dark panel behind text that sits over the 3D view. */
  shade(x: number, y: number, w: number, h: number, alpha = 0.6) {
    this.g.fillStyle = `rgba(10,10,32,${alpha})`;
    this.g.fillRect(x, y, w, h);
  }

  /** Solid pixel triangle pointing up/down/left/right, centred on (cx, cy). */
  arrow(cx: number, cy: number, dir: 'up' | 'down' | 'left' | 'right', s: number, c: number) {
    const n = Math.max(2, Math.round(s / 2));
    for (let i = 0; i < n; i++) {
      const len = (i + 1) * 2 - 1;
      if (dir === 'up') this.rect(cx - i, cy - n / 2 + i, len, 1, c);
      else if (dir === 'down') this.rect(cx - i, cy + n / 2 - i, len, 1, c);
      else if (dir === 'left') this.rect(cx - n / 2 + i, cy - i, 1, len, c);
      else this.rect(cx + n / 2 - i, cy - i, 1, len, c);
    }
  }

  private static ARROWS: Record<string, 'up' | 'down' | 'left' | 'right'> = { '↑': 'up', '↓': 'down', '←': 'left', '→': 'right' };

  /** Width keycap() will use for this label. */
  keyW(label: string, h = 16): number {
    if (Hud.ARROWS[label]) return h;
    this.g.font = `${h >= 20 ? 16 : 8}px ${PIXEL_FONT}`;
    return Math.max(h, Math.ceil(this.g.measureText(label).width) + 10);
  }

  /** A keyboard key: light border, dark face, label inside. Returns its width. */
  keycap(x: number, y: number, label: string, h = 16, c = WHITE): number {
    const fs = h >= 20 ? 16 : 8, w = this.keyW(label, h), a = Hud.ARROWS[label];
    this.rect(x + 1, y + 2, w, h, 0x05050f); // key depth
    this.box(x, y, w, h, 0x2a2a4a, c, 1);
    this.rect(x + 1, y + 1, w - 2, 1, 0x50507a);
    if (a) this.arrow(x + w / 2 - 0.5, y + h / 2, a, h - 6, c);
    else this.text(label, x + w / 2, y + (h - fs) / 2 + 1, fs, c, 'center');
    return w;
  }

  /** A tappable on-screen button: coloured border, label or arrow centred. */
  chip(x: number, y: number, w: number, h: number, label: string, c: number, fs = 8, fill = 0x1a1a3a) {
    this.box(x, y, w, h, fill, c, 2);
    const a = Hud.ARROWS[label];
    if (a) this.arrow(x + w / 2 - 0.5, y + h / 2, a, Math.min(w, h) - 8, c);
    else this.text(label, x + w / 2, y + (h - fs) / 2 + 1, fs, c, 'center');
  }

  /** Vertical gradient fill. */
  grad(x: number, y: number, w: number, h: number, stops: number[]) {
    const g = this.g, gr = g.createLinearGradient(0, y, 0, y + h);
    stops.forEach((c, i) => gr.addColorStop(i / Math.max(1, stops.length - 1), hex(c)));
    g.fillStyle = gr;
    g.fillRect(x, y, w, h);
  }

  private poly(pts: number[][], c: number) {
    const g = this.g;
    g.fillStyle = hex(c);
    g.beginPath();
    pts.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py)));
    g.closePath();
    g.fill();
  }

  private circle(cx: number, cy: number, r: number, c: number) {
    const g = this.g;
    g.fillStyle = hex(c);
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.fill();
  }

  private palm(x: number, base: number, ht: number, c: number) {
    for (let i = 0; i < ht; i += 2) this.rect(x + Math.round(Math.sin(i / ht * 1.4) * 4), base - i, 3, 2, c);
    const tx = x + Math.round(Math.sin(1.4) * 4) + 1, ty = base - ht;
    for (const [dx, dy] of [[-12, 4], [-9, -3], [0, -6], [9, -3], [12, 4], [6, 6], [-6, 6]]) {
      this.poly([[tx, ty - 1], [tx + dx, ty + dy], [tx + dx * 0.9, ty + dy + 2], [tx, ty + 2]], c);
    }
  }

  /** Little pixel-art picture of a route for the route-select cards. t animates lights. */
  postcard(id: string, x: number, y: number, w: number, h: number, t = 0) {
    const g = this.g;
    g.save();
    g.beginPath();
    g.rect(x, y, w, h);
    g.clip();
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const hz = y + Math.round(h * 0.62);
    switch (id) {
      case 'miami': {
        this.grad(x, y, w, hz - y, [0x5a2a8a, 0xff5a9a, 0xffb070, 0xffe090]);
        const cx = x + w * 0.5, cy = hz;
        this.circle(cx, cy, h * 0.34, 0xffd040);
        for (let k = 0; k < 5; k++) this.rect(cx - h * 0.4, cy - 3 - k * 5, h * 0.8, 1 + k * 0.4, 0xff8a70); // sun stripes
        this.grad(x, hz, w, y + h - hz, [0x2a7ad0, 0x14408a]);
        for (let k = 0; k < 8; k++) this.rect(cx - 30 + rnd() * 60, hz + 3 + k * 3, 10 + rnd() * 30, 1, 0xffc080);
        this.palm(x + 26, y + h, h * 0.75, 0x2a1040);
        this.palm(x + 48, y + h, h * 0.55, 0x2a1040);
        this.palm(x + w - 34, y + h, h * 0.8, 0x2a1040);
        break;
      }
      case 'tokyo': {
        this.grad(x, y, w, h, [0x05051a, 0x2a0e5a, 0x7a2a8a]);
        this.circle(x + w - 40, y + 16, 9, 0xf0f0ff);
        this.circle(x + w - 36, y + 13, 8, 0x1a0a40);
        for (let bx = x; bx < x + w; ) {
          const bw = 12 + Math.floor(rnd() * 22), bh = h * (0.3 + rnd() * 0.55);
          this.rect(bx, y + h - bh, bw - 2, bh, 0x120824);
          for (let wy = y + h - bh + 4; wy < y + h - 6; wy += 5)
            for (let wx = bx + 2; wx < bx + bw - 4; wx += 4) if (rnd() < 0.45) this.rect(wx, wy, 2, 2, rnd() < 0.7 ? 0xffe080 : 0xff6ab0);
          if (rnd() < 0.4) this.rect(bx + 2, y + h - bh - 6, 2, 6, 0xff3040);
          bx += bw;
        }
        this.rect(x, y + h - 5, w, 2, 0xff5aa0);
        this.rect(x, y + h - 2, w, 2, 0x40f0ff);
        break;
      }
      case 'canyon': {
        this.grad(x, y, w, hz - y + 6, [0xffb060, 0xffe0a0]);
        this.circle(x + w * 0.4, hz - 22, 10, 0xfff0c0);
        const mesa = (x0: number, x1: number, top: number, c: number) => this.poly([[x0, hz + 6], [x0 + 8, top], [x1 - 8, top], [x1, hz + 6]], c);
        mesa(x - 10, x + 80, hz - 18, 0xb8482a);
        mesa(x + 150, x + 205, hz - 24, 0xa03a22);
        mesa(x + 200, x + w + 10, hz - 12, 0xc8582e);
        this.grad(x, hz + 6, w, y + h - hz - 6, [0xd8783a, 0xa04a24]);
        this.poly([[x + w * 0.42, y + h], [x + w * 0.49, hz + 6], [x + w * 0.51, hz + 6], [x + w * 0.58, y + h]], 0x505058); // road
        for (const cxp of [x + 30, x + w - 50]) {
          this.rect(cxp, y + h - 22, 4, 18, 0x2a6a2a);
          this.rect(cxp - 5, y + h - 16, 4, 8, 0x2a6a2a);
          this.rect(cxp + 5, y + h - 19, 4, 8, 0x2a6a2a);
        }
        break;
      }
      case 'alps': {
        this.grad(x, y, w, hz - y, [0x7aa8ff, 0xc8b8f0, 0xffc0d0]);
        const peak = (cx: number, ph: number, pw: number, c: number) => {
          this.poly([[cx - pw, hz + 4], [cx, hz - ph], [cx + pw, hz + 4]], c);
          this.poly([[cx - pw * 0.32, hz - ph * 0.68], [cx, hz - ph], [cx + pw * 0.32, hz - ph * 0.68], [cx + pw * 0.1, hz - ph * 0.6], [cx - pw * 0.08, hz - ph * 0.66]], 0xffffff);
        };
        peak(x + 50, 44, 60, 0x6a78b0);
        peak(x + 160, 52, 70, 0x5a68a8);
        peak(x + 230, 36, 50, 0x7a88c0);
        this.rect(x, hz + 4, w, y + h - hz - 4, 0xf4f8ff);
        for (let k = 0; k < 9; k++) {
          const px = x + 8 + k * 28 + rnd() * 10, ph = 14 + rnd() * 10, base = y + h - 2 - rnd() * 6;
          this.poly([[px - 6, base], [px, base - ph], [px + 6, base]], 0x1e4a32);
          this.rect(px - 1, base - ph + 2, 2, 3, 0xffffff);
        }
        break;
      }
      case 'vegas': {
        this.grad(x, y, w, h, [0x02020a, 0x1a0630, 0x4a1050]);
        for (let k = 0; k < 30; k++) this.rect(x + rnd() * w, y + rnd() * h * 0.5, 1, 1, 0xffffff);
        const neon = [0xff4aa0, 0x40f0ff, 0xffe040, 0x60ff60];
        for (let k = 0, bx = x + 6; bx < x + w; k++) {
          const bw = 18 + Math.floor(rnd() * 20), bh = h * (0.35 + rnd() * 0.5), c = neon[k % 4];
          const on = Math.floor(t * 3 + k) % 5 !== 0;
          this.rect(bx, y + h - bh, bw, bh, 0x14081e);
          this.rect(bx, y + h - bh, bw, 2, on ? c : 0x3a2a4a);
          this.rect(bx, y + h - bh, 2, bh, on ? c : 0x3a2a4a);
          for (let wy = y + h - bh + 6; wy < y + h - 4; wy += 6) this.rect(bx + 4, wy, bw - 8, 2, scaleHex(c, 0.45));
          bx += bw + 6;
        }
        this.text('VEGAS', x + w / 2, y + 10, 16, Math.floor(t * 2) % 2 ? 0xff4aa0 : 0xffe040, 'center');
        break;
      }
      case 'monaco': {
        this.grad(x, y, w, hz - y, [0x4aa8ff, 0xc8eaff]);
        this.grad(x, hz, w, y + h - hz, [0x1a8ad8, 0x0a4a90]);
        for (let k = 0; k < 10; k++) this.rect(x + rnd() * w * 0.6, hz + 3 + rnd() * (y + h - hz - 6), 8 + rnd() * 14, 1, 0xa0d8ff);
        // cliff with villas on the right
        this.poly([[x + w * 0.55, y + h], [x + w * 0.62, hz - 6], [x + w * 0.74, hz - 26], [x + w + 2, hz - 34], [x + w + 2, y + h]], 0xb8a070);
        const pastel = [0xffe0c0, 0xffc8a0, 0xfff4d8, 0xf8d0d0];
        for (let k = 0; k < 6; k++) {
          const vx = x + w * 0.64 + k * 14, vy = hz - 22 - (k % 3) * 8 + k * 2;
          this.rect(vx, vy, 12, 9, pastel[k % 4]);
          this.rect(vx - 1, vy - 3, 14, 3, 0xc0502a);
        }
        for (const cx2 of [x + w * 0.6, x + w * 0.9]) this.poly([[cx2 - 3, hz + 4], [cx2, hz - 22], [cx2 + 3, hz + 4]], 0x1e4a2a);
        // yacht
        const yx = x + 50, yy = hz + 14;
        this.poly([[yx - 26, yy], [yx + 26, yy], [yx + 18, yy + 7], [yx - 22, yy + 7]], 0xffffff);
        this.rect(yx - 10, yy - 6, 22, 6, 0xf0f0f0);
        this.rect(yx - 6, yy - 5, 14, 2, 0x203048);
        this.rect(yx, yy - 22, 2, 16, 0xe0e0e0);
        this.poly([[yx + 3, yy - 20], [yx + 3, yy - 7], [yx + 16, yy - 7]], 0xffffff);
        break;
      }
      default:
        this.grad(x, y, w, h, [0x3a3a6a, 0x101030]);
    }
    g.restore();
  }

  /** Small mode icons: clock, chequered flag, globe. */
  icon(kind: 'clock' | 'flag' | 'globe', cx: number, cy: number, c: number) {
    const g = this.g;
    g.strokeStyle = hex(c);
    g.lineWidth = 2;
    if (kind === 'clock' || kind === 'globe') {
      g.beginPath();
      g.arc(cx, cy, 8, 0, Math.PI * 2);
      g.stroke();
    }
    if (kind === 'clock') {
      this.rect(cx - 1, cy - 6, 2, 7, c);
      this.rect(cx, cy - 1, 5, 2, c);
    } else if (kind === 'globe') {
      g.beginPath();
      g.ellipse(cx, cy, 3.5, 8, 0, 0, Math.PI * 2);
      g.moveTo(cx - 8, cy);
      g.lineTo(cx + 8, cy);
      g.stroke();
    } else {
      this.rect(cx - 7, cy - 9, 2, 18, c);
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) this.rect(cx - 5 + i * 3, cy - 9 + j * 3, 3, 3, (i + j) % 2 ? 0x101010 : c);
    }
  }

  /** Small pixel flag (IT, DE, JP, GB, US) with a dark border; w x h in HUD pixels. */
  flag(code: string, x: number, y: number, w = 24, h = 16) {
    x = Math.round(x);
    y = Math.round(y);
    this.rect(x - 1, y - 1, w + 2, h + 2, 0x000000);
    const g = this.g;
    g.save();
    g.beginPath();
    g.rect(x, y, w, h);
    g.clip();
    if (code === 'IT') {
      this.rect(x, y, w / 3, h, 0x009246);
      this.rect(x + w / 3, y, w / 3, h, 0xf1f2f1);
      this.rect(x + (2 * w) / 3, y, w / 3 + 1, h, 0xce2b37);
    } else if (code === 'DE') {
      this.rect(x, y, w, h / 3, 0x000000);
      this.rect(x, y + h / 3, w, h / 3, 0xdd0000);
      this.rect(x, y + (2 * h) / 3, w, h / 3 + 1, 0xffce00);
    } else if (code === 'JP') {
      this.rect(x, y, w, h, 0xffffff);
      this.circle(x + w / 2, y + h / 2, h * 0.3, 0xbc002d);
    } else if (code === 'GB') {
      this.rect(x, y, w, h, 0x012169);
      g.strokeStyle = '#ffffff';
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(x, y); g.lineTo(x + w, y + h); g.moveTo(x + w, y); g.lineTo(x, y + h);
      g.stroke();
      g.strokeStyle = '#c8102e';
      g.lineWidth = 1;
      g.stroke();
      this.rect(x, y + h / 2 - 3, w, 6, 0xffffff);
      this.rect(x + w / 2 - 3, y, 6, h, 0xffffff);
      this.rect(x, y + h / 2 - 1.5, w, 3, 0xc8102e);
      this.rect(x + w / 2 - 1.5, y, 3, h, 0xc8102e);
    } else if (code === 'US') {
      for (let i = 0; i < 7; i++) this.rect(x, y + (i * h) / 7, w, h / 7 + 0.5, i % 2 ? 0xffffff : 0xb22234);
      const cw = w * 0.45, ch = (h * 4) / 7;
      this.rect(x, y, cw, ch, 0x3c3b6e);
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) this.rect(x + 1.5 + c * (cw / 4), y + 1.5 + r * (ch / 3), 1, 1, 0xffffff);
    }
    g.restore();
  }

  /** Sun or crescent moon badge. */
  sky(night: boolean, cx: number, cy: number) {
    if (night) {
      this.circle(cx, cy, 7, 0xf0f0ff);
      this.circle(cx + 3, cy - 2, 6, 0x101030);
    } else {
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2;
        this.rect(cx + Math.cos(a) * 9 - 1, cy + Math.sin(a) * 9 - 1, 2, 2, 0xffd040);
      }
      this.circle(cx, cy, 5, 0xffd040);
    }
  }

  /** Music note badge. */
  note(cx: number, cy: number, c: number) {
    this.circle(cx - 2, cy + 4, 3, c);
    this.rect(cx, cy - 6, 2, 10, c);
    this.rect(cx, cy - 6, 5, 2, c);
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

  /** Early-90s style lens flare: a bloom on the sun and coloured ghosts mirrored through the centre. */
  flare(sx: number, sy: number, strength: number) {
    const g = this.g;
    const cx = HUD_W / 2, cy = HUD_H / 2;
    g.save();
    g.globalCompositeOperation = 'lighter';
    const bloom = g.createRadialGradient(sx, sy, 0, sx, sy, 150);
    bloom.addColorStop(0, `rgba(255,240,200,${0.55 * strength})`);
    bloom.addColorStop(0.3, `rgba(255,190,120,${0.22 * strength})`);
    bloom.addColorStop(1, 'rgba(255,160,100,0)');
    g.fillStyle = bloom;
    g.fillRect(sx - 150, sy - 150, 300, 300);
    // horizontal streak
    const st = g.createLinearGradient(sx - 260, sy, sx + 260, sy);
    st.addColorStop(0, 'rgba(255,220,180,0)');
    st.addColorStop(0.5, `rgba(255,230,190,${0.35 * strength})`);
    st.addColorStop(1, 'rgba(255,220,180,0)');
    g.fillStyle = st;
    g.fillRect(sx - 260, sy - 2, 520, 4);
    const ghosts: [number, number, string, number][] = [
      [0.35, 18, '255,200,90', 0.22], [0.62, 10, '140,255,170', 0.2], [0.9, 34, '120,160,255', 0.12],
      [1.25, 14, '255,120,200', 0.18], [1.6, 52, '255,190,110', 0.09], [1.95, 22, '120,230,255', 0.14],
    ];
    for (const [t, r, rgb, a] of ghosts) {
      const x = sx + (cx - sx) * t, y = sy + (cy - sy) * t;
      g.fillStyle = `rgba(${rgb},${a * strength})`;
      g.beginPath();
      for (let k = 0; k < 6; k++) {
        const ang = (k / 6) * Math.PI * 2 + Math.PI / 6;
        const px = x + Math.cos(ang) * r, py = y + Math.sin(ang) * r;
        if (k === 0) g.moveTo(px, py);
        else g.lineTo(px, py);
      }
      g.closePath();
      g.fill();
    }
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
