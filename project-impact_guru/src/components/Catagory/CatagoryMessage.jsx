import {LabelHeading} from '../Common/LabelHeading'
import styled from 'styled-components'
export function CatagoryMsg() {

    const CatagoryMsg = styled.div`

    /* height: 30vh; */
    background-color: whitesmoke;
    padding: 20px 200px;

    p{
        
        text-align: center;
        padding: 20px 10px;
        font-weight: 400;
    }

`

    return (
        <CatagoryMsg>
            <LabelHeading color="green">How Can Crowdfunding Help You</LabelHeading>
            <p>When the cost of medical treatments takes a toll on you financially, harness the power of social networks through crowdfunding on ImpactGuru. Get tips, crowdfunding assistance & receive donations in times of medical emergencies.</p>
        </CatagoryMsg>
        
    )
}