import React, { useState } from 'react'
import styles from './Home.module.css'
import styled from 'styled-components'
import { SocialLogosH } from '../../Components/LogoH/SocialLogosH'
import { Button } from '../../Components/Button/Button'
import { SiMinutemailer } from 'react-icons/si';
import { Card } from '../../Components/Card/Card'

const Name = styled.h1`
color: #252525;
font-size: 5rem;
text-align: center;
letter-spacing: 0.1rem;
font-weight: 900;

`
const Work = styled.p`
color: #252525;
font-size: 1.2rem;
text-align: center;
letter-spacing: 0.1rem;
text-transform:uppercase;

`
const Warning = styled.div`
position: fixed;
top: 5rem;
right: 3rem;
border-radius: 0.2rem;
background-color: #ffffa1;
border: 2px solid #ffee00;
padding: 1rem 2rem;
color: #252525;
box-shadow: 0 0 10px #ddd;
visibility: ${props=>props.vs ? "hidden" : "visible"};
button{
    position: absolute;
    top: -10px;
    right: -10px;
    height: 20px;
    width: 20px;
    background-color: #ffee00;
    border: 1px solid #ffee00;
    color: #252525;
    font-weight: bold;
    border-radius: 50%;
    border: 0;
    outline: 0;
}
button:hover{
    cursor: pointer;
}

`

const Home = () => {
    const [vs,setVs] = useState(false)

    const handleWarning = () => {
        setVs(true)
    }
    return (
        <div className={styles.Container}>
        <div className={styles.mainContainer}>
            <Warning vs={vs}><p>! The  website is under construction</p><button onClick={handleWarning}>X</button></Warning>
            <img src="./images/picSquare.jpg" alt="ProfileImage" />
            <Name>Hi I'm DEBASISH RANSINGH</Name>
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
