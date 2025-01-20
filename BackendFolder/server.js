const express=require("express");
const app=express();
const mongoose=require("mongoose");
main().then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/BRAINS-KART-03-RCJS-EVNG');
  
  }
app.get('/',(req,res)=>{
    res.send("server is working");
})
app.listen(5000,()=>{
    console.log("server is running in port 5000");
});