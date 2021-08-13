console.log("swswsw");

self.addEventListener('fetch', function (event) {
    console.log("aaaa")
    event.respondWith(() => "aaaa");
});