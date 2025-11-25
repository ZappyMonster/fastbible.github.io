const CACHE_VERSION = 'v3';
const CACHE_NAME = `fastbible-${CACHE_VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './esv-bible-2001.json',
  './hgb-utf8.json',
  'https://unpkg.com/lunr/lunr.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request)
        .then(fetchResponse => {
          if (fetchResponse.ok) {
            return caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
              });
          }
          return fetchResponse;
        })
      )
      .catch(() => caches.match('./index.html'))
  );
});
