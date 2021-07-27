import Container from "@material-ui/core/Container";
import styles from "./Footer.module.css";
import { Expand } from "../Accordion";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container maxWidth={window.innerWidth < 700 ? "lg" : "md"}>
        <div className={styles.top}>
          <p>Join the Impact Community!</p>
          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your e-mail id" />
            <button>SUBSCRIBE NOW</button>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <div className={styles.contact}>
            <h4>CONTACT US</h4>
            <div>General Enquiry</div>
            <div>Phone : 18001020380</div>
            <div>Email : info@impactguru.com</div>
            <div>Partnerships :</div>
            <div>partnerships@impactguru.com</div>
          </div>
          <div className={styles.about}>
            <h4>About Us</h4>
            <p>About Us</p>
            <p>Team</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Press & Awards</p>
            <p>Contact Us</p>
            <p>2020 Highlights</p>
            <p>Bug Bounty</p>
          </div>
          <div className={styles.learn}>
            <h4>LEARN</h4>
            <p>How Crowdfunding Works </p>
            <p>Fundraising Ideas </p>
            <p>Fundraising Tips </p>
            <p>Success Stories </p>
            <p>Frequently Asked Questions </p>
            <p>Pricing & Fees </p>
            <p>Trust & Safety</p>
            <p>Crowdfunding in India</p>
          </div>
          <div className={styles.category}>
            <h4>TOP CATEGORIES</h4>
            <p>Medical Crowdfunding</p>
            <p>Transplant Crowdfunding</p>
            <p>Cancer Crowdfunding</p>
            <p>Child Health Crowdfunding</p>
            <p>NGO Crowdfunding</p>
            <p>Education Crowdfundin</p>
            <p>Emergency Crowdfunding</p>
            <p>Film Crowdfunding</p>
          </div>
        </div>
        <Expand />
      </Container>
    </div>
  );
}
