import styles from '../../styles/page.module.css';

export default function TabNavigation({ activeTab, setActiveTab, getUnderlineLength, getUnderlineStyles }) {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        <span
          className={activeTab === 'about' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('about')}
        >
          About
        </span>
        <span
          className={activeTab === 'projects' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </span>
      </div>
      <div
        className={styles.underline}
        style={{
          ...getUnderlineLength(),
          ...getUnderlineStyles(),
        }}
      />
    </div>
  );
}
