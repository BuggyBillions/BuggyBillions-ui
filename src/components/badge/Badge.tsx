// Button.tsx
import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <div className={`${styles.badge} ${className ? className : ''}`}>
      {text}
    </div>
  );
};

export default Badge;
