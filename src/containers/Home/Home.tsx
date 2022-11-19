import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../components";
import { Logo } from "../../components/Icons/";

import styles from "./Home.module.scss";

interface HomeProps {}

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1>Nalette</h1>
      <h2>Consulting</h2>
    </div>
  );
}
