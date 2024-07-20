import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express()


dotenv.config();

const connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
      } catch (error) {
       throw error
      }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
//MIDDLEWARES
app.use(cors(
    {
        credentials: true,
    }
));
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);


app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || 'Something went wrong'
   return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,})
})
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('youtube2022/build'));
  
    // Serve index.html for all other routes (catch-all route)
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'youtube2022', 'build', 'index.js'));
    });
  }
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

app.get("/",(req,res)=>{
    res.send("Hello first request")
})
const PORT = process.env.PORT || 8800;
const host='0.0.0.0';
app.listen(PORT,host,()=>{
    connect()
    console.log("Connected to backend: Manasvi")
})