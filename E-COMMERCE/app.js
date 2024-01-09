const express=require('express')
const app=express()
const cors=require('cors')
const mongoose =require('mongoose')
const cloudinary=require('cloudinary')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
require('dotenv').config()  // connect env file this is one module


//cloudinary details
cloudinary.config({
    cloud_name: 'dxecndiv4',
    api_key: '645558696592378',
    api_secret: 'H6y4ufLJkbSS0ixp_X3wTuGUobM',
    secure: true,
  });

// mongoose connect
mongoose.connect(process.env.DB_URL)

.then(()=>{
    console.log("Database is connected");
})
.catch(()=>{
    console.log("database is not connected");
})
// middleware
app.use(express.urlencoded({extended:false}))
app.use(cors())





app.listen(process.env.port,()=>{
    console.log("server is running",process.env.port);
})