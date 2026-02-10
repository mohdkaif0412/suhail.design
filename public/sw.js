const CACHE_VERSION = '1.4.0';
const CACHE_NAME = `himanshu-portfolio-v${CACHE_VERSION}`;
const STATIC_CACHE_NAME = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `dynamic-${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.png',
  '/logo.svg',
  '/sitemap.xml',
  '/robots.txt',
];

// Version update notification
const notifyUpdate = () => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'UPDATE_AVAILABLE',
        version: CACHE_VERSION,
      });
    });
  });
};

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log(`SW v${CACHE_VERSION} installing...`);

  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force activation of new service worker
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches and notify clients
self.addEventListener('activate', (event) => {
  console.log(`SW v${CACHE_VERSION} activating...`);

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE_NAME &&
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName !== CACHE_NAME
            ) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients
      self.clients.claim(),
    ]).then(() => {
      // Notify clients about the update
      notifyUpdate();
    })
  );
});

// Fetch event - serve from cache, fallback to network
// self.addEventListener('fetch', (event) => {
//   // Skip ALL API requests - never cache or intercept them
//   if (event.request.url.includes('/api/')) {
//     return; // Let the browser handle API calls directly
//   }

//   // Skip POST, PUT, DELETE requests
//   if (event.request.method !== 'GET') {
//     return;
//   }

//   // Skip caching for development files and local development
//   if (
//     event.request.url.includes('?t=') ||
//     event.request.url.includes('localhost') ||
//     event.request.url.includes('127.0.0.1')
//   ) {
//     return; // Let the browser handle it normally
//   }

//   // Only handle http/https requests
//   if (!event.request.url.startsWith('http')) {
//     return;
//   }
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       // Try to fetch from network
//       return fetch(event.request)
//         .then((networkResponse) => {
//           // Check if we received a valid response
//           if (
//             !networkResponse ||
//             networkResponse.status !== 200 ||
//             networkResponse.type !== 'basic'
//           ) {
//             return networkResponse;
//           }

//           // Clone the response for caching
//           const responseToCache = networkResponse.clone();

//           // Cache in dynamic cache for non-static resources
//           const cacheToUse = urlsToCache.includes(new URL(event.request.url).pathname)
//             ? STATIC_CACHE_NAME
//             : DYNAMIC_CACHE_NAME;

//           caches.open(cacheToUse).then((cache) => {
//             cache.put(event.request, responseToCache);
//           });

//           return networkResponse;
//         })
//         .catch(() => {
//           // If fetch fails, return a fallback response for navigation requests
//           if (event.request.mode === 'navigate') {
//             return caches.match('/index.html');
//           }
//           // For other requests, just fail gracefully
//           return new Response('Network error', { status: 408 });
//         });
//     })
//   );
// });

// Message event - handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    // Clear all caches
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      })
    );
  }
});

// Activate event - clean up old caches and notify clients
self.addEventListener('activate', (event) => {
  console.log(`SW v${CACHE_VERSION} activating...`);

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE_NAME &&
              cacheName !== DYNAMIC_CACHE_NAME &&
              cacheName !== CACHE_NAME
            ) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients
      self.clients.claim(),
    ]).then(() => {
      // Notify clients about the update
      notifyUpdate();
    })
  );
});
