import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import Navbar from './components/Navbar';
import PizzaCard from './components/PizzaCard';

function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar/>
      <div className='body_container'>
        <div className="pizzaMenu">
        {data.map(ele=>{
         return <PizzaCard pizzaData={ele}/>
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
