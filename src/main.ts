import '@fontsource/press-start-2p/400.css';
import * as THREE from 'three';
import { SignAtlas } from './atlas';
import { Audio } from './audio';
import { Game } from './game';
import { Hud } from './hud';
import { Input } from './input';
import { miami } from './routes/miami';
import { tokyo } from './routes/tokyo';
import { TouchControls } from './touch';
import { World } from './world';

/** Internal framebuffer: roughly the resolution of a mid-80s arcade board, 16:9. */
const W = 426;
const H = 240;

async function boot() {
  try {
    await document.fonts.load('16px "Press Start 2P"');
  } catch {
    /* fall back to monospace */
  }
  const stage = document.getElementById('stage')!;
  const gl = document.getElementById('gl') as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);

  const camera = new THREE.PerspectiveCamera(54, W / H, 0.5, 4000);
  const atlas = new SignAtlas();
  const worlds = [new World(miami, atlas), new World(tokyo, atlas)];
  const input = new Input();
  const audio = new Audio();
  const hud = new Hud(document.getElementById('hud') as HTMLCanvasElement);
  const game = new Game(worlds, camera, input, audio, hud);
  input.onFirstInput(() => {
    audio.init();
    audio.music('title');
  });
  const touch = new TouchControls(input, stage, () => (game.touch = true));
  // mouse clicks work as menu taps too
  window.addEventListener('mousedown', (e) => {
    if (touch.enabled) return;
    const r = stage.getBoundingClientRect();
    input.tap(((e.clientX - r.left) / r.width) * 852, ((e.clientY - r.top) / r.height) * 480);
  });
  (window as unknown as { game: Game }).game = game;

  const fit = () => {
    const s = Math.min(window.innerWidth / W, window.innerHeight / H) || 1;
    const scale = s >= 3 ? Math.floor(s) : s;
    stage.style.width = `${Math.floor(W * scale)}px`;
    stage.style.height = `${Math.floor(H * scale)}px`;
  };
  window.addEventListener('resize', fit);
  fit();

  let last = performance.now();
  const frame = (now: number) => {
    const dt = Math.min(1 / 30, (now - last) / 1000);
    last = now;
    const driving = (game.state === 'race' || game.state === 'countdown') && !game.paused;
    if (touch.update(driving) && driving) game.paused = true;
    game.update(dt);
    game.draw();
    input.endFrame();
    renderer.render(game.world.scene, camera);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

boot();
