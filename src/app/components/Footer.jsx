//React imports
import React from "react";
//Components imports
import Link from "next/link";
//CSS imports
import styles from "../page.module.css";

export default function Footer() {
  return (
    <main>
      <nav className={styles.footer}>
        <p className={styles.p}>@Jacob Ols, EST 2024</p>
        <Link href="/" className={styles.p}>
          Home
        </Link>
      </nav>
    </main>
  );
}
