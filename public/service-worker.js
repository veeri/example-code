 
window.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("offline-cache").then((cache) => {
      return cache.addAll(cache_array);
    })
  );
});

window.addEventListener("fetch", (event) => {
  console.log("Fetch request for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
