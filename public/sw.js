const CACHE_IMAGES = "galley-deck-sw";
const CACHE_SCRIPTS = "scripts-sw"

self.addEventListener("install", event => {
    console.log('sw-install')
});

self.addEventListener("fetch", event => {
  const { request } = event;

  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        // если изображение уже есть в кэше — отдаем из кэша
        if (cachedResponse) {
          return cachedResponse;
        }

        // иначе загружаем с сети и кладем в кэш
        return fetch(request).then(networkResponse => {
          return caches.open(CACHE_IMAGES).then(cache => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }

  if (request.destination === "script") {
      event.respondWith(
          caches.match(request).then(res => {
              if (res) {
                  return res;
              }

              return fetch(request).then(networkResponse => {
                  return caches.open(CACHE_SCRIPTS).then(cache => {
                      cache.put(request, networkResponse.clone());
                      return networkResponse;
                  });
              });
          })
      );
  }
});