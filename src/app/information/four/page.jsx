import React from "react";
//Data import
import blogData from "@/app/data/data";
//Next imports
import Image from "next/image";
//css styling:
import styles from "../../page.module.css";

export default function One() {
  return (
    <main>
      <div className={styles.main}>
        <h1>{blogData[3].title}</h1>
        <Image src={blogData[3].image} height={500} />
        <div className={styles.bodyContainer}>
          <p className={styles.articalText}>{blogData[3].artical}</p>
        </div>
      </div>
    </main>
  );
}
