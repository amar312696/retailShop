import "./Listofitems.css";
import Listitems from "./Listitems";
import Productiord from "./Productiord";
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

const Listofitems=()=>{
    const productCart=useSelector(state=>state.cart);
    
    const productCountArray = getProductCountArray(productCart);
    // console.log(productCountArray[0].product);
    return (
        <div className="listofitems">
            <h1 className="loi">List of Items</h1>
            <hr className="horizontal-line"></hr>
            <ul>
                {productCountArray.map((productObj)=>{
                
                    return(
                        <li >
                        <div className="itemslisting">
                            <div className="itemsLi"><Listitems product={productObj.product} /></div>
                            <div className="itemsincrease"><Productiord count={productObj.count} product={productObj.product}/></div>
                        </div>  
                        </li>
                    )

                })}
            </ul>
            
        </div>
    );
}

export default Listofitems;