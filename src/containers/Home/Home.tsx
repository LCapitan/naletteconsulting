import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../components";
import { HomeBg } from "../../components/Icons/";

import styles from "./Home.module.scss";

interface HomeProps {}

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <span className="tag">CPAs & Business Advisors</span>
        <h1>Let us handle the numbers while you make a difference.</h1>
        <div className={styles.tagline}>
          Providing outsourced accounting, tax services, and consulting services
          specializing in the not-for-profit industry
        </div>
        <div className={styles.actions}>
          <Button label="Meet Us" url="/about" secondary />
        </div>
      </div>
      <div className={styles.hero}>
        <HomeBg />
      </div>
    </div>
  );
}
