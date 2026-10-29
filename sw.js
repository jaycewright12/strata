/* STRATA service worker.
 * - Precaches the app shell + every built-in pack listed in packs/index.js.
 * - HTML / JS / JSON / manifest: network-first (falls back to cache when offline or slow),
 *   so updates show up on the next load without having to bump CACHE by hand.
 * - Everything else (icons): cache-first.
 * Bump CACHE when the precache list changes shape (old caches are deleted on activate). */
importScripts("packs/index.js");
const CACHE = "strata-v12";
const PACK_FILES = (Array.isArray(self.STRATA_PACK_FILES) ? self.STRATA_PACK_FILES : ["core.js"]).map((f) => "./packs/" + f);
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./packs/index.js",
  ...PACK_FILES,
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function isFresh(req, url) {
  return req.mode === "navigate" || /\.(html|js|json|webmanifest)$/.test(url.pathname) || url.pathname.endsWith("/");
}
function putInCache(req, res) {
  if (res && res.ok && res.type === "basic") {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
  }
  return res;
}
function networkFirst(req) {
  return new Promise((resolve) => {
    let settled = false;
    const fallback = () =>
      caches.match(req, { ignoreSearch: true }).then((hit) =>
        hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined)
      );
    const timer = setTimeout(() => {
      fallback().then((hit) => { if (hit && !settled) { settled = true; resolve(hit); } });
    }, NETWORK_TIMEOUT_MS);
    fetch(req, { cache: "no-cache" }).then((res) => {
      clearTimeout(timer);
      putInCache(req, res);
      if (!settled) { settled = true; resolve(res); }
    }).catch(() => {
      clearTimeout(timer);
      fallback().then((hit) => { if (!settled) { settled = true; resolve(hit || Response.error()); } });
    });
  });
}
function cacheFirst(req) {
  return caches.match(req).then((hit) => hit || fetch(req).then((res) => putInCache(req, res)));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // e.g. api.x.ai: never cached
  event.respondWith(isFresh(req, url) ? networkFirst(req) : cacheFirst(req));
});
