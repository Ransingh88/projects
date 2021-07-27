import Images from "./Images";
import {
  MainContainer,
  Container,
  MainImage,
  ThumbnailImgContainer,
  Content,
} from "./LandingComps.jsx";
import { useState } from "react";
import {Button} from '../Common/Button'

export function Landing() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <MainContainer>
      <Container>
        <MainImage>
          <img src={selectedImg.img} alt="" className="selected" />
        </MainImage>

        <Content>
          <h2>Free Crowdfunding Website and Fundraising Platform</h2>
          <ThumbnailImgContainer>
            {Images.map((item) => (
              <>
                <img
                  className={(selectedImg.img === item.img) ? "active" : ""
                  }
                  src={item.img}
                  alt="images"
                  onClick={() => setSelectedImg(item)}
                />
              </>
            ))}
          </ThumbnailImgContainer>
                  <p>{selectedImg.text}</p>
                  <Button bg="#fff" clr="#1b8c78" hov="#eee">START A FREE FUNDRAISER</Button>
        </Content>
      </Container>
    </MainContainer>
  );
}
