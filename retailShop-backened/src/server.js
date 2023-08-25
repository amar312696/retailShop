import eapp from "./api.js";
import mongoose from "mongoose";



mongoose.connect("mongodb+srv://amar312696:amar312696@amarcluster.jehiv78.mongodb.net/retailShop?retryWrites=true&w=majority")
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection open");
});
const app=eapp;
const port=8000;
app.listen(port,()=>{
    console.log("server is listning on http://localhost:8000")
    
});

