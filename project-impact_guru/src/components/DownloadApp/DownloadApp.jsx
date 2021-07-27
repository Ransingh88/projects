import styled from 'styled-components'
import { FaRegBell,FaRegCopy } from 'react-icons/fa';
import { GoMegaphone } from 'react-icons/go';
import { GoMailRead } from 'react-icons/go';
import { CompareComp } from './Compare'
import {Button} from '../Common/Button'


export function DownloadApp() {

    const MainContainer = styled.div`
    /* height: 60vh; */
    background-image: linear-gradient(to right, #ffc809 , #ffc809);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding:2em;


    .gridIcons{
        /* padding: 20px; */
        /* background-color: #eee; */
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
        justify-content: center;
        align-items: center;

        .one{
            border-right: 1px solid #202020;
            border-bottom: 1px solid #202020;
        }
        .two{
            border-left: 1px solid #202020;
            border-bottom: 1px solid #202020;
        }
        .three{
            border-right: 1px solid #202020;
            border-top: 1px solid #202020;
        }
        .four{
            border-left: 1px solid #202020;
            border-top: 1px solid #202020;
        }
        


    }
    `
    const Item = styled.div`
    padding: 0.8em 4em;
    text-align: center;

    &>:first-child{
        color: #202020;
        font-size: 3em;
    }
    &>:last-child{
        color: #202020;
        font-size: 1.5em;
    }
    
    
    `
    
    return (<>
        <MainContainer>
            <div className="gridIcons">
                <Item className="one">
                    <FaRegBell />
                    <p>Get Notification</p>
                </Item>
                <Item className="two">
                    <GoMegaphone />
                    <p>Share Online</p>
                </Item>
                <Item className="three">
                    <FaRegCopy />
                    <p>Post Update</p>
                </Item>
                <Item className="four">
                    <GoMailRead />
                    <p>Thanks Donor</p>
                </Item>

            </div>
            <div>
                <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/googleplay.png" alt="" />
            </div>
        </MainContainer>
        <CompareComp>
            <p>Compare Crowdfunding Websites In India</p>
            <Button>COMPARE NOW</Button>
        </CompareComp>
        </>
    )
}