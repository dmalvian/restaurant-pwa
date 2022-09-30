import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import CONFIG from './globals/config';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com'
    || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: CONFIG.FONTS_CACHE,
    plugins: [
      new ExpirationPlugin({ maxEntries: 20 }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev'
    && !url.pathname.startsWith('/images'),
  new StaleWhileRevalidate({
    cacheName: CONFIG.API_CACHE,
  }),
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
