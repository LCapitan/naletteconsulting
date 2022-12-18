import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./About.module.scss";
import { Button } from "../../components";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <span className={styles.tag}>CPA, Founder, CEO</span>
          <h1>Benjamin Nalette</h1>
          <div className={styles.tagline}>
            Ben Nalette is the Founder of Nalette Consulting. He is a CPA with
            over a decade of experience specializing in the not-for-profit
            industry. He has spent his entire career as an auditor providing
            assurance and tax services for nonprofit organizations.
          </div>
          <div className={styles.actions}>
            <Button label="Keep reading" url="#aboutBen" secondary />
          </div>
        </div>
        <div className={styles.hero}>
          <Image
            src="https://res.cloudinary.com/austinmel/image/upload/v1671318417/naletteconsulting/Professional_Photo_1.jpg"
            alt=""
            width="601"
            height="601"
            layout="responsive"
          />
        </div>
      </div>

      <div id="aboutBen" className={styles.bio}>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <Image
                src="https://res.cloudinary.com/austinmel/image/upload/v1671319748/naletteconsulting/ben-family.jpg"
                alt=""
                fill
              />
            </div>
          </div>
          <div>
            <h2 className={styles.title}>More about Benjamin</h2>
            <div className={styles.content}>
              After exiting public accounting, he worked as a Controller for a
              quasi-government nursing home and assisted living facility. Ben is
              an active member of the American Institute of Certified Public
              Accountants and the Virginia Society of Certified Public
              Accountants. He currently resides in Manassas Park, Virginia with
              his wife and daughter.
              <br />
              <br />
              <strong>Fun Fact:</strong> Ben loves ultrarunning and backpacking.
              He has attempted seven (7) 100 mile races, however has never run a
              marathon.
            </div>
            {/* <div className={styles.funFact}>
              <h3>fun fact</h3>
              Ben loves ultrarunning and backpacking. He has attempted seven (7)
              100 mile races, however has never run a marathon.
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
