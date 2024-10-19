import React from 'react';
import styles from './alert.module.css'; // Import your styles

interface AlertProps {
    header?: string;  // Optional header
    content?: string; // Optional content
    type?: 'success' | 'error' | 'info' | 'warning'; // Optional type, provide default if not passed
    onClose?: () => void; // Optional close function
    confirmText?: string; // Optional confirmation button text
    onConfirm?: () => void; // Optional function to handle confirmation action
    className?: string; // Optional custom class name
}

const Alert: React.FC<AlertProps> = ({
    header = '', // Default to empty string
    content = '', // Default to empty string
    type = 'info', // Default to 'info' if no type is passed
    onClose = () => {}, // Default empty function if onClose is not provided
    confirmText = '', // Default to empty string
    onConfirm, // Will be undefined by default
    className = '' // Default to empty string if no custom class is provided
}) => {
    return (
        <div className={`${styles.alert} ${styles[`alert${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${className}`.trim()}>
            {header && (
                <div className={styles.alertHeader}>
                    <strong>{header}</strong>
                    <button className={styles.alertClose} onClick={onClose}>&times;</button>
                </div>
            )}
            {content && <div className={styles.alertBody}>{content}</div>}
            {confirmText && onConfirm && (
                <button className={styles.alertConfirm} onClick={onConfirm}>
                    {confirmText}
                </button>
            )}
        </div>
    );
};

export default Alert;
