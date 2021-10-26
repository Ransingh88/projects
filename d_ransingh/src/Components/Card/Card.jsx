import React from 'react'
// import styled from 'styled-components'
import styles from './Card.module.css'
import { FiExternalLink,FiGithub } from 'react-icons/fi';



const Card = ({img,title,desc,tech,demo,code}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <img src={`./images/${img}.png`} alt="" />
                        <div className={styles.bodyContents}>
                            <h2>{ title }</h2>
                        <div className={styles.projectDesc}>
                                <p>{ desc}</p>
                        </div>
                        <div className={styles.techStack}>
                                {/* <img src="./icons/react-2.svg" alt="" height="25px"/> */}
                                
                                {
                                    tech.map((ele,index) => (
                                        
                                        <img key={ index} src={`./icons/${ele}.svg`} alt="tech" height="25px"/>
                                    ))
                                }
                                

                            </div>
                            
                            <div className={styles.links}>
                                    <a href={demo} target="_blank" rel="noopener noreferrer"><p className={styles.demo}><FiExternalLink/> &nbsp; Demo</p></a>
                                    <a href={code} target="_blank" rel="noopener noreferrer"><p className={styles.code}><FiGithub/> &nbsp; Code</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  {Card}
