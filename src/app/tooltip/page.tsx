"use client"
import React from 'react';
import Tooltip from '../../components/tooltip/Tooltip'; // Adjust the import path if necessary
import './too.css'
const App = () => {
  return (
    <div style={{ padding: '50px',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
      <Tooltip content="This is a tooltip! of course" position="bottom">
        <span className='tool-button'>Hover over me</span>
      </Tooltip>
    </div>
  );
};

export default App;
