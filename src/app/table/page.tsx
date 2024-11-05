// page.tsx
import React from 'react';
import Table from '@/components/table/Table';

const Page: React.FC = () => {
  const userData = [
    { name: 'John Doe', age: 28, email: 'john@example.com', address: 'Surulere' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com', address: 'Lekki' },
    { name: 'Alice Johnson', age: 42, email: 'alice@example.com', address: 'Ibadan' },
    { name: 'Mark Swift', age: 18, email: 'mark@example.com', address: 'Abeokuta' },
    { name: 'Mary Job', age: 22, email: 'mary@example.com', address: 'Ilorin' },
  ];

  return (
    <div>
      <h1>User Data (Default Table)</h1>
      <Table data={userData} variant="default" />

      {/* <h2>User Data (Alternate Table)</h2>
      <Table data={userData} variant="alternate" /> */}
      
    </div>
  );
};

export default Page;
