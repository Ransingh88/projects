import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.div`
margin-top: 6rem;
padding: 0.6rem 1rem;
color: black;
border: 1px solid whitesmoke;
border-radius: 0.4rem;
background-color: whitesmoke;
font-weight: 500;
text-align: center;
:hover{
    /* filter: brightness(95%); */
    cursor: pointer;
    box-shadow: 0 0 10px 1px #eee;
    transform: scale(1.005);
    transition: ease 0.1s;
}
@media only screen and (max-width: 600px) {
margin-top: 4rem;

}

`

export const Button = ({children}) => {
    return (
        <CustomButton>{ children}</CustomButton>
    )
}
