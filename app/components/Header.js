import Image from 'next/image';
import styles from '../../styles/page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src="/profile.png"
          alt="Profile Image"
          className={styles.profileImage}
          width={92}
          height={92}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Aditya Ajay</h1>
        <div className={styles.descLinks}>
          <p className={styles.subtitle}>Mechatronics Engineering @ UWaterloo</p>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/adityaajay33" target="_blank" rel="noopener noreferrer">
              <Image src="/icon/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.github.com/adityaajay33" target="_blank" rel="noopener noreferrer">
              <Image src="/icon/github.png" alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
