import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Technologies } from './Components/Skills/Technologies';
import {Home} from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      {/* <Technologies/> */}
    </div>
  );
}

export default App;
