import "./Checkout.css";
import Topbar from "../productpage/Topbar";
import Totalamount from "./Totalamount";
import Listofitems from "./Listofitems";
import { useSelector } from "react-redux";
const Checkout=()=>{
    const productCart=useSelector(state=>state.cart);
    
    // return(
    //     <>
    //     <h1>check</h1>
    //     {JSON.stringify(productCart)}
    //     </>
    // )

    
    return (
        <>
        <div className="fullcheckout">
            <Topbar/>
            <Totalamount/>
            <Listofitems />
            

        </div>
        </>
    );
}

export default  Checkout