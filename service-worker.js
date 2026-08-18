const CACHE_NAME = 'white-wolf-scholar-v24';
const ASSETS_TO_CACHE = [
  './WhiteWolfScholar.html',
  './manifest.json'
];

// تثبيت التطبيق وتخزين الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// جلب الملفات (من التخزين إذا كان متاحاً، أو من الشبكة)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});