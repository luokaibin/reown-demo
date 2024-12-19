"use client"
import styles from "./page.module.css";

export default function Home() {
  const requestStorageAccess = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const storage = await document.requestStorageAccess({all: true})
    console.log('line 7', storage);
    localStorage.setItem('test', 'test')
  }
  return (
    <div className={styles.page}>
      <h1>Iframe</h1>
      <div className={styles.action}>
        <button onClick={requestStorageAccess}>requestStorageAccess</button>
      </div>
      <appkit-button />
    </div>
  );
}
