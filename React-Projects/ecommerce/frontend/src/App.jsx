import './App.css';
import Routes from './routes/Routes';
import Navbar from './components/layout/header/Navbar'
import Footer from './components/layout/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { loadUser } from './redux/features/user/userThunks';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[])
  return (
    <>
    <Navbar/>
    <Routes/>
    <Footer/>
    <ToastContainer position="top-right" autoClose={2000} theme={'light'}/>
    </>
  );
}

export default App;
