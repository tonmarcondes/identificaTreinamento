const cacheName = 'cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/db.json',
  '/main.js',
  '/src/index.html',
  '/components/linha.js',
  '/components/db.js',
  '/node_modules/bootstrap/dist/css/bootstrap.min.css',
  '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
