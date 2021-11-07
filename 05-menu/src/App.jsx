import './App.css';
import Menus from './components/Menus';
import Items from './components/Items';
import data from './data'
import {useState } from 'react';

const MenuCatagory = ['all', ...new Set(data.map((item) => item.category))]





function App() {

  const [menuItems, setMenuItems] = useState(data)
  const [catagory, setCatagory] = useState(MenuCatagory)
  
  const filterItems = (catagory) => {
    if (catagory === 'all') {
      setMenuItems(data)
      return;
    }
   const updatedData = data.filter((item)=>item.category === catagory)
   setMenuItems(updatedData)
  }

 
  

  return (
    <div className="App">
      <div className="App__heading">
        <p>Our Menu</p>
        <div className="App__underline"></div>
      </div>
      <div className="App__content">
        <div className="content__menu">
          <Menus filterItems={filterItems} category={ catagory}/>
        </div>
        <div className="content__items"><Items data={menuItems}/></div>
      </div>
    </div>
  );
}

export default App;
