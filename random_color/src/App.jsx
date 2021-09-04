import { useState } from 'react';
import './App.css';

 

function App() {
  const [color, setColor] = useState("#0098fd")
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"]
  
  function handleRandom() {
    console.log("Clicked")
    let hexCode = "#"
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()]
  }
    console.log(hexCode)
    setColor(hexCode)
  }

  function randomNumber() {
     return Math.floor(Math.random() * hex.length )
  }
 

  return (
    <div className="App" style={{ backgroundColor: color, height: "100vh" }}>
      {/* <h2>Random Color Generator</h2> */}
      <div className="content">
        <p>HexCode : {color}</p>
       <br />
      <button onClick={handleRandom}>Random Color</button>
      </div>
    </div>
  );
}

export default App;
