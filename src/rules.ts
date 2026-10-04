/** Gameplay numbers shared by the player, the computer drivers and online play. */

export const TURBO_TIME = 5; // seconds per boost
export const TURBO_SPEED = 1.18; // top speed multiplier while boosting
export const TURBO_DEFAULT = 5; // boosts per race unless changed in the menu

// ---- weapons ----------------------------------------------------------------
export const AMMO = 30; // rounds per race
export const FIRE_RATE = 5; // rounds per second while FIRE is held
/** Most one shooter's gunfire can take off a car: half the damage bar. */
export const GUN_CAP = 50;
/** Damage per round that hits: a whole clip of hits is exactly the cap. */
export const PER_HIT = GUN_CAP / AMMO;
export const RANGE_AHEAD = 90; // metres
export const RANGE_BEHIND = 35;
export const RANGE_SIDE = 6;

/** Chance one round hits at this distance: close is accurate, far is a spray. */
export function hitChance(dist: number): number {
  return Math.max(0.12, Math.min(0.95, 1.05 - dist / 70));
}

/** Is a car at (dd ahead, dx across) of the shooter in range? */
export function inRange(dd: number, dx: number): boolean {
  return dd <= RANGE_AHEAD && dd >= -RANGE_BEHIND && Math.abs(dx) <= RANGE_SIDE;
}
