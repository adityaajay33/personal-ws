import styles from '../../styles/page.module.css';
import ExperienceCard from './ExperienceCard';
import SocialLink from './SocialLink';
import { workExperiences, education, socials } from '../data/experiences';

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section className={styles.about}>
        <p className={styles.content}>
          Software Engineer — background in computer vision and ML infrastructure.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className={styles.workExperience} style={{ marginBottom: 0 }}>
        <h2 className={styles.sectionTitle}>Work & Projects</h2>
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
            style={{
              margin: index === socials.length - 1 ? '15px 0px 100px 0px' : '15px 0px'
            }}
          />
        ))}
      </section>
    </>
  );
}
