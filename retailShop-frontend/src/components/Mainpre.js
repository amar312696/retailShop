import "./Mainpre.css"

const Mainpre =()=>{

    return(
        
        <div className="wholesec">
           <div className="leftsec">
                <h1>For Retailers</h1>
                <p className="retailP">
                The ultimate online retail shop app, connecting shoppers with their favorite brands and products effortlessly.
                </p>
                <div className="signUp">
                    Sign Up
                </div>
                <div className="signUpR">
                    <p>Alerady have an account?<span className="loginR">Login</span> here</p>
                </div>
           </div>
           <div className="rightsec">
            <h1>For Customers</h1>
            <p className="customerP">
            Join millions of shoppers, explore products, enjoy exclusive offers, and elevate your online retail experience.
            </p>
            <div className="signUp">
                    Sign Up
            </div>
            <div className="signUpC">
                <p>
                Already have an account?<span className="loginC">Login</span> here
                </p>
            </div>
           </div>
        </div>
    );
}

export default Mainpre