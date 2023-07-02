import eapp from "./api.js";

const app=eapp;
const port=8000;
app.listen(port,()=>{
    console.log("server is listning on http://localhost:8000")
    
});

