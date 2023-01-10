import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Intro.module.scss";
import { Button } from "../../components";

const Intro = () => {
  return (
    <div id="about" className={styles.intro}>
      <figure className={styles.image}>
        <Image
          src="https://res.cloudinary.com/austinmel/image/upload/v1671311473/naletteconsulting/intro-rightImg.svg"
          alt=""
          layout="fill"
        />
      </figure>
      <div className={styles.content}>
        <h2 className={styles.title}>Accounting for Change</h2>
        <div className={styles.tagline}>
          Specializing in the not-for-profit industry, Nalette Consulting prides
          itself on honesty and integrity and brings a wide range of experience
          in all matters of accounting and taxation of nonprofit organizations.
          <br />
          <br />
          We are dedicated to providing exceptional service to clients and
          helping them achieve their financial and operational goals and assist
          our clients in meeting their financial reporting and tax compliance
          requirements.
        </div>
        <div className={styles.actions}>
          <Button label="View Services" url="/services" secondary />
        </div>
      </div>
    </div>
  );
};

export default Intro;
