const jwt_website = require("jsonwebtoken")
const MearnDB_collec = require('../models/scheema')
const cookies=require('cookie-parser')
const express = require('express')
const app= express();
app.use(express.json());
app.use(cookies())
async function  Authenticate(req,res,next)
{
    console.log("inside authentivaction");
    try{
    console.log("inside authentivaction");
    console.log("inside authentivaction2"); 
    const token = req.cookies.jwt_website
    console.log("token "+ token)
    console.log("inside authentivaction3"); 
    const ver_cookie =await jwt_website.verify(token,process.env.SECRET_KEY)

    console.log("coookie"+ver_cookie)
    const rootUser = await MearnDB_collec.findOne({_id:ver_cookie._id, "tokens.token":token})

    if(!rootUser)
    {
        throw new error("user not found token")
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    // res.status(200).send("user genune")
    next();

    }catch(err)
    {
        console.log(err)
        res.status(400).send("user not found cookie")
    }
}
module.exports =Authenticate;