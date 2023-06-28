import "./Navprelogin.css"

const Navprelogin=()=>{
    return(
        <div className="headerPre">
            <div className="navbarPre">
                <h1 className="retailShop"><span style={{ color: '#0000FF'  }}>r</span><span style={{ color: '#7EB1EC' }}>etail</span><span style={{ color: '#0000FF' }}>S</span><span style={{ color: '#7EB1EC' }}>hop</span>.</h1>
                <div className="sidebarPre">
                    <div className="midbarPre">
                        <button className="contact navbutton Pre">Contact</button>
                        <button className="aboutUs navbutton Pre">About Us</button>
                        <button className="home navbutton Pre">Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navprelogin