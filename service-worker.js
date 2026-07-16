const CACHE_NAME = "exa-caderno-v19";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./public/vendor/leaflet/leaflet.css?v=19",
  "./public/vendor/leaflet/leaflet.js?v=19",
  "./public/vendor/leaflet/images/layers.png",
  "./public/vendor/leaflet/images/layers-2x.png",
  "./public/vendor/leaflet/images/marker-icon.png",
  "./public/vendor/leaflet/images/marker-icon-2x.png",
  "./public/vendor/leaflet/images/marker-shadow.png",
  "./src/styles.css?v=19",
  "./src/data.js?v=19",
  "./src/protocols-data.js?v=19",
  "./src/compaction-data.js?v=19",
  "./src/app.js?v=19",
  "./public/assets/excelencia-logo.jpg",
  "./public/assets/rubisck-symbol.png",
  "./public/assets/icon-192.png",
  "./public/assets/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => Response.error());
    })
  );
});
