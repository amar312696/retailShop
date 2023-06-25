
import './App.css';
import Navbar from './components/Navbar';
import Sideintro from './components/Sideintro';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Sideintro />
      {/* <Background/> */}
       
      </header>
    </div>
  );
}

export default App;
