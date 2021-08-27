import './App.css';
import { Card } from './Components/Card/Card';
import { Navbar } from './Components/Navbar/Navbar';
import {Home} from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      {/* <Card/> */}
    </div>
  );
}

export default App;
