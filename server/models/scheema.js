const mongoose= require('mongoose');
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const userScheema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//MIDDLE WARE FOR HASHING THE PASSWORD
userScheema.pre('save', async function(next){
    // console.log("insisde pre")
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,10)
        // console.log(this.password)
     
    }
    next()
})
// MIDDLE ENDS HERE

//Generating Token
userScheema.methods.generateAuthtoken = async function()
{
    try{
        const gen_token =await jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:gen_token})
        await this.save();
        return gen_token

    }
    catch(err){
        console.log(err)
    }
}

const MearnDB_collec = new mongoose.model("MEARNDB_COLLEC", userScheema);
module.exports = MearnDB_collec;