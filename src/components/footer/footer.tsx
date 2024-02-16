import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__info}>
          <Image
            className={styles.footer__logo}
            width="125"
            height="32"
            src="/logo.svg"
            alt="ratepunk logo"
          />
          <p className={styles.footer__description}>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>

          <p className={styles.footer__copyright}>
            © 2024 Ratepunk. All Rights Reserved.
          </p>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.footer__title}>Quick links</h3>
          <div className={styles.footer__quicklinks}>
            <Link className={styles.footer__quicklinks__link} href="/">
              Price Comparison
            </Link>
            <Link className={styles.footer__quicklinks__link} href="/">
              Chrome Extension
            </Link>
            <Link className={styles.footer__quicklinks__link} href="/">
              How It Works
            </Link>
            <Link className={styles.footer__quicklinks__link} href="/">
              Ratepunk Blog
            </Link>
            <Link className={styles.footer__quicklinks__link} href="/">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className={styles.footer__sidecolumn}>
          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Contact</h3>
            <address className={styles.footer__contact}>
              <Image
                src="/email-footer.svg"
                alt="email icon"
                width="16"
                height="13"
              />
              <Link
                className={styles.footer__contact__link}
                href="mailto:webmaster@example.com"
              >
                hi@ratepunk.com
              </Link>
            </address>
          </div>

          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Social</h3>
            <div className={styles.footer__social}>
              <Link className={styles.footer__social__link} href="/">
                <Image
                  src="/instagram.svg"
                  alt="instagram logo"
                  width="16"
                  height="16"
                />
              </Link>
              <Link className={styles.footer__social__link} href="/">
                <Image
                  src="/facebook.svg"
                  alt="facebook logo"
                  width="16"
                  height="16"
                />
              </Link>
              <Link className={styles.footer__social__link} href="/">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin logo"
                  width="16"
                  height="16"
                />
              </Link>
              <Link className={styles.footer__social__link} href="/">
                <Image
                  src="/twitter.svg"
                  alt="twitter logo"
                  width="16"
                  height="16"
                />
              </Link>
              <Link className={styles.footer__social__link} href="/">
                <Image
                  src="/tiktok.svg"
                  alt="tiktok logo"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footer__copyright__mobile}>
        © 2024 Ratepunk. All Rights Reserved.
      </p>
    </footer>
  );
};
