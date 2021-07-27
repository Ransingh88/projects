import styles from "./Help.module.css"
import Container from "@material-ui/core/Container";

export function Help() {
    return (
      <div className={styles.help}>
        <Container maxWidth="md">
          <p>ImpactGuru has waived off its fee for this cause</p>
          <h2>
            ANGEL #ThankANurse, Support In Upskilling & Uplifting Their Future
          </h2>
          <div className={styles.flex}>
            <img
              src="https://images.unsplash.com/photo-1605722558200-b83d78c255a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <div className={styles.money}>
              <div className={styles.details}>
                <div>
                  <span>0% </span> funded <br /> in 1 days
                </div>
                <div>
                  <span>₹ 0 Raised</span> of ₹ 50,000
                </div>
              </div>
              <button className={styles.btn1donate}>DONATE NOW</button>
              <div className={styles.share}>
                Every social media share can bring ₹5,000
              </div>
              <button className={styles.btn1fb}>SHARE ON FACEBOOK</button>
            </div>
          </div>
        </Container>
      </div>
    );
}