/**
 * Online multiplayer, peer to peer. Browsers find each other through free
 * public Nostr relays (via the Trystero library, loaded only when someone goes
 * online) and then talk directly over WebRTC data channels. No game server.
 * `?net=local` swaps in a BroadcastChannel transport so several tabs of one
 * browser can play together (used for testing).
 *
 * Every message carries absolute state; anything received is untrusted and
 * is validated and clamped before use.
 */

const PROTO = 1;
const APP_ID = 'turbo-horizon-86';

export type Status = 'lobby' | 'race';

export interface PeerInfo {
  id: string;
  name: string;
  car: number;
  paint: number;
  status: Status;
  raceId: string;
  joined: number; // local clock when first heard (join order)
  seen: number; // local clock when last heard
  since: number; // their wall clock when they entered the room: the earliest is the host
  set: RaceSettings | null; // the race settings they're advertising
}

/** The race settings the host picks for everyone in the lobby. */
export interface RaceSettings { route: number; turbos: number; weapons: boolean; ammo: number }

export interface GoMsg {
  raceId: string;
  route: number;
  seed: number;
  turbos: number;
  weapons: boolean;
  ammo: number;
  players: { id: string; name: string; car: number; paint: number }[];
}

export interface StMsg {
  r: string; // race id
  d: number;
  x: number;
  v: number;
  steer: number;
  br: boolean;
  tb: boolean;
  hp: number;
  fin: number; // race time at the finish, -1 while racing
  gun: string; // peer id of whoever they're shooting at, '' when not firing
}

/** Rounds that hit `to`, decided by the shooter. */
export interface HitMsg { r: string; to: string; n: number }

interface Transport {
  selfId: string;
  send(action: string, data: unknown, target?: string): void;
  on(action: string, fn: (data: unknown, from: string) => void): void;
  onLeave(fn: (id: string) => void): void;
  onJoin(fn: (id: string) => void): void;
  leave(): void;
  /** matchmaking servers connected / tried */
  servers?(): [number, number];
  /** direct links: players found (answered an offer), linked now, failed so far */
  links?(): { found: number; linked: number; failed: number };
}

/** Same-browser transport for tests: tabs share a BroadcastChannel. */
function localTransport(room: string): Transport {
  const selfId = Math.random().toString(36).slice(2, 10);
  const ch = new BroadcastChannel(`th86-${room}`);
  const handlers = new Map<string, (data: unknown, from: string) => void>();
  ch.onmessage = (e) => {
    const m = e.data as { a: string; d: unknown; f: string; t?: string };
    if (!m || m.f === selfId || (m.t && m.t !== selfId)) return;
    handlers.get(m.a)?.(m.d, m.f);
  };
  return {
    selfId,
    send: (a, d, t) => ch.postMessage({ a, d, f: selfId, t }),
    on: (a, fn) => handlers.set(a, fn),
    onLeave: () => {},
    onJoin: () => {},
    leave: () => ch.close(),
  };
}

/**
 * A TURN relay for when two browsers can't connect directly (mobile data, office and school
 * networks, some home routers). The Open Relay Project's public static-auth server takes
 * time-limited credentials made from its published shared secret (the TURN REST scheme).
 */
const TURN_HOST = 'staticauth.openrelay.metered.ca';
const TURN_SECRET = 'openrelayprojectsecret';
export async function turnServers(): Promise<RTCIceServer[]> {
  try {
    const username = `${Math.floor(Date.now() / 1000) + 24 * 3600}:th86`;
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(TURN_SECRET), { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
    const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(username)));
    const credential = btoa(String.fromCharCode(...sig));
    return [{
      urls: [`turn:${TURN_HOST}:80`, `turn:${TURN_HOST}:80?transport=tcp`, `turn:${TURN_HOST}:443`, `turns:${TURN_HOST}:443?transport=tcp`],
      username, credential,
    }];
  } catch {
    return []; // no WebCrypto (insecure page): direct connections only
  }
}

async function trysteroTransport(room: string): Promise<Transport> {
  const [t, turnConfig] = await Promise.all([import('trystero'), turnServers()]);
  // ?relay=ws://host:port points at one test relay instead of the public ones (for testing only)
  const relay = new URLSearchParams(location.search).get('relay');
  const relayConfig = relay && /^wss?:\/\/[\w.:-]+\/?$/.test(relay) ? { urls: [relay] } : undefined;
  // watch every peer connection so the lobby can say which step fails (finding vs linking)
  const pcs = new Set<RTCPeerConnection>();
  let found = 0, failed = 0;
  const failedPeers = new Set<string>();
  class Tracked extends RTCPeerConnection {
    constructor(cfg?: RTCConfiguration) {
      super(cfg);
      pcs.add(this);
      let seen = false, lost = false;
      const check = () => {
        if (!seen && this.remoteDescription) { seen = true; found++; }
        if (!lost && this.connectionState === 'failed') { lost = true; failed++; }
        if (this.connectionState === 'closed') pcs.delete(this);
      };
      this.addEventListener('signalingstatechange', check);
      this.addEventListener('connectionstatechange', check);
    }
  }
  const r = t.joinRoom({
    appId: APP_ID, turnConfig, rtcPolyfill: Tracked,
    relayConfig: relayConfig ?? { redundancy: 8 }, // more public relays, so a few dead or fussy ones don't matter
  }, room, {
    // a found player we couldn't link to (Trystero gives up after its handshake timeout)
    onJoinError: (e) => {
      const id = (e as { peerId?: string }).peerId ?? '';
      if (!failedPeers.has(id)) { failedPeers.add(id); failed++; }
      console.warn('join error', e);
    },
  });
  const actions = new Map<string, { send: (d: unknown, o?: { target?: string }) => Promise<void> }>();
  const act = (name: string) => {
    let a = actions.get(name);
    if (!a) {
      a = r.makeAction(name) as unknown as { send: (d: unknown, o?: { target?: string }) => Promise<void> };
      actions.set(name, a);
    }
    return a as unknown as { send: (d: unknown, o?: { target?: string }) => Promise<void>; onMessage: ((d: unknown, c: { peerId: string }) => void) | null };
  };
  return {
    selfId: t.selfId,
    send: (a, d, target) => { act(a).send(d as never, target ? { target } : undefined).catch(() => {}); },
    on: (a, fn) => { act(a).onMessage = (d, c) => fn(d, c.peerId); },
    onLeave: (fn) => { r.onPeerLeave = fn; },
    onJoin: (fn) => { r.onPeerJoin = fn; },
    leave: () => { r.leave().catch(() => {}); },
    links: () => ({ found, linked: [...pcs].filter((pc) => pc.connectionState === 'connected').length, failed }),
    servers: () => {
      const socks = Object.values((t.getRelaySockets as () => Record<string, WebSocket>)() ?? {});
      return [socks.filter((w) => w.readyState === 1).length, socks.length];
    },
  };
}

const num = (v: unknown, lo: number, hi: number, def = 0) => (typeof v === 'number' && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : def);
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '');

/** Player names: uppercase letters, digits, space and dash; 10 characters. */
export function cleanName(s: string): string {
  return s.toUpperCase().replace(/[^A-Z0-9 -]/g, '').replace(/\s+/g, ' ').trim().slice(0, 10);
}

export class Net {
  peers = new Map<string, PeerInfo>();
  status: 'connecting' | 'online' | 'error' = 'connecting';
  error = '';
  selfId = '';
  private tr: Transport | null = null;
  private created = performance.now();
  private timer = 0;
  /** what we tell everyone about ourselves */
  me = { name: 'PLAYER', car: 0, paint: 0, status: 'lobby' as Status, raceId: '', since: Date.now(), set: null as RaceSettings | null };
  onGo: ((m: GoMsg, from: string) => void) | null = null;
  onSt: ((m: StMsg, from: string) => void) | null = null;
  onHit: ((m: HitMsg, from: string) => void) | null = null;

  constructor(readonly room: string, local: boolean) {
    (local ? Promise.resolve(localTransport(room)) : trysteroTransport(room))
      .then((tr) => {
        this.tr = tr;
        this.selfId = tr.selfId;
        this.status = 'online';
        tr.on('hi', (d, f) => this.gotHi(d, f));
        tr.on('go', (d, f) => this.gotGo(d, f));
        tr.on('st', (d, f) => this.gotSt(d, f));
        tr.on('hit', (d, f) => this.gotHit(d, f));
        tr.onJoin((id) => this.sendHi(id));
        tr.onLeave((id) => this.peers.delete(id));
        this.sendHi();
        // heartbeat on a timer, not the frame loop, so a backgrounded tab stays in the lobby
        this.timer = window.setInterval(() => {
          this.sendHi();
          const now = performance.now() / 1000;
          for (const [id, p] of this.peers) if (now - p.seen > 6) this.peers.delete(id);
        }, 1000);
      })
      .catch((e) => {
        this.status = 'error';
        this.error = String(e?.message ?? e);
      });
  }

  /** Kept for the game loop; the heartbeat runs on its own timer. */
  update(_dt: number) {}

  setMe(patch: Partial<Net['me']>) {
    const before = JSON.stringify(this.me);
    Object.assign(this.me, patch);
    if (JSON.stringify(this.me) !== before) this.sendHi();
  }

  sendGo(m: GoMsg) {
    this.tr?.send('go', { p: PROTO, ...m });
  }

  sendSt(m: StMsg) {
    this.tr?.send('st', { p: PROTO, ...m });
  }

  sendHit(m: HitMsg) {
    this.tr?.send('hit', { p: PROTO, ...m });
  }

  private gotHit(d: unknown, from: string) {
    const m = d as Record<string, unknown>;
    if (!m || m.p !== PROTO) return;
    this.onHit?.({ r: str(m.r, 24), to: str(m.to, 64), n: Math.round(num(m.n, 0, 10)) }, from);
  }

  leave() {
    window.clearInterval(this.timer);
    this.tr?.leave();
    this.tr = null;
    this.peers.clear();
  }

  /** The host: whoever has been in the room longest (ties broken by id), us included. Everyone agrees on it. */
  host(): { id: string; name: string; set: RaceSettings | null } {
    let best = { id: this.selfId, name: this.me.name, set: this.me.set, since: this.me.since };
    for (const p of this.peers.values()) {
      if (p.since < best.since || (p.since === best.since && p.id < best.id)) best = { id: p.id, name: p.name, set: p.set, since: p.since };
    }
    return best;
  }

  isHost(): boolean {
    return this.host().id === this.selfId;
  }

  /** Matchmaking (Nostr relay) servers connected / tried; null for the same-browser test transport. */
  servers(): [number, number] | null {
    return this.tr?.servers?.() ?? null;
  }

  links(): { found: number; linked: number; failed: number } | null {
    return this.tr?.links?.() ?? null;
  }

  /** True once we've waited 8 seconds and still reach none of the matchmaking servers. */
  serversDown(): boolean {
    const sv = this.servers();
    return !!sv && sv[1] > 0 && sv[0] === 0 && performance.now() - this.created > 8000;
  }

  /** Lobby players in join order (not including us). */
  list(): PeerInfo[] {
    return [...this.peers.values()].sort((a, b) => a.joined - b.joined);
  }

  private sendHi(target?: string) {
    this.tr?.send('hi', { p: PROTO, ...this.me }, target);
  }

  private gotHi(d: unknown, from: string) {
    const m = d as Record<string, unknown>;
    if (!m || m.p !== PROTO) return;
    const old = this.peers.get(from);
    const now = performance.now() / 1000;
    if (!old) this.sendHi(from); // a newcomer: introduce ourselves straight away
    this.peers.set(from, {
      id: from,
      name: cleanName(str(m.name, 40)) || 'PLAYER',
      car: Math.round(num(m.car, 0, 63)),
      paint: Math.round(num(m.paint, 0, 15)),
      status: m.status === 'race' ? 'race' : 'lobby',
      raceId: str(m.raceId, 24),
      joined: old?.joined ?? now,
      seen: now,
      since: num(m.since, 0, 1e14, Date.now()),
      set: readSettings(m.set),
    });
  }

  private gotGo(d: unknown, from: string) {
    const m = d as Record<string, unknown>;
    if (!m || m.p !== PROTO || !Array.isArray(m.players)) return;
    const players = (m.players as Record<string, unknown>[]).slice(0, 8).map((p) => ({
      id: str(p?.id, 64), name: cleanName(str(p?.name, 40)) || 'PLAYER',
      car: Math.round(num(p?.car, 0, 63)), paint: Math.round(num(p?.paint, 0, 15)),
    })).filter((p) => p.id);
    const go: GoMsg = {
      raceId: str(m.raceId, 24), route: Math.round(num(m.route, 0, 5)), seed: Math.round(num(m.seed, 0, 1e9)),
      turbos: Math.round(num(m.turbos, 1, 9, 5)), weapons: m.weapons === true, ammo: Math.round(num(m.ammo, 10, 999, 300)), players,
    };
    if (go.raceId) this.onGo?.(go, from);
  }

  private gotSt(d: unknown, from: string) {
    const m = d as Record<string, unknown>;
    if (!m || m.p !== PROTO) return;
    this.onSt?.({
      r: str(m.r, 24), d: num(m.d, -1e3, 1e6), x: num(m.x, -50, 50), v: num(m.v, 0, 200), steer: num(m.steer, -2, 2),
      br: m.br === true, tb: m.tb === true, hp: num(m.hp, 0, 100, 100), fin: num(m.fin, -1, 1e5, -1), gun: str(m.gun, 64),
    }, from);
  }
}

function readSettings(v: unknown): RaceSettings | null {
  const m = v as Record<string, unknown>;
  if (!m || typeof m !== 'object') return null;
  return { route: Math.round(num(m.route, 0, 5)), turbos: Math.round(num(m.turbos, 1, 9, 5)), weapons: m.weapons === true, ammo: Math.round(num(m.ammo, 10, 999, 300)) };
}

/** Room name from the URL: `#join` is the public lobby, `#join=code` a private one. */
export function roomFromHash(): string | null {
  const h = location.hash.replace(/^#/, '');
  if (!h.startsWith('join')) return null;
  const code = h.slice(5).toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 24);
  return code || 'lobby';
}
