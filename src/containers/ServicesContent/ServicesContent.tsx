import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../components";

import styles from "./ServicesContent.module.scss";

interface ServicesContentProps {}

export function ServicesContent() {
  return (
    <div className={styles.services}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Services</h1>
          {/* <div></div> */}
        </div>

        <ul className={styles.serviceList}>
          <div className={styles.serviceCard}>
            <h3>Outsourced Accounting Services</h3>
            <ul>
              <li>Ongoing outsourced accounting services</li>
              <li>Temporary CFO and controller functions</li>
              <li>External audit preparation assistance</li>
              <li>Budget planning and preparation</li>
              <li>Cash flow projections and analysis</li>
              <li>Accounting policy and procedure development</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tax Services</h3>
            <ul>
              <li>
                Form 990 (including 990EZ and 990N), 990-T and 990-PF
                preparation
              </li>
              <li>Unrelated business income analysis and planning</li>
              <li>Form 1023 and 1024 exemption application and restoration</li>
              <li>Public support planning and consulting</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Advisory Services</h3>
            <ul>
              <li>Accounting standard implementation</li>
              <li>Technical accounting training and webinars</li>
            </ul>
          </div>
        </ul>

        <div className={styles.callout}>
          <h2>Need assistance?</h2>
          <div>
            Reach out to us to get started with Nalette Consulting today.
          </div>
          <div className={styles.actions}>
            <Button label="Contact Us" url="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
