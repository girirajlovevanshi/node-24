
// built-in and user-defined events in Node.js.


// built-in

import http from 'http'

const server = http.createServer((req,res)=>{
    res.end('Welcome to DashBoard')
})

server.on('request',(req)=>{
    console.log(`Requsest recived, Request Method is: ${req.method}, Request URl: ${req.url}`);
    
})

server.listen(8080,()=> console.log(`server is running on port 8080`))


// user-defined

import EventEmitter from 'events';

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()

myEmitter.on("greet",(name)=>{
    console.log(`Hello ${name}`);
    
})

myEmitter.emit("greet","giri")
