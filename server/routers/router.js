const express  = require('express')
const app= express();
const jwt_website = require("jsonwebtoken")
// const {useHistory} = 'rea'
const routers=express.Router();
routers.use(express.json())
const Authenticate = require('../authentication/Authenticate')
const mearnDB_collec =require('../models/scheema')
const bcypt= require('bcrypt');
// const cook_parser = require('cookie-parser')
app.use(express.json());
const cookies=require('cookie-parser')
routers.use(cookies())
// routers.post('/register',(req,res)=>{
//    if(!(req.body.password==req.body.cpassword))
//    {
//        res.send("Both Password should be Same")
//    }
//    mearnDB_collec.findOne({email:req.body.email})
//     // if its true or email exist
//    .then((exist)=>{
//                         if(exist)
//                         {
//                             res.send("Email already Exist")
//                         }
//                         else
//                         {
//                             const Inputdata = new mearnDB_collec({
//                             name:req.body.name,
//                             email:req.body.email,
//                             phone:req.body.phone,
//                             password:req.body.password,
//                             cpassword:req.body.cpassword,
//                                 })
//                             Inputdata.save();
//                             res.send("data Inserted")
//                         }
      
//                     })
// })


routers.post('/register',async(req,res)=>{
  try{
      console.log("testing" + req.body.email)
    if(!(req.body.name=="" && req.body.email=="" && req.body.interest=="" && req.body.password=="" && req.body.cpassword=="")) 
      {
        if((req.body.password==req.body.cpassword))
        { 
            const user_data = await mearnDB_collec.findOne({email:req.body.email})
        if(user_data)
        {
            res.status(400).send("Email Id already Exist")
        }
        else
        {
            const Inputdata = new mearnDB_collec({
                    name:req.body.name,
                    email:req.body.email,
                    interest:req.body.interest,
                    password:req.body.password,
                    cpassword:req.body.cpassword,
                            })
                            // Middleware 
                    const token =await Inputdata.generateAuthtoken()
                   res.cookie("jwt_website",token)
                   console.log("token" + token)        
                   Inputdata.save();
                   

                    res.status(201).send("data Inserted")
        }
}
else
{
    res.status(400).send("Password does not matching")
}
      }
      else
      {
        res.status(400).send("Fields can't be blank")
      }
   
}catch(err)
{
        res.status(400).send("Something went wrong while registration")
    console.log("Something went wrong")
}
})

// LOGIN
routers.post("/login",async(req,res)=>{
    try{
            const user_data = await mearnDB_collec.findOne({email:req.body.email})
            const var_pass = await bcypt.compare(req.body.password,user_data.password) 

            console.log(var_pass);
            if(user_data)
            {
                if((user_data.email==req.body.email)&&(var_pass))
                {   
                    const token =await user_data.generateAuthtoken()
                    res.cookie("jwt_website", token)
                    res.status(200).send("Login Success!")
                    //Retriving Token from generateAuthtoken once user login successfully
                    
                    // string in cookies in bwowser   
                }
                else
                {
                    res.status(400).send("Invalid Creadential")

                }
            }
            else
            {
                res.status(400).send("Invalid Creadential")
            }
        }catch(err)
        {
            res.status(400).send("SOme thing wronfg")
            console.log("some is wrong while login")
        }
})


routers.get("/about",Authenticate,(req,res)=>{
    res.send(req.rootUser)
    // res.send("about page in router")
  
})

routers.get("/landingpage",Authenticate,(req,res)=>{
    res.send(req.rootUser)
  
})
routers.get("/logout",(req,res)=>{
    res.clearCookie("jwt_website");
    res.status(200).send("cookie deletd");
})
module.exports=routers;