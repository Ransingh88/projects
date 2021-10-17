import './App.css';
import { List } from './List'
import data from './data'
import { useState } from 'react';

function App() {
  const [people,setPeople] = useState(data)
  return (
    <div className="App">
      <h1>Birthday Reminder</h1>
      <div className="container">
        <h3> {people.length } Birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
