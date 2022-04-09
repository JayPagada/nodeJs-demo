const express = require("express");
const dotenv = require("dotenv");

// lode env vars

dotenv.config({path: "./config/config.env"});

const app = express();

const PORT  = process.env.PORT || 5000;

app.get("/api/v1/bootcamps",(req,res)=>{
    res.status(200).json({ success: true, message:"this for get all bootcamps",data:{id:1}});
})
app.get("/api/v1/bootcamps/:id",(req,res)=>{
    res.status(200).json({ success: true, message:`this for get one bootcamps ${req.params.id}`,data:{id:1}});
})
app.post("/api/v1/bootcamps",(req,res)=>{
    res.status(200).json({ success: true, message:"this for create new bootcamps",data:{id:1}});
})
app.put("/api/v1/bootcamps/:id",(req,res)=>{
    res.status(200).json({ success: true, message:`this for update bootcamps ${req.params.id}`,data:{id:1}});
})
app.delete("/api/v1/bootcamps/:id",(req,res)=>{
    res.status(200).json({ success: true, message:`this for delete bootcamps ${req.params.id}`,data:{id:1}});
})
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} Mode on port is ${PORT} ` ));