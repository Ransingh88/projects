import './App.css';
import Navbar from './components/navbar/Navbar';
import Deals from './pages/Deals';
import Footer from './components/footer/Footer';
import {Route,Routes} from 'react-router-dom'
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Deals/>}/>
          {/* <Route path="/deals" element={<Deals/>}/> */}
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
