let mongoose=require("mongoose");
let treatmentSchema= new mongoose.Schema({
    tname:{
        type:String,
        require:true
    },
    tdesc:{
type:String,
require:true
    },

});
module.exports = mongoose.model("treatment", treatmentSchema)