import styled from 'styled-components'
import { FaAngleDoubleRight } from 'react-icons/fa';




export function Card(props) {

    const Card = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    background-color: white;
    /* padding-bottom: 3em; */
    margin: 2em;
    border-radius: 0.5em;
    box-shadow: 5px 10px 15px rgb(32, 32, 32,0.2);
    width: 22em;
    text-align: justify;

    img{
        border-top-left-radius:0.5em;
        border-top-right-radius:0.5em;
        width: 22em;
    }
    &>div{
        text-align: left;
        padding: 10px 20px;

        .head{
            font-weight: 500;
            font-size: 1em;
            opacity: 0.9;
        }
        .link{
            font-size: 0.8em;
            color: #2fa073;
            padding: 0.5em 0;
            cursor: pointer;
        }
        .link:hover{
            opacity: 0.5;
        }
    }
    
    
    `


    return (
        <Card>
            <img src={props.img} alt="" />
            <div>
                <p className="head">{props.title}</p>
            <p className="link">Know more <FaAngleDoubleRight/></p>
            </div>
            </Card>
        
    )
}