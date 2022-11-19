import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../components";
import { WorkBg } from "../../components/Icons/";

import styles from "./WorkContent.module.scss";

const WorkContent = () => {
  return (
    <div className={styles.work}>
      <div className="stars"></div>
      <div className={styles.pageBg}>
        <WorkBg />
      </div>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>work</h1>
        <h2 className={styles.subtitle}>
          Here are a few of the most recent sites I&#39;ve worked on or built.
          (Feel free to reach out to view other various projects).
        </h2>
        <div className={styles.actions}>
          <Button
            url="mailto:austinjamesmelendez@gmail.com"
            label="let's chat"
          />
        </div>
      </div>

      <div className={styles.actions}>
        <Button url="mailto:austinjamesmelendez@gmail.com" label="let's chat" />
      </div>
    </div>
  );
};

export default WorkContent;
