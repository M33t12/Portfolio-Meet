import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
  
     <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      
      <div className={styles.text}>
        <ul className={styles.links}>

        <li className={styles.link}>
          <img src={getImageUrl("contact/telephone-call.png")} alt="Email icon" className={styles.resize} />
          <a href="tel:+91 9909487043">+91 9909487043</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chaudharimeet1201@gmail.com">chaudharimeet1201@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/meet-chaudhari-a19266287/">Meet Chaudhari</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/M33t12">M33t12</a>
        </li>
        
        </ul>
      </div>

      <div className={styles.copyright}>
        <p>&copy; Copyright Your Meet || All Rights Reserved.</p>
      </div>




      
    </footer>
  );
};
