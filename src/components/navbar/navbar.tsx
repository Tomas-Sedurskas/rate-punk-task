"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/components/navbar/navbar.module.scss";
import classNames from "classnames";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Image
          className={styles.navbar__logo}
          src="/logo.svg"
          alt="ratepunk logo"
          width="125"
          height="32"
        />

        <div
          className={classNames(styles.navbar__menu, {
            [styles.navbar__menu__open]: isOpen,
          })}
        >
          <Link className={styles.navbar__menu__link} href="/">
            Chrome Extension
          </Link>
          <Link className={styles.navbar__menu__link} href="/">
            Price Comparison
          </Link>
          <Link className={styles.navbar__menu__link} href="/">
            Blog
          </Link>
        </div>

        <button
          tabIndex={1}
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
          type="button"
          className={styles.navbar__burger__button}
        >
          <Image
            src={isOpen ? "close.svg" : "menu.svg"}
            alt="burger menu icon"
            width="16"
            height="16"
          />
        </button>
      </div>
    </div>
  );
};
