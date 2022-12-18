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
        <span className={styles.tag}>CPAs & Business Advisor</span>
        <h1>Forget accounting. Focus on your mission.</h1>
        <div className={styles.tagline}>
          Consulting, Outsourced Accounting and tax services specializing in the
          not-for-profit industry
        </div>
        <div className={styles.actions}>
          <Button label="Meet Us" url="#about" secondary />
        </div>
      </div>
      <div className={styles.hero}>
        <HomeBg />
      </div>
    </div>
  );
}
