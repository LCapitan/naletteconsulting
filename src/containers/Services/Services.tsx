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
    <div className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Our Services</h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Accounting</h3>
                <ul className={styles.details}>
                  <li>Ongoing outsourced accounting services</li>
                  <li>Temporary CFO and controller functions</li>
                  <li>External audit preparation assistance</li>
                  <li>Budget planning and preparation</li>
                  <li>Cash flow projections and analysis</li>
                  <li>Accounting policy and procedure development</li>
                </ul>
              </div>
              <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div>
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Taxes</h3>
                <ul className={styles.details}>
                  <li>
                    Form 990 (including 990EZ and 990N), 990-T and 990-PF
                    preparation
                  </li>
                  <li>Unrelated business income analysis and planning</li>
                  <li>
                    Form 1023 and 1024 exemption application and restoration
                  </li>
                  <li>Public support planning and consulting</li>
                </ul>
              </div>
              <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div>
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Advising</h3>
                <ul className={styles.details}>
                  <li>Accounting standard implementation</li>
                  <li>Technical accounting training and webinars</li>
                </ul>
              </div>
              <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
