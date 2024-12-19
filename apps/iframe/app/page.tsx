"use client"
import styles from "./page.module.css";

export default function Home() {
  const requestStorageAccess = async () => {
    try {
      // 首先检查是否在 iframe 中
      const isInIframe = window !== window.parent;
      if (!isInIframe) {
        console.error('必须在 iframe 中运行才能请求存储权限');
        return;
      }

      // 检查当前是否已有权限
      const hasAccess = await document.hasStorageAccess();
      if (hasAccess) {
        console.log('已经有存储权限');
        return;
      }

      // 请求权限
      await document.requestStorageAccess();
      console.log('存储权限已授予');
      
      // 再次验证权限
      const accessGranted = await document.hasStorageAccess();
      console.log('最终权限状态:', accessGranted);
      
      if (accessGranted) {
        // 尝试使用 localStorage
        localStorage.setItem('test', 'test');
        console.log('localStorage test:', localStorage.getItem('test'));
      }
    } catch (error) {
      console.error('请求存储权限失败:', error);
    }
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
