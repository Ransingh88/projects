import React from 'react'
import { Heading } from '../Heading/Heading'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <Heading>About me</Heading>
                <div className={styles.aboutContent}>
                <img src="./images/aboutme.svg" alt="aboutme" />
                <div className={styles.content}>
                    <p>Detailed-oriented, responsible, and committed developer, with a get-it-done, on-time, and high-quality product spirit, and more than a year of experience defining requirements, designing, implementing, testing, and delivering complex back-end and web applications using a variety of programming and technologies.</p>
                    <br />
                    <p>Love to travel and explore. It refreshes my mind, body, anxiety, stress and keeps me active all the time. While exploring keeping all the moments as memory in the camera, and this is how you became a photographer also. And I enjoying the journey than the destination</p>
                        <div className={styles.links}>
                            <a href="https://github.com/Ransingh88" target="_blank" rel="noopener noreferrer"><img src="./icons/github-icon-1.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/debasish-ransingh-612437154/" target="_blank" rel="noopener noreferrer"><img src="./icons/linkedin-icon-2.svg" alt="" /></a>
                            <a href="https://medium.com/@d_ransingh88" target="_blank" rel="noopener noreferrer"><img src="./icons/monogram-medium.svg" alt="" /></a>
                    </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export  {About}
