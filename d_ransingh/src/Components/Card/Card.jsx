import React from 'react'
import styled from 'styled-components'

const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 250px;
border-radius: 0.2rem;
border: 1px solid #eee;
margin: 1rem;
img{
    width: 100%;
    border-radius: 0.2rem;
}
h3{
    text-align: center;
}
:hover{
    
box-shadow: 0 0 10px #aaa;
    transform: scale(1.01);
    transition: ease 0.2s;
    cursor: pointer;
}
.Content{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
const Button = styled.div`
border-radius: 0.4rem;
background: royalblue;
padding: 0.4rem 0.8rem;
margin: 0.5rem;
display: inline-block;
color: whitesmoke;
font-weight: 500;

:hover{
   background-color: #2353e4;
}

`

const Card = ({img,title,desc}) => {
    return (
        <Cards>
            <img src={img} alt="portfolio Project" />
            <div className="Content">
            <h3>{title}</h3>
            <p>{ desc }</p>
            <Button>VISIT SITE</Button>
            </div>
        </Cards>
    )
}

export  {Card}
