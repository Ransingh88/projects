import React from "react";
import { Heading } from "../Heading/Heading";
import styles from "./Tech.module.css";

const Tools = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.tech__content}>
        <Heading>Tools</Heading>
        <div className={styles.tech__techSkills}>
          
          <div className={styles.tech__skill}>
            <img src="./icons/visual-studio-code-1.svg" alt="icons" />
            <p>VS Code</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/postman.svg" alt="icons" />
            <p>Postman</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/netlify.svg" alt="icons" />
            <p>Netlify</p>
          </div>
                  <div className={styles.tech__skill}>
            <img src="./icons/figma-1.svg" alt="icons" />
            <p>Figma</p>
                  </div>
                  <div className={styles.tech__skill}>
            <img src="./icons/adobe-photoshop-2.svg" alt="icons" />
            <p>Potoshop</p>
                  </div>
                  <div className={styles.tech__skill}>
            <img src="./icons/adobe-illustrator-cc-2019.svg" alt="icons" />
            <p>Illustrator</p>
          </div>
          
          <div className={styles.tech__skill}>
            <img src="./icons/adobe-xd-2.svg" alt="icons" />
            <p>Adobe XD</p>
          </div>
          <div className={styles.tech__skill}>
            <img src="./icons/blender-2.svg" alt="icons" />
            <p>Blender</p>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export { Tools };
