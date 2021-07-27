import styled from 'styled-components'
 

const Section = styled.h2`
   {
    padding: 10px;
    text-align: center;
    font-weight: 300 !important;
    width: 90%;
    margin: auto;

    .text {
      width: 90%;
      height: 300px;

      text-align: right;
      font-weight: 300 !important;
      font-family: Hind Vadodara, sans-serif;
      font-size: medium;
    }
    .flex {
      display: grid;
      grid-template-columns: 50% 50%;
      margin: auto;
    }
    .yplayer {
      justify-content: center;
      width: 100%;
      height: 282px;
      background-image: url("https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/hiw/phone-shell.png");
    }
    .heading {
      text-align: center;
      font-weight: 300 !important;
    }
    .mobileTv {
      align-items: center;
      padding: 0 4rem;
      padding-top: 1rem;
      width: 78%;
      justify-content: center;
    }
    .text + p {
      margin-top: 2rem;
    }
    @media only screen and (max-width: 600px) {
      .flex {
        display: block;
      }
    }
    @media only screen and (max-width: 600px) {
      .flex {
        display: block;
      }
    }
  }
`;


export function Section2() {
    return <Section>
        <div>
            <div className="heading">What is crowdfunding?</div>
             <hr style={{ marginTop:"1.5rem", width: "5rem", height:"3px" ,background:"green",marginBottom:"2.5rem"} }></hr>
            <div className="flex">
                <div className="yplayer">
                    <div className="mobileTv">
                    <iframe style={{border:"none"}} width="100%" height="240px" allowFullScreen src="https://www.youtube.com/embed/JU4-NL5q_zU?rel=0&showinfo=0&autoplay=1"></iframe></div>
                </div>
                <div className="text">
                    <p>Thousands fight for their lives from fatal diseases and unforeseen medical emergencies every day. Families are often left drained of all their savings due to insufficient insurance coverage and are forced to take loans at high interest rates. Many also have to risk delaying or stopping treatment due to lack of funds.</p>
                    <p>At ImpactGuru, we believe saving lives is a service. With the help of millions of donors online, who step up to generously support friends, colleagues and strangers with contributions, we are trying to reach each and every individual across India to ensure that no life is ever lost due to lack of money.</p>
                </div>
            </div>
            
        </div>
    </Section>
    
}