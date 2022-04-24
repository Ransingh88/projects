import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      
    <Routes>
      <Route index element={<Home/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
