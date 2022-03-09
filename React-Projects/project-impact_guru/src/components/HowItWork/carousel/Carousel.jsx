

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




export function Slide({ data }) {
  console.log(data[0]);
  return <>
  
   <Carousel  responsive={responsive} containerClass="carousel-container"  showDots={true}   autoPlaySpeed={2000} draggable={false} transitionDuration={500} autoPlay={true}  infinite={true}>
        <div><img src={data[0]} alt="" />
        </div>
        <div><img src={data[1]}alt="" />
         </div>
         <div><img src={data[2]} alt="" />
        </div>
         <div><img src={data[3]} alt="" />
         </div>
         <div><img src={data[4]} alt="" />
         </div>
        <div><img src={data[5]} alt="" />
         </div>
        <div><img src={data[6]} alt="" />
         </div>
        <div><img src={data[7]} alt="" />
         </div>
        

      </Carousel>
  
        </>
}