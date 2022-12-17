import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./About.module.scss";
import { Button } from "../../components";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <span className={styles.tag}>CPAs & Business Advisor</span>
        <h1>We&#39;ll handle the numbers, you focus on your mission.</h1>
        <div className={styles.tagline}>
          Consulting, Outsourced Accounting and tax services specializing in the
          not-for-profit industry
        </div>
        <div className={styles.actions}>
          <Button label="Services" secondary />
        </div>
      </div>
      <div className={styles.hero}>
        <Image
          src="https://res.cloudinary.com/austinmel/image/upload/v1670727383/naletteconsulting/about-image.png"
          alt=""
          width="1049"
          height="835"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default About;
