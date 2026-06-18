// 安裝 Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] 安裝成功');
});

// 攔截網路請求 (這裡留空，確保你的 LIFF 和 API 隨時抓取最新資料)
self.addEventListener('fetch', (e) => {
    // PWA 必須要有 fetch 監聽器才能觸發「加到主畫面」的安裝按鈕
});
