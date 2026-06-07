if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/gold-bear-blog/sw.js')
      .then(registration => {
        console.log('[SW] Registered:', registration.scope);
      })
      .catch(error => {
        console.log('[SW] Registration failed:', error);
      });
  });
}
