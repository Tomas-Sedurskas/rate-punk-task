import styles from "@/components/store/store.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Store = () => {
  return (
    <section className={styles.store}>
      <div className={styles.store__container}>
        <Link
          target="_blank"
          href="https://chromewebstore.google.com/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          className={styles.store__link}
        >
          <Image
            src="/chrome.svg"
            alt="chrome web store logo"
            width="56"
            height="52"
          />
          <div>
            <span>available in the</span>
            <h3>chrome web store</h3>
          </div>
        </Link>
        <Link
          target="_blank"
          href="https://apps.apple.com/us/app/ratepunk-hotel-and-travel/id1607823726"
          className={styles.store__link}
        >
          <Image
            src="/apple.svg"
            alt="apple app store logo"
            width="56"
            height="52"
          />
          <div>
            <span>available in the</span>
            <h3>apple app store</h3>
          </div>
        </Link>
        <div className={styles.store__review}>
          <Image src="/stars.svg" alt="star icon" width="121" height="20" />
          <p>Chrome Store reviews</p>
        </div>
      </div>
    </section>
  );
};
