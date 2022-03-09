import styled from "styled-components";
import { Slide } from "./carousel/Carousel";

const Set9 = styled.h2`
   {
    padding: 30px;
    text-align: center;
    font-weight: 300 !important;
    img {
      margin: 3rem;
    }
  }
`;

const arr = [
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Narayana_Health.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Wockhardt-hospital.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/KKTCH-Hospital.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Continental-Hospitals.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Fortis-hospital.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Ankura-Hospital-Logo.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/GLB-hospital.png",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Rainbow-hospital.png",
];

export function Section9() {
  return (
    <Set9>
      <div>
        <p>
          Successfully crowdfunded for patients across all major hospitals in
          India
        </p>
        <hr
          style={{
            marginTop: "1.5rem",
            width: "5rem",
            height: "3px",
            background: "green",
          }}
        ></hr>
        <Slide data={arr} />
      </div>
    </Set9>
  );
}
