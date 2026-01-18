import styles from '../../styles/page.module.css';
import ExperienceCard from './ExperienceCard';
import { projects } from '../data/experiences';

export default function ProjectsSection() {
  return (
    <section className={styles.contact} style={{ marginTop: '40px' }}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      {projects.map((project, index) => (
        <ExperienceCard
          key={index}
          date={project.date}
          title={project.title}
          location={project.location}
          description={project.description}
          style={{ margin: index === 0 ? '30px 0px' : '15px 0px' }}
        />
      ))}
    </section>
  );
}
