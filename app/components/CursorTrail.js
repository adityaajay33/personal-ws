'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/CursorTrail.module.css';

export default function CursorTrail() {
  const [dots, setDots] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let dotId = 0;
    let lastDotTime = 0;
    const minInterval = 50; // Minimum ms between dots

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      
      // Only create a new dot if enough time has passed
      if (currentTime - lastDotTime < minInterval) return;
      
      lastDotTime = currentTime;
      const id = dotId++;

      const newDot = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setDots((prevDots) => [...prevDots, newDot]);

      // Remove dot after animation completes
      setTimeout(() => {
        setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
      }, 600); // Match this with CSS animation duration
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.cursorTrailContainer}>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={styles.dot}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
          }}
        />
      ))}
    </div>
  );
}
