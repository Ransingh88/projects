import styled from "styled-components";
import { Slide3 } from "./carousel/Carousel3";
const St3 = styled.div`
   {
    padding: 20px;
    width: 88%;
    margin: auto;
    text-align: center;
    background-color: whitesmoke;
    font-weight: 300 !important;
    font-size: 18px;
    line-height: 18px;
    justify-content: center;
    align-items: center;
    .carousel {
      padding: 2rem 0;
      margin: auto;
      text-align: center;
      width: 90%;
      font-weight: 600;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      z-index: 1;
    }

    h5 {
      line-height: 24px;
      color: #000;
      letter-spacing: -0.5px;
      font-weight: 400;
    }
    p {
      font-size: 24px;
    }

    .cart {
      margin: 1rem;
      border: 1px solid whitesmoke;
      background-color: white;
      border-radius: 25px;
    }
  }
`;
const arr = [
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Preterm-baby-care.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Brain-surgery.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/accident-and-injury.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Liver-transplant.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Cancer-patient.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Heart-Transplant.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Heart-Transplant.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/kidney-Transplant.jpg",
];
const tilte = [
  "Preterm-baby",
  "Brain-surgery",
  "accident-and-injury",
  "Cancer-patient",
  "Heart-Transplant",
  "kidney-Transplant",
  "kidney-Transplant",
  "Heart-Transplant",
];

export function Section3() {
  return (
    <St3>
      <div>
        <div>
          <p>
            Medical crowdfunding helps you raise funds online for healthcare
            expenses from friends, family and strangers.
          </p>
          <hr
            style={{
              marginTop: "1.5rem",
              width: "5rem",
              height: "3px",
              background: "green",
            }}
          ></hr>
          <p>
            20,000+ patients with following medical conditions were funded
            successfully.
          </p>
        </div>
        <div className="carousel">
          <Slide3 data={arr} data1={tilte} />
        </div>
      </div>
    </St3>
  );
}
