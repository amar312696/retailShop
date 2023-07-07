import "./SignupR.css"

import { useNavigate } from "react-router-dom";

const SignuppageR=()=>{
    const navigate=useNavigate();
    const loginClickR=()=>{
        navigate("/loginr");
    }
    const homeClick=()=>{
        navigate("/");
    }
    return(
        <div className="signpage">
            <div className="signupback">
                <h1 className="retailShop" onClick={homeClick}><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
            </div>

            <div className="signupcard">
                <div className="box">
                    <div className="leftside">
                        <h1 className="retailShop insideleft"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: 'white' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: 'white' }}>hop</span>.</h1>
                    </div>
                    <div className="rightside">
                        <div className="sur">
                            <div className="signupL marginadjust">Sign Up</div>
                            <div className="asRetailer">(as retailer)</div>
                        </div>
                        
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
                            <p>Already an existing member? Please <span className="signUpOnLogin" onClick={loginClickR}>Login</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}
export default SignuppageR