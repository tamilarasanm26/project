import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import db from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import cookieParser from 'cookie-parser'
import AdminRoutes from './routes/AdminRoutes.js'
dotenv.config()
const PORT = process.env.PORT || 3000
const app=express()

//mongo db
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)
db()
app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT,() =>{
    console.log("server run on 4000");
})