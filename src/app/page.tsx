import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.parent}>
       <div>
       <p className={styles.sub}>Boost Your App with</p>
       <h1 className="header">BuggyBillions-UI</h1>
       </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Get Started
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </div>
    </>
  );
}
