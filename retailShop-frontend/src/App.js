
import './App.css';
import Homepage from './components/homepage/Homepage';
import Prelogin from './components/prelogin/Prelogin';
import Loginpage from './components/login/Loginpage';
import Productpage from './components/productpage/Productpage';
import {Route,Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/prelogin" element={<Prelogin/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        
      </Routes>
       
      </header>
    </div>
  );
}

export default App;
