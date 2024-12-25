/*
 * Error Handling in Asynchronous Functions in Node.js
In Node.js, asynchronous functions execute in a non-blocking manner, 
often using callbacks, promises, or async/await. 
Proper error handling ensures that the application remains 
robust and handles unexpected issues gracefully.
 */

//1. Error Handling in Callbacks

import fs  from 'fs'

fs.readFile('nonexistent-file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File content:', data);
});


//

import {promises as fsPromises} from 'fs'

fsPromises.readFile('nonexistent-file.txt', 'utf8')
    .then((data) => {
        console.log('File content:', data);
    })
    .catch((err) => {
        console.error('Error reading file:', err.message);
    });


// async await 
async function readFile() {
    try {
        const data = await fsPromises.readFile('nonexistent-file.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err.message);
    }
}

readFile();