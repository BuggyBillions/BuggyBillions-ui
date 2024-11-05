// Breadcrumbs.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);

  const generateBreadcrumbs = (separator: string) => {
    return pathParts.map((part, index) => {
      const path = '/' + pathParts.slice(0, index + 1).join('/');
      const label = part.charAt(0).toUpperCase() + part.slice(1);

      return (
        <li key={path}>
          <Link href={path}>{label}</Link>
          {index < pathParts.length - 1 && (
            <span className={styles.separator}>{separator}</span>
          )}
        </li>
      );
    });
  };

  return (
    <div>
      {/* First nav with "/" separator */}
      <nav aria-label="breadcrumbs" className={styles.nav}>
        <ul className={styles.breadcrumbs}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>/</span>
          
        </ul>
        
        {/* Additional static breadcrumb links */}
        <ul className={styles.additionalLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>/</span>
          <li>
            <Link href="/link">Link</Link>
          </li>
        </ul>

        {/* Additional static breadcrumb links */}
        <ul className={styles.additionalLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>/</span>
          <li>
            <Link href="/link">Link</Link>
          </li>
          <span className={styles.separator}>/</span>
          <li>
            <Link href="/link">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Second nav with ">>" separator */}
      <nav aria-label="breadcrumbs-alternate" className={styles.nav}>
        <ul className={styles.breadcrumbs}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>≫</span>
        </ul>
        
        {/* Additional static breadcrumb links */}
        <ul className={styles.additionalLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>≫</span>
          <li>
            <Link href="/link">Link</Link>
          </li>
        </ul>

        {/* Additional static breadcrumb links */}
        <ul className={styles.additionalLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span className={styles.separator}>≫</span>
          <li>
            <Link href="/link">Link</Link>
          </li>
          <span className={styles.separator}>≫</span>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
