import styled from 'styled-components'
// import styles from './Navbar.module.css'
import { FiMenu } from 'react-icons/fi';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { SimpleMenu } from './User'
import {Currency} from './Currancy'


const style1 = {
    textDecoration: "none",
    color: "white"
}

export function Navbar() {
    console.log("Hello");
    const Navbar = styled.div`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Hind Vadodara", sans-serif;
        z-index: 100;
        /* font-weight: 400; */
      }

      background-image: linear-gradient(to right, #54b98f, #1b8c78);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8em 1em;
      position: fixed;
      top: 0;
      width: 100%;
      border-bottom: 0.001em solid #ccc;

      @media screen and (max-width: 1092px) {
        justify-content: space-around;
      }
      .logo {
        /* background-color: #ccc; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2em;
      }
      .logo img {
        width: 11rem;
        padding-right: 1em;
      }
      .logo input {
        background-color: transparent;
        border-radius: 1.5em;
        outline: none;
        border: 1px solid ${(props) => props.clr};
        height: 2.3em;
        color: white;
        padding-left: 1em;
      }
      .logo input::placeholder {
        color: ${(props) => props.clr};
        padding-left: 0.8em;
        font-size: 0.8rem;
        font-weight: 400;
        opacity: 1;
      }
      .menu {
        /* background-color: #ccc; */
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .menu ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .menu ul li {
        margin: 0 0.5em;
        list-style-type: none;
        color: ${(props) => props.clr};
        font-weight: 500;
      }
      .fightCovid {
        background-image: linear-gradient(to right, #ffda6b, #fe997c);
        padding: 0.6em 0.8em;
        border-radius: 2em;
        font-size: 0.8em;
        color: black !important;
        font-weight: 500 !important;
        box-shadow: 3px 3px 5px solid black;
      }
      .validation {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: relative;
      }
      .validation select {
        background-color: transparent;
        outline: none;
        border: none;
        position: absolute;
        left: -30px;
      }
      .currency select {
        margin-left: 1.5em;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 1em;
      }

      .bergerMenu {
        color: white;
        font-size: 1.5em;
        margin-left: 1em;
        display: none;
      }

      @media screen and (max-width: 1092px) {
        .validation {
          display: none;
        }
        .currency {
          display: none;
        }
        .meniItem {
          display: none;
        }
        .logo{
          margin-left:0px
        }
        .logo input {
          display: none;
        }
        .bergerMenu {
          display: inline-block;
          margin-left:-90px
        }
      }
    `;
    

    return (
      // <div className={styles.container}>

      <div className={styles.mainContainer}>
        <Navbar bg="white" clr="white">
          <div className="logo">
            <Link style={style1} to="/">
              <img src="/images/impactguru-white.png" alt="dggdfg" />
            </Link>
            <input type="search" placeholder="Search" />
          </div>
          <div className="menu">
            <div className="meniItem">
              <ul>
                <li>
                  <Link style={style1} to="/start-fundraiser">
                    Start a free fundraiser
                  </Link>
                </li>
                <li>
                  <Link style={style1} to="how-it-works">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link style={style1} to="fundraisers">
                    Browse fundraiser
                  </Link>
                </li>
                <li className="fightCovid">Fight Covid</li>
              </ul>
            </div>

            <div className="validation">
              
              <SimpleMenu/>
            </div>
            
            <div className="currency">
             
              <Currency/>
            </div>
            <div className="bergerMenu">
              <FiMenu/>
            </div>
          </div>
        </Navbar>
      </div>
    );
}



