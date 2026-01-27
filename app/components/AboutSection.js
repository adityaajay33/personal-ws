import styles from '../../styles/page.module.css';
import ExperienceCard from './ExperienceCard';
import SocialLink from './SocialLink';
import { workExperiences, education, projects, socials } from '../data/experiences';

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section className={styles.about}>
        <p className={styles.content}>
          software engineer — computer vision and machine learning infrastructure.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className={styles.workExperience}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {workExperiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            description={exp.description}
          />
        ))}
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((project, index) => (
          <ExperienceCard
            key={index}
            date={project.date}
            title={project.title}
            description={project.description}
          />
        ))}
      </section>

      {/* Education Section */}
      <section className={styles.education}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ExperienceCard
          date={education.date}
          title={education.title}
          company={education.company}
          description={education.description}
        />
      </section>

      {/* Socials Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Socials</h2>
        {socials.map((social, index) => (
          <SocialLink
            key={index}
            platform={social.platform}
            href={social.href}
            displayText={social.displayText}
          />
        ))}
      </section>
    </>
  );
}
