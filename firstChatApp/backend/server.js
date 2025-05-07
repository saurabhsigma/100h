import express from "express";
import dotenv from "dotenv";

// router imported
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req,res)=>{
    // root route http://localhost:5000
    res.send("hello there!")
})

app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`app running on ${PORT}`)
})