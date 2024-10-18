'use client'

import React, { useState } from 'react';
import './SwitchButton.module.css';  

interface SwitchButtonProps {
  onColor?: string;
  offColor?: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  onColor = 'green',
  offColor = 'grey'
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  // Function to toggle the isEnabled state
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="switch-container">
      <div 
        className={`switch ${isEnabled ? 'switch-on' : 'switch-off'}`}
        style={{ backgroundColor: isEnabled ? onColor : offColor }}
        onClick={toggleSwitch}
      >
        <div className={`slider ${isEnabled ? 'slider-on' : 'slider-off'}`}></div>
      </div>
    </div>
  );
};

export default SwitchButton;
