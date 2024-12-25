// Write code to demonstrate event handling using the EventEmitter class.

// import the EventEmitter class from the events module
import EventEmitter from 'events';

// create a class that extends the EventEmitter class
class MyEmitter extends EventEmitter {}

// create an instance of the MyEmitter class
const myEmitter = new MyEmitter();

// create an event listener for the 'status' event
// the event listener will log the status code and message to the console
myEmitter.on('status',(code, msg) => {
    console.log(`Status Code: ${code} and Message: ${msg}`);
});

// emit the 'status' event with a status code of 200 and a message of 'OK'
myEmitter.emit('status', 200, 'OK');

// emit the 'status' event with a status code of 404 and a message of 'Not Found'
myEmitter.emit('status', 404, 'Not Found');

// Output:
// Status Code: 200 and Message: OK
// Status Code: 404 and Message: Not Found