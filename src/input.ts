/** Keyboard (and virtual touch-button) state with per-frame "just pressed" edges, plus menu taps. */
export class Input {
  private down = new Set<string>();
  private pressed = new Set<string>();
  /** Taps this frame, in HUD coordinates (852x480). */
  taps: { x: number; y: number }[] = [];
  private firstInput: (() => void)[] = [];

  constructor() {
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
      this.fireFirst();
    });
    window.addEventListener('keyup', (e) => this.down.delete(e.code));
    window.addEventListener('blur', () => this.down.clear());
  }

  /** Runs once on the first key press or touch (audio unlock etc.). */
  onFirstInput(fn: () => void) {
    this.firstInput.push(fn);
  }
  fireFirst() {
    const fns = this.firstInput;
    this.firstInput = [];
    fns.forEach((f) => f());
  }

  /** Lets the on-screen buttons behave exactly like keys. */
  setVirtual(code: string, isDown: boolean) {
    if (isDown) {
      if (!this.down.has(code)) this.pressed.add(code);
      this.down.add(code);
    } else this.down.delete(code);
  }

  tap(x: number, y: number) {
    this.taps.push({ x, y });
    this.fireFirst();
  }

  held(...codes: string[]): boolean {
    return codes.some((c) => this.down.has(c));
  }
  hit(...codes: string[]): boolean {
    return codes.some((c) => this.pressed.has(c));
  }
  endFrame() {
    this.pressed.clear();
    this.taps.length = 0;
  }

  autoGas = false;
  get accel() { return this.held('KeyW', 'ArrowUp') || (this.autoGas && !this.brake); }
  get brake() { return this.held('KeyS', 'ArrowDown'); }
  get steer() { return (this.held('KeyD', 'ArrowRight') ? 1 : 0) - (this.held('KeyA', 'ArrowLeft') ? 1 : 0); }
  get drift() { return this.held('Space'); }
  get confirm() { return this.hit('Enter', 'Space', 'NumpadEnter'); }
}
