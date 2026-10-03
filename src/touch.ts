import { HUD_H, HUD_W } from './hud';
import { Input } from './input';

interface Btn { el: HTMLDivElement; code: string }

/**
 * On-screen arcade buttons for phones and tablets: steer pads on the left
 * thumb, GAS / BRAKE / DRIFT on the right, pause in the corner. Each pointer
 * is tracked separately so thumbs can slide between buttons.
 */
export class TouchControls {
  root: HTMLDivElement;
  private rotate: HTMLDivElement;
  private btns: Btn[] = [];
  private pointers = new Map<number, string | null>();
  private held = new Set<string>();
  enabled = false;
  private autoBtn: HTMLDivElement;

  constructor(private input: Input, private stage: HTMLElement, private onEnable: () => void) {
    this.root = document.createElement('div');
    this.root.id = 'touch';
    document.body.appendChild(this.root);
    const mk = (cls: string, label: string, code: string) => {
      const el = document.createElement('div');
      el.className = `tbtn ${cls}`;
      el.textContent = label;
      this.root.appendChild(el);
      if (code) this.btns.push({ el, code });
      return el;
    };
    mk('left', '◀', 'ArrowLeft');
    mk('right', '▶', 'ArrowRight');
    mk('gas', 'GAS', 'ArrowUp');
    mk('brake', 'BRAKE', 'ArrowDown');
    mk('drift', 'DRIFT', 'Space');
    mk('pause', 'II', 'Escape');
    this.autoBtn = mk('auto', 'AUTO\nGAS', '');
    this.rotate = document.createElement('div');
    this.rotate.id = 'rotate';
    this.rotate.textContent = 'PLEASE ROTATE\nYOUR PHONE';
    document.body.appendChild(this.rotate);

    const opts = { passive: false } as AddEventListenerOptions;
    window.addEventListener('pointerdown', (e) => this.down(e), opts);
    window.addEventListener('pointermove', (e) => this.move(e), opts);
    window.addEventListener('pointerup', (e) => this.up(e), opts);
    window.addEventListener('pointercancel', (e) => this.up(e), opts);
    document.addEventListener('touchmove', (e) => e.preventDefault(), opts);
    document.addEventListener('gesturestart', (e) => e.preventDefault(), opts);
  }

  private enable() {
    if (this.enabled) return;
    this.enabled = true;
    this.input.autoGas = true;
    document.body.classList.add('touchmode');
    this.onEnable();
    // best effort: fullscreen + landscape, ignored where unsupported
    const de = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
    try {
      const p = de.requestFullscreen?.() ?? de.webkitRequestFullscreen?.();
      Promise.resolve(p).then(() => (screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> }).lock?.('landscape')).catch(() => {});
    } catch {
      /* not allowed */
    }
  }

  private codeAt(x: number, y: number): string | null {
    if (!this.root.classList.contains('show')) return null;
    for (const b of this.btns) {
      const r = b.el.getBoundingClientRect();
      const pad = 10;
      if (x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad) return b.code;
    }
    return null;
  }

  private sync() {
    const want = new Set<string>();
    for (const c of this.pointers.values()) if (c) want.add(c);
    for (const c of this.held) if (!want.has(c)) this.input.setVirtual(c, false);
    for (const c of want) if (!this.held.has(c)) this.input.setVirtual(c, true);
    this.held = want;
    for (const b of this.btns) b.el.classList.toggle('on', want.has(b.code));
  }

  private down(e: PointerEvent) {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') this.enable();
    if (!this.enabled) return;
    e.preventDefault();
    const ar = this.autoBtn.getBoundingClientRect();
    if (this.root.classList.contains('show') && e.clientX >= ar.left && e.clientX <= ar.right && e.clientY >= ar.top && e.clientY <= ar.bottom) {
      this.input.autoGas = !this.input.autoGas;
      this.autoBtn.classList.toggle('on', this.input.autoGas);
      return;
    }
    const code = this.codeAt(e.clientX, e.clientY);
    this.pointers.set(e.pointerId, code);
    if (!code) {
      // menu tap: map into HUD coordinates
      const r = this.stage.getBoundingClientRect();
      this.input.tap(((e.clientX - r.left) / r.width) * HUD_W, ((e.clientY - r.top) / r.height) * HUD_H);
    } else this.input.fireFirst();
    this.sync();
  }

  private move(e: PointerEvent) {
    if (!this.enabled || !this.pointers.has(e.pointerId)) return;
    e.preventDefault();
    const code = this.codeAt(e.clientX, e.clientY);
    // only steering/pedal buttons follow a sliding thumb; pause stays a tap
    if (code !== 'Escape') this.pointers.set(e.pointerId, code);
    this.sync();
  }

  private up(e: PointerEvent) {
    if (!this.pointers.has(e.pointerId)) return;
    this.pointers.delete(e.pointerId);
    this.sync();
  }

  /** Show the driving buttons only while driving; handle portrait. Returns true if the game should pause. */
  update(driving: boolean): boolean {
    const portrait = this.enabled && window.innerHeight > window.innerWidth;
    this.rotate.classList.toggle('show', portrait);
    const show = this.enabled && driving && !portrait;
    if (this.root.classList.contains('show') !== show) {
      this.root.classList.toggle('show', show);
      if (!show) {
        this.pointers.clear();
        this.sync();
      }
    }
    this.autoBtn.classList.toggle('on', this.input.autoGas);
    return portrait;
  }
}
