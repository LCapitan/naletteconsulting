// import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React, { useContext } from "react";
import UIContext from "../../context/UIContext";
import { Logo } from "../Icons";
import Menu from "../Menu/Menu";
import Hamburger from "./HamburgerButton";

import { SocialMenu } from "../SocialMenu/SocialMenu";

import styles from "./Header.module.scss";
import { Button } from "../Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Logo gradient />
          </Link>
        </div>
        <Menu />
        <Button label="Become a Client" />
        {/* <div className={styles.menuToggle}>
          <Hamburger />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
