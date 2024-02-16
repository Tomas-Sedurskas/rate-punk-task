import { Caveat_Brush } from "next/font/google";
import styles from "@/app/home.module.scss";
import { SidelistItem } from "@/components/sidelistItem/sidelistItem";
import { Store } from "@/components/store/store";
import { Form } from "@/components/form/form";

const caveatBrush = Caveat_Brush({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.hero__card}>
          <h1 className={caveatBrush.className}>
            Refer friends and get rewards
          </h1>
          <p className={styles.hero__card__paragraph}>
            Refer your friends to us and earn hotel booking vouchers. We'll give
            you 1 coin for each friend that installs our extension. Minimum
            cash-out at 20 coins.
          </p>
          <Form />

          <div className={styles.hero__card__disclaimer}>
            <span>Limits on max rewards apply.</span>
          </div>
        </div>
        <div className={styles.hero__sidelist}>
          <SidelistItem
            img="/invite.svg"
            alt="icon of invitation mail"
            titleHeader="step 1"
            title="Invite Friends"
            textBody="Refer friends with your unique referral link."
          />
          <SidelistItem
            isReverse
            img="/collect-coins.svg"
            alt="icon of a hand holding coin icon"
            titleHeader="step 2"
            title="collect coins"
            textBody="Get 1 coin for each friend that installs our extension using your referral link."
          />
          <SidelistItem
            img="/voucher.svg"
            alt="icon of a voucher card"
            titleHeader="step 3"
            title="get voucher"
            textBody="Redeem for a $20 hotel booking voucher once you collect 20 coins."
          />
        </div>
      </section>
      <Store />
    </div>
  );
}
