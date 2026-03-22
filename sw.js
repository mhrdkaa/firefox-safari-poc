self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('/trigger-bypass')) {
        console.log("SW: Intercepting request, synthesizing download...");
        const fileContent = "Ini file hasil bypass Service Worker!";
        const blob = new Blob([fileContent], { type: 'application/octet-stream' });
        const response = new Response(blob, {
            headers: {
                'Content-Disposition': 'attachment; filename="sw_bypass.txt"',
                'Content-Type': 'application/octet-stream'
            }
        });

        event.respondWith(response);
    }
});