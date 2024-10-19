// Button.tsx
import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  icon?: React.ReactNode; // Optional icon component
  text: string; // Button text
  onClick?: () => void; // Optional click handler
  className?: string; // Additional class names for styling
}

const Badge: React.FC<BadgeProps> = ({ icon, text, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`${styles.button} ${className ? className : ''}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Badge;
