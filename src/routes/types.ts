import { SignAtlas } from '../atlas';
import { Backdrop } from '../backdrop';
import { PropDef } from '../props';
import { Profile } from '../road';
import { Track } from '../track';

export interface RouteWorld {
  track: Track;
  profiles: Profile[];
  props: PropDef[];
  backdrop: Backdrop;
  trafficTypes: number[];
  gateType: number;
}

export interface RouteDef {
  id: string;
  name: string;
  /** night route: tail-light halos, darker shadows */
  night: boolean;
  /** hemisphere light ('92): sky and ground tints */
  hemi: [number, number];
  /** number-plate background */
  plate: number;
  /** tyre-smoke colour */
  smoke: number;
  /** route-select card: background and title colours */
  card: [number, number];
  /** theme song id (audio SONGS) */
  music: string;
  lines: [string, string];
  stageNames: string[];
  fog: { color: number; near: number; far: number };
  ambient: { color: number; intensity: number };
  sun: { color: number; intensity: number; dir: [number, number, number] };
  startTime: number;
  extendTime: number;
  /** colour of the car's flat shadow on this route's road */
  shadow: number;
  trafficColors: number[];
  trafficCount: number;
  /** solid walls at the road edge (elevated expressway) instead of run-off */
  walls: boolean;
  /** max lateral distance the car may wander off-road */
  offroadLimit: number;
  build(atlas: SignAtlas): RouteWorld;
}

export class PropReg {
  defs: PropDef[] = [];
  add(d: PropDef): number {
    this.defs.push(d);
    return this.defs.length - 1;
  }
}

export const PASTELS = [0xffb0c8, 0xa8e8ff, 0xfff0a0, 0xb8ffd8, 0xffd0a8, 0xe0c8ff, 0xffffff];
