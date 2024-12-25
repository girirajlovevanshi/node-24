
//Write an example to demonstrate event handling using EventEmitter.

// Import the 'events' module
import EventEmitter from 'events';

// Create a class that extends EventEmitter
class MyEmitter extends EventEmitter {}

// Instantiate the EventEmitter
const myEmitter = new MyEmitter();

// Define an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Define another event listener for the 'status' event
myEmitter.on('status', (code, message) => {
    console.log(`Status Code: ${code}, Message: ${message}`);
});

// Emit the 'greet' event with a name
myEmitter.emit('greet', 'Alice');

// Emit the 'status' event with a code and message
myEmitter.emit('status', 200, 'OK');
