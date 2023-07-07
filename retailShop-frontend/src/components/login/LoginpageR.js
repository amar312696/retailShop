import "./LoginpageR.css"
import { useNavigate } from "react-router-dom";

const LoginpageR=()=>{
    const navigate=useNavigate();
    const signUpClick=()=>{
        navigate("/signupr");
    }
    const homeClick=()=>{
        navigate("/");
    }
    return(
        <div className="logpage">
            <div className="loginback">
                <h1 className="retailShop" onClick={homeClick}><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
            </div>

            <div className="logincard">
                <div className="box">
                    <div className="leftside">
                        <h1 className="retailShop insideleft"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: 'white' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: 'white' }}>hop</span>.</h1>
                    </div>
                    <div className="rightside">
                    <div className="Lr">
                            <div className="loginL marginadjust">Login</div>
                            <div className="asRetailer ">(as retailer)</div>
                        </div>
                    
                        <form className="loginform">
                            <label>Email Address:<br/>
                                <input type="email" />
                            </label><br/>
                            <label>Password:<br/>
                                <input type="Password" />
                            </label>
                            <br/>
                            <button type="submit" className="loginsubmission">
                                Login
                            </button>
                            
                        </form>
                        <div className="furtherinfo">
                            <p>Not a member yet? Become a member <span className="signUpOnLogin" onClick={signUpClick}>Sign Up</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}
export default LoginpageR