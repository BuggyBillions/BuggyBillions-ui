// Switch.tsx
import React, { useState } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  icon?: React.ReactNode; // Optional icon component
  onToggle?: (checked: boolean) => void; // Action when toggled
  className?: string; // Additional class names for styling
}

const Switch: React.FC<SwitchProps> = ({ icon, onToggle, className }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onToggle) {
      onToggle(newChecked);
    }
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
