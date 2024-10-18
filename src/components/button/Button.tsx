'use client'

import React from 'react';

// Marking each property as optional with `?`
export interface ButtonProps {
  label?: string;
  value?: string;
  onClick?: () => void;  // Consider what should happen if onClick is not provided
}

const Button: React.FC<ButtonProps> = ({ label, value, onClick }) => {
  // Handling optional onClick, provide a default function that does nothing
  const handleClick = onClick || (() => { console.warn('Button clicked without an onClick handler'); });

  return (
    <>
      {label && <label>{label}</label>} 
      <button onClick={handleClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
        {value}
      </button>
    </>
  );
};

export default Button;
