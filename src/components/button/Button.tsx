// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  appearance?: 'custom' | 'outline';
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, type = 'button', text, onClick, className, appearance = "custom" }) => {
  return (

    appearance === "outline" 
    ?
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles.button} ${className ? 'button-outline' + " " + className : ''}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button> : 
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
