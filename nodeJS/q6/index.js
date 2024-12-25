
//Provide the steps to connect a MongoDB database with Express.js.


import express from 'express'
import connectDB from './db.js'
import dotenv from 'dotenv'

dotenv.config({
    path : './.env'
})

const app = express()

app.use(express.json())

connectDB()

app.get('/',(req,res)=>{
    res.send(`DB is Connect `)
})

app.listen(process.env.PORT, ()=> console.log(`server is running`))