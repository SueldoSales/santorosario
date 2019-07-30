/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "conclusao.html",
    "revision": "2039cba4122f8dba643f5078b263eb74"
  },
  {
    "url": "css/bulma.min.css",
    "revision": "ce8fb1487ab716e800695ee092508a15"
  },
  {
    "url": "css/santo-rosario.css",
    "revision": "3990d4304804b703ccfce591be932a15"
  },
  {
    "url": "dolorosos.html",
    "revision": "8eb6955d39ab94664785a3b5d5e97fe0"
  },
  {
    "url": "favicon.ico",
    "revision": "a2e13c24a28c78184f041fb83ee55004"
  },
  {
    "url": "gloriosos.html",
    "revision": "e06115e3f148011c9db25a06e8a039fb"
  },
  {
    "url": "gozosos.html",
    "revision": "910bf85666be038913fd4d1315a9ecd0"
  },
  {
    "url": "humans.txt",
    "revision": "fc86bcfea9e4f1aafa5a8a98b559fe20"
  },
  {
    "url": "img/doloroso.jpg",
    "revision": "4bfb5e9a122f2973513d2ffa8f77a51a"
  },
  {
    "url": "img/doloroso2.jpg",
    "revision": "e55cd57a69f981de6eb2997f74e0e104"
  },
  {
    "url": "img/glorioso.jpg",
    "revision": "53ee872040cc17862960dcba5eb2337b"
  },
  {
    "url": "img/gloriosos.jpg",
    "revision": "20363de50fb3d0ed18c4d8044dce6869"
  },
  {
    "url": "img/gozoso.jpg",
    "revision": "f292e767b96002468bac255dc76ebfa8"
  },
  {
    "url": "img/icons/apple-touch-icon-114x114.png",
    "revision": "edfd428665ba1048601f29fbaf713477"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "5a2a8944b87dec1bdc5411728b5f4743"
  },
  {
    "url": "img/icons/apple-touch-icon-144x144.png",
    "revision": "92609e87e4ffe117f4f94ed6dc57041e"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "50301ab3020a89a937f9c920431e1c58"
  },
  {
    "url": "img/icons/apple-touch-icon-57x57.png",
    "revision": "d13e2bae89c6f7b838c23f199cf5c55b"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "da4479bcd8200e50a24488613181a144"
  },
  {
    "url": "img/icons/apple-touch-icon-72x72.png",
    "revision": "d01b0cd1964440ac45be5b11c6737483"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "8a65795ee37611b353e466bffbf8c287"
  },
  {
    "url": "img/icons/code.txt",
    "revision": "3eefd6f286ef79e3471e70d6bd75469a"
  },
  {
    "url": "img/icons/favicon-128.png",
    "revision": "f0feccb65f456b0cd9e7bbabb382eaf4"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "78161f2caf8af9da2a66cd54330b0d76"
  },
  {
    "url": "img/icons/favicon-196x196.png",
    "revision": "4cf1dc179efdcb19d1dacfd6353d2477"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "15aff0f31ec8c5506bee1f53bd06558a"
  },
  {
    "url": "img/icons/favicon-96x96.png",
    "revision": "24fb59eaea9f57424441e9f21905e1ec"
  },
  {
    "url": "img/icons/favicon.ico",
    "revision": "a2e13c24a28c78184f041fb83ee55004"
  },
  {
    "url": "img/icons/mstile-144x144.png",
    "revision": "92609e87e4ffe117f4f94ed6dc57041e"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "416120e63cdc71cf93a334ac8f36102e"
  },
  {
    "url": "img/icons/mstile-310x150.png",
    "revision": "b29ddc5fafde6626997b870b1465f621"
  },
  {
    "url": "img/icons/mstile-310x310.png",
    "revision": "ff1d3d29a44b172e8e58ebbf95d9c114"
  },
  {
    "url": "img/icons/mstile-70x70.png",
    "revision": "f0feccb65f456b0cd9e7bbabb382eaf4"
  },
  {
    "url": "img/Madonna-del-Rosario.jpg",
    "revision": "4698655d5860437e4a0031ed9b613d87"
  },
  {
    "url": "index.html",
    "revision": "05902e545730335a3e3585399174b75b"
  },
  {
    "url": "ladainha.html",
    "revision": "4b1686f2806e9257ad9aeb3ea77c7dd8"
  },
  {
    "url": "manifest.json",
    "revision": "8bd815a1810058f68f27783ef87b45d4"
  },
  {
    "url": "manifest.webapp",
    "revision": "daa5f08ad7c4c3e774d2224157b96a3f"
  },
  {
    "url": "prologo.html",
    "revision": "61f44fd713257923db5653c119660284"
  },
  {
    "url": "README.md",
    "revision": "a7555add141dab10547835cab1224b69"
  },
  {
    "url": "robots.txt",
    "revision": "00733c197e59662cf705a2ec6d881d44"
  },
  {
    "url": "scripts/main.js",
    "revision": "418954db4a96e604a64a432c9718632d"
  },
  {
    "url": "scripts/menu.js",
    "revision": "7c18e78257f481c2b18dabca183ad456"
  },
  {
    "url": "scripts/sw/runtime-caching.js",
    "revision": "e3e34dcb62b5d62453b9215961585488"
  },
  {
    "url": "sinopse.html",
    "revision": "df5a21302e86ef957f4fd4e8004a2872"
  },
  {
    "url": "workbox-config.js",
    "revision": "d92d68099bdb490fd77f98324e10192a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
