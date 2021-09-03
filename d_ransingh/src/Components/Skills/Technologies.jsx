import React from "react";
import { Heading } from "../Heading/Heading";
import styles from "./Tech.module.css";

const Technologies = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.tech__content}>
        <Heading>Technologies</Heading>
              <div className={styles.tech__techSkills}>
                  <div className={styles.tech__skill}>
            <img src="./icons/logo-javascript.svg" alt="icons" />
            <p>Javascript</p>
                  </div>
                  <div className={styles.tech__skill}>
            <img src="./icons/react-2.svg" alt="icons" />
            <p>React</p>
                  </div>
                  <div className={styles.tech__skill}>
            <img src="./icons/redux.svg" alt="icons" />
            <p>Redux</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/html-1.svg" alt="icons" />
            <p>HTML</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/css-3.svg" alt="icons" />
            <p>CSS</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/material-ui-1.svg" alt="icons" />
            <p>Material UI</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/git-icon.svg" alt="icons" />
            <p>GIT</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/github-icon-1.svg" alt="icons" />
            <p>Github</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/express-109.svg" alt="icons" />
            <p>Express</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/nodejs-icon.svg" alt="icons" />
            <p>Node.js</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export { Technologies };
