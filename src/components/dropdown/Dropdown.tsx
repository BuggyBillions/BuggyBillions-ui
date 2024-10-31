import React, { useState } from 'react';
import './dropdown.css'


interface DropdownItem {
  text: string;
  href?: string; // Optional for clickable links
  onClick?: () => void; 
  position?: 'top' | 'bottom' | 'left' | 'right';
  // Optional for custom click behavior
}

interface DropdownProps {
  items: DropdownItem[]; // Array of dropdown items
  buttonText: string; // The main button text
  buttonClassName?: string; // Custom classes for the button
  menuClassName?: string; // Custom classes for the dropdown menu
  itemClassName?: string; // Custom classes for dropdown items
  icon?: (isOpen: boolean) => React.ReactNode; // Custom icon function based on open state
  iconClassName?: string;
  position?: 'top' | 'bottom' | 'left' | 'right'; // Custom classes for the icon
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  buttonText,
  buttonClassName,
  menuClassName,
  itemClassName,
  icon,
  iconClassName,
  position = 'top',
}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <div className="dropdown">
      <button
        onClick={toggleDropdown}
        className={`dropdown-button ${buttonClassName}`} // Apply user-defined button classes
      >
        {buttonText}
        {icon && (
          <span className={iconClassName}>
            {icon(open)} {/* Pass the open state to the icon function */}
          </span>
        )}
      </button>
      {open && (
        <ul className={`dropdown-menu ${menuClassName} open ${position}`}>
          {items.map((item, index) => (
            <li key={index} className={`dropdown-item ${itemClassName}`}>
              {item.href ? (
                <a href={item.href} onClick={item.onClick}>
                  {item.text}
                </a>
              ) : (
                <span onClick={item.onClick}>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
    
  );
};

export default Dropdown;
