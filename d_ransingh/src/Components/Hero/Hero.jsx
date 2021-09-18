import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <h1 className={styles.name}>Hi I'm <br /> DEBASISH RANSINGH</h1>
                <p data-text ="FULL STACK WEB DEVELOPER 💻" className={styles.designation}>FULL STACK WEB DEVELOPER 💻</p>
                <p className={styles.shortDesc}>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
                <a href="https://drive.google.com/file/d/1YV8OpaMyZmNYqGPBEqehl2n_w4Psq-Rl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <p className={styles.resumeBtn}>Resume</p>
                </a>
            </div>
            <div className={styles.right}>
                <img src="./images/webpic.png" alt="ProfileImage" className={styles.ProfileImage}/>
            </div>
        </div>
    )
}

export  {Hero}
