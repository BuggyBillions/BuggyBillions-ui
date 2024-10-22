'use client';

import React, { useMemo, useState } from 'react';
import styles from './toast.module.css';

interface ToastProps {
     position?: 'bottom-right' | 'top-right' | 'top-left' | 'bottom-left' | 'top-center' | 'bottom-center';
     header?: string;
     content?: string;
     time?: number;
     timestamp?: Date;
     type?: 'success' | 'error' | 'info' | 'warning';
     className?: string;
}

const Toast: React.FC<ToastProps> = ({
     position = 'bottom-right',
     header,
     content,
     timestamp = new Date(),
     type = '',
     className = ''
}) => {
     const [isVisible, setIsVisible] = useState(true); // Internal state to control visibility

     // Handle the close action for the toast
     const handleClose = () => {
          setIsVisible(false); // Hide the toast when the close button is clicked
     };

     const formatTime = useMemo(() => {
          const now = new Date();
          const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);

          if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
          if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
          if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
          return `${Math.floor(diffInSeconds / 86400)} days ago`;
     }, [timestamp]);

     const toastClass = `${styles.toast} ${styles[`toast${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`.trim();
     const toastContainer = `${styles.toastContainer} ${styles[position]}`.trim();

     return isVisible ? (
          <div className={toastContainer}>
               <div className={toastClass}>
                    {/* If header exists, display it, otherwise just show close button */}
                    {header && <div className={styles.toastHeader}>
                         <strong>{header}</strong>
                    </div>}
                    <button className={styles.toastClose} onClick={handleClose}>&times;</button> {/* Close button */}

                    {/* Conditionally render content if provided */}
                    {content && <div className={styles.toastBody}>{content}</div>}
                    <div className={styles.toastTimestamp}>{formatTime}</div>
               </div>
          </div>
     ) : null;
};

export default Toast;
