import type { EngineType } from './cars/spec';

/**
 * All sound is synthesised live with Web Audio: an FM-chip-ish soundtrack
 * (original compositions), engine drone, tyre squeal, crashes and jingles.
 */

type Chord = [string, number[]];
const MAJ7 = [0, 4, 7, 11], MIN7 = [0, 3, 7, 10], MAJ = [0, 4, 7], MIN = [0, 3, 7], DOM7 = [0, 4, 7, 10];

type LeadVoice = OscillatorType | 'saw2' | 'fm';

interface Song {
  name: string;
  bpm: number;
  chords: Chord[]; // one per bar
  lead: string[]; // 16 tokens per bar: note, '.' hold, '-' rest
  bass: (number | null)[]; // semitone offsets from chord root per 16th
  kick: number[];
  snare: number[];
  hat: number[];
  leadWave: LeadVoice;
  pad?: boolean; // sustained detuned-saw chord pad
  arp?: { pattern: number[]; wave: OscillatorType; oct: number }; // 16th-note chord arpeggio (indices into chord tones)
  gated?: boolean; // big gated-reverb style snare
  stabs?: boolean; // off-beat chord stabs (default on)
}

const SONGS: Record<string, Song> = {
  // "Coastline Rush" - bright major-key cruise
  miami: {
    name: 'COASTLINE RUSH',
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
    name: 'NEON EXPRESSWAY',
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
    name: 'TITLE',
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
  // "Palm Drive" - laid-back synthwave cruise with a rolling arpeggio
  palm: {
    name: 'PALM DRIVE',
    bpm: 116,
    chords: [['A', MAJ7], ['F#', MIN7], ['D', MAJ7], ['E', MAJ], ['A', MAJ7], ['C#', MIN7], ['D', MAJ7], ['E', MAJ]],
    lead: [
      'E5 . . . C#5 . . . E5 . F#5 . G#5 . . .', 'A5 . . . . . . . F#5 . E5 . C#5 . . .',
      'D5 . . . F#5 . . . A5 . . . C#6 . B5 .', 'B5 . . . . . . . G#5 . . . E5 . . .',
      'E5 . . . C#5 . . . E5 . F#5 . A5 . . .', 'G#5 . . . E5 . . . C#5 . E5 . G#5 . . .',
      'F#5 . . . A5 . . . D6 . . . C#6 . A5 .', 'B5 . . . . . . . - - G#5 . A5 . B5 .',
    ],
    bass: [0, null, 0, null, 0, null, 12, null, 0, null, 0, null, 0, null, 12, 7],
    kick: [0, 8, 10],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'saw2',
    pad: true,
    arp: { pattern: [0, 1, 2, 3, 4, 3, 2, 1], wave: 'square', oct: 5 },
    gated: true,
    stabs: false,
  },
  // "Night Signal" - minor-key drive with an FM bell lead
  signal: {
    name: 'NIGHT SIGNAL',
    bpm: 128,
    chords: [['D', MIN], ['A#', MAJ], ['C', MAJ], ['A', MIN], ['D', MIN7], ['A#', MAJ7], ['G', MIN7], ['A', MAJ]],
    lead: [
      'A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .', 'A#5 . . . . . F5 . . . A#5 . D6 . . .',
      'C6 . . E6 . . G6 . F6 . E6 . C6 . . .', 'E6 . . . . . . . - - A5 . C6 . E6 .',
      'F6 . . E6 . . D6 . A5 . . . D6 . F6 .', 'G6 . . F6 . . D6 . A#5 . . . F5 . . .',
      'G5 . . A#5 . . D6 . G6 . . . F6 . D6 .', 'C#6 . . . . . E6 . . . A5 . . . - -',
    ],
    bass: [0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 12, 0, 12],
    kick: [0, 4, 8, 12],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'fm',
    pad: true,
    gated: true,
    stabs: false,
  },
  // "Turbo Rival" - fast galloping chase theme
  rival: {
    name: 'TURBO RIVAL',
    bpm: 152,
    chords: [['E', MIN], ['C', MAJ], ['D', MAJ], ['B', MAJ], ['E', MIN], ['C', MAJ], ['A', MIN], ['B', DOM7]],
    lead: [
      'B5 . . . G5 . E5 . B5 . . . C6 . B5 .', 'G5 . . . E5 . C5 . E5 . G5 . C6 . . .',
      'A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .', 'B5 . . . . . . . D#6 . . . F#6 . . .',
      'E6 . . . D6 . B5 . G5 . . . B5 . E6 .', 'G6 . . . E6 . C6 . E6 . . . G6 . E6 .',
      'C6 . . . A5 . E5 . A5 . C6 . E6 . . .', 'D#6 . . . . . F#6 . . . B5 . . . - -',
    ],
    bass: [0, null, 0, 12, 0, null, 0, 12, 0, null, 0, 12, 0, 7, 12, 7],
    kick: [0, 4, 8, 12],
    snare: [4, 12],
    hat: [0, 2, 4, 6, 8, 10, 12, 14],
    leadWave: 'saw2',
    arp: { pattern: [0, 2, 4, 2], wave: 'square', oct: 5 },
  },
  // "After Sunset" - slow city-pop ballad
  sunset: {
    name: 'AFTER SUNSET',
    bpm: 98,
    chords: [['F', MAJ7], ['E', MIN7], ['D', MIN7], ['C', MAJ7], ['A#', MAJ7], ['A', MIN7], ['G', MIN7], ['C', MAJ]],
    lead: [
      'A5 . . . C6 . . . E6 . . . D6 . C6 .', 'B5 . . . G5 . . . E5 . . . . . . .',
      'F5 . . . A5 . . . C6 . . . E6 . D6 .', 'E6 . . . . . . . G5 . . . . . . .',
      'D6 . . . F6 . . . A6 . . . G6 . F6 .', 'E6 . . . C6 . . . A5 . . . G5 . A5 .',
      'A#5 . . . A5 . . . G5 . . . F5 . G5 .', 'E5 . . . . . . . . . . . - - - -',
    ],
    bass: [0, null, null, 0, null, null, 12, null, 0, null, null, 7, null, null, 12, null],
    kick: [0, 10],
    snare: [4, 12],
    hat: [0, 2, 4, 6, 8, 10, 12, 14],
    leadWave: 'fm',
    pad: true,
    arp: { pattern: [0, 2, 1, 3, 2, 4, 3, 1], wave: 'triangle', oct: 5 },
    gated: true,
    stabs: false,
  },
  // "Mesa Highway" - twangy FM lead over an A-minor desert groove
  desert: {
    name: 'MESA HIGHWAY',
    bpm: 128,
    chords: [['A', MIN7], ['D', MAJ], ['G', MAJ], ['E', MIN7], ['A', MIN7], ['F', MAJ7], ['G', MAJ], ['E', DOM7]],
    lead: [
      'A4 . . C5 . . E5 . G5 . . . E5 . D5 .', 'F#5 . . . . . A5 . F#5 . E5 . D5 . . .',
      'G5 . . B5 . . D6 . B5 . . . A5 . G5 .', 'E5 . . . . . . . - - G5 . A5 . B5 .',
      'C6 . . B5 . . A5 . E5 . . . G5 . A5 .', 'A5 . . . C6 . . . E6 . . . C6 . A5 .',
      'B5 . . . D6 . . . G5 . . . B5 . D6 .', 'G#5 . . . . . B5 . . . E5 . . . - -',
    ],
    bass: [0, null, null, 0, null, 7, null, 0, null, 0, null, 7, 12, null, 7, null],
    kick: [0, 8, 11],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'fm',
  },
  // "Glacier Run" - bright E-major bells and a fast four-on-the-floor
  alps: {
    name: 'GLACIER RUN',
    bpm: 150,
    chords: [['E', MAJ], ['B', MAJ], ['C#', MIN7], ['A', MAJ7], ['E', MAJ], ['G#', MIN7], ['A', MAJ7], ['B', DOM7]],
    lead: [
      'B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .', 'F#6 . . . D#6 . . . B5 . . . F#5 . . .',
      'E6 . . D#6 . . C#6 . . . B5 . G#5 . . .', 'C#6 . . . . . B5 . A5 . . . G#5 . A5 .',
      'B5 . . E6 . . G#6 . . . F#6 . E6 . . .', 'D#6 . . . B5 . . . F#6 . . . D#6 . . .',
      'E6 . . C#6 . . A5 . . . G#6 . . . E6 .', 'F#6 . . . . . . . D#6 . . . A5 . . .',
    ],
    bass: [0, null, 12, null, 0, null, 12, null, 0, null, 12, null, 7, null, 12, null],
    kick: [0, 4, 8, 12],
    snare: [4, 12],
    hat: [2, 6, 10, 14],
    leadWave: 'square',
    pad: true,
    arp: { pattern: [0, 1, 2, 3, 2, 1, 0, 1], wave: 'triangle', oct: 5 },
  },
  // "Jackpot Boulevard" - funky D-minor strut with big gated snares
  vegas: {
    name: 'JACKPOT BOULEVARD',
    bpm: 116,
    chords: [['D', MIN7], ['G', DOM7], ['D', MIN7], ['G', DOM7], ['A#', MAJ7], ['A', DOM7], ['D', MIN7], ['A', DOM7]],
    lead: [
      'D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .', 'B5 . . . . . G5 . F5 . . . D5 . F5 .',
      'A5 . . C6 . . D6 . . . C6 . A5 . . .', 'G5 . . . . . . . - - F5 . G5 . B5 .',
      'D6 . . . A5 . . . F5 . . . A5 . D6 .', 'C#6 . . . . . E6 . . . C#6 . A5 . . .',
      'F6 . . E6 . . D6 . . . C6 . A5 . . .', 'A5 . . . . . . . E5 . G5 . A5 . C#6 .',
    ],
    bass: [0, null, 0, 12, null, 0, null, 10, 0, null, 7, null, 12, 10, 7, null],
    kick: [0, 7, 10],
    snare: [4, 12],
    hat: [0, 2, 3, 4, 6, 8, 10, 11, 12, 14],
    leadWave: 'saw2',
    gated: true,
  },
  // "Cote d'Azur" - smooth jazz-fusion for the corniche
  riviera: {
    name: "COTE D'AZUR",
    bpm: 112,
    chords: [['F', MAJ7], ['E', MIN7], ['D', MIN7], ['C', MAJ7], ['A#', MAJ7], ['A', MIN7], ['G', MIN7], ['C', DOM7]],
    lead: [
      'E6 . . . C6 . A5 . . . G5 . A5 . C6 .', 'B5 . . . . . G5 . E5 . . . D5 . E5 .',
      'F5 . A5 . C6 . . . E6 . . . D6 . C6 .', 'B5 . . . . . . . G5 . . . - - - -',
      'D6 . . F6 . . A6 . . . F6 . D6 . . .', 'C6 . . . E6 . . . G6 . . . E6 . C6 .',
      'A#5 . . . D6 . . . F6 . . . D6 . A#5 .', 'E6 . . . . . . . . . . . - - - -',
    ],
    bass: [0, null, null, 7, null, null, 12, null, 0, null, null, 7, null, 10, null, null],
    kick: [0, 10],
    snare: [4, 12],
    hat: [0, 2, 4, 6, 8, 10, 12, 14],
    leadWave: 'fm',
    pad: true,
    arp: { pattern: [0, 2, 1, 3, 2, 1, 0, 2], wave: 'sine', oct: 5 },
    stabs: false,
  },
};

/** Songs the in-game radio can play, in order. */
export const TRACKS: { id: string; name: string }[] = ['miami', 'tokyo', 'desert', 'alps', 'vegas', 'riviera', 'palm', 'signal', 'rival', 'sunset']
  .map((id) => ({ id, name: SONGS[id].name }));

const NOTE: Record<string, number> = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
const midi = (name: string): number => {
  const m = /^([A-G]#?)(\d)$/.exec(name);
  if (!m) return 69;
  return NOTE[m[1]] + (parseInt(m[2], 10) + 1) * 12;
};
const hz = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

/**
 * How each kind of engine sounds. The pitch follows the real firing rate (rpm / 60 x firing pulses per
 * crank turn), so a V12 at 7,000 rpm sits well above a big-block V8 at 5,000. The rest is the character:
 * sub = the half-order rumble (the burble of a cross-plane V8), harm = the 2nd harmonic (the scream of a
 * V12 or flat-plane V8), lope = the lumpy cam at low revs, rasp = distortion, bright = how open the filter
 * is, turbo = whistle and blow-off valve.
 */
interface EngineVoice { redline: number; pulses: number; wave: OscillatorType; sub: number; harm: number; lope: number; rasp: number; bright: number; turbo: number; vol: number; vtec?: boolean }
export const ENGINES: Record<EngineType, EngineVoice> = {
  // Ferrari Testarossa: flat-12, smooth and silky, a high wail
  flat12: { redline: 6800, pulses: 6, wave: 'sawtooth', sub: 0.15, harm: 0.4, lope: 0, rasp: 0.1, bright: 1.05, turbo: 0, vol: 0.95 },
  // Lamborghini V12s and the McLaren F1's BMW V12: a dense, rising scream
  v12: { redline: 7400, pulses: 6, wave: 'sawtooth', sub: 0.1, harm: 0.55, lope: 0, rasp: 0.15, bright: 1.25, turbo: 0, vol: 1 },
  // Ferrari F355: flat-plane V8, shrieking at 8,500 rpm
  v8flat: { redline: 8500, pulses: 4, wave: 'sawtooth', sub: 0.12, harm: 0.6, lope: 0, rasp: 0.35, bright: 1.35, turbo: 0, vol: 0.95 },
  // Ferrari F40: twin-turbo flat-plane V8, raw and raspy with whistling turbos
  v8tt: { redline: 7750, pulses: 4, wave: 'sawtooth', sub: 0.3, harm: 0.35, lope: 0, rasp: 0.6, bright: 1.0, turbo: 1.2, vol: 1 },
  // Porsche 959: twin-turbo flat-6, a gruff growl
  flat6tt: { redline: 7600, pulses: 3, wave: 'sawtooth', sub: 0.4, harm: 0.25, lope: 0, rasp: 0.5, bright: 0.95, turbo: 1, vol: 1 },
  // Nissan RB26 / Toyota 2JZ: turbo straight-six, smooth, with whistle and pssh
  i6tt: { redline: 8000, pulses: 3, wave: 'sawtooth', sub: 0.2, harm: 0.35, lope: 0, rasp: 0.25, bright: 1.05, turbo: 1, vol: 0.95 },
  // Mazda 13B twin-rotor: a high, buzzy brap
  rotary: { redline: 9000, pulses: 3, wave: 'square', sub: 0.05, harm: 0.45, lope: 0, rasp: 0.7, bright: 1.2, turbo: 0.8, vol: 0.85 },
  // Honda NSX: V6 with VTEC, which turns harder and louder past 5,800 rpm
  v6vtec: { redline: 8000, pulses: 3, wave: 'sawtooth', sub: 0.25, harm: 0.2, lope: 0, rasp: 0.2, bright: 0.95, turbo: 0, vol: 0.95, vtec: true },
  // big-block V8s (Boss 429, 440 Magnum, Pontiac 400): deep, lazy, lumpy cross-plane rumble
  v8big: { redline: 5500, pulses: 4, wave: 'sawtooth', sub: 0.9, harm: 0.1, lope: 0.55, rasp: 0.55, bright: 0.6, turbo: 0, vol: 1.2 },
  // small-block V8s (Camaro 302, Corvette 327): the same burble, revs higher and barks harder
  v8small: { redline: 6800, pulses: 4, wave: 'sawtooth', sub: 0.65, harm: 0.2, lope: 0.4, rasp: 0.5, bright: 0.85, turbo: 0, vol: 1.1 },
};

export class Audio {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfx!: GainNode;
  private musicBus!: GainNode;
  private noise!: AudioBuffer;
  private engA!: OscillatorNode;
  private engB!: OscillatorNode;
  private engC!: OscillatorNode;
  private engBG!: GainNode;
  private engCG!: GainNode;
  private engShape!: WaveShaperNode;
  private engF!: BiquadFilterNode;
  private engAM!: GainNode;
  private engLfo!: OscillatorNode;
  private engLfoG!: GainNode;
  private engG!: GainNode;
  private turboF!: BiquadFilterNode;
  private turboG!: GainNode;
  private engVoice: EngineVoice = ENGINES.flat12;
  private lastLoad = 0;
  private lastRpm = 0;
  private spool = 0;
  private spoolSlow = 0;
  private skidG!: GainNode;
  private delay!: DelayNode;
  muted = (() => {
    try {
      return localStorage.getItem('th86-muted') === '1';
    } catch {
      return false;
    }
  })();

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
    this.master.gain.value = this.muted ? 0 : 0.55;
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

    // engine: firing note + half-order rumble + 2nd harmonic -> distortion -> filter -> cam lope -> volume
    this.engA = ctx.createOscillator();
    this.engB = ctx.createOscillator();
    this.engB.type = 'square';
    this.engC = ctx.createOscillator();
    this.engC.type = 'sawtooth';
    this.engBG = ctx.createGain();
    this.engCG = ctx.createGain();
    this.engShape = ctx.createWaveShaper();
    this.engShape.oversample = '2x';
    this.engF = ctx.createBiquadFilter();
    this.engF.type = 'lowpass';
    this.engF.Q.value = 1.6; // a gentle filter: a sharp resonance whined on one note at full revs
    this.engAM = ctx.createGain();
    this.engLfo = ctx.createOscillator();
    this.engLfoG = ctx.createGain();
    this.engLfo.connect(this.engLfoG).connect(this.engAM.gain);
    this.engG = ctx.createGain();
    this.engG.gain.value = 0;
    const mix = ctx.createGain();
    mix.gain.value = 0.7;
    this.engA.connect(mix);
    this.engB.connect(this.engBG).connect(mix);
    this.engC.connect(this.engCG).connect(mix);
    mix.connect(this.engShape).connect(this.engF).connect(this.engAM).connect(this.engG).connect(this.sfx);
    // turbo whistle
    // turbo: a rush of air (band-passed noise), not a pure whistle tone, which whined at top speed
    const air = ctx.createBufferSource();
    air.buffer = this.noise;
    air.loop = true;
    this.turboF = ctx.createBiquadFilter();
    this.turboF.type = 'bandpass';
    this.turboF.Q.value = 2.5;
    this.turboG = ctx.createGain();
    this.turboG.gain.value = 0;
    air.connect(this.turboF).connect(this.turboG).connect(this.sfx);
    air.start();
    for (const o of [this.engA, this.engB, this.engC, this.engLfo]) o.start();
    this.applyVoice();

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
    try {
      localStorage.setItem('th86-muted', this.muted ? '1' : '0');
    } catch {
      /* private mode: just this session */
    }
    if (this.ctx) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.55, this.ctx.currentTime, 0.02);
  }

  /** Pick the engine sound for the player's car. */
  setEngine(type: EngineType | undefined) {
    const v = ENGINES[type ?? 'flat12'];
    if (v === this.engVoice) return;
    this.engVoice = v;
    if (this.ctx) this.applyVoice();
  }

  private applyVoice() {
    const v = this.engVoice;
    this.engA.type = v.wave;
    this.engBG.gain.value = v.sub;
    this.engCG.gain.value = v.harm;
    // soft clipping: more drive = more rasp
    const k = 1 + v.rasp * 8, n = 512, curve = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 2 - 1;
      curve[i] = Math.tanh(k * x) / Math.tanh(k);
    }
    this.engShape.curve = curve;
  }

  /** rpm 0..1 within the current gear, load 0..1 throttle. */
  engine(on: boolean, rpm: number, load: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, v = this.engVoice;
    // the real crank speed, and the firing rate it gives (scaled down into a game-friendly range)
    const crank = v.redline * (0.12 + 0.88 * rpm);
    const f = (crank / 60) * v.pulses * 0.45;
    const vtec = v.vtec && crank > 5800 ? 1 : 0;
    this.engA.frequency.setTargetAtTime(f, t, 0.03);
    this.engB.frequency.setTargetAtTime(f * 0.5 + 1.5, t, 0.03);
    this.engC.frequency.setTargetAtTime(f * 2 + 0.7, t, 0.03);
    if (v.vtec) this.engCG.gain.setTargetAtTime(v.harm + vtec * 0.45, t, 0.04);
    this.engF.frequency.setTargetAtTime((300 + rpm * 1400 + load * 600 + vtec * 900) * v.bright, t, 0.05);
    // a lumpy cam: the volume wobbles at low revs, smoothing out as they climb
    const lope = v.lope * Math.max(0, 1 - rpm * 1.3);
    this.engAM.gain.setTargetAtTime(1 - lope * 0.5, t, 0.05);
    this.engLfoG.gain.setTargetAtTime(lope * 0.5, t, 0.05);
    this.engLfo.frequency.setTargetAtTime(Math.max(4, f * 0.11), t, 0.05);
    this.engG.gain.setTargetAtTime(on ? (0.1 + load * 0.08 + vtec * 0.03) * v.vol : 0, t, 0.08);
    // turbos: spool up under load with a whoosh, and blow off when you lift at high boost. The whoosh
    // is loudest while the boost is building and settles to a faint hiss once you're holding speed.
    if (v.turbo) {
      this.spool += ((on ? load * rpm : 0) - this.spool) * (load ? 0.04 : 0.25);
      this.spoolSlow += (this.spool - this.spoolSlow) * 0.02;
      const building = Math.max(0, this.spool - this.spoolSlow);
      this.turboF.frequency.setTargetAtTime(700 + this.spool * 1300, t, 0.08);
      this.turboG.gain.setTargetAtTime(on ? (this.spool * 0.006 + Math.min(1, building * 4) * 0.05) * v.turbo : 0, t, 0.08);
      if (on && this.lastLoad > 0.5 && load < 0.5 && this.lastRpm > 0.55 && this.spool > 0.3) this.blowOff(v.turbo);
    } else this.turboG.gain.setTargetAtTime(0, t, 0.05);
    this.lastLoad = load;
    this.lastRpm = rpm;
  }

  /** The pssh of a turbo's blow-off valve. */
  private blowOff(vol: number) {
    this.burst(0.35, 0.12 * vol, 2500, 0, 'highpass');
    this.burst(0.2, 0.08 * vol, 5000, 0.02, 'bandpass');
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
  pop() {
    if (!this.ctx) return;
    this.burst(0.09, 0.5, 900);
    this.tone(70, 0.08, 'square', 0.25, 0, 40);
  }
  /** Gunshot: a short, sharp crack (quieter when it's someone else's, far away). */
  gun(vol = 1) {
    if (!this.ctx) return;
    // each round is a quick double report, so held fire rattles like a machine gun
    for (const [when, k] of [[0, 1], [0.048, 0.8]] as const) {
      const p = 0.9 + Math.random() * 0.2, v = vol * k;
      this.burst(0.045, 0.5 * v, 1900 * p, when, 'bandpass'); // the crack
      this.burst(0.11, 0.42 * v, 650 * p, when); // the boom
      this.tone(125 * p, 0.07, 'sine', 0.38 * v, when, 42); // the thump
      this.burst(0.014, 0.22 * v, 5200, when + 0.004, 'highpass'); // the bolt's clack
    }
  }
  /** Bazooka launch: a thump and a hiss that trails away. */
  rocket(vol = 1) {
    if (!this.ctx) return;
    this.tone(160, 0.12, 'square', 0.4 * vol, 0, 50);
    this.burst(0.06, 0.5 * vol, 900);
    for (let i = 0; i < 4; i++) this.burst(0.18, (0.32 - i * 0.07) * vol, 2600 - i * 450, 0.05 + i * 0.12, 'bandpass');
  }
  /** Rocket explosion: a deep boom with a rumbling tail (quieter far away). */
  boom(vol = 1) {
    if (!this.ctx) return;
    this.tone(70, 0.9, 'sine', 0.6 * vol, 0, 24);
    this.burst(1.1, 0.9 * vol, 1400);
    this.burst(0.25, 0.5 * vol, 4200, 0, 'highpass');
    this.tone(45, 1.2, 'triangle', 0.35 * vol, 0.08, 20);
  }
  /** Two rising notes: someone joined the lobby. */
  chime() {
    if (!this.ctx) return;
    this.tone(880, 0.12, 'triangle', 0.3, 0, 880);
    this.tone(1320, 0.18, 'triangle', 0.3, 0.12, 1320);
  }
  /** Bullet hitting your own car: a metallic ping. */
  ping() {
    if (!this.ctx) return;
    this.tone(1800 + Math.random() * 900, 0.12, 'triangle', 0.22, 0, 900);
    this.burst(0.04, 0.25, 6000, 0, 'highpass');
  }
  /** Turbo kick: a rising whoosh with a growl under it. */
  turbo() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const s = ctx.createBufferSource();
    s.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = 3;
    f.frequency.setValueAtTime(400, t);
    f.frequency.exponentialRampToValueAtTime(5000, t + 0.7);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0, t);
    g.gain.linearRampToValueAtTime(0.5, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
    s.connect(f).connect(g).connect(this.sfx);
    s.start(t);
    s.stop(t + 1.2);
    this.tone(90, 0.6, 'sawtooth', 0.25, 0, 240);
    this.tone(660, 0.25, 'square', 0.1, 0.05, 1320);
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
  music(id: string | null) {
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
    if (s.stabs !== false && i % 4 === 2) for (const n of quality) this.voice(hz(60 + root + n), dt * 1.2, 'square', 0.045, t, 2600);
    // pad: one long chord per bar
    if (s.pad && i === 0) for (const n of quality) this.padNote(hz(48 + root + n), dt * 16, t);
    // arpeggio over the chord tones, climbing into the next octave
    if (s.arp) {
      const k = s.arp.pattern[i % s.arp.pattern.length];
      const n = quality[k % quality.length] + 12 * Math.floor(k / quality.length);
      this.voice(hz((s.arp.oct + 1) * 12 + root + n), dt * 0.7, s.arp.wave, 0.045, t, 3200, false, true);
    }
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
    if (s.snare.includes(i)) {
      if (s.gated) {
        // gated-reverb snare: a loud burst that cuts off dead
        this.burst(0.26, 0.55, 1500, 0, 'bandpass', this.musicBus, t);
        this.burst(0.2, 0.3, 5000, 0, 'highpass', this.musicBus, t);
      } else this.burst(0.14, 0.45, 1800, 0, 'bandpass', this.musicBus, t);
    }
    if (s.hat.includes(i)) this.burst(0.04, 0.18, 7000, 0, 'highpass', this.musicBus, t);
  }

  /** Slow-attack detuned saw pair for pads. */
  private padNote(f: number, dur: number, t: number) {
    const ctx = this.ctx!;
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = 1400;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.028, t + Math.min(0.35, dur * 0.3));
    g.gain.setValueAtTime(0.028, t + dur * 0.85);
    g.gain.linearRampToValueAtTime(0, t + dur);
    fl.connect(g).connect(this.musicBus);
    for (const det of [-9, 9]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(f, t);
      o.detune.value = det;
      o.connect(fl);
      o.start(t);
      o.stop(t + dur + 0.02);
    }
  }

  private voice(f: number, dur: number, type: LeadVoice, vol: number, t: number, cutoff: number, echo = false, sendDelay = false) {
    const ctx = this.ctx!;
    if (type === 'fm') {
      // two-operator FM bell/e-piano: modulator at 2x, index decays
      const car = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const mg = ctx.createGain();
      car.frequency.setValueAtTime(f, t);
      mod.frequency.setValueAtTime(f * 2, t);
      mg.gain.setValueAtTime(f * 3, t);
      mg.gain.exponentialRampToValueAtTime(f * 0.3, t + Math.max(0.05, dur));
      mod.connect(mg).connect(car.frequency);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol * 1.3, t + 0.004);
      g.gain.exponentialRampToValueAtTime(vol * 0.4, t + Math.max(0.05, dur * 0.8));
      g.gain.linearRampToValueAtTime(0, t + dur + 0.05);
      car.connect(g).connect(this.musicBus);
      if (echo) g.connect(this.delay);
      for (const o of [car, mod]) {
        o.start(t);
        o.stop(t + dur + 0.08);
      }
      return;
    }
    const o = ctx.createOscillator();
    const extra: OscillatorNode[] = [];
    if (type === 'saw2') vol *= 0.6; // two oscillators summed
    if (type === 'saw2') {
      o.type = 'sawtooth';
      o.detune.value = -8;
      const o2 = ctx.createOscillator();
      o2.type = 'sawtooth';
      o2.detune.value = 8;
      o2.frequency.setValueAtTime(f, t);
      extra.push(o2);
    } else o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (echo) {
      // gentle delayed vibrato
      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = 6;
      lg.gain.setValueAtTime(0, t);
      lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(dur, 0.4));
      lfo.connect(lg).connect(o.frequency);
      for (const x of extra) lg.connect(x.frequency);
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
    if (echo || sendDelay) g.connect(this.delay);
    for (const x of [o, ...extra]) {
      if (x !== o) x.connect(fl);
      x.start(t);
      x.stop(t + dur + 0.02);
    }
  }
}
