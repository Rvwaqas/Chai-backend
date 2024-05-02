//require('dotenv').config({path:'./env'})
//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import express from 'express';
import connectDB from './db/index.js';
import dotenv from "dotenv"
import app from './app.js'



//Second ways of connect database

dotenv.config({
    path:'./.env'
});

connectDB().
then(()=>{
    app.on("Error",(err)=>{
        console.log("Server is not connecting");
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed !!!", err);
})















//First ways 
/*
const app=express();

;(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(err)=>{
        console.log("Erro:" ,err);
        throw err
       });

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port number ${process.env.PORT}`);
       })
    }catch(err){
        console.error("Error", err)
        throw err
    }
})()
*/