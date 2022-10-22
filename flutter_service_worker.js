'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d1d4a03f26d5aae42c662f77dd5eb7d4",
"index.html": "f61bf921e1b09b00e593e9d8191dc9ee",
"/": "f61bf921e1b09b00e593e9d8191dc9ee",
"main.dart.js": "ea9ee5cba9cf10bd17bf0d6e77ce4177",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"assets/asset/jpg/drawing_0_3.jpg": "83d0bdbb46f01365bfbecf46d93290dd",
"assets/asset/jpg/drawing_2_1.jpg": "6b173595c48c66b8f6bdebfd0783509d",
"assets/asset/jpg/drawing_0_2.jpg": "dcacd81da9d36d5fa1f482b6495e0b98",
"assets/asset/jpg/drawing_2_2.jpg": "a17193fe90cb423f024217179a6ac54a",
"assets/asset/jpg/drawing_2_3.jpg": "9acb3391cb39182f438deca61b724fc9",
"assets/asset/jpg/drawing_0_1.jpg": "6fa6adb3c71f5152b833bcda6dee7b60",
"assets/asset/jpg/drawing_0_5.jpg": "bf051e57de8b3dc1486bdcd6fdf7867c",
"assets/asset/jpg/drawing_2_7.jpg": "3fd3c021c3591a9c3b95a60d73e6fde0",
"assets/asset/jpg/drawing_2_6.jpg": "3c9f7f88467fa2810d78d48c1e68fba8",
"assets/asset/jpg/drawing_0_4.jpg": "868c87bd4514173db86211d92569b34f",
"assets/asset/jpg/drawing_0_6.jpg": "aed9b78485bfebc9c70948b06e8c69cf",
"assets/asset/jpg/drawing_2_4.jpg": "1e08af21ebf29931b54db43ed855f992",
"assets/asset/jpg/drawing_2_5.jpg": "d9091db25d38d887daf16ffe8958b4df",
"assets/asset/jpg/drawing_0_7.jpg": "6c031a54f35dbc998c8570d154bbf07f",
"assets/asset/jpg/drawing_0_17.jpg": "6311fdc9b17543d361f9285c4c26a227",
"assets/asset/jpg/drawing_2_12.jpg": "4e7ae9ec5730f760faee18a328cceb0a",
"assets/asset/jpg/drawing_2_13.jpg": "2e9cad0a9e9a9d9c42a10ecfc3a6fab5",
"assets/asset/jpg/drawing_1_1.jpg": "5c3d68c69ef9504470ec45321242f5ec",
"assets/asset/jpg/drawing_0_16.jpg": "3588bcf2b5bd271a5e60eeb47c9c983f",
"assets/asset/jpg/drawing_0_14.jpg": "e527e8dccbc701c4fb8d41097ecfc252",
"assets/asset/jpg/drawing_1_3.jpg": "99e1a2b195923be53101b2be2eb867a5",
"assets/asset/jpg/drawing_2_11.jpg": "1a87cd2a148bf85a8c036e80da89173c",
"assets/asset/jpg/drawing_2_10.jpg": "7cf6569704298f1f25f6be1454bf5eaa",
"assets/asset/jpg/drawing_1_2.jpg": "498e32ebe801dbcbab67085f4ba0321f",
"assets/asset/jpg/drawing_0_15.jpg": "b98be1f9eb829ff79cea226f3210844c",
"assets/asset/jpg/drawing_0_11.jpg": "09a32e853ee47e42dff1b9d487912db1",
"assets/asset/jpg/drawing_1_6.jpg": "706663a49032d30c30fd3a52773a724e",
"assets/asset/jpg/drawing_2_14.jpg": "d7051a27644b4cfc78b7e7c6563e8433",
"assets/asset/jpg/drawing_2_15.jpg": "d36a578b6b80a4ee1592a739ac571b14",
"assets/asset/jpg/drawing_1_7.jpg": "b6be39f71de1af1cdc0beaf9e3fd11bb",
"assets/asset/jpg/drawing_0_10.jpg": "e25987f347a32b517d27841ba332cbd0",
"assets/asset/jpg/drawing_0_12.jpg": "b52a0a1f6adb84ddd3d6189837e708a0",
"assets/asset/jpg/drawing_1_5.jpg": "0564e6773655ba8e0e9f2bd290bed28e",
"assets/asset/jpg/drawing_2_17.jpg": "e74ac9783e933754a93bee372dbc9e1a",
"assets/asset/jpg/drawing_2_16.jpg": "81163e96babad1dbb6f0f1c9ae79f53d",
"assets/asset/jpg/drawing_1_4.jpg": "bcb5ed296d26765aef9fd2caef3b3ecc",
"assets/asset/jpg/drawing_0_13.jpg": "d54fd1b710b7b4844b6ae1bd2742e76f",
"assets/asset/jpg/drawing_1_9.jpg": "fa0505fa2954684f5cb652483e798749",
"assets/asset/jpg/splash.jpg": "a399fa92e2e83cc9935d821b89c7ba53",
"assets/asset/jpg/drawing_1_8.jpg": "a84ad2d65227ae6966c8ac1b100f45ab",
"assets/asset/jpg/drawing_1_15.jpg": "d2c06ff8f52fe124a93fff9893fcd216",
"assets/asset/jpg/drawing_2_8.jpg": "1442723513900ea1f221c0ad03d9301f",
"assets/asset/jpg/drawing_2_9.jpg": "3f38876a03323380b05bf1a6259353d0",
"assets/asset/jpg/drawing_1_14.jpg": "91791b15375df4977c5b915873870567",
"assets/asset/jpg/drawing_0_9.jpg": "1ff39623ff6acf7661c9b1179e71475c",
"assets/asset/jpg/drawing_1_16.jpg": "9bb9d16ca79790fd631832a12d7bd21c",
"assets/asset/jpg/drawing_1_17.jpg": "3105e026243b0996851abab75fe98c39",
"assets/asset/jpg/drawing_0_8.jpg": "8ff5308b16706f2c22e1a14bef2cf075",
"assets/asset/jpg/drawing_1_13.jpg": "58dc60e27014e2fc6949ce6caddc2e13",
"assets/asset/jpg/drawing_1_12.jpg": "3d02d027b95e501e0d592830505df6d6",
"assets/asset/jpg/drawing_1_10.jpg": "609ae6234bf9eb7dbdc9875d2eae4f86",
"assets/asset/jpg/drawing_1_11.jpg": "bbc93d947bb9c309f6686ff3d91435c9",
"assets/asset/open_font_license.txt": "d869c33f4ad20910b51a784a13d89b4d",
"assets/AssetManifest.json": "51fd45741e2ab1b83cf1632878c54209",
"assets/NOTICES": "2d8d0723a264d0b24a5368d3668e818d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "a677003819e3c88a23bb8ebfc8c93f99",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
