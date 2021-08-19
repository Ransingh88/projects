import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaMediumM,FaYoutube,FaInstagram,FaLinkedinIn,FaBehance } from 'react-icons/fa';
import { SiHashnode,SiGmail } from 'react-icons/si';


const SocialContainer = styled.div`
margin: 2rem;
color: whitesmoke;
font-size: 1.5rem;

span{
    margin: 0.4rem;
    padding: 0.2rem;

    &:hover{
        transition: ease;
        cursor: pointer;
        filter: brightness(90%);
    }
}

`

const SocialLogosH = () => {
    return (
        <SocialContainer>
            <span><FaGithub/></span>
            <span><FaMediumM/></span>
            <span><FaYoutube/></span>
            <span><FaInstagram/></span>
            <span><FaLinkedinIn/></span>
            <span><FaBehance/></span>
            <span><SiHashnode/></span>
            <span><SiGmail/></span>
        </SocialContainer>
    )
}

export  {SocialLogosH}
