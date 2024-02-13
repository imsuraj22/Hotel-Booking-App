import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./api/routes/auth.js"
import hotelsRouter from "./api/routes/hotels.js"
import roomsRouter from "./api/routes/rooms.js"
import usersRouter from "./api/routes/users.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongo db');
    } catch (error) {
        throw error
    }
};
mongoose.connection.on('disconnected',()=>{
    console.log("mongoDB disconnected");
})

app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)

app.use((err,req,res,next)=>{
    return res.status(500).json("hello error from handler")
})
app.listen(5000, () => {
    connect()
    console.log("connected successfully");
})