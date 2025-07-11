

const CACHE_NAME = 'survivor-kit-cache-v13';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/manifest.json',
  '/types.ts',
  '/constants.ts',
  '/firebaseConfig.ts',
  '/hooks/useGeolocation.ts',
  '/hooks/useSOS.ts',
  '/components/Layout.tsx',
  '/components/DashboardScreen.tsx',
  '/components/CommsScreen.tsx',
  '/components/VideosScreen.tsx',
  '/components/BunkerScreen.tsx',
  '/components/SOSModal.tsx',
  '/components/IdentifierScreen.tsx',
  '/components/ShareModal.tsx',
  '/components/RemediesScreen.tsx',
  '/components/RadioTuner.tsx',
  '/components/LoginScreen.tsx',
  '/components/icons/Icons.tsx',
  'https://cdn.tailwindcss.com',
  'https://esm.sh/qrcode',
  'https://esm.sh/firebase@10.12.2/app?target=es2022',
  'https://esm.sh/firebase@10.12.2/firestore?target=es2022'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Use addAll with a catch to prevent one failed resource from failing the entire cache
        return cache.addAll(URLS_TO_CACHE).catch(err => {
          console.error('Failed to cache all URLs:', err);
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', event => {
    // We only handle GET requests, as other requests are dynamic (like API calls).
    if (event.request.method !== 'GET') {
        return;
    }
    
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        // For URLs that are not in the cache (like from esm.sh), fetch and cache them.
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                 cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});