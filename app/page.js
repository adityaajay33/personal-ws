import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.name}>Aditya Ajay</h1>
        <p className={styles.placeholder}>
          Working on simulation and RL for robotics. Previously at{' '}
          <a
            className={styles.shimmer}
            href="https://github.com/isaac-sim/IsaacSim"
            target="_blank"
            rel="noreferrer"
          >
            NVIDIA
          </a>{' '}
          and{' '}
          <a
            className={styles.shimmer}
            href="https://www.tri.global/our-work/robotics"
            target="_blank"
            rel="noreferrer"
          >
            Toyota Research Institute
          </a>.
        </p>
      </div>
      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="https://www.linkedin.com/in/adityaajay33/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className={styles.footerLink} href="mailto:a2ajay@uwaterloo.ca">
          a2ajay@uwaterloo.ca
        </a>
        <a
          className={styles.footerLink}
          href="https://github.com/adityaajay33"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
