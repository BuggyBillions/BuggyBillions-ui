'use client';

import React, { useState, ReactNode, FC } from 'react';
import styles from './accordion.module.css'; // Import your CSS module styles

// Helper function to merge class names
const mergeClassNames = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// AccordionHeader Component
interface AccordionHeaderProps {
    title: string;
    onClick: () => void;
    isOpen: boolean;
    targetId: string;
    className?: string; // Accepting className for custom styling
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({ title, onClick, isOpen, targetId, className = '' }) => {
    const accordionHeaderClass = mergeClassNames(styles.accordionHeader, className);
    const accordionButtonClass = mergeClassNames(styles.accordionButton, !isOpen ? styles.collapsed : '');

    return (
        <h2 className={accordionHeaderClass}>
            <button
                className={accordionButtonClass}
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={targetId}
            >
                {title}
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={isOpen?`${styles.open}`:`${styles.closed}`}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </h2>
    );
};

// AccordionBody Component
interface AccordionBodyProps {
    children: ReactNode;
    isOpen: boolean;
    targetId: string;
    className?: string; // Accepting className for custom styling
}

export const AccordionBody: FC<AccordionBodyProps> = ({ children, isOpen, targetId, className = '' }) => {
    const accordionBodyClass = mergeClassNames(styles.accordionBody, className);
    const accordionCollapseClass = mergeClassNames(styles.accordionCollapse, isOpen ? styles.show : '');

    return (
        <div
            id={targetId}
            className={accordionCollapseClass}
            aria-labelledby={targetId}
        >
            <div className={accordionBodyClass}>
                {children}
            </div>
        </div>
    );
};

// Main Accordion Component
interface AccordionProps {
    items: {
        id: string;
        title: string;
        content: ReactNode;
        headerClassName?: string; // Optional className for custom header styles
        bodyClassName?: string; // Optional className for custom body styles
    }[];
    className?: string; // Optional className for the accordion container
}

const Accordion: FC<AccordionProps> = ({ items, className = '' }) => {
    const [activeItem, setActiveItem] = useState<string | null>(items[0].id); // Open first item by default
    const accordionClass = mergeClassNames(styles.accordion, className);

    const toggleAccordion = (id: string) => {
        setActiveItem((prev) => (prev === id ? null : id)); // Toggle accordion open/close
    };

    return (
        <div className={accordionClass} id="accordionExample">
            {items.map(({ id, title, content, headerClassName, bodyClassName }) => (
                <div key={id} className={styles.accordionItem}>
                    <AccordionHeader
                        title={title}
                        isOpen={activeItem === id}
                        onClick={() => toggleAccordion(id)}
                        targetId={id}
                        className={headerClassName} // Pass custom className to header
                    />
                    <AccordionBody isOpen={activeItem === id} targetId={id} className={bodyClassName}>
                        {content}
                    </AccordionBody>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
