import express from "express";
import Product from "./schema.js";
import { fileURLToPath } from 'url';
import path from "path";

const eapp=express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

eapp.set('view engine', 'ejs');
eapp.set('views', path.join(__dirname, '../views'));
eapp.use(express.urlencoded({ extended: true }));
eapp.use(express.static(path.join(__dirname, 'public')));
eapp.use(express.json());

eapp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authtoken, file");
    next();
  });
eapp.get("/",(req,res)=>{
    // console.log(req)
    res.send("hello")
})
eapp.get("/product/:id",async(req,res)=>{
  try {

    const id=req.params.id;
    const data=await Product.findById(id);
    res.json(data);
    
  } catch (error) {
    res.send(error.message);
  }
  
})

eapp.post("/product", async(req,res)=>{
  try {
    const data=req.body;
    console.log(data);
    const product=new Product(data);
    await product.save();
    res.status(200).send("success");
    
  } catch (error) {
    res.send(error.message);
  }
    
})


export default eapp