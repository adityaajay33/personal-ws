import styles from '../../styles/page.module.css';

export default function ExperienceCard({ date, title, company, description, style }) {
  return (
    <div className={styles.workExperienceCard} style={style}>
      <div className={styles.date}>{date}</div>
      <div className={styles.jobDetails}>
        <div className={styles.title}>{title}</div>
        {company && (
          <div className={styles.companyLocation}>
            <span className={styles.company}>{company}</span>
          </div>
        )}
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
}
