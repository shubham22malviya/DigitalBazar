const express=require("express");
const app=express();
const dotEnv=require('dotenv')
const path=require('path')
const mongoose=require("mongoose");
const cors = require('cors')
const multer  = require('multer')

// configure cors
app.use(cors());

// configure of middlevar and configure express to receive form data
app.use(express.json())



app.use(express.multer())


// configure of .env
dotEnv.config({path:'./.env'})


// processing host and port 
var hostname=process.env.LOCAL_HOST_NAME || 'localhost'
var port = process.env.PORT || 5000




// connect mongoose data base to server 
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{
 
    console.log("data base has been successfully connected")
}).catch((error)=>{
    console.log('data base is not connected',error)
    process.exit(1)
})


// main().then(()=>{
//     console.log("connected to mongodb");
// }).catch((err)=>{
//     console.log(err);
// })
// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/BRAINS-KART-03-RCJS-EVNG');
  
//   }



// simple request
app.get('/',(req,res)=>{
    res.send("server is working");
})




// connection of our api 
app.use('/api/users',require('./Router/router'))


// app.use('api/client',)



app.listen(port,hostname,()=>{
    console.log(`server is working at http://${hostname}:${port}/`);
});


