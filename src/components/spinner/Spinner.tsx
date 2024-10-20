"use client"
import React, { useEffect, useState } from 'react';
import styles from './Spinner.module.css';

const Loader = ({ size = '54px', color = 'rgb(128, 128, 128)', duration = '1s', speed = '1s' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, parseFloat(duration) * 1000); 

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null; 

  const loaderStyle = {
    width: size,
    height: size,
    animationDuration: speed,
  };

  return (
    <div className={styles.loader} style={loaderStyle}>
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={`${styles[`bar${index + 1}`]}`}
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

export default Loader;
