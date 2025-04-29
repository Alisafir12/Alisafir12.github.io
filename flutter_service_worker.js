'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "05aceef952835b399cbb3c51622c3f4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "091e849b7b828addb1edf3daa8d9a420",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18e9beb1738f9413fb8ab51ae3b54eb5",
".git/logs/refs/heads/main": "77425c62ca6c5fba5032a3af3857d152",
".git/logs/refs/remotes/origin/main": "5b9bd8557975abf84c67fc32b718c581",
".git/objects/01/d8381cb03cbfa5cd57cd9a003df10173b049e5": "f76cb6d1bf3f0e50517a4a89fca24258",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/e80306f5f710562c99d44b839712243bc34ae9": "f95c0e8feef673d008dfbf633ac91b21",
".git/objects/13/317322139388cdb9c64c5fabc571164e2470d3": "3ffd2a5e3fa1ba6048b79d9e5795f2a6",
".git/objects/20/ecdeb2fa5903442cb69cc364bd17d32108f8e0": "0f8d996ab17ff67d84091052872ed77a",
".git/objects/24/f35893b2afe225c6dcd334cd43ba4eda4eaf0b": "8961d8434dabecc8daeb8de8631aa14a",
".git/objects/2a/44d26437fd5f071f90837a472d8b5046954df6": "532b4dfcc363caf2eadcc98000d2f17d",
".git/objects/2d/3352ce323c208760b26af15ec36db146ef5fd6": "9df3e4a131e317d2a7a5195c78707abb",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/e4b60fb11a726a01f90d0a62c92c79d61bec29": "652b32e52f67b895defd411eb788d00b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/af23109cbac22671b4e1b45822c5e07d6d28da": "9a04d19d7234b8f61a01dcf21db87801",
".git/objects/44/c2e4e4ed5419ecb4795124cf7bc14029d99133": "a7f71cd65e70629a9829c6b56d80424b",
".git/objects/4d/81d7b9a82268a2a423d03e2cca2df514a156ac": "2e6d51eda91b27d545d40a3bbfea66d9",
".git/objects/4e/4619207f8cb0331d0989faea2a3890d3f97f1b": "3a49630e2ede65e9a24e25f674f36b39",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/719fdd157ff61a6bb9a55bac237a0e1e68befa": "6889438550b73eb99e14ed4bdcf5831f",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/216d11977df007d1b3cc2290cc052b3e3683b5": "fce2676c8451cd70cfa8dde813b91420",
".git/objects/59/2bf51b3c23094c87404fc610a9896d7d89bdc0": "4ee22cb7c8d00c3a9a4c2da5b5de2755",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/fd76dbe47222226550cfe08d99afc4623c5238": "4012aa14653299efd42f705678d070a0",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/cd24a78a03428d459658b09544d9a30de7a4fb": "66e3c9a7750998813fd96bc695b58209",
".git/objects/6b/851bd65b5d6005fadcf9a165c309868da39b06": "25419414a2fd734f95f5197e497d6851",
".git/objects/72/65118b7e26167d8dea64adb08c717e3003be2d": "c988e8d24341b9bd8fb05ef673cf44ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6ea1467568af266ed2028dbc7ef7da498bb6a": "e630dd697c1f2cb5b597cdf9489b96e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/a3/c12a2bdbe4f7a5907761e4a0a129753a85206e": "2ff385c1bc01fad3a3221ea17ac64d68",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/da6fcdb682088f8deeeac9af2b63b16ae5107f": "e70eb22c9c80582beaa32d85579ab8c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/c960d0cd5a2dc1eac91b9afc8979df034f7abc": "7e41e9000e61570d8a31133629eec21c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4275177d94d944f82b8d1d1d7b055b475f95b6": "1039438af51092c1e8b446c55c7c80f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/71172b29f3fbd69d9a96cb400fa08bd5a7a957": "ec649e187fe5fa73ddef9f7cea05ba30",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e8/85b272ac7fde7bb556ce4190468be08560a922": "6fb270ec31d98a37b12c839c9411f589",
".git/objects/ea/401d64fbe36ee2510b7d31f7ab01ccb3e8c200": "d3627830cf3adc45952410a60d061164",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3a48e6b7d8b230dc59e3b7665c74cda47fd092": "9de2a7c2eecc7a225ace2e076f2ff799",
".git/objects/ed/25cad37ec764acc6f7908c309fc3001dd0cc90": "97a12530506d6a243cbd9a0bcf30e808",
".git/objects/ee/0b2066f6407c7b1393b23d50b47fcb632cf2da": "33624be939adb029124a547f108f272b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/5e885f3e51531367f3d50aa43dc81a00a96cc5": "4fc2254e92ab37e79ea3e3a443afb935",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/19cd984a233228286dd328b4fe5fab468c4f12": "4d9e7c35e1295e8130aa2144c9a1fa43",
".git/objects/fd/f6854d5ebca435d28d25242ac1a54af8d9e0ce": "c9bddda68702d2e64c77c297d0a2ff9c",
".git/objects/ff/e604e7f8022c95e2623feeb2ddf3b70eae9ff3": "f819971e746e530883e972e6f7455443",
".git/refs/heads/main": "b92da0d0aacba5030e25c8addbd2bc96",
".git/refs/remotes/origin/main": "b92da0d0aacba5030e25c8addbd2bc96",
"assets/AssetManifest.bin": "31569bfe4ffb7f13c90fb11e42e9b4a6",
"assets/AssetManifest.bin.json": "11254710bfa69ea50bbbabc709e6c590",
"assets/AssetManifest.json": "6391129177cbce499717181348a21a7e",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/images/55.png": "db70b635a23bc4a5283928368cf705ac",
"assets/assets/images/nexus.png": "12f56eb9e42099e0c3e1e6268c2c58d3",
"assets/assets/images/nexus2.png": "e930dae82b3bb3625d00aeedab9d7e02",
"assets/assets/Lottie/Error%2520logging%2520in%2520.json": "067366a154cf9137e827f558ca59a5ef",
"assets/assets/Lottie/Error.json": "6562f3d1dec0b0e19a05b606293d6e98",
"assets/assets/Lottie/Error_net.json": "0aee1d32a990b9ccdd2e642ac79faabe",
"assets/assets/Lottie/loading.json": "926215556346fd4e1d2cf5bfe67fda8b",
"assets/assets/Lottie/login.json": "d0c4f58b07f90c46f8c70c29faf741c9",
"assets/assets/Lottie/logo.json": "207b5b6ae5f0a92dc4bd8a1c294da351",
"assets/assets/Lottie/nodata.json": "990b5d5211db72590fdd6c787a17f6ba",
"assets/assets/Lottie/ok.json": "9acf1d0bd734e04c56b94fb61ba38659",
"assets/FontManifest.json": "cf59456400f4f248c639891ff216fabd",
"assets/fonts/MaterialIcons-Regular.otf": "91f3129014d3c8124efbe458f7729955",
"assets/NOTICES": "1838c9df1fc807df8a21be0e87d0c32c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "71a6dc90dd287b0f4f65bbd4113aabbf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "69eac2f0e0acb6aa66fe3ff0f9ad9ce3",
"/": "69eac2f0e0acb6aa66fe3ff0f9ad9ce3",
"main.dart.js": "38cce4d96dbe1d5d3bf9d66bfae9e1b4",
"manifest.json": "5276164cb3ef959639b821de96460fab",
"version.json": "c549842658ab5308d5c867efbccf157f"};
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
