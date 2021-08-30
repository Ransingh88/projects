import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <img src="/images/debasishRansingh-logo.png" alt="logo" />
            <div className={styles.nav__menus}>
            <p>Home</p>
            <p>About</p>
            <p>Project</p>
            <p>Contact</p>
            </div>
        </div>
    )
}

export  {Navbar}
