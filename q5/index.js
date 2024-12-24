
// built-in and user-defined events in Node.js.


// built-in

/*
These are pre-defined events provided by Node.js modules. 
They are triggered automatically by the Node.js runtime or its core modules.

Examples:

'data': Triggered when data is available on a readable stream.
'end': Emitted when a readable stream has no more data.
'error': Emitted when an error occurs in an object like a stream or server.
'request': Emitted by the HTTP server when a new request is received.
Usage: Built-in events are tied to specific Node.js modules like http, fs, or stream. 
You only need to listen to these events to perform actions.
*/

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
