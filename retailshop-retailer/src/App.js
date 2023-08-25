
import './App.css';
import LoginpageR from './components/signup-loginr/LoginpageR';
import SignuppageR from './components/signup-loginr/SignupR';
import Ritemlisting from './components/ritemlisting/Ritemslisting';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="/signupr" element={<SignuppageR/>}/>
      <Route path="/loginr" element={<LoginpageR/>}/>
      <Route path="/itemlisting" element={<Ritemlisting/>}/>

      </Routes>
      </header>
    </div>
  );
}

export default App;
