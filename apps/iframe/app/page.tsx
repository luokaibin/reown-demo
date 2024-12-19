"use client"
import styles from "./page.module.css";

export default function Home() {
  const requestStorageAccess = async () => {
    const hasAccess = await document.hasStorageAccess();
    if (!hasAccess) {
      // 需要请求权限
      try {
        await document.requestStorageAccess();
        console.log(localStorage, localStorage.getItem('test'))
        console.log('存储访问权限已授予');
      } catch (error) {
        console.error('无法获取存储访问权限:', error);
      }
    }
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
