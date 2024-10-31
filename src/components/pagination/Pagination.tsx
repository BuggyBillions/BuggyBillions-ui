"use client"; // This line marks the component as a client component

import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  pageColor = 'black',
  pageBackgroundColor = 'lightgray',
  pageBorderRadius = '5px',
  textColor = 'white',
  textBackgroundColor = 'blue',
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          color: textColor,
          backgroundColor: textBackgroundColor,
          borderRadius: pageBorderRadius,
        }}
      >
        &laquo; Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? styles.active : ''}
          style={{
            color: pageColor,
            backgroundColor: pageBackgroundColor,
            borderRadius: pageBorderRadius,
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          color: textColor,
          backgroundColor: textBackgroundColor,
          borderRadius: pageBorderRadius,
        }}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
