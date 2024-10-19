"use client"
import React from 'react';
import Button from '../../components/button/Button';

const ButtonPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Library Demo</h1>
      <Button text="Click Me" type={"submit"} onClick={()=>alert("Clicked")} />
        
    </div>
  );
};

export default ButtonPage;
