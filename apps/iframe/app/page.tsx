"use client"
import styles from "./page.module.css";

export default function Home() {
  const onClick = () => {
    localStorage.setItem('test', 'test')
  }
  return (
    <div className={styles.page}>
      <h1>Iframe</h1>
      <div onClick={onClick}>
        添加值
      </div>
      <appkit-button />
    </div>
  );
}
