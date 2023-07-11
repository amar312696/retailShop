
import Topbar from "./Topbar";
// import Backgroundpro from "./Backgroundpro";
import Sidebar from "./Sidebar";
import Grid from "./Grid";
import "./Productpage.css"
import { useLocation } from "react-router-dom";
import obj1 from "../../mockdata/shop1";
import obj2 from "../../mockdata/shop2";
import { useState } from "react";
const Productpage=()=>{

    const path =useLocation().pathname;
    const id=path.split("/")[2];
    let [mainData,setMainData]=useState({});
    
    return(
        <div className="entireProductPage">
        {/* <Backgroundpro/> */}
            <Topbar mainData={mainData}/>
            <div className="bottomBar">
                <div><Sidebar/></div>
                <div><Grid json={id===1?obj1:obj2} setMainData={setMainData} mainData={mainData} /></div>
            </div>
        </div>
    )
}
export default Productpage