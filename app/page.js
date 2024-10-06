'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';
import styles from '../styles/page.module.css';

export default function Home() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState('about');

  // Function to calculate the position of the underline based on the active tab
  const getUnderlineLength = () => {
    switch (activeTab) {
      case 'about':
        return { width: '44px' }; // Width for "About"
      case 'projects':
        return { width: '90px' }; // Width for "Experiences"
      default:
        return { width: '44px' }; // Default to "About"
    }
  };
  
  const getUnderlineStyles = () => {
    switch (activeTab) {
      case 'about':
        return { transform: 'translateX(0px)' }; // Position for "About"
      case 'projects':
        return { transform: 'translateX(62px)' }; // Position for "Experiences"
      default:
        return { transform: 'translateX(0px)' }; // Default to "About"
    }
  };


  // Function to render the correct content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            {/* About Section */}
            <section className={styles.about}>
              <p className={styles.content}>
                Currently designing a better way to access all of Meta technologies, dabbling with creative tech, and open to freelance for non-profits.
              </p>
            </section>

            {/* Work Experience Section */}
            <section className={styles.workExperience}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>

              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  2024 - Now
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Machine Learning Systems Engineer
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>Proactively preventing users from losing access to their accounts and designing new methods beyond traditional account recovery to assist users in accessing their accounts.
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Machine Learning - Systems Engineer
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>
Designing the login screen experience for all Meta applications and developing identification features to help users easily find and save their accounts for improved access.
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Machine Learning - Systems Engineer
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>
                  Access Loss Prevention Team: Proactively preventing users from losing access to their accounts and designing new methods beyond traditional account recovery to assist users in accessing their accounts.
                  </div>
                </div>
              </div>

              
            </section>
            <section className={styles.education}>
              <h2 className={styles.sectionTitle}>Education</h2>

              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  2023 - 2028
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Mechatronics Engineering at the University of Waterloo
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.contact} style={{height:"40px"}}>
              <h2 className={styles.sectionTitle}>Socials</h2>

              <div className={styles.workExperienceCard} style={{margin: "15px 0px"}}>
                <div className={styles.date}>
                  Github
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    adityaajay33
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{margin: "15px 0px"}}>
                <div className={styles.date}>
                  LinkedIn
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Aditya Ajay
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{margin: "15px 0px 100px 0px", paddingBottom: 40}}>
                <div className={styles.date}>
                  Instagram
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    aj_mmv
                  </div>
                </div>
              </div>
            </section>


          </>
        );
      case 'projects':
        return (
          <section className={styles.projects} style={{marginTop:40}}>
            <p>Details about your projects go here.</p>
          </section>
        );
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

      {/* Header Section */}
      <header className={styles.header}>
        <div style={{ paddingRight: '16px', height: 92, width: 92 }}>
          <Image
            src="/profile.png"
            alt="Profile Image"
            className={styles.profileImage}
            width={92}
            height={92}
          />
        </div>
        <div style={{ width: '432px', height: '48px', marginLeft: 10}}>
          <h1 className={styles.name}>Aditya Ajay</h1>
          <p className={styles.subtitle}>Mechatronics @ UWaterloo</p>
        </div>
      </header>

      {/* Tabs Navigation */}
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
            Experiences
          </span>
          
        </div>
        <div
          className={styles.underline}
          style={{
            ...getUnderlineLength(), // Spread the width from getUnderlineLength
            ...getUnderlineStyles(), // Spread the transform from getUnderlineStyles
          }}
        />
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
}