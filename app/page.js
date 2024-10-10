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
        return { width: '62px' }; // Width for "Experiences"
      default:
        return { width: '44px' }; // Default to "About"
    }
  };
  
  const getUnderlineStyles = () => {
    switch (activeTab) {
      case 'about':
        return { transform: 'translateX(0px)' }; // Position for "About"
      case 'projects':
        return { transform: 'translateX(64px)' }; // Position for "Experiences"
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
                Currently working on reinforcement learning projects in the robotics and finance space, learning Japanese, and doing things better.
              </p>
            </section>

            {/* Work Experience Section */}
            <section className={styles.workExperience} style={{marginBottom: 0}}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>

              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  May - August <br/>2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Machine Learning Engineer at Toyota Canada
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>Designed an LSTM Autoencoder-based anomaly detection pipeline for 810 robots, reducing motor downtime by 19 minutes monthly. Co-engineered a data platform for 13 million records using Redis, PostgreSQL, and Plotly.
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard}>
                <div className={styles.date}>
                  2023 - 2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                    Firmware Developer at Waterloo Aerial Robotics Group
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>
                  Created data acquisition algorithms for IMU and Brake IR Sensors using SPI/UART on STM32 MCU.
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{marginBottom: 0}}>
                <div className={styles.date}>
                  2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                  Student Research Author at JEI
                  </div>
                  <div className={styles.location}>
                  Toronto, Ontario
                  </div>
                  <div className={styles.description}>
                  Published a machine learning paper on predicting EV carbon emission reductions with 98% R-squared accuracy.
                    
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
                  <div className={styles.title} style={{marginBottom: 3}}>
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
              <h2 className={styles.sectionTitle} style={{paddingBottom: 20}}>Socials</h2>

              <div className={styles.workExperienceCard} style={{margin: "15px 0px"}}>
                <div className={styles.date}>
                  Github
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title} style={{ paddingBottom: 0}}>
                    <a href="https://www.github.com/adityaajay33" className="socialLink" style={{marginRight:1}}>
                      adityaajay33
                    </a>
                    <svg width="20" height="20" fill="none" viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{margin: "15px 0px"}}>
                <div className={styles.date}>
                  LinkedIn
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title} style={{ paddingBottom: 0}}>
                    <a href="https://www.linkedin.com/in/adityaajay33" className="socialLink" style={{marginRight:1}}>
                      Aditya Ajay
                    </a>
                    <svg width="20" height="20" fill="none" viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{margin: "15px 0px 100px 0px", paddingBottom: 40}}>
                <div className={styles.date}>
                  Email
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title} style={{ paddingBottom: 0}}>
                    <a href="mailto:a2ajay@uwaterloo.ca" className="socialLink" style={{marginRight:1}}>
                      a2ajay@uwaterloo.ca
                    </a>
                    <svg width="20" height="20" fill="none" viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"/>
                    </svg>
                  </div>
                </div>
              </div>
            </section>


          </>
        );
      case 'projects':
        return (
          
          <section className={styles.contact} style={{marginTop:"40px"}}>
              <h2 className={styles.sectionTitle}>Projects</h2>

              <div className={styles.workExperienceCard} style={{margin: "30px 0px"}}>
                <div className={styles.date}>
                  Sep 2024 - Now
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                  Stock Market Trading Simulation for Strategy Optimization
                  </div>
                  <div className={styles.location}>
                    Waterloo, Ontario
                  </div>
                  <div className={styles.description}>
                  Created a Deep Q-Network agent for Mean Reversion stock trading strategies using 30,000 Apple stock prices, resulting in a 45% ROI.
                  
                  <div class="video-container" style={{borderRadius: "10px", overflow: "hidden", paddingTop: 15, height:120, width: 216}}>
                    <video src='https://res.cloudinary.com/didbbtyab/video/upload/v1728412648/Apple_kios4n.mp4' autoPlay loop muted playsInline style={{borderRadius: "inherit", width: "100%", height: '100%', objectFit: "cover"}}></video>
                  </div>
                  </div>
                </div>
              </div>
              <div className={styles.workExperienceCard} style={{margin: "15px 0px"}}>
                <div className={styles.date}>
                  2023 - 2024
                </div>
                <div className={styles.jobDetails}>
                  <div className={styles.title}>
                  PortfolioBase - Portfolio Sharing Application
                  </div>
                  <div className={styles.location}>
                    Toronto, Ontario
                  </div>
                  <div className={styles.description}>
                  Developed and deployed a portfolio-sharing web app that connected design students with agencies, receiving a $3000 grant from the Government of Ontario for its impact.
                  <div class="video-container" style={{borderRadius: "10px", overflow: "hidden", paddingTop: 15, height:120, width: 216}}>
                    <video src='https://res.cloudinary.com/didbbtyab/video/upload/v1728412648/Apple_kios4n.mp4' autoPlay loop muted playsInline style={{borderRadius: "inherit", width: "100%", height: '100%', objectFit: "cover"}}></video>
                  </div>
                  </div>
                </div>
              </div>
              
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
          <div className={styles.descLinks}>
              <p className={styles.subtitle}>Mechatronics @ UWaterloo</p>
              <a href="https://www.linkedin.com/in/adityaajay33" target="_blank" rel="noopener noreferrer">
                <Image src="/icon/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://www.github.com/adityaajay33" target="_blank" rel="noopener noreferrer">
                <Image src="/icon/github.png" alt="GitHub" width={24} height={24} />
              </a>
          </div>
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
            Projects
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