import './navbar.css'
import 'animate.css';
import '../../../utils/internetConnection'
import { IoSearchOutline, IoCartOutline, IoSettingsOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Theme from '../../../utils/theme/Theme';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false)
  const [showSetting,setShowSetting] = useState(false)
  const [showCart,setShowCart] = useState(false)
  const [isAuth,setIsAuth] = useState(false)


  const navMenu = [
    {
      link:"men",
      label:"men"
    },
    {
      link:"women",
      label:"women"
    },
    {
      link:"sports",
      label:"sports"
    },
    {
      link:"electronics",
      label:"electronics"
    },
    {
      link:"mobile",
      label:"mobile"
    },
  ]

  const handleShowMenu = ()=>{
    const mobileMenu = document.getElementById('mobileMenuWindow')
    
    if(showMenu == true){
      mobileMenu.classList.remove('animate__fadeInRight','mobileMenuShow')
      mobileMenu.classList.add('animate__fadeOutRight','mobileMenuHide')
      
    }else{
      mobileMenu.classList.remove('animate__fadeOutRight','mobileMenuHide')
      mobileMenu.classList.add('mobileMenuShow','animate__fadeInRight')

    }
    setShowMenu(!showMenu)
  }

  const handleUserSetting = ()=>{
    setShowCart(false)
    setShowSetting(!showSetting)
  }
  const handleCart = ()=>{
    setShowSetting(false)
    setShowCart(!showCart)
  }

   
  return (
    <header className='container-fluid mainHeaderContainer'>
      <div className="container headerContainer">
          <div className="logo">
            <Link to="/">{true ? <img src="/images/logo/ecoshop-black.png" alt="ecoshop-logo" /> : <img src="/images/logo/ecoshop-white.png" alt="ecoshop-logo" />}</Link>
          </div>
          <div className="menus">
            {navMenu.map((menu,id)=>(
              <NavLink key={id} to={`/${menu.link}`}>{menu.label}</NavLink>
            ))}
          </div>
          <div className='setting'>
          <div className="userSettings">
            <div className='userSetting_searchBox'>
            <IoSearchOutline className='searchIcon'/>
            <input type="text"/>
            </div>
            <div className='userSettings_cart' onClick={handleCart}>
            <Link to="/cart"><IoCartOutline/></Link>
            {showCart && <div className='mobileMenu userSettings_cart-menu'>cart</div>}
            </div>
            <div className='userSettings_setting' onClick={handleUserSetting}>
            <Link to="/setting"><IoSettingsOutline/></Link>
            {showSetting && <div className='mobileMenu userSettings_setting-menu'>
              {!isAuth ?
              <div>
                <h5>Welcome to ECOSHOP</h5>
              <button>login</button>
              <button>register</button>
              </div> :
              <div>
              <h5>Welcome!</h5>
              <h5>Ransingh Debasish</h5>
              <button>logout</button>
              </div>}
              </div>}
            </div>
            <Theme/>
          </div>
          <div className='mobileMenuIcon' onClick={handleShowMenu}>{showMenu ? <IoCloseOutline /> : <IoMenuOutline/>}</div>
          </div>
          <div  className='mobileMenu mobileMenuHide animate__animated ' id='mobileMenuWindow'>
          {!isAuth ?
              <div className='mobileMenu_userInfo'>
                <h5>Welcome to ECOSHOP</h5>
                <div>
              <button>login</button>
              <button>register</button>
              </div>
              </div> :
              <div className='mobileMenu_userInfo'>
              <h5>Welcome! <br/> Ransingh Debasish</h5>
              <button>logout</button>
              </div>}
           <div className="mobileMenu_menus">
            {navMenu.map((menu,id)=>(
              <NavLink key={id} to={`/${menu.link}`}>{menu.label}</NavLink>
            ))}
          </div>
          <div className="mobileMenu_userSettings">
            <Link to="/cart">Cart<IoCartOutline/></Link>
            <Link to="/setting">Setting<IoSettingsOutline/></Link>
            <span className='mobileMenu_theme'>
            <Theme/>
            </span>
            <div className='userSetting_searchBox'>
            <IoSearchOutline className='searchIcon'/>
            <input type="text"/>
            </div>
          </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar