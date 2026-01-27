'use client';
import { useState, useEffect } from 'react';
import styles from '../../styles/StatusIndicator.module.css';

export default function StatusIndicator({ city = 'Waterloo' }) {
  const [time, setTime] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4]; // Gets HH:MM:SS
      setTime(utcTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={styles.statusContainer}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={styles.statusDot}>
        <div className={styles.pulse} />
      </div>
      
      {showTooltip && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipCity}>{city}</div>
          <div className={styles.tooltipTime}>{time} UTC</div>
        </div>
      )}
    </div>
  );
}
