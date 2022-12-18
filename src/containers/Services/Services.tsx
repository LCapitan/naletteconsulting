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
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.tagline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            dictum mi, id faucibus est. Vestibulum vehicula tortor a odio
            accumsan viverra.
          </div>
        </div>
        <ul className={styles.serviceList}>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Accounting</h3>
                <div className={styles.details}>
                  Ongoing outsourced accounting services. Temporary CFO and
                  controller functions. External audit preparation assistance.
                  Budget planning and preparation. Cash flow projections and
                  analysis. Accounting policy and procedure development.
                </div>
              </div>
              {/* <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div> */}
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Taxes</h3>
                <div className={styles.details}>
                  Form 990 (including 990EZ and 990N), 990-T and 990-PF
                  preparation. Unrelated business income analysis and planning.
                  Form 1023 and 1024 exemption application and restoration.
                  Public support planning and consulting.
                </div>
              </div>
              {/* <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div> */}
            </div>
          </li>
          <li className={styles.serviceListItem}>
            <div className={styles.inner}>
              <div>
                <h3 className={styles.cardTitle}>Advising</h3>
                <div className={styles.details}>
                  Accounting standard implementation. Technical accounting
                  training and webinars.
                </div>
              </div>
              {/* <div className={styles.actions}>
                <Button secondary label="Learn more" />
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
