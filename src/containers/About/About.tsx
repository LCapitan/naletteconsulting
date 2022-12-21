import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./About.module.scss";
import { Button, Logo } from "../../components";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1>Nalette Consulting</h1>
          <div className={styles.tagline}>
            Specializing in the not-for-profit industry, Nalette Consulting
            prides itself on honesty and integrity. We are dedicated to
            providing exceptional service to our clients and helping them
            achieve their financial and operational goals. We have a wide range
            of experience in all matters of accounting and taxation of nonprofit
            organizations and are committed to assisting our clients to meet
            their financial reporting and tax compliance requirements. Our staff
            size is large enough to meet your needs, yet small enough to deliver
            the responsive service you expect.
          </div>
        </div>
        <div className={styles.logo}>
          <Logo gradient />
        </div>
      </div>

      <div className={styles.profile}>
        <div className={styles.hero}>
          <Image
            src="https://res.cloudinary.com/austinmel/image/upload/v1671318417/naletteconsulting/Professional_Photo_1.jpg"
            alt=""
            width="601"
            height="601"
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          {/* <span className="tag">CPA, Founder, CEO</span> */}
          <h1>Benjamin Nalette, CPA</h1>
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
              Professional Qualifications and Education
              <ul>
                <li>
                  Certified Public Accountant (CPA), Commonwealth of Virginia
                </li>
                <li>
                  Bachelors of Science in Public Accountancy and Finance from
                  State University of New York at Fredonia.
                </li>
              </ul>
              <br />
              <strong>Fun Fact:</strong> Ben loves ultrarunning and backpacking.
              He has attempted seven (7) 100 mile races, however has never run a
              marathon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
