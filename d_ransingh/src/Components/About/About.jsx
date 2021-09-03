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
                    <p>Detailed-oriented, responsible, and committed developer, with a get-it-done, on-time, and high-quality product spirit, and more than a year of experience defining requirements, designing, implementing, testing, and delivering complex back-end and web applications using verity programming and technologies.</p>
                    <br />
                    <p>Detailed-oriented, responsible, and committed developer, with a get-it-done, on-time, and high-quality product spirit, and more than a year of experience defining requirements, designing, implementing, testing, and delivering complex back-end and web applications using verity programming and technologies.</p>
                        <div className={styles.links}>
                            <img src="./icons/github-icon-1.svg" alt="" />
                            <img src="./icons/linkedin-icon-2.svg" alt="" />
                            <img src="./icons/monogram-medium.svg" alt="" />
                    </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export  {About}
