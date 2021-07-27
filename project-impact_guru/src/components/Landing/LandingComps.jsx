import styled from "styled-components";

export const MainContainer = styled.div`
  
  /* height: 80vh; */
  background-image: linear-gradient(to right, #54b98f, #1b8c78);
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
`;

export const Container = styled.div`
/* background-color: #eee; */
width: 70%;
display: flex;
justify-content: space-evenly;

@media screen and (max-width:967px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`

export const MainImage = styled.div`


img{
    width: 400px;
    height: 400px;
    border: 5px solid white;
    border-radius: 8px;
}
`

export const ThumbnailImgContainer = styled.div`
/* background-color: blue; */
margin: 2em 0;
display: flex;
height: 100px;
img{
    width: 50px;
    height: 50px;
    margin: 0.8em;
    border-radius: 50%;
}
img:hover{
    cursor: pointer;
}
@media screen and (max-width:967px){
    justify-content: center;
}

`

export const Content = styled.div`
/* background-color: coral; */
margin-left: 6em;
color: white;
p{
    font-size: 1.3em;
    font-weight: 500;
    color: white;
    margin-bottom: 2em;
}

.active{
    transform: scale(1.3);
    border: 2px solid white  
    ;
    transition: ease 0.2s;
}
@media screen and (max-width:967px){
    margin-left: 0em;
    text-align: center;
}

`
