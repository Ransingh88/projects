import styled from "styled-components";

const Set41 = styled.h2`
   {
    padding: 30px;
    color: grey;
    text-align: center;

    background-color: whitesmoke;
    .flex {
      width: 80%;
      text-align: left;
      display: flex;
      margin: auto;
    }
    p {
      font-family: Hind Vadodara, sans-serif;
      line-height: unset;

      font-weight: 300 !important;
      font-size: 1rem;
    }
    h3 {
      font-weight: 300 !important;
      line-height: 36px;
      font-style: unset;
      font-size: 24px;
      letter-spacing: -0.5px;
    }
    p::before {
    }
    .arrow {
      line-height: 33px;
      width: 15px;
      height: 15px;
      padding: 0.2rem;
      align-items: center;
      color: green;
      border-radius: 50%;
      border: 2px solid green;
      margin-right: 1rem;
      margin-top: 2rem;
    }
    .box {
      padding: 2rem;
      width: 50%;
    }
  }
`;

export function Section41() {
  return (
    <Set41>
      <div>
        <h3>Why fundraise with ImpactGuru</h3>
        <hr
          style={{
            marginTop: "1.5rem",
            width: "5rem",
            height: "3px",
            background: "green",
          }}
        ></hr>
        <div className="flex">
          <div className="box">
            <p>
              <span className="arrow">✔</span>Maximize your fundraising with 0%
              platform fee plan
            </p>
            <p>
              {" "}
              <span className="arrow">✔</span>Create an automated donor appeal
              in 2 minutes with our storybuilder
            </p>
            <p>
              {" "}
              <span className="arrow">✔</span>Run your fundraiser from anywhere
              with our iOS/Android Apps
            </p>
            <p>
              {" "}
              <span className="arrow">✔</span>Get donations from over 165
              countries with multiple payment methods
            </p>
          </div>
          <div className="box">
            <p>
              {" "}
              <span className="arrow">✔</span>Indian tax benefits available to
              donors
            </p>
            <p>
              <span className="arrow">✔</span>Fundraise lakhs of rupees within
              days by using customised fundraising calendar
            </p>
            <p>
              <span className="arrow">✔</span>Take your loved one home without
              loans or payback liability
            </p>
            <p>
              <span className="arrow">✔</span>Get help anytime from dedicated
              Relationship Managers
            </p>
          </div>
        </div>
      </div>
    </Set41>
  );
}
