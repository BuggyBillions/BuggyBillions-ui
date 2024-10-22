"use client";
import React, { useEffect, useState } from 'react';
import styles from './Spinner.module.css';

const Loader = ({ 
  size = '54px', 
  color = 'rgb(128, 128, 128)', 
  duration = '3s', 
  type = 'spinner', 
  loading,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsVisible(true);
      setShowCheck(false);
      setCheckVisible(false);
      
      const timer = setTimeout(() => {
        if (type === 'check') {
          setShowCheck(true);
          setCheckVisible(true);
          setTimeout(() => {
            setCheckVisible(false);
          }, 3000);
        }
        setIsVisible(false);
      }, parseFloat(duration) * 1000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      setShowCheck(false);
      setCheckVisible(false);
    }
  }, [loading, duration, type]);

  if (!isVisible && !checkVisible) return null;

  const loaderStyle = {
    width: size,
    height: size,
  };

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      {type === 'spinner' && isVisible && (
        <div className={styles.loader} style={loaderStyle}>
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`${styles[`bar${index + 1}`]}`}
              style={{ background: color }}
            />
          ))}
        </div>
      )}
      {type === 'check' && (
        <>
          <div className={styles.check} style={{ borderTopColor: color }}></div>
          {showCheck && checkVisible && (
            <img 
              src="https://i.pinimg.com/564x/21/3d/c0/213dc0ed0a2e69d1978c75bfbcff903a.jpg" 
              alt="Check"
              style={{ width: size, height: size, position: 'absolute', top: 0, left: 0 }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Loader;
