let mongoose = require("mongoose")

let con = mongoose.connect("mongodb+srv://jyothinachagoni:jyothi123@db4pm.lmhqcks.mongodb.net/?retryWrites=true&w=majority&appName=db4pm")
//here in the place of compass connection string we given this url from mongodb atlas
if(con)
{
  console.log("connected")  
}else{
    console.log("not co")
}