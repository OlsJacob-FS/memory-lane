import Image from "next/image";
import styles from "./page.module.css";
//component import
import CardComponent from "./components/Card";
//data import
import blogData from "./data/data";
import dashboardImage from "./images/dev-unsplash.jpg";
//Dashboard image: https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.dashH1}>Welcome To My Development Blog!</h1>
        <Image
          src={dashboardImage}
          alt="Dash page image"
          className={styles.dashImg}
        />
      </div>

      <div className={styles.articalSection}>
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
      </div>
    </main>
  );
}
