import { FC } from "react";
import styles from "@/components//sidelistItem/sidelistItem.module.scss";
import Image from "next/image";
import { Caveat_Brush } from "next/font/google";

interface SidelistItemProps {
  img: string;
  alt: string;
  titleHeader: string;
  title: string;
  textBody: string;
  isReverse?: boolean;
}

const caveatBrush = Caveat_Brush({ subsets: ["latin"], weight: "400" });

export const SidelistItem: FC<SidelistItemProps> = ({
  img,
  alt,
  titleHeader,
  title,
  textBody,
  isReverse = false,
}) => {
  return (
    <div className={isReverse ? styles.item__reverse : styles.item}>
      <Image width="144" height="144" src={img} alt={alt} />
      <div className={styles.item__content}>
        <span>{titleHeader}</span>
        <h2 className={caveatBrush.className}>{title}</h2>
        <p>{textBody}</p>
      </div>
    </div>
  );
};
