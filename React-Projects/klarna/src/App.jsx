import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Deals from './pages/Deals';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app__container">
        <Deals/>
      </div>
      
    </div>
  );
}

export default App;
