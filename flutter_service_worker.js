'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "664cebd832e67c8e2ba804635692b1a8",
".git/config": "47d8a80e6336b38a2ecb6188f43f4084",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "695bed9c43d817edcb7da4a10dfd74b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc030053e0481037bd720bec10176423",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d3da277ced4a7eccff65d0f3ebf0883",
".git/logs/refs/heads/main": "8473f6dc7df1847fa36d48be0ce86119",
".git/logs/refs/remotes/origin/main": "c2188932d786a8c307dcd68f22734bfe",
".git/objects/02/b68db6cf50585a9f39d5a565fda51bb27b36ba": "504fae246bef967c7ac4f5ae6254a27f",
".git/objects/04/35e98fc9dcba0cb458bcbba2f0b895522dca67": "be03a0e810089d51aa93e57e7fd71b84",
".git/objects/04/503788007c41fa63453035dba262133cb84e6b": "3ac26f94e0643eef28cb5521ab1ca175",
".git/objects/07/b1d506997cf34ecfbad95b01a586607db26385": "7005ffec960bb4c1063d0f9be9b018e0",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1c/a7fc3c577b63e33e8e334e5303a799167e8f81": "b54ee2ba11df0a4ccf35be38faf5a591",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/afc877e66f2b5b1656523831acb7183d961f06": "8fe05d021c8b2736d0bc5ebc8bd51fd4",
".git/objects/30/b16e6d190e572208127a00c36f6f74f400d882": "906bf62ff14c01b4790d3ef9c68ea6d4",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/1486357e4de12859ecda79fa233330de3987f7": "f3459a4fb4602f9ae5a4cb0dd4209025",
".git/objects/36/3061295b7f034331d976dc0eeff96082529627": "d6eb56492533e58c1fede19d1800e8c5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/d60cba8876f59ca195fed00117b0628616d3a5": "d24a00087e66e7a29d118fddd5232a77",
".git/objects/4d/0d94246c60e111e2137156bf92a0c101ad79e0": "bda97c6b9fe152e4e235ef1602ee2262",
".git/objects/4e/635b66b7cda08d0cf3b8add430194202415f78": "9c1ab608a09d9a1f08912e6d3854829c",
".git/objects/50/74b742e263f147c86c021445b16c656edb35c5": "24805905753b4a623f8c03a9dd6f6ab2",
".git/objects/54/774858d2807cc4fb2875198a080d8bf3fc3bcb": "3dd6b46debac0889fd979710915fd72a",
".git/objects/5a/ea3dde62285f18827e51116f90a1520a9e841e": "8ae3fca64518a67ef16a959b396617c2",
".git/objects/66/afb7512c8c74cef1080afb27ee63067d12b6a9": "84849473f9419c9207ab8f4d42578ade",
".git/objects/6a/9acbd3c8a5fd82d3672c31700f8bd8ddf3f1f0": "b75aa062642ef1b06f1652b2cd7efe30",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/aee37230551d8caefbc0af04f517a522a0c098": "d5a4b5efcc44f7d1a1af13f81e5880fa",
".git/objects/75/209232ca4692932e218d30b4218a6c5c16ebae": "69135ba6b1b98d886ce7ca67a9a837e3",
".git/objects/75/d884abf84fe81c286edeeff64c21e738c19b2b": "b24e665988c8d6a8e1faaf4b4633f651",
".git/objects/7c/4fdfb7cb973dc66812b5581124a272bc933fe2": "b37403ac4b202fc404fa1bb042b46859",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/eddfdf4b7f85562a281a78c98bf53cbefec880": "3f548d351ed3e03751962e9069b4d676",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9f415479390011691d8ea82b38c66a8a483b6b": "a232f7fa203ea1fb28dc333be3d2f5a8",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/91a4e1387565720a8a767ddb06b74a146765fa": "53aa093d685c5b9579bd1bb2b4ba0cf0",
".git/objects/97/62143fefff07684efb7305ae087fb936760541": "b118980ab33f4dfc8595407aa9c2ce7a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/14600c1fb65b41389d1d45f15a0e4dbbefeca3": "c2676cbc597ec01efcea0617b2bea967",
".git/objects/9d/93429cd2ebd473a2981ce845c1e2c28385f34b": "bd85b14ccc7c881bf2c10fed8c050dec",
".git/objects/a1/b9b67bb1cc2283356c23f4fa959b4573c88751": "bfba4aa43a5f0ac9aa1d9bffc5777ebc",
".git/objects/aa/59d3564c231ce3ca4ac67ea9654cbfb8cd4c28": "d0b000567db60fa95aa4ced0d283941a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/5c81e839346d7ceb001a37e85226504b3ae4c9": "8ee0ab648f85cb492f9765c077bb1165",
".git/objects/b4/ca6dc0b958fc1661040cec5faa94468cb29f32": "e8c564410720edd58511e792e6d7036d",
".git/objects/b6/443bc8b1fee005d3e9289dfda3881b3eee9f59": "2328e0ddbe7366fff85307a4afc6fba9",
".git/objects/b6/cf608cca96c126e6112300c52ca7a1012bd919": "52d675ad482b74d26a7ff8288e7dc6ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/fb3588775ca6d96d76ffd5cf4b47228f197302": "aee13ccf26bf95b9700e89ca0303b0a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/39641c1c1ed73cacf28024faef93c69105f443": "afe35e3d6302dc54195418ce5e700ab6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/fb4363720ef95c4d019316cac7235c0d1f3db7": "c60c4eddcb7227bce7987f59878a3f2c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/1da60a485b66302e19994c7eefaba3466af12c": "f747cd6e5023df97894dd95f934d1709",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/55e60939704f3030d1f4f6ecb827bbe61611b0": "0dacdc5aeecd79b74cc36485247b694a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/40b2693653d18e249cbf18bf883c4570c30a1b": "49b7cc9acb404e3cdfa83ab74b1fd10c",
".git/objects/fb/7565ef5d90d3f29e538a271b0d54cffc3dde63": "4d9413fd0a4ceca3a9cc7fc911cf5cce",
".git/ORIG_HEAD": "1bf9c760ba96ce3a40f9d93bc7d127f8",
".git/refs/heads/main": "12982a5317e67795239f656c9b3c3734",
".git/refs/remotes/origin/main": "12982a5317e67795239f656c9b3c3734",
"assets/AssetManifest.bin": "617fd40c1b66c1dced74fa363760618b",
"assets/AssetManifest.bin.json": "661d75f289808ac2fd3b072cffdc95bc",
"assets/AssetManifest.json": "3bd0890d06234559d208faabbcc73442",
"assets/assets/1b_darts.png": "d6d4e1b23b2df80d429874da9b684ef6",
"assets/assets/1_darts.png": "4e00ed83a022553be9d66619e3b575b7",
"assets/assets/2b_darts.png": "cf39903a0b7c27e006ea21bf37e07d8f",
"assets/assets/2_darts.png": "c50977d78a7453fd983ab24c058ab821",
"assets/assets/3b_darts.png": "29e3143fb91982e81b3c32e33690e32d",
"assets/assets/3_darts.png": "86e593ca31a80d559bb92019e3e59b4b",
"assets/assets/app_icon_256.png": "2f35102e33cb6ea09ba9d143bb894b36",
"assets/assets/blank.png": "81da454db244c378a386e3cd5a0206a4",
"assets/assets/crosshair.png": "73c74b5d11d9ff95ef638f7917e18b6e",
"assets/assets/dartboard.png": "36e15ffdf2425d9749a50e8925cf7bea",
"assets/assets/options.png": "9f2bf842cbc431a4ab0fbc33008def3e",
"assets/assets/reset.png": "3700269d8b68f8b15f9c8f9951ee8693",
"assets/assets/score.png": "944caa829f9d7be68f141ceeb78824f6",
"assets/assets/show_crosshair.png": "74b303e3eed5489d7f2af9e7e2a12afc",
"assets/assets/single_play.png": "3fae5540e080c68330a02587ae32832e",
"assets/assets/sounds/dart_hit3.wav": "0cbbcc46b0ad079d368b065309bed81b",
"assets/assets/start_game_from.png": "3b1751fac62bbe86ad03cbe5ec292463",
"assets/assets/tap.png": "0d07fed868195e4324b63522d2d3d032",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4b14f67ed24eb771d39eb14c9fd68a47",
"assets/NOTICES": "fa4da5eb7a7f198875baa3dddc3d69cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b6942e60c138c79f804dcd67c7854f90",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4618bf1354fc89182a10c1774f51ea80",
"/": "4618bf1354fc89182a10c1774f51ea80",
"main.dart.js": "249588a89ed8e87fcc2eff7cf6a91792",
"manifest.json": "8117568b3da4182f0d55177478e757bc",
"version.json": "ae4c83ad432f7717552e491d738cda4e"};
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
