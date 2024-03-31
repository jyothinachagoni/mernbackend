let mongoose=require("mongoose");
let signupSchema= new mongoose.Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
type:String,
require:true
    },
    password:{
        type:String,
        require:true
            },
            
    cpassword:{
type:String,
require:true
    },
    phone:{
        type:Number,
        require:true
            },
    address:{
        type:String,
        require:true
            }
       
});
module.exports = mongoose.model("signup", signupSchema)