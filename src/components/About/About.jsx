import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <img className={styles.aboutimg} src={getImageUrl("about/mern.png")}  alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Stack Developer</h3>
              <p>
              I’m a beginner MERN stack developer excited about building web applications. The MERN stack includes four powerful technologies: MongoDB, Express.js, React.js, and Node.js. Together, they allow me to create full-stack applications that are fast and user-friendly.
              </p>
            </div>
          </li>

          <li className={styles.resumeItem}>
            <a href="../../public/Meet-Chaudhari-Resume.pdf" download="Meet-Chaudhari-Resume" className={styles.resumeBtn}>Resume</a>
          </li>

        </ul>
      </div>
    </section>
  );
};
