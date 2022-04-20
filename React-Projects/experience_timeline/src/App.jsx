import logo from './logo.svg';
import './App.css';
import Experience from './Experience';
import Card from './Card';

function App() {
  return (
    <div className="app">
      <Experience>
        <Card/>
        <Card/>
      </Experience>
    </div>
  );
}

export default App;
