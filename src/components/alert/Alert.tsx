import React, { useEffect, useState, useRef } from 'react';
import styles from './alert.module.css'; // Import your styles

interface AlertProps {
  header?: string; // Optional header
  content?: string; // Optional content
  type?: 'success' | 'error' | 'info' | 'warning'; // Optional type, provide default if not passed
  confirmText?: string; // Optional confirmation button text
  onConfirm?: () => void; // Optional function to handle confirmation action
  className?: string; // Optional custom class name
}

const Alert: React.FC<AlertProps> = ({
  header = '', // Default to empty string
  content = '', // Default to empty string
  type = 'info', // Default to 'info' if no type is passed
  confirmText = '', // Default to empty string
  onConfirm, // Will be undefined by default
  className = '' // Default to empty string if no custom class is provided
}) => {
  const [isVisible, setIsVisible] = useState(true); // Internal state to control visibility
  const alertRef = useRef<HTMLDivElement | null>(null); // Ref for the alert component

  // Handle the close action for the alert
  const handleClose = () => {
    setIsVisible(false); // Hide the alert when the close button is clicked
  };

  // Handle clicks outside of the alert to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (alertRef.current && !alertRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return isVisible ? (
    <div
      ref={alertRef} // Attach the ref to the alert div
      className={`${styles.alert} ${styles[`alert${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`.trim()}
    >
      <div className={styles.alertHeader}>
        {/* Display the header if provided */}
        {header && <strong>{header}</strong>}
        {/* Always show the close button */}
        <button className={styles.alertClose} onClick={handleClose}>
          &times;
        </button>
      </div>
      {/* Conditionally render content if provided */}
      {content && <div className={styles.alertBody}>{content}</div>}
      {/* Conditionally render confirm button if confirmText and onConfirm are provided */}
      {confirmText && onConfirm && (
        <button className={styles.alertConfirm} onClick={onConfirm}>
          {confirmText}
        </button>
      )}
    </div>
  ) : null;
};

export default Alert;
