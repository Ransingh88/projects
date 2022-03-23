import React, { useState } from 'react'
import './navbar.css'
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [menu,setMenu] = useState(false)

  const handleMenu =()=>{
    console.log('clickedddd');
    setMenu(!menu)
  }
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar__left">
          <img className='logo' src="./images/Klarna logotype (black.svg).svg" alt="" />
          <div className="navbar__menus">
            <p>Shop</p>
            <p>How it works</p>
            <p>Pay in 4</p>
            <p>The shopping app</p>
            <p>Help</p>
          </div>
        </div>
        <div className="navbar__right">
          <button className='navbar__login'>Log in</button>
          <button className='navbar__getapp'>Get the app</button>
          

          <BiMenu className='menuIcon' onClick={handleMenu}/>
          
        </div>
        {menu && <div className="mobile-navbar__menus">
            <p>Shop</p>
            <p>How it works</p>
            <p>Pay in 4</p>
            <p>The shopping app</p>
            <p>Help</p>
          </div>}
      </div>
    </div>
  )
}

export default Navbar