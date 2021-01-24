const express = require("express");
const app = express()
const mongoose= require("mongoose");
require("dotenv").config();

//Import routes
const postsRoute = require("./routes/posts");
app.use("/posts",postsRoute);
//Routes
app.get("/",(req,res)=>{
    res.send("Hello World") 
});

//Connect to Data Base
mongoose.connect(process.env.DB_CONNECTS,
    {useNewUrlParser:true, useUnifiedTopology:true},
    ()=>console.log("connected to Date Base"));

app.listen(1000,function(){
        console.log("ServerConnected")
    });
