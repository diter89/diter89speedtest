const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/test', (req, res) => {
    exec('speed-test --json', (err, stdout, stderr) => {
        if (err || stderr) {
            res.send('Error while testing internet speed.');
            return;
        }
        const result = JSON.parse(stdout);
        const response = `
            Ping: ${result.ping} ms<br>
            Download: ${result.download} Mbps<br>
            Upload: ${result.upload} Mbps
        `;
        res.send(response);
    });
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
