
import "./Banner.css"
const Banner =()=>{
    return(
        <div className="header">
            <div className="navbar">
                <h1 className="retailShop">retailShop.</h1>
                <div className="sidebar">
                    <div className="midbar">
                        <button className="contact">Contact</button>
                        <button className="aboutUs">About Us</button>
                        <button className="home">Home</button>
                    </div>
                    <div className="extreme_sidebar">
                        <button className="login">Login</button>
                        <button className="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
       

    );
}

export default Banner;