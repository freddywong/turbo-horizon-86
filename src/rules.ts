/** Gameplay numbers shared by the player, the computer drivers and online play. */

export const TURBO_TIME = 5; // seconds per boost
export const TURBO_SPEED = 1.18; // top speed multiplier while boosting
export const TURBO_DEFAULT = 5; // boosts per race unless changed in the menu

// ---- help for whoever's behind ----------------------------------------------
/** Catch-up: extra top speed when well behind the leading car (0 at CATCHUP_FROM metres, full at CATCHUP_FULL). */
export const CATCHUP_MAX = 0.06;
export const CATCHUP_FROM = 150;
export const CATCHUP_FULL = 400;
/** Slipstream: seconds of towing close behind a car to fill the meter, then the burst. */
export const SLIP_BUILD = 1.5;
export const SLIP_TIME = 2.5;
export const SLIP_SPEED = 0.08;

// ---- weapons ----------------------------------------------------------------
export const AMMO_STEPS = [100, 150, 200, 300, 400, 500]; // menu choices, rounds per race
export const AMMO_DEFAULT = 200;
/** Online races have their own ammo setting, with a smaller default. */
export const AMMO_DEFAULT_ONLINE = 100;
export const FIRE_RATE = 5; // rounds per second while FIRE is held
/** Most one shooter's gunfire can take off a car: three quarters of the damage bar. */
export const GUN_CAP = 75;
/** Your bullets do this many times the damage to computer cars, which can be shot to a wreck. */
export const VS_AI_DAMAGE = 3;
/** All the computer drivers' gunfire together can take at most this much of your bar. */
export const AI_GUN_CAP = 40;
// ---- bazooka ----------------------------------------------------------------
export const ROCKETS_DEFAULT = 3; // rockets per race unless changed in the menu
export const ROCKETS_MAX = 5;
export const ROCKET_SPEED = 70; // m/s on top of the shooter's own speed
export const ROCKET_RANGE = 900; // metres before it burns out
export const ROCKET_WIDTH = 1.5; // half-width of its path: no auto-aim, it only hits what's in its lane
/** A rocket hit on a computer car in VS RIVALS (x VS_AI_DAMAGE: wrecks it). */
export const ROCKET_DAMAGE = 40;

// ---- player vs player (online, and the ?test=pvp mode) --------------------------
/**
 * Damage per round between players, by how many cars are in the race: more shooters, less each,
 * so a crowd can't shred someone in seconds. No per-shooter cap: one player can wreck another.
 */
export function pvpPerHit(players: number): number {
  return players <= 3 ? 2 : players <= 5 ? 1 : 0.5;
}
/** Damage per round a computer driver's gun does to you in VS RIVALS. */
export const AI_PER_HIT = 0.5;
/** Damage per rocket between players. */
export const PVP_ROCKET_DAMAGE = 10;

/** Damage per round that hits (30 hits reach the cap; more ammo doesn't make a shooter stronger, it just lasts longer). */
export const PER_HIT = 2.5;
/** Guns fire dead ahead (no auto-aim): a round hits the first car within this half-width of your line. */
export const GUN_WIDTH = 1.3;
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
