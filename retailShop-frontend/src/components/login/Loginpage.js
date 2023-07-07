import "./Loginpage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Loginpage=()=>{
    const navigate=useNavigate();
    const signUpClick=()=>{
        navigate("/signup");
    }
    const homeClick=()=>{
        navigate("/");
    }

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [error,setError]=useState("");

    const login= async (e)=>{
        e.preventDefault();
        try {
            if(!email||!password){
                setError("all fields are mandatory");
                return;
            }
            await signInWithEmailAndPassword(getAuth(),email,password);
            console.log("error checkup on login page js")
            navigate("/");
            
        } catch (error) {
            // console.log("Error")
            setError(error.message);
        }
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
                        <div className="loginL">Login</div>
                        <form className="loginform">
                            <label>Email Address:<br/>
                                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </label><br/>
                            <label>Password:<br/>
                                <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </label>
                            <br/>
                            <button type="submit" className="loginsubmission" onClick={login}>
                                Login
                            </button>
                            <div className="error">
                                *{error}
                            </div>
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
export default Loginpage