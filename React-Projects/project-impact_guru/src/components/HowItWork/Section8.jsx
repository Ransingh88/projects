import styled from "styled-components";

const Set81 = styled.div`
   {
    text-align: center;
    font-weight: 300 !important;
    font-size: 24px;
    color: #000;
    letter-spacing: -0.5px;
    margin-bottom: 4rem;
    p {
      font-size: 15px;
    }
  }
`;
const Set8 = styled.h2`
   {
    padding: 30px;
    text-align: center;
    width: 80%;
    display: flex;
    margin: auto;
    background-color: whitesmoke;
    font-weight: 300 !important;

    .box {
      text-align: left;
      margin: 0 10px;
      width: 30%;
      padding: 20px;
      display: flex;
      height: 250px;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='580' height='162' xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient y2='0' x2='1' y1='0' x1='0' id='a'%3E%3Cstop offset='0' stop-color='%2321936a'/%3E%3Cstop offset='1' stop-color='%23a8eb12'/%3E%3C/linearGradient%3E%3Cpath d='M4.5 28.438s176-82 348 39 402-81 401.5-81.438c.5.438-6.5 252.438-7 252 .5.438-772.5-4.563-772-5-.5.438 2.5-195.563 3-196-.5.438 26.5-8.563 26.5-8.563z' fill='url(%23a)'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left bottom;
      background-size: 100%;
      padding: 10px;
      font-weight: 400;
      background-color: white;
      border-radius: 10px;
    }
    h3 {
      font-size: 1.5rem;
    }
    .sem {
      line-height: 5px;
    }
  }
`;

export function Section8() {
  return (
    <div>
      <Set81>
        Pricing Plans
        <hr
          style={{
            marginTop: "1.5rem",
            width: "5rem",
            height: "3px",
            background: "green",
          }}
        ></hr>
      </Set81>
      <Set8>
        <div className="box">
          <div>
            <img
              src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Self-Driven.png"
              alt="image"
            />
          </div>
          <div>
            <h3>SELF-DRIVEN</h3>
            <div className="sem">
              {" "}
              0%
              <p>Platform Fee*</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Self-Driven.png"
              alt="image"
            />
          </div>
          <div>
            <h3>ASSISTED</h3>
            <div className="sem">
              {" "}
              5%
              <p>Platform Fee*</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div>
            <img
              src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/Self-Driven.png"
              alt="image"
            />
          </div>
          <div>
            <h3>COLLABORATE</h3>
            <div className="sem">
              {" "}
              8%
              <p>Platform Fee*</p>
            </div>
          </div>
        </div>
      </Set8>
      <Set81>
        <p>*Payment gateway fees and other fees apply.</p>
        <p>*Visit our Pricing and Fees page for more details.</p>
      </Set81>
    </div>
  );
}
