import React from 'react'
// import styled from 'styled-components'
import styles from './Card.module.css'
import { FiExternalLink,FiGithub } from 'react-icons/fi';



const Card = ({img,title,desc}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <img src="./images/portfolio.png" alt="" />
                        <div className={styles.bodyContents}>
                            <h2>Card</h2>
                        <div className={styles.projectDesc}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste?</p>
                        </div>
                        <div className={styles.techStack}>
                                <img src="./icons/react-2.svg" alt="" height="25px"/>
                                <img src="./icons/logo-javascript.svg" alt="" height="25px"/>
                                <img src="./icons/html-1.svg" alt="" height="25px"/>
                                <img src="./icons/css-3.svg" alt="" height="25px"/>
                                <img src="./icons/redux.svg" alt="" height="25px"/>
                                <img src="./icons/nodejs-icon.svg" alt="" height="25px"/>
                                <img src="./icons/github-icon-1.svg" alt="" height="25px"/>
                                <img src="./icons/bootstrap-5-1.svg" alt="" height="25px"/>
                                <img src="./icons/firebase-1.svg" alt="" height="25px"/>
                                <img src="./icons/netlify.svg" alt="" height="25px"/>
                            </div>
                            
                            <div className={styles.links}>
                                    <p className={styles.demo}><FiExternalLink/> &nbsp; Demo</p>
                                    <p className={styles.code}><FiGithub/> &nbsp; Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  {Card}
