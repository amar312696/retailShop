import "./Grid.css"
import Product from "./Product";
import { useEffect, useState } from "react";
const Grid = (props) => {
    const {json,setMainData,mainData}=props;
    const [isloaded,setIsloaded]=useState(false);
    const [data,setData]=useState({});
    const [error,setError]=useState("");
    const products=json.products;
    
    return (

        <div class="grid-container">
            {products.map((content,index)=>{
                return(
                    <div class="grid-item"><Product content={content} index={index} setMainData={setMainData} mainData={mainData}/> </div>
                );
                
            })}
            {/* <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div>
            <div class="grid-item"><Product/> </div> */}
        </div>
    );
}

export default Grid;