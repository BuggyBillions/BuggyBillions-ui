'use client';  // Ensure client-side rendering

import React, { useState, ReactNode, FC } from 'react';
import styles from './accordion.module.css'; // Import your CSS module styles

// AccordionHeader Component
interface AccordionHeaderProps {
    title: string;
    onClick: () => void;
    isOpen: boolean;
    targetId: string;
}
export const AccordionHeader: FC<AccordionHeaderProps> = ({ title, onClick, isOpen, targetId }) => {
    return (
        <h2 className={styles.accordionHeader}>
            <button
                className={`${styles.accordionButton} ${isOpen ? '' : styles.collapsed}`}
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={targetId}
            >
                {title}
            </button>
        </h2>
    );
};

// AccordionBody Component
interface AccordionBodyProps {
    children: ReactNode;
    isOpen: boolean;
    targetId: string;
}
export const AccordionBody: FC<AccordionBodyProps> = ({ children, isOpen, targetId }) => {
    return (
        <div
            id={targetId}
            className={`${styles.accordionCollapse} ${isOpen ? styles.show : ''}`}
            aria-labelledby={targetId}
        >
            <div className={styles.accordionBody}>
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
    }[];
}
const Accordion: FC<AccordionProps> = ({ items }) => {
    const [activeItem, setActiveItem] = useState<string | null>(items[0].id); // Open first item by default

    const toggleAccordion = (id: string) => {
        setActiveItem((prev) => (prev === id ? null : id)); // Toggle accordion open/close
    };

    return (
        <div className={styles.accordion} id="accordionExample">
            {items.map(({ id, title, content }) => (
                <div key={id} className={styles.accordionItem}>
                    <AccordionHeader
                        title={title}
                        isOpen={activeItem === id}
                        onClick={() => toggleAccordion(id)}
                        targetId={id}
                    />
                    <AccordionBody isOpen={activeItem === id} targetId={id}>
                        {content}
                    </AccordionBody>
                </div>
            ))}
        </div>
    );
};

export default Accordion;