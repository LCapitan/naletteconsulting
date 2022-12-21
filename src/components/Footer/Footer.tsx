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
        </div>
      </div>
    </footer>
  );
}
