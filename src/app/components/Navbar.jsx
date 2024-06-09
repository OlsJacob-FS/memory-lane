//React imports
import React from "react";
//Next imports
import Link from "next/link";
//CSS imports
import styles from "../page.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1>Memory Lane</h1>
      <Link href="/">Home</Link>
    </nav>
  );
}
