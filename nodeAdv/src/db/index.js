import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async() => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //    console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(error) {
        console.log("MONGODB connection error ", error);
        process.exit(1); // Exit from the process
    }
}

export default connectDB;