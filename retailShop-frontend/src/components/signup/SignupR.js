import "./SignupR.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignuppageR=()=>{
    const navigate=useNavigate();
    const loginClickR=()=>{
        navigate("/loginr");
    }
    const homeClick=()=>{
        navigate("/");
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [reEnterPassword,setReEnterPassword]=useState("");
    const [error,setError]=useState("");
    
    const signUp= async (e) =>{

        e.preventDefault();
        try {
            if(!email||!password||!reEnterPassword){
                setError("all fields are mandatory");
                return;
            }
            if(password!==reEnterPassword){
                // console.log("password mismatch");
                setError("password mismatch");
                return;
            }

            await createUserWithEmailAndPassword(getAuth(),email,password);
            console.log("back to home");
            navigate("/");
        } catch (err) {
                // console.log("error checkup on signup page js")
                setError(err.message);
        }
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
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </label><br/>
                            <label>Password:<br/>
                                <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </label>
                            <br/>
                            <label>re-enter Password:<br/>
                                <input type="Password" value={reEnterPassword} onChange={(e)=>setReEnterPassword(e.target.value)} />
                            </label>
                            <br/>
                            <button type="submit" className="loginsubmission" onClick={signUp}>
                                Sign up
                            </button>
                            <div className="error">
                                *{error}
                            </div>
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