import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Resources from './pages/resource/Resources';

function App() {
  return (
    <div className="app">
      <Navbar/>
      
    <Routes>
      <Route index element={<Home/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/resource" element={<Resources/>}/>
    </Routes>
    </div>
  );
}

export default App;
