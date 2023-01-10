import Link from "next/link";
import React, { useContext } from "react";
import { ContactForm } from "../ContactForm";
import { LinkedIn, Instagram, Twitter, Facebook, Logo } from "../Icons";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.super}>
        <Logo />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.contact}>
            <div className={styles.address}>
              <h4>Address</h4>
              <address>
                11166 Fairfax Blvd, Suite 500 #1005
                <br />
                Fairfax, VA 22030
              </address>
            </div>
            <div className={styles.phone}>
              <h4>Phone</h4>
              <div className={styles.desktop}>(703) 436-2622</div>
              <div className={styles.mobile}>
                <a href="tel:7034362622">(703) 436-2622</a>
              </div>
            </div>
          </div>

          <div className={styles.logo}>
            <Logo />
            <div className={styles.namemark}>
              <span className={styles.nalette}>Nalette</span>
              <span className={styles.consulting}>Consulting</span>
            </div>
          </div>

          <div className={styles.space}>&nbsp;</div>
        </div>
      </div>
    </footer>
  );
}
