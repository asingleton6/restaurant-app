if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/sw.js').then(function() {
    console.log("Service Worker registration worked.");
  }).catch(function() {
    console.log("Service worker registration failed.");
  });
}