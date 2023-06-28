
import './App.css';
import Homepage from './components/Homepage';
import Prelogin from './components/Prelogin';
import {Route,Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/prelogin" element={<Prelogin/>}/>
        
      </Routes>
       
      </header>
    </div>
  );
}

export default App;
