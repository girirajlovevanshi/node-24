
//Write a Node.js script to create a web server that returns 'Welcome to Node.js DashBoard'.
Write an example to demonstrate event handling using EventEmitter.

import http from 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain"
    })
    res.end("Welcome to Node.js DashBoard")
})

const port = 8080

server.listen(port,()=>{
    console.log('server is running on Port:',port);
    
})