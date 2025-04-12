"use client";

import Image from "next/image";
import styles from "./ProfileImage.module.css";

export default function ProfileImage() {
  return (
    <div className={styles.container}>
      <Image
        src="/ecu-johnny.PNG"
        alt="Johnny's animated photo"
        width={300}
        height={300}
        className={styles.image}
        priority
      />
    </div>
  );
}
