// Table.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {
  it('renders without crashing when no data is provided', () => {
    const { getByText } = render(<Table data={[]} />);
    expect(getByText('No data available')).toBeInTheDocument();
  });

  it('renders a table with data', () => {
    const data = [
      { name: 'John Doe', age: 28 },
      { name: 'Jane Smith', age: 34 },
    ];
    const { getByText } = render(<Table data={data} />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
    expect(getByText('28')).toBeInTheDocument();
    expect(getByText('34')).toBeInTheDocument();
  });
});
