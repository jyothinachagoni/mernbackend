let express = require ("express");
require("./dbconnect");
let cors= require("cors");
let Treatment = require("./Model/treatmentModel")
let Signup = require("./Model/signupModel");
let Employee = require("./Model/employeeModel")

let app = express();

app.use(cors());
app.use(express.json());

app.post("/treatment", async(req, res)=>{
let treatment = new Treatment(req.body)
let result=await treatment.save();
res.send(result)
})
app.get("/treatment", async(req, res)=>{
    const treatments = await Treatment.find();
    res.send(treatments)
    })
 app.delete("/treatment/:id", async(req, res)=>{
        const result = await Treatment.deleteOne({ _id: req.params.id });
        res.send(result)
        })
 app.get("/treatment/:id", async(req, res)=>{
            const result = await Treatment.findOne({ _id: req.params.id });
            res.send(result)
            })
app.put("/treatment/:id", async(req, res)=>{
    const result = await Treatment.updateOne(
        {_id: req.params.id},
        {$set: req.body}
);
res.send(result)
    });

    app.post("/signup", async(req, res)=>{
        let {uname, email, phone, password, cpassword, address}=req.body;
let exists = await Signup.findOne({email:email})
if(exists){
    res.send("user exists")
}
    else if(password !== cpassword){
res.send("passwords are not matching")
    }
    else {
        let user = new Signup(req.body)
        let result=await user.save();
        res.send(result)
    }
        });
    
app.post("/login", async(req, res)=>{
    let { email, password } = req.body;
let exists =  await Signup.findOne({email: email});
if(!exists){
    res.send("user not found")

}
else if(exists.password !== password){
res.send("invalid credentials")
}
else{
    res.send("Valid")
}
});
       
app.post("/employee", async(req, res)=>{
    let emp = new Employee(req.body)
    let result=await emp.save();
    res.send(result)
    })         
app.listen(4000);