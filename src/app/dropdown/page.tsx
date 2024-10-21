"use client";

import React from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import './drop.css'


const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M1.5 5.5l7 7 7-7" />
  </svg>
);

const items = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', onClick: () => alert('Contact Clicked!') },
];

const MyApp = () => {
  return (
    <div className='dropdown-container'>
      <Dropdown
        items={items}
        buttonText="Dropdown"
        buttonClassName="custom-button" 
        menuClassName="custom-menu" 
        itemClassName="custom-item" 
        icon={() => <ChevronDownIcon />} // Use the static icon
        iconClassName="custom-icon" 
      />
    </div>
  );
};

export default MyApp;
