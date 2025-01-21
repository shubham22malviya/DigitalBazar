const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./Models/User");


main().then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/BRAINS-KART-03-RCJS-EVNG');
  
  }
  app.get("/testingUser",async(req,res)=>{
    let sampleUser=new User({
        name:"Pushpank",
        email:"patelpushpank3@gmail.com",
        password:"123@g",
        // isAdmin:false,
        Address:{
            flat:"203",
            Street:"khandwa Naka",
            landmark:"IT park",
            city:"Indore",
            State:"Madhya Pradesh",
            country:"India",
            pin:4564,
            mobile:7999709356,
        },
    });
    await sampleUser.save();
    console.log("sample was saved");
    res.send("testing successfully");
  })
app.get('/',(req,res)=>{
    res.send("server is working");
})
app.listen(5000, ()=>{
    console.log("server is running in port 5000");
});