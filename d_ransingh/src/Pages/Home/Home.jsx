import React from 'react'
import styles from './Home.module.css'
import styled from 'styled-components'
import { SocialLogosH } from '../../Components/LogoH/SocialLogosH'
import { Button } from '../../Components/Button/Button'
import { SiMinutemailer } from 'react-icons/si';
import { Card } from '../../Components/Card/Card'

const Name = styled.h1`
color: whitesmoke;
font-size: 2.5rem;
text-align: center;
letter-spacing: 0.1rem;

`
const Work = styled.p`
color: whitesmoke;
font-size: 1.2rem;
text-align: center;
letter-spacing: 0.1rem;
text-transform:uppercase;

`

const Home = () => {
    return (
        <div className={styles.Container}>
        <div className={styles.mainContainer}>
            
            <img src="./images/picSquare.jpg" alt="ProfileImage" />
            <Name>DEBASISH RANSINGH</Name>
            <Work>Full Stack Web Developer</Work>
            <SocialLogosH />
            <p className={styles.summery}>Detailed-oriented, responsible, and committed developer, with a get-it-done, on-time, and high-quality product spirit, and more than a year of experience defining requirements, designing, implementing, testing, and delivering complex back-end and web applications using verity programming and technologies.</p>
            <Button><SiMinutemailer/> Contact Me </Button>
            </div>
            <div className={styles.bodyContent}>
                <Card img="./images/portfolio.png" title="Portfolio" desc="This is my personal portfolio website"/>
                <Card img="./images/impactguru.png" title="Impactguru" desc="This is Impactguru clone"/>
                <Card img="./images/sephora.png" title="Sephora" desc="This is sephora clone"/>
            </div>
            </div>
    )
}

export {Home}
