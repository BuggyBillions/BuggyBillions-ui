import React, { useState, useRef, useEffect } from 'react';
import './tooltip.css';

interface TooltipProps {
  content: React.ReactNode; // Content to display in the tooltip
  children: React.ReactNode; // Trigger element
  position?: 'top' | 'bottom' | 'left' | 'right'; // Position of the tooltip
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top', // Default position
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && (
        <div className={`tooltip-content ${position}`} ref={tooltipRef}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
