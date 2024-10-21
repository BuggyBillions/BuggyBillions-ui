import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from './Popover';

describe('Popover component', () => {
  test('renders trigger content correctly', () => {
    const { getByText } = render(
      <Popover content={<div>Popover Content</div>}>
        <button>Click Me</button>
      </Popover>
    );

    expect(getByText('Click Me')).toBeInTheDocument();
  });

  test('displays popover content on click', () => {
    const { getByText, queryByText } = render(
      <Popover content={<div>Popover Content</div>}>
        <button>Click Me</button>
      </Popover>
    );

    expect(queryByText('Popover Content')).toBeNull(); // Initially not visible

    fireEvent.click(getByText('Click Me')); // Trigger popover

    expect(getByText('Popover Content')).toBeVisible(); // Now visible
  });

  test('closes popover when clicking outside', () => {
    const { getByText, queryByText } = render(
      <Popover content={<div>Popover Content</div>}>
        <button>Click Me</button>
      </Popover>
    );

    fireEvent.click(getByText('Click Me')); // Trigger popover
    expect(getByText('Popover Content')).toBeVisible();

    fireEvent.mouseDown(document); // Click outside
    expect(queryByText('Popover Content')).toBeNull(); // Popover should be hidden
  });
});
