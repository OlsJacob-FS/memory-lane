import Image from "next/image";
import styles from "./page.module.css";
// component import
import CardComponent from "./components/Card";
//data import
import blogData from "./data/data";
import dashboardImage from "./images/dev-unsplash.jpg";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.dashH1}>Welcome to my development blog!</h1>
        <Image
          src={dashboardImage}
          alt="Dash page image"
          className={styles.dashImg}
        />
      </div>

      {blogData.map((d, i) => {
        return (
          <CardComponent
            key={i}
            id={d.id}
            image={d.image}
            title={d.title}
            body={d.body}
          />
        );
      })}
    </main>
  );
}
