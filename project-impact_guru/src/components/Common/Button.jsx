import styled from 'styled-components'

export const Button = styled.button`
background-color: ${(props)=>(props.bg === undefined ? '#1F8F7A': props.bg)};
border: none;
outline: none;
padding: 1.2em 2em;
color: ${(props)=>(props.clr === undefined ? '#fff': props.clr)};
font-weight: 600;
font-size: 0.8em;
border-radius: 2em;
letter-spacing: 1px;
:hover{
    background-color:   ${(props)=>(props.hov === undefined ? '#16724F': props.hov)};
    transition: ease 0.3s;
    cursor: pointer;
}
`
// pass props as
//     -clr for color
//     -bg for backgrounf
//     -hov for onHover background color