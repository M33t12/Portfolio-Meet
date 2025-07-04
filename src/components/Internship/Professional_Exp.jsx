import React from "react";
import styles from "./Professional_Exp.module.css";
import { getImageUrl } from "../../utils";

export const ProfessionalExperience = () => {
  return (
    <section className={styles.container} id="internship">
      <h2 className={styles.title}>PROFESSIONAL EXPERIENCE</h2>
      <div className={styles.content}>
        <div className={styles.internshipItem}>
          <img
            className={styles.companyLogo}
            src={getImageUrl("about/nephila.png")}
            alt="Company Logo"
          />
          <div className={styles.internshipDetails}>
            <h3>Full Stack Web Development</h3>
            <p className={styles.company}>Nephila Incorporation</p>
            <p className={styles.duration}>May 2025 - June 2025</p>
            <ul className={styles.responsibilities}>
              <li>
                Developed a secure and scalable MERN stack web application allowing users to create, edit, and manage notes with real-time updates and built admin panel with CRUD functionality.
              </li>
              <li>
                Implemented JWT-based login/registration with password encryption, ensuring secure access for authenticated users.
              </li>
              <li>
                Designed and integrated Express.js backend APIs for seamless communication between React frontend and MongoDB.
              </li>
            </ul>
          </div>

          
        </div>
        {
            <div className={styles.internshipItem}>
          <img
            className={styles.companyLogo}
            src={getImageUrl("about/prodigy.png")}
            alt="Company Logo"
          />
          <div className={styles.internshipDetails}>
            <h3>Web Developer</h3>
            <p className={styles.company}>Prodigy Infotech</p>
            <p className={styles.duration}>May 2024 - June 2024</p>
            <ul className={styles.responsibilities}>
              <li>
                Created interactive Navigation Menu, Stop Watch App and Personal Portfolio Website.
              </li>
              <li>
                Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript, ensuring cross browser compatibility.
              </li>
              <li>
                Implemented interactive features (e.g., dynamic forms, animations, and DOM manipulation) to elevate user experience.
              </li>
              
            </ul>
          </div>
        </div>}
      </div>
        
    </section>
  );
};