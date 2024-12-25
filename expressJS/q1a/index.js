//  Write an Express.js route to handle POST requests that store user information.

import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express()   

app.use(express.json())

app.post('/user', (req, res) => {
    const { name, email, password } = req.body
    res.json({user: {name, email, password}})
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
