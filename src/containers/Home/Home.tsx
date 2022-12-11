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
        <span className={styles.tag}>Certified CPA</span>
        <h1>Here&#39;s where you&#39;ll put your heading</h1>
        <div className={styles.tagline}>
          And here&#39;s where you can put a couple sentences about what you do.
          Or maybe just about you.
        </div>
        <div className={styles.actions}>
          <Button label="Services" secondary />
        </div>
      </div>
      <div className={styles.hero}>
        <HomeBg />
      </div>
    </div>
  );
}
