import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import UIContext from "../../context/UIContext";
import cx from "classnames";

// components
import { Button } from "../../components";

// styles
import styles from "./Services.module.scss";

export function Services() {
  // const { pricingModalOpen, setPricingModalOpen } = useContext(UIContext);

  return (
    <div id="services" className={styles.services}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Here&#39;s what we do</h2>
          <div className={styles.tagline}></div>
        </div>
        <ul className={styles.serviceList}>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <h3 className={styles.cardTitle}>Accounting</h3>
              <div className={styles.details}>
                Ongoing outsourced accounting services & temporary CFO and
                controller functions.
              </div>
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <h3 className={styles.cardTitle}>Taxes</h3>
              <div className={styles.details}>
                Form 990 (including 990EZ and 990N), 990-T and 990-PF
                preparation.
              </div>
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <h3 className={styles.cardTitle}>Consulting</h3>
              <div className={styles.details}>
                Accounting standard implementation. Technical training and
                webinars.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
