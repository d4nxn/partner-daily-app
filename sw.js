const CACHE_NAME = "daily-duo-v19";
const FILES = [
  "./",
  "./index.html",
  "./styles.css?v=21",
  "./app.js?v=21",
  "./manifest.json",
  "./assets/bg-outdoor.svg",
  "./assets/bg-home.svg",
  "./assets/bg-playful.svg",
  "./assets/bg-quiet.svg",
  "./assets/bg-adventure.svg",
  "./assets/app-icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
