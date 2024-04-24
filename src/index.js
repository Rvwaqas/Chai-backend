//require('dotenv').config({path:'./env'})
//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import express from 'express';
import connectDB from './db/index.js';
import dotenv from "dotenv"



//Second ways of connect database

dotenv.config({
    path:'./env'
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