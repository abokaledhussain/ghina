self.addEventListener('install', event => {
  console.log('✅ Service Worker تم تثبيته');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('🚀 Service Worker مفعل');
});

self.addEventListener('fetch', event => {
  // يمكن لاحقًا إضافة كاش هنا
});