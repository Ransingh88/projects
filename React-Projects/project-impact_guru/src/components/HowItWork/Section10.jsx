import styled from "styled-components";
import { useState } from "react";

const Set10 = styled.h2`
   {
    padding: 30px;
    font-weight: 300 !important;
    background-color: whitesmoke;
    .div + div {
      display: none;
    }
    .icon {
      width: 25px;
      height: 25px;
    }
    .flex {
      width: 90%;
      margin: auto;
      text-align: left;
      display: flex;
      background-color: whitesmoke;
    }
    .boxleft {
      width: 48%;
      margin: 2rem;
    }
    .boxrigth {
      width: 48%;
      margin: 2rem;
    }
    .div {
      font-size: 15px;
      border: 1px solid white;
    }
    .boxaligment {
      border-radius: 25px;
      font-size: 15px;
      background-color: white;
      padding: 10px;
      margin-bottom: 1rem;
      font-weight: 300 !important;
    }
    .heading {
      color: grey;
      text-align: center;
      fontweight: 300 !important;
    }
  }
`;

const handleclick = (e) => {
  if (e.target.className === "div") {
    e.target.className = "";
  } else {
    e.target.className = "div";
  }
};
export function Section10() {
  return (
    <Set10>
      <div className="heading">FAQs</div>
      <hr
        style={{
          marginTop: "1.5rem",
          width: "5rem",
          height: "3px",
          background: "green",
        }}
      ></hr>
      <div className="flex">
        <div className="boxleft">
          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              {" "}
              What is ImpactGuru?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>

            <div>
              <p>
                ImpactGuru is India's leading online crowdfunding platform that
                enables NGOs to fund their programs as well as individuals to
                fund their medical expenses, creative projects and personal
                projects. Alternatively, it allows you to donate to a cause you
                support or, choose from a host of vetted causes here on Impact
                Guru.
              </p>
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              {" "}
              What do I need to start a fundraiser?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>{" "}
            </p>
            <div>
              <p>
                You can create a fundraiser on ImpactGuru in less than 5 mins!
                Click on the start a fundraiser button and from there you will
                require the following to complete your fundraiser.
              </p>
              <p>
                1.Your personal details, including your name, phone number and
                email.
              </p>
              <p>
                2.Add details about your fundraiser, including a title, images,
                a story (your appeal to potential donors - if your cause is
                medical, a storybuilder will appear in the third step to help
                you write your story), name of the beneficiary and the goal
                amount.
              </p>
              <p>
                3.Add supporting documents like the patients’ medical reports,
                doctor’s letter, medical bills etc.
              </p>
              <p>Watch this video to know how to build a great fundraiser!</p>
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              {" "}
              What if my fundraiser doesn’t reach its goal amount?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                No problem! We follow a flexible model where you can keep what
                you’ve raised without being penalised for not meeting your goal.
              </p>
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              {" "}
              What is 0% ImpactGuru platform fee model?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                Through the 0% ImpactGuru Platform Fee, we at ImpactGuru waive
                off our platform fees, so that you can receive maximum funds for
                the causes you care about. As a fundraiser, you don’t pay
                anything. To help us maintain the platform to provide you a free
                fundraising option, we ask donors for a voluntary tip.
              </p>
            </div>
          </div>
        </div>

        {/* secons section code */}
        <div className="boxrigth">
          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              How does ImpactGuru disburse funds during emergencies?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                We understand that many campaigners, especially medical causes,
                cannot wait until the fundraiser closes and often need to make
                payments to hospitals in parts. Unlike many platforms, on
                ImpactGuru, you can request for partial or full fund withdrawal
                before your fundraiser closes! Go to your dashboard, click on
                “Withdraw Funds”, enter the amount you wish to withdraw and
                upload the documents required (bank details and scanned copies
                of PAN and Aadhar cards).{" "}
              </p>{" "}
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              How long does it take to receive funds?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                Fund transfers usually take 3-5 working days for domestic funds
                and 7-10 working days for international funds after the request
                has been made. In case of emergencies or if the above mentioned
                time period has passed, get in touch with us at
                info@impactguru.com and we will revert at the earliest.{" "}
              </p>{" "}
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              I am new at this, how do I know if I will be successful?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                Crowdfunding is new to many patients and their families and
                while we have put in years of work to build a platform that is
                user-friendly and intuitive, we do understand new campaigners
                might feel confused at times. In that case, your dedicated
                crowdfunding expert will always be available on call to guide
                you to reach your goal. Our platform has been used successfully
                by students, labourers, working professionals, housewives,
                teachers and even farmers to raise money - we’ve worked hard to
                ensure that no matter where you come from or what you do, you
                are able to raise funds easily.{" "}
              </p>{" "}
            </div>
          </div>

          <div className="boxaligment">
            <p className="div" onClick={handleclick}>
              Why does ImpactGuru charge a fee on some of the plans?{" "}
              <span style={{ float: "right" }}>
                <img
                  className="icon"
                  src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-128.png"
                  alt=""
                />
              </span>
            </p>
            <div>
              <p>
                ImpactGuru is a social enterprise that provides crowdfunding
                support for medical, personal, and non-profit causes. Our
                mission is to help finance the critical illnesses of over 1
                million / 10 lakh patients over the next decade. To provide the
                best experience to our customers, we have to incur various costs
                relating to technology infrastructure, dedicated staff,
                fundraiser outreach, due diligence and vetting, disbursing
                funds, and updating donors on fund utilization. Only when we
                sustain, will we be able to achieve our mission. Just like a
                hospital charges a fee to treat patients or an academic
                institution to educate students, we too charge a fee for some of
                our services as a single solution does not cater to every
                customer. In India, healthcare and education require a
                personalized and customized approach, likewise, crowdfunding
                too! We constantly strive to provide the best fundraising
                experience and support to all our customers and our pricing
                plans reflect the value we deliver in helping our customers
                achieve their fundraising goals at the lowest possible cost.
                While our 0% ImpactGuru Platform Fee plan is tailored to
                perfectly fit those customers who are familiar with
                crowdfunding, our other plans, Assist and Collaborate, and our
                Accelerate initiative, entail a variety of value added services
                for those who need additional support with fundraising. At
                ImpactGuru, we invest an abundant amount of time and effort to
                provide high touch customer support, customised outreach plans,
                multimedia support and much more as a part of these plans to
                provide a fruitful fundraising experience.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </Set10>
  );
}
