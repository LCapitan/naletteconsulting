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
          <div className={styles.logo}>
            <Logo />
          </div>
          <address>11166 Fairfax Blvd Ste 500 #1005 Fairfax, VA 22030</address>
          <div className={styles.desktop}>(860) 707-3000</div>
          <div className={styles.mobile}>
            <a href="tel:8607073000">(860) 707-3000</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
