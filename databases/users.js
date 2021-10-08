const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:"."});

const DB = process.env.users_DB

mongoose.connect(DB, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("Connection established")
}).catch((error)=>{
    console.log(error)
})
