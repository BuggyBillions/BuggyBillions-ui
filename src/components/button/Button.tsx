// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  icon?: React.ReactNode; // Optional icon component
  type?: 'button' | 'submit' | 'reset'; // Button type
  text: string; // Button text
  onClick?: () => void; // Optional click handler
  className?: string; // Additional class names for styling
}

const Button: React.FC<ButtonProps> = ({ icon, type = 'button', text, onClick, className }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles.button} ${className ? className : ''}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
