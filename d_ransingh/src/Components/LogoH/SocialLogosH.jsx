import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaMediumM,FaYoutube,FaInstagram,FaLinkedinIn,FaBehance,FaTwitter } from 'react-icons/fa';
import { SiHashnode, SiGmail } from 'react-icons/si';



const SocialContainer = styled.div`
margin: 2rem;
color: whitesmoke;
font-size: 1.5rem;
a{
    color: whitesmoke;
}
span{
    margin: 0.4rem;
    padding: 0.2rem;

    &:hover{
        transition: ease;
        cursor: pointer;
        filter: brightness(90%);
    }
}

@media only screen and (max-width: 600px){
    font-size: 1rem;
}
`

const SocialLogosH = () => {
    return (
        <SocialContainer>
            <a href="https://github.com/Ransingh88" target="_blank" rel="noopener noreferrer"><span><FaGithub/></span></a>
            <a href="https://medium.com/me/stories/public" target="_blank" rel="noopener noreferrer"><span><FaMediumM/></span></a>
            <a href="https://www.youtube.com/channel/UC9bqAMPdiYbsX5ZcpCBrNnw" target="_blank" rel="noopener noreferrer"><span><FaYoutube/></span></a>
            <a href="https://www.instagram.com/d.ransingh88/" target="_blank" rel="noopener noreferrer"><span><FaInstagram/></span></a>
            <a href="https://twitter.com/Ransingh88" target="_blank" rel="noopener noreferrer"><span><FaTwitter/></span></a>
            <a href="https://www.linkedin.com/in/debasish-ransingh-612437154/" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn/></span></a>
            <a href="https://www.behance.net/debasisransing" target="_blank" rel="noopener noreferrer"><span><FaBehance/></span></a>
            <a href="https://dransingh88.hashnode.dev/" target="_blank" rel="noopener noreferrer"><span><SiHashnode/></span></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTMXgDJDSLrMDCZPkBjfvKfHkSTTKDCNpQKRTtBKmmFqJxGNpnrRzlHzBdMSNwrSMgZpgV" target="_blank" rel="noopener noreferrer"><span><SiGmail/></span></a>
        </SocialContainer>
    )
}

export  {SocialLogosH}
