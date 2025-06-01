self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
    // Skip waiting to activate immediately
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    // Take control of uncontrolled clients
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', event => {
    // Optional: could cache your own shell assets here
    // For now, just pass through everything
    event.respondWith(fetch(event.request));
  });
  