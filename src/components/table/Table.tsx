'use client';

// Table.tsx
import React from 'react';
import styles from './Table.module.css';

interface User {
  [key: string]: any;
}

interface TableProps {
  data: User[];
  variant?: 'default' | 'alternate'; // Add variant prop
}

const Table: React.FC<TableProps> = ({ data, variant = 'default' }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const columns = Object.keys(data[0]);

  // Apply styles conditionally based on the variant
  const tableContainerClass = variant === 'alternate' ? styles.alternateTableContainer : styles.tableContainer;
  const tableClass = variant === 'alternate' ? styles.alternateTable : styles.table;
  const thClass = variant === 'alternate' ? styles.alternateTh : styles.th;
  const tdClass = variant === 'alternate' ? styles.alternateTd : styles.td;

  return (
    <div className={tableContainerClass}>
      <table className={tableClass}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} className={thClass}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className={tdClass}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
