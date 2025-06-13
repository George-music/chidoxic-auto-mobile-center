self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('chidoxic-v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      // Add more assets (css, js, images) as needed
    ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
