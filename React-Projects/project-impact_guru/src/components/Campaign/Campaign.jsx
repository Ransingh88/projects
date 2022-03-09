import styled from 'styled-components'
import { Card } from './Card'
import {LabelHeading} from '../Common/LabelHeading'



export function Campaign() {
    

    const Container = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* height: 80vh; */
    background-image: linear-gradient(to right, #FFDA6B , #FE997C);
    /* margin-top:60px; */
    padding-top: 30px;
    display: flex;
        justify-content: center;
        align-items: center;

    .CarouselContainer{
        /* background-color: #eee; */
        /* opacity: 0.3; */
        /* height: 450px; */
        text-align: center;
        padding: 20px;
        /* width: 70%; */
        /* margin: auto; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .heading{
            font-size: 2em;
            font-weight: 350;
            margin-bottom: 1em;
        }
        
    }
    .cardItem{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        @media screen and (max-width:869px){
            flex-direction: column;
        }
    }
   
    
    

`


    return (
        <Container>
            <div className="CarouselContainer">
                {/* <p className="heading">Ongoing Fundraising Campaigns</p> */}
                <LabelHeading color="#303030">Ongoing Fundraising Campaigns</LabelHeading>
                <div className="cardItem">
               
                <Card title="When We are in this together, We can win this together " img="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/covid19.png"/>
                <Card title="The covid warior upskilling program- ANGEL #thanksANurse " img="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/Apollo-Nursing.png"/>
                </div>
                
            </div>
        </Container>
    )
}