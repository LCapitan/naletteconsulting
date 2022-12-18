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
        Contact
        <ContactForm />
      </div>
    </div>
  );
}
