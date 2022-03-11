import './App.css';
import Navbar from './components/Navbar';
import Team from './components/Team';
import {Routes,Route,Navigate} from 'react-router-dom'
import Signin from './components/Signin';
import Login from './components/Login';
// import ErrorPage from './components/ErrorPage'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {

  const {isAuth} = useSelector((state)=>state.auth.value)
  useEffect(()=>{
      // localStorage.setItem('userAuth',false)
  },[])
 

  return (
    <div className="App">
      <Navbar/>
      <div className="app_container">
        <Routes>
          <Route path="/" exact element={<Navigate to='/home'/>}/>
          {!isAuth && (
            <>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signin/>}/>
          </>
          )}
          {isAuth && 
          <Route path='/home' element={<Team/>}/> 
          }
          <Route path='*' element={<Navigate to={isAuth ? '/home' : 'login'}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
