import express from 'express'
import dotenv from 'dotenv'


import userRoute from './routes/userRoutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
const app = express()
const port = process.env.PORT || 5000


app.use('/',userRoute)


app.listen(port,()=>console.log("server started"))