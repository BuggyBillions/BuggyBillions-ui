import React, { useState, useRef, useEffect } from 'react';
import './popover.css';

interface PopoverProps {
  content: React.ReactNode; // Content to display in the popover
  children: React.ReactNode; // Trigger element
  popoverClassName?: string; // Additional class for the popover
  triggerClassName?: string; // Additional class for the trigger
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  popoverClassName = '',
  triggerClassName = '',
  position = 'top', // Default position is 'top'
}) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container" ref={popoverRef}>
      <div
        className={`popover-trigger ${triggerClassName}`}
        onClick={togglePopover}
      >
        {children}
      </div>
      {open && (
        <div className={`popover-content ${popoverClassName} open ${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
