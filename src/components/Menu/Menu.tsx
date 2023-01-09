// import { useClickOutside } from "@mantine/hooks";
import classnames from "classnames";
import Link from "next/link";
import React, { useContext } from "react";
import UIContext from "../../context/UIContext";
import Hamburger from "../Header/HamburgerButton";
import Image from "next/image";

import styles from "./Menu.module.scss";

export default function Menu() {
  const { menuOpen, setMenuOpen } = useContext(UIContext);
  // const ref = useClickOutside(() => setMenuOpen(false));
  // console.log(menuOpen);

  return (
    <nav className={classnames(styles.menu, menuOpen && styles.open)}>
      <ul className={styles.nav}>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <Link href="#services">Services</Link>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
