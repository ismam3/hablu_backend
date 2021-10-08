const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.get("/",(req, res)=>{
    let testAccount = nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.emailUser,
          pass: process.env.emailUser
        },
    });
    transporter.sendMail({
        from: process.env.emailUser,
        to: "ismamlabib3@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
    },(err, info)=>{
        if(err){
            res.send("Failed" +err)
            console.log(err)
        }
        else{
            res.send("Send  "+info)
        }
    });  
})

app.listen("4000",()=>{
    console.log("Server is running")
})