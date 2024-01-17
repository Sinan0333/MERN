import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


import userRoute from './routes/userRoutes.js'
import adminRoute from './routes/adminRoutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    })
);


app.use('/',userRoute)
app.use('/admin',adminRoute)


app.listen(port,()=>console.log("server started"))