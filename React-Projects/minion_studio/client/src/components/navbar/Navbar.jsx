import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <div className='nabar__left'>
                

            <img className='logo' src="./logo/Logo_name-Black.png" alt="logo"/>
               
            <div className='navbar__menu'>
                <p className='navbar__menu-item'>About</p>
                <p className='navbar__menu-item'>Projects</p>
                <p className='navbar__menu-item'>Portfolio</p>
                <p className='navbar__menu-item'>Contact</p>
            </div>
            </div>
            <div className='navbar__right'>
                <p className='user'>Hi <span className='user_name'> Debasish </span></p>
                <button className='button button-login'>login</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar