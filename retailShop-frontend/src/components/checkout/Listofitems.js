import "./Listofitems.css";
import Listitems from "./Listitems";
import Productiord from "./Productiord";
const Listofitems=()=>{
    return (
        <div className="listofitems">
            <h1 className="loi">List of Items</h1>
            <hr className="horizontal-line"></hr>
            <ul>
                <li>
                    <div className="itemslisting">
                        <div className="itemsLi"><Listitems/></div>
                        <div className="itemsincrease"><Productiord/></div>
                    </div>  
                </li>
                <li>
                    <div className="itemslisting">
                        <div className="itemsLi"><Listitems/></div>
                        <div className="itemsincrease"><Productiord/></div>
                    </div>  
                </li>
                <li>
                    <div className="itemslisting">
                        <div className="itemsLi"><Listitems/></div>
                        <div className="itemsincrease"><Productiord/></div>
                    </div>  
                </li>
                <li>
                    <div className="itemslisting">
                        <div className="itemsLi"><Listitems/></div>
                        <div className="itemsincrease"><Productiord/></div>
                    </div>  
                </li>
                
            </ul>
            
        </div>
    );
}

export default Listofitems;