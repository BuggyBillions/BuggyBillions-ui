"use client";
import React, { useState, useEffect } from 'react';
import Loader from "../../components/spinner/Spinner";

const SpinnersPage = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [loadingCheck, setLoadingCheck] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingSpinner(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ margin: '100px 20px 20px 40px' }}>
      <h3>Spinner Demo</h3>
      <div style={{flexWrap: 'wrap', gap: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader size="104px" color="yellow" duration="1" loading={loadingSpinner} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Loader size="60px" duration="3" color="red" type="check" loading={loadingCheck} />
        </div>
      </div>
    </div>
  );
};

export default SpinnersPage;
