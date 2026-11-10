import Link from 'next/link';
import Image from 'next/image';
import ProjectVideo from './ProjectVideo';
import styles from '../../styles/portfolio.module.css';

export const metadata = {
  title: "Aditya Ajay's Portfolio",
  description: 'Selected robotics and simulation projects by Aditya Ajay.',
  alternates: { canonical: 'https://adityaajay.com/portfolio/' },
};

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <header className={styles.header}>
        <h1 className={styles.name}>
          <Link href="/">Aditya Ajay&apos;s Portfolio</Link>
        </h1>
      </header>

      <section className={styles.projects} aria-label="Portfolio projects">
        <article className={styles.project} aria-labelledby="newton-title">
          <ProjectVideo />
          <div className={styles.caption}>
            <h2 id="newton-title" className={styles.title}>
              Real2Sim for Boba Making Robot
            </h2>
            <p className={styles.description}>
              Simulated bottle deformation with VBD, milk with Newton implicit MPM, and coffee particles with XPBD. Kinematically retargeted robot motion from real video.
            </p>
          </div>
        </article>
        <article className={styles.project} aria-labelledby="reconstruction-title">
          <Image
            className={styles.animation}
            src="/videos/real-world-reconstruction.gif"
            alt="Side-by-side animation of a real tabletop scene and its reconstruction"
            width={800}
            height={257}
            unoptimized
          />
          <div className={styles.caption}>
            <h2 id="reconstruction-title" className={styles.title}>
              Human-to-Sim-to-Robot
            </h2>
            <p className={styles.description}>
              Kinematically retargeted human hand motion to a Sharpa hand in simulation, using fingertip poses and forward kinematics for hand pose, and end-effector poses with inverse kinematics for arm motion.
            </p>
          </div>
        </article>
        <article className={styles.project} aria-labelledby="deformation-title">
          <ProjectVideo
            src="/videos/elastic-and-plastic.mp4"
            poster="/videos/elastic-and-plastic.jpg"
            label="Recorded elastic and plastic deformation compared side by side with simulation"
            aspectRatio="48 / 25"
          />
          <div className={styles.caption}>
            <h2 id="deformation-title" className={styles.title}>
              Neural dynamics of deformable objects
            </h2>
            <p className={styles.description}>
              Used residual world models to estimate object deformation, using a mass-spring physics backbone.
            </p>
          </div>
        </article>
        <article className={styles.project} aria-labelledby="task-packages-title">
          <ProjectVideo
            src="/videos/nist-and-task-packages.mp4"
            poster="/videos/nist-and-task-packages.jpg"
            label="NIST task packages followed by task package highlights"
            aspectRatio="16 / 9"
          />
          <div className={styles.caption}>
            <h2 id="task-packages-title" className={styles.title}>
              Task packages
            </h2>
            <p className={styles.description}>
              Built an agent-driven pipeline that turns videos, text, and USD scenes into standalone Isaac Lab task packages with robot controls, observations, rewards, and termination conditions.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
