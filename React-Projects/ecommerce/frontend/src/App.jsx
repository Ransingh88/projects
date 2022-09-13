import './App.css';
import Routes from './routes/Routes';
import Navbar from './components/layout/header/Navbar'
import Footer from './components/layout/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes/>
    <Footer/>
    <ToastContainer position="bottom-right" autoClose={2000} theme={'light'}/>
    </>
  );
}

export default App;
