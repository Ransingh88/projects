import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <p>Resume</p>
            <p>Portfolio</p>
            <p>Contact</p>
        </div>
    )
}

export  {Navbar}
