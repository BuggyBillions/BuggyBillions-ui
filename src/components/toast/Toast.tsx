'use client';

import React, { useEffect, useMemo } from 'react';
import styles from './toast.module.css';

interface ToastProps {
     position?: 'bottom-right' | 'top-right' | 'top-left' | 'bottom-left' | 'top-center' | 'bottom-center';
     header?: string; // Optional header
     content?: string; // Optional content
     time?: number; // Time to auto-dismiss in milliseconds
     timestamp?: Date; // Prop for time, default handled below
     type?: 'success' | 'error' | 'info' | 'warning';
     onClose?: () => void; // Optional close handler
     className?: string; // Optional custom class name
}

const Toast: React.FC<ToastProps> = ({
     position = 'bottom-right',
     header,
     content,
     time = 5000,
     timestamp = new Date(),
     type = 'info',
     onClose,
     className = '' // Default to an empty string if no custom class is provided
}) => {

     useEffect(() => {
          const timer = setTimeout(() => {
               if (onClose) onClose(); // Only call onClose if it exists
          }, time);

          return () => clearTimeout(timer); // Clean up timer on unmount
     }, [time, onClose]);

     const formatTime = useMemo(() => {
          const now = new Date();
          const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);

          if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
          if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
          if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
          return `${Math.floor(diffInSeconds / 86400)} days ago`;
     }, [timestamp]);

     // Construct the toast class dynamically based on the type and any custom class provided
     const toastClass = `${styles.toast} ${styles[`toast${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`.trim();
     const toastContainer = `${styles.toastContainer} ${styles[position]}`.trim();

     return (
          <div className={toastContainer}>
               <div className={toastClass}>
                    {/* Conditionally render header if provided */}
                    {header && (
                         <div className={styles.toastHeader}>
                              <strong>{header}</strong>
                              {onClose && ( // Conditionally render close button only if onClose is provided
                                   <button className={styles.toastClose} onClick={onClose}>&times;</button>
                              )}
                         </div>
                    )}

                    {/* Conditionally render content if provided */}
                    {content && <div className={styles.toastBody}>{content}</div>}

                    <div className={styles.toastTimestamp}>{formatTime}</div>
               </div>
          </div>
     );
};

export default Toast;
