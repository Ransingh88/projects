import styled from "styled-components";

export function CountFundrais() {
  const ItemMainContainer = styled.div`
    opacity: 0.9;
    /* height: 50vh; */
    background-image: url("https://p1.pxfuel.com/preview/584/998/534/colorful-test-tubes-bottles-glass-science-lab-laboratory.jpg");
    background-size: 100%;
    background-attachment: fixed;
  `;
  const Container = styled.div`
    background-image: linear-gradient(to right, #54b98f, #1b8c78);
    opacity: 0.8;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .tag{
        font-size: 0.8em;
    }
  `;
    
    const ItemContainer = styled.div`
    width: 70%;
    height: 50vh;
    /* background-color: #eee; */
    opacity: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .content{
        display: flex;
        justify-content: space-around;
    }
    `
    const Item = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }
    color: white;
    opacity: 1;
    /* padding: 2em 3em; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    
    p:nth-child(1){
        font-size: 2.2em;
    }

    p:nth-child(2){
        font-size: 1.3em;
    }
    
    `
  return (
    <ItemMainContainer>
          <Container>
              <ItemContainer>
                  <div className="content">
                  <Item>
                      <p className="name">1500+ Cr*</p>
                      <p className="title">Funds Raised</p>
                  </Item>
                  <Item>
                      <p className="name">5,00,000+</p>
                      <p className="title">Individuals & Organisations</p>
                  </Item>
                  <Item>
                      <p className="name">165+</p>
                      <p className="title">Countries Impacted</p>
                      </Item>
                  </div>
                  
                  <div className="content">
                  <Item>
                      <p className="name">1500+ Cr*</p>
                      <p className="title">Instant Approval On Your<br/> Fundraiser</p>
                  </Item>
                  <Item>
                      <p className="name">1500+ Cr*</p>
                      <p className="title">Indian Tax Benefits</p>
                  </Item>
                  <Item>
                      <p className="name">1500+ Cr*</p>
                      <p className="title">Free iOS & Android App.</p>
                      </Item>
                      </div>
              </ItemContainer>
              <p className="tag">*Inclusive of funds raised by our global crowdfunding partners</p>
          </Container>
          
    </ItemMainContainer>
  );
}
