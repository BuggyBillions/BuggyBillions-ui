// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  className?: string;
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
