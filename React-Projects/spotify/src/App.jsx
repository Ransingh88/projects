import './App.css';
import Login from './pages/auth/Login'

function App() {
  return (
    <div className="App">
      <div className="app__head"></div>
      <div className="app__content">
        <Login/>
      </div>
      <div className="app__footer"></div>
    </div>
  );
}

export default App;
