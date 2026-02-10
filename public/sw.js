const CACHE_VERSION = '2.0.0';
const CACHE_NAME = `portfolio-v${CACHE_VERSION}`;

const urlsToCache = [
  '/',
  '/favicon.png',
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

// Install event - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  console.log(`SW v${CACHE_VERSION} installing...`);
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - CLEAR ALL CACHES and take control
self.addEventListener('activate', (event) => {
  console.log(`SW v${CACHE_VERSION} activating - clearing ALL caches...`);

  event.waitUntil(
    // Delete ALL caches to ensure clean state
    caches.keys().then((cacheNames) => {
      console.log('Clearing all caches:', cacheNames);
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('All caches cleared');
      // Take control of all clients immediately
      return self.clients.claim();
    }).then(() => {
      notifyUpdate();
    })
  );
});

// Fetch event - NEVER intercept API requests
self.addEventListener('fetch', (event) => {
  // CRITICAL: Never intercept API requests - always let them go to the network
  if (event.request.url.includes('/api/')) {
    return; // Let browser handle API calls directly
  }

  // Never intercept POST, PUT, DELETE requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Never intercept localhost requests
  if (
    event.request.url.includes('localhost') ||
    event.request.url.includes('127.0.0.1')
  ) {
    return;
  }

  // For all other GET requests, just let them pass through to network
  // No caching to ensure fresh content
});

// Message event - handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      })
    );
  }
});
