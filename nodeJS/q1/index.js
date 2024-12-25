import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({
    limit: '16kb',
    extended: true
}))
app.use(express.static('public'))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send('welcome on DashBoard')
})

const port = process.env.PORT || 8000

app.listen(process.env.PORT,()=> console.log('server is running on PORT:',port))