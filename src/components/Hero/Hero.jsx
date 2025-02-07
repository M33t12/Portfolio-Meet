import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Meet </h1>
        <p className={styles.description}>
           I'm, a third-year Computer Engineering student with foundational knowledge in full-stack web development and a passion for building dynamic, user-friendly web applications.
        </p>
       
      </div>
      <img
        src={getImageUrl("hero/profile-pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/*
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      */}
      </section>
  );
};
