import styles from '../../styles/page.module.css';

export default function Footer() {
  // Get current date in format: 01/26
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear()).slice(-2);
  const lastUpdated = `${month}/${year}`;

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Last updated {lastUpdated}</p>
    </footer>
  );
}
