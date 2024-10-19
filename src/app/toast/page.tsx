// page.tsx
'use client';

import React, { useState } from 'react';
import BB_Toast from '../../components/toast/Toast';
import './customToastStyles.css'; // Custom styles

const App: React.FC = () => {
  const [toast, setToast] = useState<{ header: string; content: string; type: string; timestamp: Date } | null>(null);
  const [toastKey, setToastKey] = useState<number>(0);

  const showToast = (header: string, content: string, type: string = '') => {
    setToast({ header, content, type, timestamp: new Date() });
    setToastKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <button onClick={() => showToast('Success', 'Your action was successful!', 'success')}>Show Success Toast</button>
      <button onClick={() => showToast('Error', 'There was an error!', 'error')}>Show Error Toast</button>
      <button onClick={() => showToast('Info', 'This is some information.', 'info')}>Show Info Toast</button>
      <button onClick={() => showToast('Warning', 'This is some little issues.', 'warning')}>Show warning Toast</button>
      <button onClick={() => showToast('Normal', 'This is some little issues.',)}>Show Nomal Toast</button>

      {toast && (
        <BB_Toast
          key={toastKey}
          header={toast.header}
          content={toast.content}
          type={toast.type}
          timestamp={toast.timestamp}
          onClose={() => setToast(null)}
        />
      )}

      {/* Custom-styled toast example */}
      <BB_Toast
        content="This is a toast that I created using my own class name to style it"
        className="custom-toast-class" // Custom class
      />
    </div>
  );
};

export default App;
