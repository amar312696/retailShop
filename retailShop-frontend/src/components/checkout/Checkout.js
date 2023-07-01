import "./Checkout.css";
import Topbar from "../productpage/Topbar";
import Totalamount from "./Totalamount";
import Listofitems from "./Listofitems";
const Checkout=()=>{
    return (
        <>
        <div className="fullcheckout">
            <Topbar/>
            <Totalamount/>
            <Listofitems/>
        </div>
        </>
    );
}

export default  Checkout