import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { LabelHeading } from '../Common/LabelHeading'
import { FreeFundComp, Container } from './FreeFundraiserComp'
import {Button} from '../Common/Button'
 
export function Partner() {


    const Main = styled.div`
    background-color: white;
    img{
        width: 200px;
        box-shadow: 0 0 15px #ccc;
        margin: 10px 0;
    }
    `
    const CarouselContainer = styled.div`
    /* background-color: whitesmoke; */
    padding: 2em 2em;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    `

    const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (<>
      <Main >
        <CarouselContainer>
            <LabelHeading color="green">Our Partners</LabelHeading>
        <Carousel
          itemsToShow={4}
          enableAutoPlay
          autoPlaySpeed={3000}
          pagination={false}
          easing="ease"
          transitionMs={3000}
                  breakPoints={breakPoints}
                  navigation={false}
        >
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/currae.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fundnel.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fortis.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/apollo.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/currae.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fundnel.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fortis.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/apollo.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/currae.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fundnel.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fortis.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/apollo.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/currae.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fundnel.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/fortis.png" alt="" />
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/apollo.png" alt="" />
            
        </Carousel>
        

        
          </CarouselContainer>
    </Main>
    
    <FreeFundComp>
      <Container>
          <Button bg="white" clr="#1b8c78" hov="whitesmoke">START A FREE FUNDRAISER</Button>
      </Container>
    </FreeFundComp>
</>
    )
}