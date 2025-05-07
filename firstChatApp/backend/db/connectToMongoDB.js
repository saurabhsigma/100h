import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error connectting to mongodb" , error);
    }
}

export default connectToMongoDB;