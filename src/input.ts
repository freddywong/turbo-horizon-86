/** Keyboard state with per-frame "just pressed" edges. */
export class Input {
  private down = new Set<string>();
  private pressed = new Set<string>();
  onFirstInput: (() => void) | null = null;

  constructor() {
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
      if (this.onFirstInput) {
        this.onFirstInput();
        this.onFirstInput = null;
      }
    });
    window.addEventListener('keyup', (e) => this.down.delete(e.code));
    window.addEventListener('blur', () => this.down.clear());
  }

  held(...codes: string[]): boolean {
    return codes.some((c) => this.down.has(c));
  }
  hit(...codes: string[]): boolean {
    return codes.some((c) => this.pressed.has(c));
  }
  endFrame() {
    this.pressed.clear();
  }

  get accel() { return this.held('KeyW', 'ArrowUp'); }
  get brake() { return this.held('KeyS', 'ArrowDown'); }
  get steer() { return (this.held('KeyD', 'ArrowRight') ? 1 : 0) - (this.held('KeyA', 'ArrowLeft') ? 1 : 0); }
  get drift() { return this.held('Space'); }
  get confirm() { return this.hit('Enter', 'Space', 'NumpadEnter'); }
}
