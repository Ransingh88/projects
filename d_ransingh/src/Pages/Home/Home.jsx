// import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import styled from 'styled-components'
import { Card } from '../../Components/Card/Card'
import { Heading } from '../../Components/Heading/Heading'
import { Technologies } from '../../Components/Skills/Technologies'
import { About } from '../../Components/About/About'
import { Contact } from '../../Components/Contact/Contact'
import projectData from '../../project.json'
import { Tools } from '../../Components/Skills/Tools'
import { Proficient } from '../../Components/Skills/Proficient'

const Name = styled.h1`
color: #252525;
font-size: 5rem;
text-align: center;
letter-spacing: 0.1rem;
font-weight: 900;
margin-top: 2.5rem;
font-family: 'open sans';
`
const Work = styled.p`
color: #252525;
font-size: 1.2rem;
text-align: center;
letter-spacing: 0.1rem;
text-transform:uppercase;

font-family: 'open sans';

`
// const Warning = styled.div`
// z-index: 100000;
// position: fixed;
// top: 5rem;
// right: 3rem;
// border-radius: 0.2rem;
// background-color: #ffffa1;
// border: 2px solid #ffee00;
// padding: 1rem 2rem;
// color: #252525;
// box-shadow: 0 0 10px #ddd;
// visibility: ${props=>props.vs ? "hidden" : "visible"};
// button{
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     height: 20px;
//     width: 20px;
//     background-color: #ffee00;
//     border: 1px solid #ffee00;
//     color: #252525;
//     font-weight: bold;
//     border-radius: 50%;
//     border: 0;
//     outline: 0;
// }
// button:hover{
//     cursor: pointer;
// }

// `

const Home = () => {
//     const [vs, setVs] = useState(true)


//     useEffect(() => {
//        setTimeout(() => {
//             setVs(false)
//         },5000)
//    },[])
        


//     const handleWarning = () => {

//         setVs(true)
//     }
    return (
        <div className={styles.Container}>
        <div className={styles.mainContainer}>
            {/* <Warning vs={vs}><p>! The  website is under development</p><button onClick={handleWarning}>X</button></Warning> */}
            <img src="./images/picSquare.jpg" alt="ProfileImage" />
            <Name>Hi I'm DEBASISH RANSINGH</Name>
            <Work>Full Stack Web Developer</Work>
            <br />
            <p className={styles.summery}>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
            <br />
                <a href="https://drive.google.com/file/d/1YV8OpaMyZmNYqGPBEqehl2n_w4Psq-Rl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <div className={styles.resume}>
                    <p>Resume</p>
            </div></a>
            </div>
            <About/>
            <Technologies />
            <Proficient/>
            <Tools/>
            <div className={styles.projectSection}>
               
                <Heading>Projects</Heading>
                <div className={styles.projectContent}>
                    
                
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                    <Card /> */}
                    {projectData.map(({image,title,desc,tech,demo,code}) => (
                        
                        <Card title={title} desc={desc} tech={tech} img={image} demo={ demo} code={ code} />
                    )

                    )}

                    </div>
            </div>
            <Contact/>
            </div>
    )
}

export {Home}
