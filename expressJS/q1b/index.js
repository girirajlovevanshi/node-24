//q1b at q2b
//Write an API to register a new user with Express and store data in a MongoDB database.

import express from 'express';
import connectDB from './db.js';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

connectDB();

const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.json({ msg: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
        
app.listen(process.env.PORT, () => console.log('Server running on port 3000'));
