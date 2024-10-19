// Button.tsx
import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  icon?: React.ReactNode; // Optional icon component
  text: string; // Button text
  className?: string; // Additional class names for styling
}

const Badge: React.FC<BadgeProps> = ({ icon, text, className }) => {
  return (
    <div 
      className={`${styles.div} ${className ? className : ''}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </div>
  );
};

export default Badge;
