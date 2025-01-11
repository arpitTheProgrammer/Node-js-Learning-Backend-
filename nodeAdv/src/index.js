// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { DB_NAME } from './constants';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})
// How to Connect database with backend

connectDB() // imported from db file





/*
const app = express()
;( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("Unable to connect database")
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`Serve at ${process.env.PORT}`)
       })
    } catch(error){
        console.log("ERROR", error)
    }
})()
*/
