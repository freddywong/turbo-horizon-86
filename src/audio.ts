/**
 * All sound is synthesised live with Web Audio: an FM-chip-ish soundtrack
 * (original compositions), engine drone, tyre squeal, crashes and jingles.
 */

type Chord = [string, number[]];
const MAJ7 = [0, 4, 7, 11], MIN7 = [0, 3, 7, 10], MAJ = [0, 4, 7], MIN = [0, 3, 7], DOM7 = [0, 4, 7, 10];

interface Song {
  bpm: number;
  chords: Chord[]; // one per bar
  lead: string[]; // 16 tokens per bar: note, '.' hold, '-' rest
  bass: (number | null)[]; // semitone offsets from chord root per 16th
  kick: number[];
  snare: number[];
  hat: number[];
  leadWave: OscillatorType;
}

const SONGS: Record<string, Song> = {
  // "Coastline Rush" - bright major-key cruise
  miami: {
    bpm: 138,
    chords: [
      ['D', MAJ7], ['G', MAJ7], ['E', MIN7], ['A', MAJ], ['D', MAJ7], ['B', MIN7], ['G', MAJ7], ['A', MAJ],
      ['B', MIN7], ['F#', MIN7], ['G', MAJ7], ['D', MAJ], ['E', MIN7], ['A', MAJ], ['G', MAJ7], ['A', DOM7],
    ],
    lead: [
      'F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .', 'D5 . . . . . B4 . D5 . E5 . F#5 . . .',
      'G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .', 'A5 . . . . . . . - - E5 F#5 G5 . A5 .',
      'F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .', 'B5 . . A5 . . F#5 . D5 . . . B4 . D5 .',
      'E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .', 'E5 . . . . . . . - - - - C#5 . E5 .',
      'D6 . . C#6 . . B5 . . . F#5 . . . A5 .', 'C#6 . . B5 . . A5 . . . E5 . . . F#5 .',
      'B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .', 'A5 . . . . . F#5 . . . D5 . . . - -',
      'G5 . . A5 . . B5 . . . D6 . . . E6 .', 'C#6 . . . . . A5 . . . E5 . . . - -',
      'D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .', 'A5 . . . . . . . . . . . G5 . E5 .',
    ],
    bass: [0, null, 12, null, 0, null, 12, 0, null, 0, 12, null, 0, null, 12, 7],
    kick: [0, 6, 8],
    snare: [4, 12],
    hat: [0, 2, 4, 6, 8, 10, 12, 14],
    leadWave: 'square',
  },
  // "Neon Expressway" - minor key, Japanese royal-road progression
  tokyo: {
    bpm: 144,
    chords: [
      ['F', MAJ7], ['G', MAJ], ['E', MIN7], ['A', MIN], ['F', MAJ7], ['G', MAJ], ['E', DOM7], ['A', MIN],
      ['D', MIN7], ['G', MAJ], ['C', MAJ7], ['A', MIN7], ['D', MIN7], ['E', MIN7], ['F', MAJ7], ['E', DOM7],
    ],
    lead: [
      'A5 . . C6 . . E6 . . . D6 . C6 . A5 .', 'B5 . . . . . G5 . . . D5 . G5 . B5 .',
      'C6 . . B5 . . G5 . E5 . . . G5 . B5 .', 'A5 . . . . . . . E5 . A5 . C6 . E6 .',
      'F6 . . E6 . . C6 . . . A5 . C6 . E6 .', 'D6 . . . . . B5 . . . G5 . B5 . D6 .',
      'E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .', 'A5 . . . . . . . . . . . - - - -',
      'D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .', 'B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .',
      'E6 . G6 . . . E6 . C6 . . . B5 . C6 .', 'A5 . . . . . E5 . . . A5 . . . - -',
      'F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .', 'G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .',
      'C6 . . . A5 . . . C6 . . . F6 . . .', 'E6 . . . . . D6 . . . B5 . . . G#5 .',
    ],
    bass: [0, 0, 12, 0, 0, 12, 0, 7, 0, 0, 12, 0, 10, 12, 7, 12],
    kick: [0, 3, 8, 11],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'sawtooth',
  },
  // short attract / select loop
  title: {
    bpm: 128,
    chords: [['C', MAJ7], ['A', MIN7], ['F', MAJ7], ['G', MAJ]],
    lead: [
      'E5 . G5 . B5 . . . C6 . B5 . G5 . . .', 'C6 . . . A5 . . . E5 . . . G5 . A5 .',
      'A5 . . . F5 . . . C6 . . . A5 . . .', 'B5 . . . D6 . . . G5 . . . - - - -',
    ],
    bass: [0, null, 12, null, 0, null, 12, null, 0, null, 12, null, 0, 7, 12, 7],
    kick: [0, 8],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'square',
  },
};

const NOTE: Record<string, number> = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
const midi = (name: string): number => {
  const m = /^([A-G]#?)(\d)$/.exec(name);
  if (!m) return 69;
  return NOTE[m[1]] + (parseInt(m[2], 10) + 1) * 12;
};
const hz = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

export class Audio {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfx!: GainNode;
  private musicBus!: GainNode;
  private noise!: AudioBuffer;
  private engA!: OscillatorNode;
  private engB!: OscillatorNode;
  private engF!: BiquadFilterNode;
  private engG!: GainNode;
  private skidG!: GainNode;
  private delay!: DelayNode;
  muted = false;

  private song: Song | null = null;
  private step = 0;
  private nextTime = 0;
  private timer: number | null = null;

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.55;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain();
    this.sfx.connect(this.master);
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.32;
    this.musicBus.connect(this.master);
    // echo for the lead, very 80s
    this.delay = ctx.createDelay(1);
    const fb = ctx.createGain();
    fb.gain.value = 0.28;
    this.delay.connect(fb).connect(this.delay);
    const wet = ctx.createGain();
    wet.gain.value = 0.35;
    this.delay.connect(wet).connect(this.musicBus);

    this.noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

    // engine
    this.engA = ctx.createOscillator();
    this.engA.type = 'sawtooth';
    this.engB = ctx.createOscillator();
    this.engB.type = 'square';
    this.engF = ctx.createBiquadFilter();
    this.engF.type = 'lowpass';
    this.engF.Q.value = 4;
    this.engG = ctx.createGain();
    this.engG.gain.value = 0;
    const bG = ctx.createGain();
    bG.gain.value = 0.6;
    this.engA.connect(this.engF);
    this.engB.connect(bG).connect(this.engF);
    this.engF.connect(this.engG).connect(this.sfx);
    this.engA.start();
    this.engB.start();

    // tyre squeal: looping band-passed noise
    const sk = ctx.createBufferSource();
    sk.buffer = this.noise;
    sk.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 2400;
    bp.Q.value = 6;
    this.skidG = ctx.createGain();
    this.skidG.gain.value = 0;
    sk.connect(bp).connect(this.skidG).connect(this.sfx);
    sk.start();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.ctx) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.55, this.ctx.currentTime, 0.02);
  }

  /** rpm 0..1 within the current gear, load 0..1 throttle. */
  engine(on: boolean, rpm: number, load: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const f = 38 + rpm * 120;
    this.engA.frequency.setTargetAtTime(f, t, 0.03);
    this.engB.frequency.setTargetAtTime(f * 0.5 + 1.5, t, 0.03);
    this.engF.frequency.setTargetAtTime(300 + rpm * 1400 + load * 600, t, 0.05);
    this.engG.gain.setTargetAtTime(on ? 0.1 + load * 0.08 : 0, t, 0.08);
  }

  skid(amount: number) {
    if (!this.ctx) return;
    this.skidG.gain.setTargetAtTime(amount * 0.22, this.ctx.currentTime, 0.04);
  }

  private tone(freq: number, dur: number, type: OscillatorType, vol: number, when = 0, slideTo?: number, dest?: AudioNode) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + when;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(dest ?? this.sfx);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  private burst(dur: number, vol: number, freq: number, when = 0, type: BiquadFilterType = 'lowpass', dest?: AudioNode, at?: number) {
    const ctx = this.ctx!;
    const t = at ?? ctx.currentTime + when;
    const s = ctx.createBufferSource();
    s.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (type === 'lowpass') f.frequency.exponentialRampToValueAtTime(80, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f).connect(g).connect(dest ?? this.sfx);
    s.start(t, Math.random() * 0.5);
    s.stop(t + dur + 0.02);
  }

  crash(big: boolean) {
    if (!this.ctx) return;
    this.burst(big ? 0.9 : 0.35, big ? 0.9 : 0.5, big ? 4000 : 2500);
    this.tone(big ? 90 : 140, big ? 0.5 : 0.2, 'square', 0.35, 0, 30);
  }
  scrape() {
    if (!this.ctx) return;
    this.burst(0.18, 0.25, 3000, 0, 'highpass');
  }
  countBeep(go: boolean) {
    if (!this.ctx) return;
    if (go) this.tone(880, 0.7, 'square', 0.22);
    else this.tone(440, 0.25, 'square', 0.22);
  }
  blip() {
    if (!this.ctx) return;
    this.tone(660, 0.07, 'square', 0.12, 0, 990);
  }
  coin() {
    if (!this.ctx) return;
    this.tone(988, 0.08, 'square', 0.15);
    this.tone(1319, 0.3, 'square', 0.15, 0.08);
  }
  jingle() {
    if (!this.ctx) return;
    [523, 659, 784, 1047, 784, 1047].forEach((f, i) => this.tone(f, 0.16, 'square', 0.15, i * 0.09));
  }
  fanfare() {
    if (!this.ctx) return;
    [392, 523, 659, 784, 659, 784, 1047].forEach((f, i) => this.tone(f, i === 6 ? 0.8 : 0.18, 'square', 0.16, i * 0.13));
  }
  sad() {
    if (!this.ctx) return;
    [392, 370, 349, 330].forEach((f, i) => this.tone(f, i === 3 ? 0.9 : 0.3, 'triangle', 0.25, i * 0.3));
  }

  // ------------------------------- music ----------------------------------
  music(id: 'miami' | 'tokyo' | 'title' | null) {
    if (!this.ctx) return;
    const s = id ? SONGS[id] : null;
    if (s === this.song) return;
    this.song = s;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
    if (s) {
      this.delay.delayTime.value = (60 / s.bpm) * 0.75;
      this.timer = window.setInterval(() => this.schedule(), 25);
    }
  }

  private schedule() {
    const ctx = this.ctx!;
    const s = this.song;
    if (!s) return;
    const dt = 60 / s.bpm / 4;
    // if the tab was hidden, don't try to catch up
    if (this.nextTime < ctx.currentTime - 0.2) this.nextTime = ctx.currentTime + 0.05;
    while (this.nextTime < ctx.currentTime + 0.12) {
      this.playStep(s, this.step, this.nextTime, dt);
      this.step = (this.step + 1) % (s.chords.length * 16);
      this.nextTime += dt;
    }
  }

  private playStep(s: Song, step: number, t: number, dt: number) {
    const bar = Math.floor(step / 16);
    const i = step % 16;
    const [rootName, quality] = s.chords[bar];
    const root = NOTE[rootName];
    // bass
    const b = s.bass[i];
    if (b !== null && b !== undefined) this.voice(hz(36 + root + b), dt * 0.9, 'sawtooth', 0.32, t, 700);
    // chord stabs on the off-beats
    if (i % 4 === 2) for (const n of quality) this.voice(hz(60 + root + n), dt * 1.2, 'square', 0.045, t, 2600);
    // lead
    const toks = s.lead[bar].split(/\s+/);
    const tok = toks[i];
    if (tok && tok !== '.' && tok !== '-') {
      let len = 1;
      while (i + len < 16 && toks[i + len] === '.') len++;
      this.voice(hz(midi(tok)), dt * len * 0.95, s.leadWave, 0.11, t, 3800, true);
    }
    // drums
    if (s.kick.includes(i)) {
      const ctx = this.ctx!;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.setValueAtTime(150, t);
      o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
      g.gain.setValueAtTime(0.7, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      o.connect(g).connect(this.musicBus);
      o.start(t);
      o.stop(t + 0.2);
    }
    if (s.snare.includes(i)) this.burst(0.14, 0.45, 1800, 0, 'bandpass', this.musicBus, t);
    if (s.hat.includes(i)) this.burst(0.04, 0.18, 7000, 0, 'highpass', this.musicBus, t);
  }

  private voice(f: number, dur: number, type: OscillatorType, vol: number, t: number, cutoff: number, echo = false) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (echo) {
      // gentle delayed vibrato
      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = 6;
      lg.gain.setValueAtTime(0, t);
      lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(dur, 0.4));
      lfo.connect(lg).connect(o.frequency);
      lfo.start(t);
      lfo.stop(t + dur + 0.05);
    }
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = cutoff;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.setValueAtTime(vol, t + Math.max(0.01, dur - 0.03));
    g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(fl).connect(g).connect(this.musicBus);
    if (echo) g.connect(this.delay);
    o.start(t);
    o.stop(t + dur + 0.02);
  }
}
