import "./Ritemlisting.css";
import Iteminfoform from "./Iteminfoform";

const Ritemlisting=()=>{
    return(
        <div className="alllist">
            <div className="itemlisting">
            <h1 className="retailShop"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
            <div className="headingR">Enter items that are available at your store</div>
            <div className="squaresec">
                <ul className="ssquare">
                    <li>
                        <Iteminfoform/>
                    </li>
                    <li>
                        <Iteminfoform/>
                    </li>
                </ul>
            </div>
        </div>

        </div>
    );
}

export default Ritemlisting
