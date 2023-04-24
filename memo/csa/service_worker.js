// キャッシュファイルの指定
var CACHE_NAME = 'moris-caches';
var urlsToCache = [
    '/test-moritama.s3-ap-northeast-1.amazonaws.com/input.html'
    ,'/test-moritama.s3-ap-northeast-1.amazonaws.com/list.html'
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});