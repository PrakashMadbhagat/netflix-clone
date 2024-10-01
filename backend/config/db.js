import mongoose from "mongoose";
import { ENV_VARS } from "./envVras.js";

export const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MongoDB connected : " + conn.connection.host);
    }
    catch(error){
        console.error("Error connetced to MongoDB: " + error.message);
        process.exit(1) //1 is error 0 is sucess
    }
}
