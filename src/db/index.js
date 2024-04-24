import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';



const connectDB= async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB is connected and DB Host${connectionInstance.connection.host}`)    
    }catch(error){
console.log("error a rha hai",error);
process.exit(1);
    }
}

export default connectDB;