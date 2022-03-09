import { CardItem } from './CardItem'
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { LabelHeading } from '../Common/LabelHeading'
import { Button } from '../Common/Button'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from '../Catagory/CustomArrow'
 
export function SuccessfulFundraiser() {

    const CarouselContainer = styled.div`
    
    padding: 2em 2em;
    width: 80%;
    margin: auto; 
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    Button{
      margin-top: 50px;
      width: 200px;
      margin: auto;
    }
    
    `

    const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];


  const bp = [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  return (
      
        <CarouselContainer>
            <LabelHeading color="green">Successful Fundraising Stories</LabelHeading>
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
        prevArrow={<SamplePrevArrow />}
        responsive={bp}
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
        <Button>READ ALL STORIES</Button>
      </CarouselContainer>

    )
}