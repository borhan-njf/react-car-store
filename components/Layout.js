import styles from "../styles/Layout.module.css";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BOTOCAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://botostart.ir" target="_blank">
          Botostart
        </a>{" "}
        Next.js courses | BotoCar Project &copy;
      </footer>
    </>
  );
}
