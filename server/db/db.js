const dotenv= require('dotenv')
const mongoose = require('mongoose')

//getting URL from config.enc file using belllow 2 line
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;

mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false})
.then(()=>{
    console.log("MongoDB Connection success")
})
.catch((err)=>{
    console.log('DB error')
});
