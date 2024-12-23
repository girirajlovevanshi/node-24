
//Serve static HTML files using Node.js.

import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const port = 8080

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // get file extension
    const extname = path.extname(filepath)

    let contentType = 'text/html'
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;

        case '.js':
            contentType = 'text/javascrpit';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
    }

    //Read and Serve the file
    fs.readFile('filepath',(err,data)=>{
        if(err){
            if(err.code === 'ENOENT'){
                fs.readFile(path.join(__dirname, 'public','404.html'), (err, data)=>{
                    res.writeHead(404, {'Content-type': 'text/html'})
                    res.end(data , 'utf8')
                })
            }else{
                res.writeHead(500)
                res.end(`server Error: ${err.code}`)
            }
        }else{
            // serve the files
            res.writeHead(200, {'content-type':'text/html'})
            res.end(data,'utf8')
        }
    })
});

// Start the server
server.listen(port, ()=>{
    console.log(`server is running, PORT: ${port}`);
    
})

//getting errors 