const http = require('http');

http.createServer((req, res) => {
    const host = req.headers.host; // Mendapatkan host dari header permintaan
    const subdomain = host.split('.')[0]; // Memisahkan subdomain dari host

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Subdomain: ${subdomain}`);
}).listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
