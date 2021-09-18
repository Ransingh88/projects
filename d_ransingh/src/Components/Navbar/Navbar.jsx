import React from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ScrollLink to="hero" smooth={true}>
        <img
          src="/images/debasishRansingh-logo.png"
          alt="logo"
          className={styles.navLogo}
        />
      </ScrollLink>
      <div className={styles.nav__menus}>
        <ScrollLink to="hero" smooth={true}>
          <p>Home</p>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} offset={-60}>
          <p>About</p>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} offset={-60}>
          <p>Skills</p>
        </ScrollLink>
        <ScrollLink to="project" smooth={true} offset={-60}>
          <p>Project</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} offset={-60}>
          <p>Contact</p>
        </ScrollLink>
      </div>
      <div className={styles.hamBurgerMenu}>
        <img src="./icons/icons8-menu.svg" alt="" width="30px"/>
      </div>
    </div>
  );
};

export { Navbar };
