"use client"

import React from 'react';
import Button from '../../components/button/Button';

const ButtonPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Library Demo</h1>
      <Button label="Click Me" onClick={()=>alert()} />
        
    </div>
  );
};

export default ButtonPage;
