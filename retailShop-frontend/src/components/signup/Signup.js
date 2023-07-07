import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signuppage=()=>{
    const navigate=useNavigate();
    const loginClick=()=>{
        navigate("/login");
    }
    const homeClick=()=>{
        navigate("/");
    }
    
    return(
        <div className="signpage">
            <div className="signupback" onClick={homeClick}>
                <h1 className="retailShop"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
            </div>

            <div className="signupcard">
                <div className="box">
                    <div className="leftside">
                        <h1 className="retailShop insideleft"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: 'white' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: 'white' }}>hop</span>.</h1>
                    </div>
                    <div className="rightside">
                        <div className="signupL">Sign Up</div>
                        <form className="signupform">
                            <label>Email Address:<br/>
                                <input type="email" />
                            </label><br/>
                            <label>Password:<br/>
                                <input type="Password" />
                            </label>
                            <br/>
                            <label>re-enter Password:<br/>
                                <input type="Password" />
                            </label>
                            <br/>
                            <button type="submit" className="loginsubmission">
                                Sign up
                            </button>
                            
                        </form>
                        <div className="furtherinfo">
                            <p>Already an existing member? Please <span className="signUpOnLogin" onClick={loginClick}>Login</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}
export default Signuppage