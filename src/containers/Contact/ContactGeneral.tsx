import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { ContactForm } from "../../components";

import styles from "./Contact.module.scss";

interface ContactGeneralProps {}

export function ContactGeneral() {
  return (
    <div className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Contact</h1>
          <div>
            Have any questions? Want to work together? Just fill out the short
            form below and we&#39;ll get in touch with you as quickly as we can.
          </div>
          <ContactForm />
        </div>

        <div className={styles.hero}>
          <Image
            src="https://res.cloudinary.com/austinmel/image/upload/v1673306813/naletteconsulting/contact.svg"
            alt=""
            width="601"
            height="601"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
