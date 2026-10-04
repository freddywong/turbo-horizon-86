/**
 * Data description of a car, turned into a low-poly model by build.ts.
 * Units are roughly metres; front of the car is -Z, +X is the car's right.
 */

/** What the top surface between this station and the next one is. */
export type Seg = 'p' | 'ws' | 'rf' | 'rw' | 'lv' | 'bed';

/** One cross-section of the body, front to back. */
export interface Station {
  z: number;
  w: number; // half width at the sides
  yb: number; // bottom of the body side
  belt: number; // shoulder / waist line
  top: number; // top surface (bonnet, roof, deck)
  wt: number; // half width of the top surface
  seg: Seg; // surface from here to the next station
}

export interface Light {
  x: number; // centre (mirrored to -x unless mirror === false)
  y: number;
  w: number;
  h: number;
  c: number;
  round?: boolean;
  brake?: boolean; // brightens when braking
  mirror?: boolean;
}

export interface Rect { x: number; y: number; w: number; h: number; c: number; mirror?: boolean }

export interface SideFeature {
  kind: 'intake' | 'strakes' | 'naca' | 'stripe';
  z0: number; z1: number; y0: number; y1: number;
  n?: number; // strake count
  c?: number;
}

export interface Wing {
  kind: 'big' | 'bridge' | 'hoop' | 'duck';
  z: number; // centre of the wing along the car
  y: number; // height of the blade
  w: number; // half span
  d: number; // chord
}

export interface CarSpec {
  id: string;
  name: string; // shown in the car select screen
  make: string;
  year: number;
  group: '80s EXOTIC' | '90s JAPAN' | '90s SUPERCAR' | 'TRAFFIC';
  paints: number[]; // first is the default
  stations: Station[];
  wheels: { r: number; fz: number; rz: number; fx: number; rx: number; hw?: number; rim: number; spokes: number };
  lights: Light[];
  rear?: Rect[]; // black panels / grilles on the tail
  slats?: { y0: number; y1: number; n: number; w: number }; // horizontal black slats across the tail
  side?: SideFeature[];
  wing?: Wing;
  louvres?: { z0: number; z1: number; n: number; w: number };
  scoop?: boolean; // roof air intake
  front?: 'popup' | 'rect' | 'round' | 'slim'; // headlight style
  /** air intakes in the nose: full-width bar (default), upper grille + bar, oval mouth, three slots, twin side intakes, thin slit, low slim bar */
  nose?: 'bar' | 'grille' | 'mouth' | 'slots' | 'twin' | 'lip' | 'slim';
  exhaust: { x: number; y: number; r: number }[];
  plateY: number;
  /** '92 detail: wheel style, arch flare (m), seat layout, cabin trim colour */
  rimStyle?: 'star' | 'six' | 'multi' | 'mesh' | 'dial' | 'steel';
  arch?: number;
  drive?: 'L' | 'R' | 'C';
  trim?: number;
  stats: { vmax: number; accel: number; grip: number }; // vmax km/h; others ~1.0
}

/**
 * Shorthand for conventional three-box / hatch shapes used by most traffic.
 * z positions: nose, windscreen base, roof start, roof end, rear window base, tail.
 */
export function boxy(o: {
  len: number; w: number; nose: number; hood: number; roof: number; deck: number; tail: number;
  ws: number; rf0: number; rf1: number; rw: number; yb?: number; belt?: number; tumble?: number;
}): Station[] {
  const L = o.len / 2;
  const yb = o.yb ?? 0.3;
  const belt = o.belt ?? o.hood;
  const t = o.tumble ?? 0.8; // cabin top width as a fraction of body width
  return [
    { z: -L, w: o.w * 0.96, yb, belt: o.nose - 0.05, top: o.nose, wt: o.w * 0.9, seg: 'p' },
    { z: -L + 0.35, w: o.w, yb, belt: belt - 0.04, top: o.hood - 0.02, wt: o.w * 0.94, seg: 'p' },
    { z: o.ws, w: o.w, yb, belt, top: o.hood, wt: o.w * 0.92, seg: 'ws' },
    { z: o.rf0, w: o.w, yb, belt, top: o.roof, wt: o.w * t, seg: 'rf' },
    { z: o.rf1, w: o.w, yb, belt, top: o.roof, wt: o.w * t, seg: 'rw' },
    { z: o.rw, w: o.w, yb, belt, top: o.deck, wt: o.w * 0.92, seg: 'p' },
    { z: L, w: o.w, yb, belt: Math.min(belt, o.tail - 0.04), top: o.tail, wt: o.w * 0.92, seg: 'p' },
  ];
}
