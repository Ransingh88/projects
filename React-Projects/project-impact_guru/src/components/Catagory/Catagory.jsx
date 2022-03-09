import { LabelHeading } from "../Common/LabelHeading";
import { CatagoryCard } from "./CatagoryCard";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from './CustomArrow'

export function Catagory() {
  const CatagoryContainer = styled.div`
    background-color: white;
    padding: 30px 20px 20px 20px;
    position: relative;

    .slider {
      width: 80%;
      margin: auto;
      /* margin: 30px 0; */
      padding: 20px 6px;
      /* background-color: red; */
    }
    
  `;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (<>
    <CatagoryContainer>
      <LabelHeading color="green">Crowdfunding Categories</LabelHeading>
      <div className="slider">
        {/* <CatagoryCard title="Emergency" icon="/icons/ambulance.png" /> */}

        {/* <Carousel
          itemsToShow={5}
          enableAutoPlay
          autoPlaySpeed={3000}
          pagination={false}
          easing="ease"
          transitionMs={3000}
          breakPoints={breakPoints}
        >
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
        </Carousel> */}
        
        <Slider 
        infinite={true}
        speed={2000}
      slidesToShow={6}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3500}
          nextArrow= {<SampleNextArrow />}
          prevArrow= {<SamplePrevArrow />}
        >
      {/* <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </div>
          <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          </div>
          <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div>
      <div>
        <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
      </div> */}
          
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          <CatagoryCard title="Emergency" icon="/icons/ambulance.png" />
          
    </Slider>


      </div>
    </CatagoryContainer>
      </>
  );
}
