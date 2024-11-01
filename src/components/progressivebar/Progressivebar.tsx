"use client"; 
import React from 'react';
import styles from './Progessivebar.module.css';

const ProgressBar = ({
  width = '100%',
  height = '10px',
  color = 'blue',
  backgroundColor = 'lightgray',
  borderRadius = '5px',
  min = 0,
  max = 100,    
  value = 0,
  text = ''
}) => {
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = ((clampedValue - min) / (max - min)) * 100;

  return (
    <div className={styles.container} style={{width,height,backgroundColor,borderRadius, }}>
      <div className={styles.progress} style={{width: `${percentage}%`,height: '100%',backgroundColor: color,borderRadius,}}/>
      {text && (<div className={styles.text}>{text}</div>
      )}
    </div>
  );
};

export default ProgressBar;
