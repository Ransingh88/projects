import styled from "styled-components";

const Set7 = styled.h2`
   {
    padding: 30px;
    text-align: center;
    font-weight: 300 !important;
  }
`;

export function Section7() {
  return (
    <Set7>
      <div>
        <div>
          <p>Our Impact So Far</p>
          <hr
            style={{
              marginTop: "1.5rem",
              width: "5rem",
              height: "3px",
              background: "green",
            }}
          ></hr>
          <p>
            ₹1500+ crores* raised from 10,00,000+ donors from over 165 countries
          </p>
        </div>
        <div>
          <img
            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/World-Map.png"
            alt="map"
          />
        </div>
        <div>
          *Inclusive of funds raised by our global crowdfunding partners
        </div>
      </div>
    </Set7>
  );
}
