import "./Grid.css"
import Product from "./Product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function getProductCountArray(productsArray) {
    const productCountMap = {};
  
    // Count occurrences of each product
    productsArray.forEach((product) => {
        const productId = product.id;
        if (!productCountMap[productId]) {
          productCountMap[productId] = {
            product,
            count: 0,
          };
        }
        productCountMap[productId].count++;
      });
    
      // Convert the productCountMap values into an array of tuples
      const productCountArray = Object.values(productCountMap);
    
      return productCountArray;
}

function getCountForAProduct(productsArray, inpProduct) {
    let ans = 0;
    productsArray.forEach((productObj) => {
        if(productObj.product.id === inpProduct.id) {
            
            ans = productObj.count;
        }
    })
    return ans;
}

const Grid = (props) => {
    const {json,setMainData,mainData}=props;
    const [isloaded,setIsloaded]=useState(false);
    const [data,setData]=useState({});
    const [error,setError]=useState("");
    const products=json.products;
    const productCart=useSelector(state=>state.cart);
    const productCountArray = getProductCountArray(productCart);
    
    return (

        <div class="grid-container">
            {products.map((content,index)=>{
                return(
                    
                    <div class="grid-item"><Product content={content} index={index} setMainData={setMainData} mainData={mainData} countInitial={getCountForAProduct(productCountArray, content)} /></div>

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