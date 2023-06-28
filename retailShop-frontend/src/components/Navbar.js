
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar =()=>{
    const navigate=useNavigate();//hook
    const signUpClick=()=>{
        navigate("prelogin");
    }
    const homeClick=()=>{
        navigate("/");
    }
    return(

        <div className="header">
            <div className="navbar">
                <h1 className="retailShop"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
                <div className="sidebar">
                    <div className="midbar">
                        <button className="contact navbutton">Contact</button>
                        <button className="aboutUs navbutton">About Us</button>
                        <button className="home navbutton" onClick={homeClick}>Home</button>
                    </div>
                    <div className="extreme_sidebar">
                        <button className="login loginbutton">Login</button>
                        <button className="signUp signbutton" onClick={signUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
       

    );
}

export default Navbar;