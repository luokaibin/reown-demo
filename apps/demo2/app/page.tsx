import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>demo2</h1>
      <iframe
        src={process.env.NEXT_PUBLIC_IFRAME_URL}
        width="100%"
        height={"100%"}>
      </iframe>
    </div>
  );
}
