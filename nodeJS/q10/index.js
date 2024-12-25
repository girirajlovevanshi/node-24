
//handle HTTP requests in Node.js

import http from 'http'

// Create a server
const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        // get request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World! This is a GET request.');
    } else if (req.method === 'POST' && req.url === '/') {
        // post request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World! This is a POST request.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const port = 8080
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
