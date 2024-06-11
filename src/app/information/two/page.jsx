import React from "react";
//Data import
import blogData from "@/app/data/data";
//Next imports
import Image from "next/image";
//css styling:
import styles from "../../page.module.css";

export default function Two() {
  return (
    <main>
      <div className={styles.main}>
        <h1>{blogData[1].title}</h1>
        <Image src={blogData[1].image} height={500} />
        <p className={styles.articalText}>{blogData[1].artical}</p>
      </div>
    </main>
  );
}
