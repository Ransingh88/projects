import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {logout} from '../features/reducer/authSlice'
const Navbar = () => {

  const {isAuth} = useSelector((state)=>state.auth.value)
  const dispatch = useDispatch()
  function handleLogout(){
    dispatch(logout())
    // localStorage.setItem('userAuth',false)
  }
  let userDetails = JSON.parse(localStorage.getItem('userDetails'))
  return <div className="navbar">

      <div className="navbar__container">
      <h4><Link className='link_line_none' to='/home'><img src="https://www.cryptimi.com/wp-content/uploads/2020/01/Logo-DeltaExchange-Dark.png" alt="logo" width='80px' /></Link></h4>
      <div className="navbar__auth">
        {isAuth ? 
        <>
          <p>Welcome {userDetails.name}</p>
          <p><Link className='link_line_none' to='/login' onClick={handleLogout}>Logout</Link></p> </> :
      <>
          <p><Link className='link_line_none' to='/signup'>Signin</Link></p>
          <p><Link className='link_line_none' to='/login'>Login</Link></p>
          </>
        }
      </div>
        </div>
      </div>;
};

export default Navbar;
