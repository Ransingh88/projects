import { CardItem } from '../SuccessfulFundraiser/CardItem'
import styled from "styled-components";
import { LabelHeading } from '../Common/LabelHeading'
import { Button } from '../Common/Button'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from '../Catagory/CustomArrow'
 
export function TopFundraiser() {


    const Main = styled.div`
    background-color: whitesmoke;
    `
    const CarouselContainer = styled.div`
      /* background-color: whitesmoke; */
      padding: 2em 2em;
      width: 80%;
      margin: auto;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;

      
      .TopButtons {
        display: flex;
        margin-top: 50px;
        justify-content: center;
        align-items: center;
      }

      .TopButtons h5{
        margin: 0 15px
      }
    `;

    const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
      <Main >
        <CarouselContainer>
            <LabelHeading color="green">Our Top Fundraisers</LabelHeading>
        {/* <Carousel
          itemsToShow={4}
          enableAutoPlay
          autoPlaySpeed={3000}
          pagination={false}
          easing="ease"
          transitionMs={3000}
          breakPoints={breakPoints}
        >
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </Carousel> */}
        
        <Slider 
        infinite={true}
        speed={2000}
      slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3500}
          nextArrow= {<SampleNextArrow />}
          prevArrow= {<SamplePrevArrow />}
        >
            
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
<CardItem/>
        </Slider>
        
        
        

          <div className="TopButtons">
              <Button>START A FREE FUNDRAISER</Button>
              <h5>OR</h5>
        <Button>START A FREE FUNDRAISER</Button>
        </div>
      </CarouselContainer>
      
          </Main>

    )
}