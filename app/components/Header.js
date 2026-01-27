import styles from '../../styles/page.module.css';
import StatusIndicator from './StatusIndicator';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nameRow}>
        <h1 className={styles.name}>Aditya Ajay</h1>
        <StatusIndicator city="Waterloo" />
      </div>
      <p className={styles.subtitle}>Mechatronics Engineering @ UWaterloo</p>
    </header>
  );
}
