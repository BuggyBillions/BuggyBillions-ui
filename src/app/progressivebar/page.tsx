import React from 'react';
import ProgressBar from "../../components/progressivebar/Progressivebar";

const ProgressPage = () => {
  return (
    <div style={{ margin: '90px' }}>
      <h1>Progress Bar Demo</h1>
      <div style={{ margin: '20px' }}>
        <ProgressBar width="300px" height="20px" color="green" backgroundColor="whitesmoke" borderRadius="10px" min={0}  max={100} value={70}text="70%"/>
      </div>
    </div>
  );
};

export default ProgressPage;
