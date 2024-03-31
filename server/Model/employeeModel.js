let mongoose=require("mongoose");
let employeeSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
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
            },
            salary:{
                type:Number,
                require:true
                    },
});
module.exports = mongoose.model("employee", employeeSchema)