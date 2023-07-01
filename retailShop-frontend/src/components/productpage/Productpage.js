
import Topbar from "./Topbar";
// import Backgroundpro from "./Backgroundpro";
import Sidebar from "./Sidebar";
import Grid from "./Grid";
import "./Productpage.css"

const Productpage=()=>{
    return(
        <div className="entireProductPage">
        {/* <Backgroundpro/> */}
            <Topbar/>
            <div className="bottomBar">
                <div><Sidebar/></div>
                <div><Grid/></div>
            </div>
        </div>
    )
}
export default Productpage