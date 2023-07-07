import "./Mainpre.css"
import { useNavigate } from "react-router-dom";

const Mainpre =()=>{

    const navigate=useNavigate();
    const loginClick=()=>{
        navigate("/login");
    }
    const signupC=()=>{
        navigate("/signup")
    }
    const signupR=()=>{
        navigate("/signupr")
    }
    const loginClickR=()=>{
        navigate("/loginr");
    }

    return(
        
        <div className="wholesec">
           <div className="leftsec">
                <h1>For Retailers</h1>
                <p className="retailP">
                The ultimate online retail shop app, connecting shoppers with their favorite brands and products effortlessly.
                </p>
                <div className="signUp" onClick={signupR}>
                    Sign Up
                </div>
                <div className="signUpR">
                    <p>Alerady have an account? <span className="loginR" onClick={loginClickR}>Login</span> here</p>
                </div>
           </div>
           <div className="rightsec">
                <h1>For Customers</h1>
                <p className="customerP">
                Join millions of shoppers, explore products, enjoy exclusive offers, and elevate your online retail experience.
                </p>
                <div className="signUp" onClick={signupC}>
                        Sign Up
                </div>
                <div className="signUpC">
                    <p>
                    Already have an account? <span className="loginC" onClick={loginClick}>Login</span> here
                    </p>
                </div>
           </div>
        </div>
    );
}

export default Mainpre