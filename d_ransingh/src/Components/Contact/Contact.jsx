import React from 'react'
import { Heading } from '../Heading/Heading'
import styles from './Contact.module.css'
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md'

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <Heading>Contact</Heading>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2>Get in touch</h2>
                        <div className={styles.cont}>
                        <p><MdMail/> &nbsp; rajaransingh@gmail.com</p>
                        <p> <MdPhone/> &nbsp; +91-9938120360</p>
                        <p> <MdLocationOn/> &nbsp; Bhubaneswar, Odisha, India</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <img src="./icons/github-icon-1.svg" alt="github" height="50px"/>
                            <img src="./icons/linkedin-icon-2.svg" alt="github" height="50px"/>
                            <img src="./icons/monogram-medium.svg" alt="github" height="50px"/>
                            <img src="./icons/twitter-6.svg" alt="github" height="50px"/>
                        </div>
                        </div>
                    <div className={styles.right}>
                        <img src="./icons/Contact_us.svg" alt="" height="350px"/>
                        </div>
                </div>
                <p className={styles.rights}>debasishransingh@2021</p>
            </div>
        </div>
    )
}

export  {Contact}
