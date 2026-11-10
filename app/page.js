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
        <div className={styles.nameRow}>
          <h1 className={styles.name}>Aditya Ajay</h1>
          <nav className={styles.socials} aria-label="Social links">
            <a className={styles.socialLink} href="https://www.linkedin.com/in/adityaajay33/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7.5 10v7M7.5 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
              </svg>
            </a>
            <a className={styles.socialLink} href="mailto:a2ajay@uwaterloo.ca" aria-label="Email Aditya" title="Email Aditya">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <a className={styles.socialLink} href="https://github.com/adityaajay33" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.77-.244.77-.542 0-.267-.01-.975-.015-1.913-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.022-.7.078-.686.078-.686 1.13.08 1.725 1.16 1.725 1.16 1.005 1.722 2.638 1.225 3.28.937.103-.728.393-1.225.715-1.507-2.5-.284-5.13-1.25-5.13-5.565 0-1.23.44-2.232 1.16-3.02-.116-.285-.503-1.43.11-2.98 0 0 .945-.303 3.095 1.154a10.78 10.78 0 0 1 5.63 0c2.147-1.457 3.09-1.154 3.09-1.154.616 1.55.23 2.695.114 2.98.723.788 1.157 1.79 1.157 3.02 0 4.326-2.633 5.278-5.14 5.557.405.35.766 1.04.766 2.097 0 1.515-.014 2.738-.014 3.11 0 .3.203.65.774.54A11.251 11.251 0 0 0 12 .75Z" />
              </svg>
            </a>
          </nav>
        </div>
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
        </div>
      </div>
      <section className={styles.videoGrid} aria-label="Robotics videos">
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
