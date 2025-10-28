'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfb014e7f8cb19abaae2f45e48cc1f8b",
"assets/AssetManifest.bin.json": "441fdfcbe215c1544f6a7f9682f9d898",
"assets/AssetManifest.json": "6d6a5fef5089407e6d70b76c921bd038",
"assets/assets/0b_darts.png": "04f230321c794a7eeed20e3b2f166d93",
"assets/assets/0_darts.png": "04f230321c794a7eeed20e3b2f166d93",
"assets/assets/1b_darts.png": "b9f8df77bccb8cfaf39a2a84fe7fc4d6",
"assets/assets/1_darts.png": "d076c9ebe836795c601705c9450e280c",
"assets/assets/2b_darts.png": "2f2ce1cfe2948a0788b32308f8ae5ba4",
"assets/assets/2_darts.png": "75b86f8db328e93238a79b20ec837ba3",
"assets/assets/3b_darts.png": "59f628b367a1eda53780a8f4bddbb4ec",
"assets/assets/3_darts.png": "86e593ca31a80d559bb92019e3e59b4b",
"assets/assets/app_icon_150.png": "5319dfa5b334f6b8fb9b1e66dbe7c19e",
"assets/assets/app_icon_256.png": "2f35102e33cb6ea09ba9d143bb894b36",
"assets/assets/app_icon_44.png": "389cd27a604e5ea00ef8e3a27315c803",
"assets/assets/blank.png": "81da454db244c378a386e3cd5a0206a4",
"assets/assets/crosshair.png": "73c74b5d11d9ff95ef638f7917e18b6e",
"assets/assets/dartboard.png": "7d1ecc67d94e1a988bcfec7eb8518892",
"assets/assets/options.png": "9f2bf842cbc431a4ab0fbc33008def3e",
"assets/assets/reset.png": "3700269d8b68f8b15f9c8f9951ee8693",
"assets/assets/score.png": "944caa829f9d7be68f141ceeb78824f6",
"assets/assets/show_crosshair.png": "74b303e3eed5489d7f2af9e7e2a12afc",
"assets/assets/single_play.png": "3fae5540e080c68330a02587ae32832e",
"assets/assets/sounds/dart_hit3.wav": "0cbbcc46b0ad079d368b065309bed81b",
"assets/assets/start_game_from.png": "3b1751fac62bbe86ad03cbe5ec292463",
"assets/assets/tap.png": "0d07fed868195e4324b63522d2d3d032",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "87fd514d315fdf6685f1856995cda77c",
"assets/NOTICES": "fe8575788daa08099a478ec6b8dd7768",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "417d52a098125ae40fb9d83d48ee1ee5",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bfadee83d30fb6fb41de731de6334156",
"icons/Icon-192.png": "c312ab8ce257e8c3e959c6c43c0edc00",
"icons/Icon-512.png": "7035f8039d704a98959e24ca0535a7ff",
"icons/Icon-maskable-192.png": "c312ab8ce257e8c3e959c6c43c0edc00",
"icons/Icon-maskable-512.png": "7035f8039d704a98959e24ca0535a7ff",
"index.html": "7b64224b53ffc146241b6b82ac5293e5",
"/": "7b64224b53ffc146241b6b82ac5293e5",
"main.dart.js": "29fc0a10c4b86cf7817aee4459d963ac",
"manifest.json": "f33b5cb3dc8b0bef0e41b2ab194032f5",
"version.json": "d98c7ee95b5d3435bc1d89db47e8ec08"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
