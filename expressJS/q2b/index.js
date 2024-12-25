// q2b at q1b 
// Write an API in Express.js to handle user login and return a JWT token.

import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express() 

app.use(express.json())

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if(username === 'user' && password === 'password') {
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET)
        res.json({ token })
    } else {
        res.status(401).json({ message: 'Invalid username or password' })
    }
})

app.listen(3000, () => {    
    console.log('Server is running on port 3000')
})