# TURBO HORIZON '86

A browser arcade road racer in the style of the late-80s / early-90s arcade boards: six routes
round the world, real period cars, rivals, online races and a 640×360 framebuffer scaled up with
hard pixels. It's built with Three.js, Vite and TypeScript. There is no backend
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
| Shift | Turbo boost (5 per race by default) |
| F | Fire the gun (weapons on) |
| E | Fire a bazooka rocket (weapons on) |
| M | Mute / unmute on any screen (remembered next time) |

### Phones and tablets

Play in landscape. The first touch switches to on-screen arcade buttons:
◀ ▶ steer pads for the left thumb, and GAS / BRAKE / DRIFT for the right.
AUTO GAS (on by default) keeps the throttle down for you. Tap through the
menus; the pause button sits at the top right. The game tries to go
fullscreen and lock to landscape where the browser allows it.

## Turbo

Every race you get a set number of turbo boosts: 5 by default. Change it from 1 to 9 with T (or tap
"TURBOS") on the car-select screen or in the online lobby. Online, the host (the first player in
the lobby) sets it for everyone. Turbos **stack**: fire another while one is burning and the boosts multiply (+18% top speed each,
so three at once is +64% and five is +129%), each layer lasting its own 5 seconds. Fire one with Shift, or the TURBO button on phones. Each boost
gives five seconds of extra acceleration and roughly 18% more top speed, with flames from the exhausts.
Afterwards the car eases back to its normal top speed. The HUD lamps show how many you have left. In
VS RIVALS every computer driver gets the same number and fires them on straights when they're fighting
you for position.

## Weapons

VS RIVALS and online races can be played with guns: WEAPONS ON/OFF (V, or tap) on the car-select
screen or in the online lobby. It's on by default. Online, the host sets it for everyone.

* Hold **F** (or the red **FIRE** button on phones) and your driver leans out of the window and shoots.
* **No auto-aim: the gun fires dead ahead.** Rounds fly straight down your line and hit the first car
  in it, a racer or traffic, up to 90 m ahead. While you fire, a crosshair shows where the rounds
  go: white down an empty lane, red on the car in your line. Line up behind someone to hit them; change lanes to
  get out of someone's sights.
* **Ammo: 30 to 500 rounds per race**, set with B (or tap AMMO). The default is 200 in VS RIVALS
  and 100 online (online has its own setting; the host's applies).
* **Bazooka: 3 rockets per race** by default (ROCKETS 1 to 5, set with K or tap). Press **E** (or
  the orange **ROCKET** button on phones): your driver shoulders the bazooka and fires. The rocket
  flies straight down your line, with no auto-aim, and explodes on the first car in its path, up to
  900 m away.
* **Online, between players:** each round that hits takes **1%** of the damage bar and each rocket
  **10%**. There's no limit on how much one player can do, so someone who keeps you in their sights
  can wreck you.
* **VS RIVALS, against the computer cars:** your rounds take **7.5%** of their bar (3 times a base
  2.5%, about 3 seconds of fire to wreck one) and a rocket wrecks them outright. A bar over the car
  you're hitting shows how it's holding up. Shot-up cars smoke, lose a tail lamp and limp. At zero
  they're **wrecked**: they roll to a stop in black smoke and drop out of the race (DNF), and you get
  50,000 points. The computer drivers shoot back in short bursts when you're in front of them
  (0.5% a round), but **all of them together can take at most 40% of your bar**. They don't have
  bazookas.
* Online, the shooter's game decides what hits and tells the victim's game, which applies the damage
  (and the cap). Everyone sees everyone's gunfire and rockets.

## Online multiplayer

Race real people from the link **https://freddywong.github.io/turbo-horizon-86/#join**. It works on
phones and computers, with no account and no sign-in.

Up to **8 players** race at once (the lobby can hold more; they wait for the next race).

1. Open the link and type your name. You go straight into the **online lobby**.
2. While you wait, pick your car and colour (← → / ↑ ↓, or tap the ◀ ▶ arrows and the colour swatches).
   The **host**, the first player in the lobby (marked HOST), sets the race for everyone: the route (R, or tap
   ROUTE) and TURBOS, WEAPONS and AMMO with their ◀ ▶ / ON-OFF buttons. Everyone else sees the host's settings.
   If the host leaves, the next player in takes over. The host can also **REMOVE** a player from the
   lobby with the button on their row.
   On a computer, if you're in another window or app when someone joins, you get a desktop
   notification (the browser asks once), the tab title flashes and a chime plays. Your car sits in the middle of the lobby, with the
   settings in a compact panel beside it. **SHOW CONTROLS** (H, or tap it) opens the driving keys as keycaps, or on a
   phone a picture of where each on-screen button is. The keys you need also show under the 3-2-1 countdown.
3. Everyone else presses **I'M READY** (Enter, or tap it; press again to undo). The player list shows
   READY / NOT READY for each player and the host's START button counts them (`1 OF 2 READY`,
   `EVERYONE IS READY!`). Ready resets after each race.
   **The host** presses START when they like; the host doesn't have to wait for everyone. Everyone in the lobby (up to 8) gets a short countdown and lines up on
   the same grid with the same traffic. Players who arrive while a race is running wait in the lobby
   for the next one.
4. Name tags show who's who, POS shows your place, and the results fill in as people finish. After
   the race everyone goes back to the lobby.

Use `#join=yourcode` (e.g. `.../#join=friday`) for a private lobby that only people with that link find.

**Can't see each other?** The top right of the lobby shows the room and how many matchmaking servers you
reached (`ROOM LOBBY  SERVERS 4/5`). Both players need the same room, so open the same link. Use the GitHub
Pages link above: the claude.ai preview can't go online. If you see SERVERS 0/5, that network is blocking
the servers. Once two players have found each other they connect directly, and if a network (mobile data,
office or school wi-fi) blocks that, the game falls back to a free public relay server (Open Relay).
Under that the lobby shows `FOUND n  LINKED n  FAILED n`: FOUND counts players your game found through the
servers, LINKED the ones it connected to. FOUND with FAILED and no LINKED means a network is blocking the
connection; FOUND 0 means the servers never passed your messages along.
You can also pick ONLINE on the mode screen.

How it works: there's no game server. Browsers find each other through free public Nostr relays
(via the [Trystero](https://github.com/dmotz/trystero) library) and then talk directly over WebRTC.
Most home and office Wi-Fi works. Some mobile-carrier and corporate networks block direct
connections; such a player won't see the others, but can still race solo. Fixing that would need a
TURN relay server. The claude.ai version of the game is single-player only.

For testing several tabs in one browser without the internet, add `?net=local`
(`http://localhost:5173/?net=local#join`).

## Damage

The DAMAGE bar shows how much damage your car has taken. It starts empty every race and fills up,
green, then yellow, then red; when it's full the car is wrecked:

* hard crashes into traffic, scenery or the back of a rival take a big chunk (more the faster you hit);
* side-swipes and rival bumps take a little; scraping along a wall wears it down steadily.

You can see the damage on the car: panels crumple in where it was hit, paint is scraped to bare
metal and soot, the glass cracks, a tail lamp gets smashed, and the engine starts to smoke, grey
at first and black when it's critical (the bar blinks and the car loses some top speed). When it's full
the engine blows: the car rolls to a stop under black smoke and flames, and it's game over
(WRECKED). A new race gives you a fresh car.

## Graphics

Early-90s 3D arcade style at 640×360 (the original flat 1986 look has been retired):
  * hand-painted surface textures: cracked and patched asphalt, worn paint, kerbs, grass tufts,
    sand ripples and footprints, moving sea, concrete panels, tunnel tiles, lit night streets
  * textured buildings: hotel balconies, Art-Deco fronts, shop windows full of goods, motels,
    Tokyo office blocks with lit, blinded and dark windows; rooftop AC units, water tanks, masts
  * roadside detail: reflector posts, km markers, people on the promenade and beach, beach huts,
    seagulls, barrier reflectors, emergency phones, tunnel jet fans
  * high-detail cars (about 5,000 polygons each): smooth, Gouraud-shaded bodywork with
    swage lines and rounded shoulders, wheel arches cut into the body with flared lips,
    tinted see-through glass over a modelled cabin (seats, dashboard, steering wheel and a
    helmeted driver; the McLaren F1 has its centre seat), textured tail lamps, headlamps,
    grilles and louvres, treaded tyres with lettered sidewalls, cut-out rims (five-spoke,
    six-spoke, multi-spoke, mesh, "telephone dial") with the brake disc and caliper behind,
    pillars, wipers, mirrors, shut lines, handles, fuel filler, side markers, rear fog lamp,
    multi-part exhausts and diffusers
  * soft contact shadows under every car (darkest under the tyres) that darken the road
    beneath instead of a flat grey slab
  * traffic with the same smooth bodies, glass with drivers inside, hubcapped wheels,
    bumpers and textured lamps
  * ships, a lighthouse and sun glitter on the horizon; aircraft lights over Tokyo
  * smooth sky and sun gradients, glossy car paint, sky-tinted lighting, light halos and
    glowing tail lights at night, soft tyre smoke, a lens flare from the Miami sun

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

Ten original synth tracks plus a title theme, all generated live in the browser:

| Track | Feel |
| --- | --- |
| COASTLINE RUSH | Miami's theme: bright major-key cruise |
| NEON EXPRESSWAY | Tokyo's theme: minor key, Japanese-pop chord progression |
| MESA HIGHWAY | Grand Canyon's theme: twangy FM lead over an A-minor desert groove |
| GLACIER RUN | Swiss Alps' theme: bright bells and a fast four-on-the-floor |
| JACKPOT BOULEVARD | Las Vegas's theme: funky D-minor strut with gated snares |
| COTE D'AZUR | Monaco's theme: smooth jazz-fusion |
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
* **US muscle (60s/70s):** Ford Mustang Boss 429, Chevrolet Camaro Z/28, Dodge Charger R/T,
  Plymouth 'Cuda 440, Pontiac Firebird Trans Am, Chevrolet Corvette Sting Ray. Long hoods, chrome
  bumpers, huge acceleration, less grip.

The car-select screen and the lobby show each maker's national flag.

Traffic is period-correct too. Miami has a VW Golf Mk2, Volvo 240 estate, AE86, Jeep
Cherokee, Chevrolet Caprice, Mercedes W124 and Ford F-150. Tokyo has a Toyota Crown
(including taxis), Nissan Cedric, Suzuki Every kei van and Honda Civic, plus trucks and buses.

## Routes

* **MIAMI BEACH**: Ocean Drive, a pastel boulevard, a causeway across the bay,
  hill country with a tunnel, and a sunset finish.
* **TOKYO NIGHT HIGHWAY**: an elevated expressway above a city of lit windows,
  with a neon district, tunnels, a suspension bridge over the bay, and the Wangan line.
* **GRAND CANYON** (golden hour): a Route 66 diner strip, the painted desert, the canyon rim with
  rock tunnels and a sheer drop, a dam crossing over the reservoir, and Monument Valley's buttes.
* **SWISS ALPS** (dawn): a frozen-lake village, snowy pine forest, hairpin mountain pass, avalanche
  galleries and a glacier summit under snow-capped peaks.
* **LAS VEGAS STRIP** (night): Fremont Street and the Strip lined with neon casino towers and bulb-lit
  pylons, then the dark desert under the stars to the lights of the dam.
* **MONACO RIVIERA** (afternoon): the harbour front full of yachts, casino square, the harbour tunnel,
  the clifftop Corniche high above the sea, and Cap Martin.

Pick a route from the postcards on the route-select screen (arrow keys, or tap a card and tap it again to go). Under the cards you see
whether it is a day or night run, its song and a map of its five stages. Online, the host picks it.

Each route has five stages. Reaching a checkpoint adds time (EXTENDED PLAY).
Reach the GOAL before the timer runs out. Score comes from speed, drifting,
overtaking, and the time bonus at the goal.

**Help for whoever's behind** (VS RIVALS and online):
* **Slipstream:** drive close behind any car (a racer or traffic, within about 30 m, in its lane,
  above 100 km/h) and the SLIPSTREAM meter fills in about 1.5 s. When it's full you get a burst of
  +8% top speed and extra acceleration for 2.5 s. Works in ARCADE behind traffic too.
* **Catch-up:** more than 150 m behind the leading car, your top speed and acceleration go up,
  rising to +6% at 400 m behind. A CATCH-UP badge under your position shows how much.
* **Checkpoint bonus:** cross a checkpoint in the back half of the field and you get a free turbo
  (and a rocket when weapons are on, up to the maximum of 5).

Turning scrubs off speed, as in other racers: the harder you steer and the faster you go, the more you lose
(cars with more GRIP lose less). Take bends with a light touch, or drift through them.

## How it's put together

* `src/track.ts`: OutRun-style segment track (eased curves and hills). Each frame,
  the visible window is re-expressed in player-relative space.
* `src/road.ts`: one dynamic mesh for the road and ground. It is built from per-route
  cross-section profiles with alternating light/dark bands.
* `src/props.ts`, `src/routes/*`: hand-built low-poly props (a few dozen polygons each),
  drawn with one `InstancedMesh` per prop part.
* `src/cars/`: a spec-driven car builder. Each car is a list of body cross-sections
  plus its tail lights, wings, intakes and exhausts. `hd.ts` resamples the sections along splines into the 1992 models and adds the cabin,
  glass and wheels, textured from the car-part tiles in `textures.ts`.
* `src/rivals.ts`: the computer drivers, their AI and the race classification.
* `src/touch.ts`: the multi-touch on-screen controls.
* `src/backdrop.ts`: stepped-gradient sky dome, sun/moon discs, cut-out clouds,
  mountains and skylines that scroll with the road's heading.
* `src/audio.ts`: engine, tyre squeal, crashes, jingles, and an original synth
  soundtrack played live by a step sequencer (detuned saw and FM bell leads, pads,
  arpeggios, gated snares).
