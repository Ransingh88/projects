import styled from "styled-components";

const Set4 = styled.h2`
   {
    padding: 30px;

    font-size: 16px;
    align-items: center;
    text-align: center;
    .flex {
      padding-left: 3rem;
      padding-right: 3rem;
      display: flex;
      font-size: 24px;
      line-height: 24px;

      letter-spacing: -0.5px;
      font-weight: 400;
      justify-content: center;
      margin-top: 50px;
    }
    p {
      border: 1px solid whitesmoke;
      background-color: whitesmoke;

      padding: 1rem;
      justify-content: center;
      align-items: center;
      font-size: 0.7em;
      font-weight: 300!imp;
    }

    .h11 {
      margin-left: 10px;
      text-align: left;
    }
    .h11 + p {
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-top-right-radius: 25px;
    }

    .h12 {
      margin-right: 10px;
      text-align: right;
    }
    .h12 + p {
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
    }
    .h13 {
      margin-left: 10px;
      text-align: left;
    }
    .h13 + p {
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-top-right-radius: 25px;
    }
    .h14 {
      margin-right: 10px;
      text-align: right;
    }
    .h14 + p {
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
    }
    h1 {
      line-height: 1rem;
      color: rgb(231, 228, 228);
    }
    .gapr {
      margin-left: 2rem;
    }
    .gapl {
      margin-right: 2rem;
    }
  }
`;

export function Section4() {
  return (
    <Set4>
      <div>
        <h2>How does crowdfunding work?</h2>
        <hr
          style={{
            marginTop: "1.5rem",
            width: "5rem",
            height: "3px",
            background: "green",
          }}
        ></hr>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Step-1-Create-your-fundraiser-instantly.png"
            alt="im1"
          />
        </div>
        <div className="gapr">
          <h1 className="h11">1</h1>
          <p>Step 1: Start your free fundraiser</p>
        </div>
      </div>
      <div className="flex">
        <div className="gapl">
          <h1 className="h12">2</h1>
          <p>Step 2: Share your fundraiser online</p>
        </div>
        <div>
          <img
            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Step-1-Create-your-fundraiser-instantly.png"
            alt="im1"
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Step-1-Create-your-fundraiser-instantly.png"
            alt="im1"
          />
        </div>
        <div className="gapr">
          <h1 className="h13">3</h1>
          <p>Step 3: Receive donations from around the world</p>
        </div>
      </div>

      <div className="flex">
        <div className="gapl">
          <h1 className="h14">4</h1>
          <p>Step 4: Transfer funds to the hospital directly</p>
        </div>
        <div>
          <img
            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/ngo/Step-1-Create-your-fundraiser-instantly.png"
            alt="im1"
          />
        </div>
      </div>
    </Set4>
  );
}
