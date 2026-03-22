self.addEventListener('install', (event) => {
    console.log("SW: Menginstal...");
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log("SW: Aktif dan mengambil alih!");
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('trigger-bypass')) {
        console.log("SW: BOOM! Request dicegat. Menyuntikkan file download...");

        const fileContent = "Ini file hasil bypass Service Worker di GitHub Pages!";
        const blob = new Blob([fileContent], { type: 'application/octet-stream' });

        const response = new Response(blob, {
            headers: {
                'Content-Disposition': 'attachment; filename="sw_pwned.txt"',
                'Content-Type': 'application/octet-stream'
            }
        });

        event.respondWith(response);
    }
});