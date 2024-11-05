import React, { useState } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  icon?: React.ReactNode; // Optional icon component
  onToggle?: (checked: boolean) => void; // Action when toggled
  beforeToggle?: () => void; // Action before toggling
  afterToggle?: () => void; // Action after toggling
  className?: string; // Additional class names for styling
}

const Switch: React.FC<SwitchProps> = ({ icon, onToggle, beforeToggle, afterToggle, className }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    if (beforeToggle) beforeToggle(); // Execute action before toggling

    const newChecked = !checked;
    setChecked(newChecked);

    if (onToggle) onToggle(newChecked); // Execute action when toggled
    if (afterToggle) afterToggle(); // Execute action after toggling
  };

  return (
    <div className={`${styles.switch} ${className ? className : ''}`} onClick={handleToggle}>
      <div className={`${styles.slider} ${checked ? styles.checked : ''}`}>
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </div>
  );
};

export default Switch;
