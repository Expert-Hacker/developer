const express = require('express');
const mongoose = require('mongoose')
// const mearnDB_collec = require('../server/models/scheema')
const app= express();
const cookies=require('cookie-parser')
const port = process.env.PORT || 5000;
const dotenv= require('dotenv')
require('./db/db')

//importing router and using it from router.js
app.use(require('./routers/router'))

app.use(cookies())
app.get("/",(req,res)=>{
    res.send("Hello from express server")
}) 

app.get("/about",(req,res)=>{
    res.cookie("kee","djfdhfj")
    res.send("Hello from about express server")
}) 

if(process.env.NODE_ENV=="production")
{
    app.use(express.static("client/build"))
}

app.listen(port,()=>{
    console.log(`Express Server is Running on Port ${port}`)
})