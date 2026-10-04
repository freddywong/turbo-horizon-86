import { cleanName } from './net';

/**
 * Name entry for online play: a real text box over the game (so phones bring
 * up their keyboard), styled like the arcade HUD. Keys typed here never reach
 * the game.
 */
export class NameBox {
  private root: HTMLDivElement;
  private input: HTMLInputElement;
  private done: ((name: string) => void) | null = null;

  constructor(stage: HTMLElement) {
    const root = document.createElement('div');
    root.style.cssText = 'position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;'
      + 'font-family:"Press Start 2P",monospace;';
    const panel = document.createElement('form');
    panel.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;'
      + 'background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;';
    const title = document.createElement('div');
    title.textContent = 'ENTER YOUR NAME';
    title.style.cssText = 'color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;';
    const input = document.createElement('input');
    input.maxLength = 10;
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('autocapitalize', 'characters');
    input.setAttribute('enterkeyhint', 'go');
    input.style.cssText = 'font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;'
      + 'color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;';
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'JOIN';
    btn.style.cssText = 'font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;'
      + 'padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;';
    const hint = document.createElement('div');
    hint.textContent = 'LETTERS, NUMBERS, SPACE OR -';
    hint.style.cssText = 'color:#8a8aa8;font-size:1.8vmin;';
    panel.append(title, input, btn, hint);
    root.append(panel);
    stage.append(root);
    // keep keys and clicks inside the box away from the game
    for (const ev of ['keydown', 'keyup', 'mousedown', 'pointerdown', 'touchstart']) {
      root.addEventListener(ev, (e) => e.stopPropagation());
    }
    input.addEventListener('input', () => {
      const v = input.value.toUpperCase().replace(/[^A-Z0-9 -]/g, '');
      if (v !== input.value) input.value = v;
    });
    panel.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = cleanName(input.value);
      if (!name) {
        input.focus();
        return;
      }
      this.hide();
      this.done?.(name);
    });
    this.root = root;
    this.input = input;
  }

  get open() {
    return this.root.style.display !== 'none';
  }

  show(initial: string, done: (name: string) => void) {
    this.done = done;
    this.input.value = initial;
    this.root.style.display = 'flex';
    setTimeout(() => {
      this.input.focus();
      this.input.select();
    }, 50);
  }

  hide() {
    this.root.style.display = 'none';
    this.input.blur();
  }
}
