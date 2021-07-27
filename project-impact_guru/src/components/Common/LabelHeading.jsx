import styled from 'styled-components'

export const LabelHeading = styled.p`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
/* background-color: red; */
font-size: 2em;
color: #303030;
padding: 0.1em 0.5em 0.5em 0.5em ;
margin: 0.1em;
/* display: inline-block; */
position: relative;
text-align: center;


::after{
content: '';
height: 2px;
/* width: 20%; */
width: 10%;
background-color: ${(props)=>props.color};
position: absolute;
bottom: 0;
left: calc(50% - 6%);
}
`