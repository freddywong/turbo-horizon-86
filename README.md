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
| ← / → (car select) | Choose car · ↑ / ↓ changes colour |
| W / ↑ | Accelerate |
| S / ↓ | Brake |
| A / ← , D / → | Steer |
| Space | Drift / handbrake (also confirms in menus) |
| Enter | Insert coin / confirm |
| R | Restart the current route |
| Esc | Pause (Q in the pause menu quits to route select) |
| M | Mute |

### Phones and tablets

Play in landscape. The first touch switches to on-screen arcade buttons:
◀ ▶ steer pads for the left thumb, and GAS / BRAKE / DRIFT for the right.
AUTO GAS (on by default) keeps the throttle down for you. Tap through the
menus; the pause button sits at the top right. The game tries to go
fullscreen and lock to landscape where the browser allows it.

## Cars

Low-poly versions of real cars, with no badges or logos drawn. Each has its own top speed,
acceleration and grip, plus three paint colours.

* **80s exotics:** Ferrari Testarossa, Lamborghini Countach QV, Ferrari F40, Porsche 959
* **90s Japan:** Nissan Skyline GT-R R32, Toyota Supra RZ, Mazda RX-7, Honda NSX
* **90s supercars:** Lamborghini Diablo, McLaren F1, Ferrari F355

Traffic is period-correct too. Miami has a VW Golf Mk2, Volvo 240 estate, AE86, Jeep
Cherokee, Chevrolet Caprice, Mercedes W124 and Ford F-150. Tokyo has a Toyota Crown
(including taxis), Nissan Cedric, Suzuki Every kei van and Honda Civic, plus trucks and buses.

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
* `src/cars/`: a spec-driven car builder. Each car is a list of body cross-sections
  plus its tail lights, wings, intakes and exhausts.
* `src/touch.ts`: the multi-touch on-screen controls.
* `src/backdrop.ts`: stepped-gradient sky dome, sun/moon discs, cut-out clouds,
  mountains and skylines that scroll with the road's heading.
* `src/audio.ts`: engine, tyre squeal, crashes, jingles, and three original
  chiptune-style tunes.
