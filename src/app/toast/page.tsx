'use client';

import React, { useState } from 'react';
import BB_Toast from '../../components/toast/Toast'; // Assuming Toast is in this path
import './customToastStyles.css'; // Custom styles

const App: React.FC = () => {
     const [toast, setToast] = useState<{ header: string; content: string; type: string; timestamp: Date } | null>(null);
     const [toastKey, setToastKey] = useState<number>(0);

     // Show toast function with header, content, type, and timestamp
     const showToast = (header: string, content: string, type: string) => {
          setToast({ header, content, type, timestamp: new Date() });
          setToastKey((prevKey) => prevKey + 1); // Ensure unique key for each toast
     };

     return (
          <div>
               <button onClick={() => showToast('Success', 'Your action was successful!', 'success')}>Show Success Toast</button>
               <button onClick={() => showToast('Error', 'There was an error!', 'error')}>Show Error Toast</button>
               <button onClick={() => showToast('Info', 'This is some information.', 'info')}>Show Info Toast</button>
               <button onClick={() => showToast('Warning', 'There are some warnings.', 'warning')}>Show Warning Toast</button>
               <button onClick={() => showToast('Normal', 'This is a normal toast.', 'normal')}>Show Normal Toast</button>

               {/* Conditionally render the toast */}
               {toast && (
                    <BB_Toast
                         key={toastKey} // Pass a unique key to force rerender when showing multiple toasts
                         header={toast.header}
                         content={toast.content}
                         type={toast.type}
                         timestamp={toast.timestamp}
                         time={5000} // Auto dismiss time
                    />
               )}

               {/* Custom-styled toast example with header */}
               <BB_Toast
                    //    header="Custom Header"
                    content="This is a custom-styled toast."
                    className="custom-toast-class"
                    time={5000}
               />
          </div>
     );
};

export default App;
