import styles from '../styles/page.module.css';

const videos = [
  { name: 'robot-01', description: 'Robot arm working in a factory' },
  { name: 'robot-02', description: 'Automated robotic assembly' },
  { name: 'robot-03', description: 'Robot arm stacking pallets' },
];

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.name}>Aditya Ajay</h1>
        <div className={styles.intro}>
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
          <a className={styles.portfolioLink} href="/portfolio/">
            Portfolio <span aria-hidden="true">↗</span>
          </a>
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
        </div>
      </div>
      <section className={styles.videoGrid} aria-label="Portfolio videos">
        {videos.map((video) => (
          <article className={styles.videoCard} key={video.name}>
            <div className={styles.videoFrame}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={`/videos/${video.name}.jpg`}
                aria-label={video.description}
              >
                <source src={`/videos/${video.name}.mp4`} type="video/mp4" />
              </video>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
