# TURBO HORIZON '86

A browser arcade road racer built as if it were a 1986 arcade board: low-poly
flat-shaded scenery, a banded sky, a strong horizon, and a 426×240 framebuffer
scaled up with hard pixels. It's built with Three.js, Vite and TypeScript. There is no backend
and nothing is downloaded at runtime. All audio is synthesised with Web Audio.

## Run

```bash
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
| N | Next music track (car select and while racing) |
| T / Shift | Turbo boost (3 per race) |
| M | Mute |

### Phones and tablets

Play in landscape. The first touch switches to on-screen arcade buttons:
◀ ▶ steer pads for the left thumb, and GAS / BRAKE / DRIFT for the right.
AUTO GAS (on by default) keeps the throttle down for you. Tap through the
menus; the pause button sits at the top right. The game tries to go
fullscreen and lock to landscape where the browser allows it.

## Turbo

Every race you get three turbo boosts (T or Shift, or the TURBO button on touch screens).
Each one gives about three seconds of extra acceleration and roughly 18% more top speed,
with flames from the exhausts; afterwards the car eases back to its normal top speed.
The HUD lamps show how many you have left. In VS RIVALS every rival also has three and
fires them on straights when they're fighting you for position.

## Graphics

The title screen switches between two looks (G, or tap the GRAPHICS line):

* **1992** (default): early-90s 3D arcade style: 640×360, texture-mapped road and ground
  with filtering, smooth sky and sun gradients, shaded mountains, glossy car paint,
  sky-tinted lighting, light halos and glowing tail lights at night, soft tyre smoke and
  a lens flare from the Miami sun.
* **1986**: the original flat-shaded look: 426×240, hard-stepped 15-bit colour sky,
  untextured ground, sprite-style smoke.

## Modes

Choose the mode on the route-select screen (↑ / ↓, or tap a mode box):

* **ARCADE**: the classic: beat the clock, with checkpoints adding time.
* **VS RIVALS**: an 8-car race. You start at the back of the grid behind seven computer
  drivers (ACE, AOKI, REYES, VOLK, LOLA, BLADE, KENJI), each in a different car from the
  roster, with their own pace, cornering and aggression. They take the inside line,
  overtake round traffic and bump wheels with you. Your live position shows on the HUD;
  the finish shows a results table with everyone's times. The timer still runs, so if it
  hits zero you're classified DNF.

## Music

Six original synth tracks plus a title theme, all generated live in the browser:

| Track | Feel |
| --- | --- |
| COASTLINE RUSH | Miami's theme: bright major-key cruise |
| NEON EXPRESSWAY | Tokyo's theme: minor key, Japanese-pop chord progression |
| PALM DRIVE | Laid-back synthwave with a rolling arpeggio and pads |
| NIGHT SIGNAL | Minor-key drive with an FM bell lead |
| TURBO RIVAL | Fast, galloping chase theme |
| AFTER SUNSET | Slow city-pop ballad |

Pick one on the car-select screen (it previews as you cycle), or press N (the MUSIC button on
touch screens) to change stations mid-race. ROUTE THEME plays each route's own track.

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
* `src/rivals.ts`: the computer drivers, their AI and the race classification.
* `src/touch.ts`: the multi-touch on-screen controls.
* `src/backdrop.ts`: stepped-gradient sky dome, sun/moon discs, cut-out clouds,
  mountains and skylines that scroll with the road's heading.
* `src/audio.ts`: engine, tyre squeal, crashes, jingles, and an original synth
  soundtrack played live by a step sequencer (detuned saw and FM bell leads, pads,
  arpeggios, gated snares).
