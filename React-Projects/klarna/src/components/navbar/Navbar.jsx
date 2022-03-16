import React from 'react'
import './navbar.css'

const Navbar = () => {
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
        </div>
      </div>
    </div>
  )
}

export default Navbar