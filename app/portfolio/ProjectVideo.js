'use client';

import { useEffect, useRef } from 'react';
import styles from '../../styles/portfolio.module.css';

export default function ProjectVideo({
  src = '/videos/real-vs-newton.mp4',
  poster = '/videos/real-vs-newton.jpg',
  label = 'Real-world robot footage compared side by side with Newton simulation',
  aspectRatio = '160 / 49',
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (motion.matches) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play().catch(() => {});
      }
    };
    syncPlayback();
    motion.addEventListener('change', syncPlayback);
    return () => motion.removeEventListener('change', syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className={styles.video}
      style={{ aspectRatio }}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.{' '}
      <a href={src}>Download the project video</a>.
    </video>
  );
}
