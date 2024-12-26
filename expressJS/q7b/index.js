//Write a middleware to log all incoming requests to your Express.js application.

import express from 'express';
import fs from 'fs';

const app = express();

app.use((req, res, next) => {
    const ip = req.ip
    fs.appendFileSync('log.txt', `URL: ${req.url} IP: ${ip} \n`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
