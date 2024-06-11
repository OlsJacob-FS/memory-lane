import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import dashboardImage from "../images/dev-unsplash.jpg";

export default function Page() {
  return (
    <div className={styles.main}>
      <h1 className={styles.dashH1}>Welcome to the Infromation!</h1>
      <Image
        src={dashboardImage}
        alt="Dash page image"
        className={styles.dashImg}
      />
      <Link href="/information/one" className={styles.articalLink}>
        Artical One
      </Link>
      <Link href="/information/two" className={styles.articalLink}>
        Artical Two
      </Link>
      <Link href="/information/three" className={styles.articalLink}>
        Artical Three
      </Link>
    </div>
  );
}
