import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({})
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo DB Connected successfully');
    }catch{
        console.log("Error Mongo DB Connect");
    }
}
export default connectDB

