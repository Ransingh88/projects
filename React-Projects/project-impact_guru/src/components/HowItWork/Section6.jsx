import styled from "styled-components";
import { Slide1 } from "./carousel/Carousel2";

const Set6 = styled.h2`
   {
    padding: 30px;
    text-align: center;
    font-weight: 300 !important;
    background-color: whitesmoke;

    h5 {
      font-weight: 300 !important;
      font-size: 24px;
    }
  }
`;
const arr = [
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Ezekiel_banner.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Srinivas-Gopalan_banner.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Praveen-pudil_banner.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Ansh_banner.jpg",
  "https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Amit-Shenoy-Banner.jpg",
];
const arr1 = [
  "My brother Saurabh’s train accident left us in shock. Thanks to ImpactGuru.com, we were able to raise funds for his surgery within days and today my brother is up and running. I can’t thank all the donors for their generosity. ",
  " My son Ansh, an aspiring athlete was left paralysed with the rare GB Syndrome weeks before his National Level Athletics Tournament. Thanks to ImpactGuru.com I could afford his medical treatment. Today he is out of danger and is recovering slowly. Can’t wait for him to get back on his feet! ",
  "My brother Saurabh’s train accident left us in shock. Thanks to ImpactGuru.com, we were able to raise funds for his surgery within days and today my brother is up and running. I can’t thank all the donors for their generosity.",
  "My son Ansh, an aspiring athlete was left paralysed with the rare GB Syndrome weeks before his National Level Athletics Tournament. Thanks to ImpactGuru.com I could afford his medical treatment. Today he is out of danger and is recovering slowly. Can’t wait for him to get back on his feet! ",
  "My son Ansh, an aspiring athlete was left paralysed with the rare GB Syndrome weeks before his National Level Athletics Tournament. Thanks to ImpactGuru.com I could afford his medical treatment. Today he is out of danger and is recovering slowly. Can’t wait for him to get back on his feet!",
];

export function Section6() {
  return (
    <Set6>
      <div>
        <h5>Hear it from our campaigners!</h5>
        <hr
          style={{
            marginTop: "1.5rem",
            width: "5rem",
            height: "3px",
            background: "green",
          }}
        ></hr>
        <Slide1 data={arr} data1={arr1} />
      </div>
    </Set6>
  );
}
