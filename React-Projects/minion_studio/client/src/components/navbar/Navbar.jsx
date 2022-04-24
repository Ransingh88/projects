import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <div className='nabar__left'>
            <img src="./logo/Logo_name-Black.png" alt="logo" width='10%'/>
            <div className='navbar__menu'>
                <p className='navbar__menu-item'>About</p>
                <p className='navbar__menu-item'>Projects</p>
                <p className='navbar__menu-item'>Portfolio</p>
                <p className='navbar__menu-item'>Contact</p>
            </div>
            </div>
            <div className='navbar__right'>
                <p>Hi Dbasish</p>
                <button>login</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar