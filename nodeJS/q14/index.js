
//Write code to handle HTTP POST requests in Express.js.

// Importing required modules using ES6 import syntax
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})

// Initialize an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST route to handle the incoming request
app.post('/submit', (req, res) => {
    // Extract data from the request body
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Respond with a success message
    res.status(200).json({
        message: 'Data received successfully',
        data: { name, email },
    });
});

// Define the port the server will listen on
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
