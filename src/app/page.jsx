import styles from "./page.module.css";
// component import
import CardComponent from "./components/Card";
//RRD imports
//import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my development blog!</h1>
      <CardComponent />
    </main>
  );
}
