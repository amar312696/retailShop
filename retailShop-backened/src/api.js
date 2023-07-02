import express from "express";

const eapp=express();

eapp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authtoken, file");
    next();
  });
eapp.get("/",(req,res)=>{
    console.log(req)
    res.send("hello")
})


export default eapp