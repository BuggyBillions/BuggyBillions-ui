'use client';

import React, { useState, useRef, useEffect } from 'react';
import BB_Alert from '../../components/alert/Alert';

const App: React.FC = () => {
    const [alertState, setAlertState] = useState<{ header?: string; content?: string; type?: string; confirmText?: string; onConfirm?: () => void } | null>(null);
    const alertRef = useRef<HTMLDivElement | null>(null); // Ref for the alert component

    const showAlert = (header?: string, content?: string, type?: string, confirmText?: string, onConfirm?: () => void) => {
        setAlertState({ header, content, type, confirmText, onConfirm });
    };

    const handleClose = () => {
        setAlertState(null);
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
    }, [alertRef]);

    return (
        <div>
            <button style={{ padding: "20px", background: "green" }} onClick={() => showAlert('Success', 'Your action was successful!', 'success')}>Show Success Alert</button>
            <button style={{ padding: "20px", background: "green" }} onClick={() => showAlert('Error', 'There was an error!', 'error')}>Show Error Alert</button>
            <button style={{ padding: "20px", background: "green" }} onClick={() => showAlert('Info', 'This is some information.', 'info')}>Show Info Alert</button>
            <button style={{ padding: "20px", background: "green" }} onClick={() => showAlert('Warning', 'This is a warning message.', 'warning')}>Show Warning Alert</button>
            <button style={{ padding: "20px", background: "green" }} onClick={() => showAlert('Confirmation', 'Are you sure you want to proceed?', 'confirm', 'Confirm', () => window.alert('Confirmed!'))}>
                Show Confirmation Alert
            </button>

            {alertState && (
                <div ref={alertRef}>
                    <BB_Alert
                        header={alertState.header}
                        content={alertState.content}
                        type={alertState.type}
                        onClose={handleClose} // Handle close explicitly
                        confirmText={alertState.confirmText} // Pass confirmation text
                        onConfirm={alertState.onConfirm} // Pass confirmation action
                    />
                </div>
            )}

            {/* Example of alert with no content but a close button */}
            <BB_Alert
                header="Hello. This is a test"
                type="success"
            />
        </div>
    );
};

export default App;