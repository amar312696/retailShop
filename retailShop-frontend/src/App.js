
import './App.css';
import Homepage from './components/homepage/Homepage';
import Prelogin from './components/prelogin/Prelogin';
import Loginpage from './components/login/Loginpage';
import Productpage from './components/productpage/Productpage';
import Checkout from './components/checkout/Checkout';
import Ritemlisting from './components/ritemlisting/Ritemslisting';
import Signuppage from './components/signup/Signup';
import SignuppageR from './components/signup/SignupR';
import LoginpageR from './components/login/LoginpageR';
import {Route,Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/prelogin" element={<Prelogin/>}/>
        <Route path="/signup" element={<Signuppage/>}/>
        <Route path="/signupr" element={<SignuppageR/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/loginr" element={<LoginpageR/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/itemlist" element={<Ritemlisting/>}/>
        
      </Routes>
       
      </header>
    </div>
  );
}

export default App;
