"use client";

import React, { useState } from 'react';
import Pagination from "../../components/pagination/Pagination";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1>Pagination Demo</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalItems={items.length} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} pageColor="black" pageBackgroundColor="red" pageBorderRadius="10px" textColor="white" textBackgroundColor="yellow"
      />
    </div>
  );
};

export default PaginationPage;
