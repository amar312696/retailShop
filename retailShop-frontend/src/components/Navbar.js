
import "./Banner.css"
const Banner =()=>{
    return(
        <div className="header">
            <div className="navbar">
                <h1 className="retailShop"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
                <div className="sidebar">
                    <div className="midbar">
                        <button className="contact navbutton">Contact</button>
                        <button className="aboutUs navbutton">About Us</button>
                        <button className="home navbutton">Home</button>
                    </div>
                    <div className="extreme_sidebar">
                        <button className="login navbutton">Login</button>
                        <button className="signUp navbutton">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
       

    );
}

export default Banner;