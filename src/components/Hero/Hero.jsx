import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nisarga</h1>
        <p className={styles.description}>I am a Front-End Developer skilled in React.js, with experience in creating few applications and designing user-friendly interfaces. I focus on delivering responsive, engaging web experiences. </p>
        <a href="mailto:nisargahiregoudar03@email.com 
        Phone:+91 9108389462" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};