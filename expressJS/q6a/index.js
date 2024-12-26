//Write an API to retrieve data from a MongoDB database using Mongoose.

import express from 'express'; // Importing express module
import mongoose from 'mongoose'; // Importing mongoose module
import bodyParser from 'body-parser'; // Importing body-parser module

const app = express(); // Creating an express application
app.use(bodyParser.json()); // Using body-parser middleware to parse JSON requests

// Function to connect to MongoDB
const connectDB = async () => { 
    try {
        // Connecting to MongoDB
        await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.lhsmx.mongodb.net/videotubeDB");
        console.log('MongoDB Connected...'); // Log success message
    } catch (err) {
        console.error(err.message); // Log error message
        process.exit(1); // Exit process with failure
    }
};

connectDB(); // Call the function to connect to MongoDB

// Define a Mongoose schema for User
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name field of type String, required
    email: { type: String, required: true, unique: true }, // Email field of type String, required and unique
    age: { type: Number, required: true }, // Age field of type Number, required
});

const User = mongoose.model('User', userSchema); // Create a Mongoose model for User

// Define a GET route to retrieve user data from MongoDB based on username
app.get('/users', async (req, res) => {
    try {
        const { name } = req.body; // Get the username from the request parameters
        const user = await User.findOne({ name }); // Find the user in the database by name
        if (user) {
            res.json(user); // Send the found user as a JSON response
        } else {
            res.status(404).send('User not found'); // Send a 404 status code if user not found
        }
    } catch (err) {
        res.status(500).send('Server Error'); // Send a 500 status code for server error
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000'); // Log message when server starts
});
