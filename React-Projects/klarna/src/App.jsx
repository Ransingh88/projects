import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app__container">
        <p className='app__head'>All deals and coupons.</p>
      </div>
      
    </div>
  );
}

export default App;
