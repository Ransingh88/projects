import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='navbar'>
            <div className='navbar_menu'>
            <h3 className='logo'>Pizza</h3>
            <div className='navbar_menu-items'>
                <p>home</p>
                <p>about</p>
                <p>menu</p>
                <p>career</p>
            </div>
            </div>
            <div className='nabar_profile'>
                <p>Login</p>
                <p>order</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar