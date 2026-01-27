'use client';
import '../styles/globals.css';
import styles from '../styles/page.module.css';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CursorTrail from './components/CursorTrail';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <CursorTrail />
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <AboutSection />
        </div>

        <Footer />
      </div>
    </>
  );
}
