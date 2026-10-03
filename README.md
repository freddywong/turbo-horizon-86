# TURBO HORIZON '86

A browser arcade road racer built as if it were a 1986 arcade board: low-poly
flat-shaded scenery, a banded sky, a strong horizon, and a 426×240 framebuffer
scaled up with hard pixels. It's built with Three.js, Vite and TypeScript. There is no backend
and nothing is downloaded at runtime. All audio is synthesised with Web Audio.

## Run

```bash
cd arcade-racer
npm install
npm run dev      # then open the printed URL
npm run build    # type-check + production build into dist/
```

## Controls

| Key | Action |
| --- | --- |
| W / ↑ | Accelerate |
| S / ↓ | Brake |
| A / ← , D / → | Steer |
| Space | Drift / handbrake (also confirms in menus) |
| Enter | Insert coin / confirm |
| R | Restart the current route |
| Esc | Pause (Q in the pause menu quits to route select) |
| M | Mute |

## Routes

* **MIAMI BEACH**: Ocean Drive, a pastel boulevard, a causeway across the bay,
  hill country with a tunnel, and a sunset finish.
* **TOKYO NIGHT HIGHWAY**: an elevated expressway above a city of lit windows,
  with a neon district, tunnels, a suspension bridge over the bay, and the Wangan line.

Each route has five stages. Reaching a checkpoint adds time (EXTENDED PLAY).
Reach the GOAL before the timer runs out. Score comes from speed, drifting,
overtaking, and the time bonus at the goal.

## How it's put together

* `src/track.ts`: OutRun-style segment track (eased curves and hills). Each frame,
  the visible window is re-expressed in player-relative space.
* `src/road.ts`: one dynamic mesh for the road and ground. It is built from per-route
  cross-section profiles with alternating light/dark bands.
* `src/props.ts`, `src/routes/*`: hand-built low-poly props (a few dozen polygons each),
  drawn with one `InstancedMesh` per prop part.
* `src/backdrop.ts`: stepped-gradient sky dome, sun/moon discs, cut-out clouds,
  mountains and skylines that scroll with the road's heading.
* `src/audio.ts`: engine, tyre squeal, crashes, jingles, and three original
  chiptune-style tunes.
