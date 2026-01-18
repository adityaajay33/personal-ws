'use client';
import { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/page.module.css';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const getUnderlineLength = () => {
    switch (activeTab) {
      case 'about':
        return { width: '44px' };
      case 'projects':
        return { width: '62px' };
      default:
        return { width: '44px' };
    }
  };
  
  const getUnderlineStyles = () => {
    switch (activeTab) {
      case 'about':
        return { transform: 'translateX(0px)' };
      case 'projects':
        return { transform: 'translateX(64px)' };
      default:
        return { transform: 'translateX(0px)' };
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Aditya Ajay Portfolio</title>
        <meta name="description" content="Portfolio of Aditya Ajay" />
      </Head>

      <Header />

      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        getUnderlineLength={getUnderlineLength}
        getUnderlineStyles={getUnderlineStyles}
      />

      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}
