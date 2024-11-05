// Switch.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch Component', () => {
  it('renders switch with icon', () => {
    render(<Switch icon={<span>🔄</span>} />);
    const icon = screen.getByText(/🔄/);
    expect(icon).toBeInTheDocument();
  });

  it('toggles the switch when clicked', () => {
    const handleToggle = jest.fn();
    render(<Switch onToggle={handleToggle} />);
    
    const switchElement = screen.getByRole('button');
    fireEvent.click(switchElement);
    expect(handleToggle).toHaveBeenCalledWith(true);
    
    fireEvent.click(switchElement);
    expect(handleToggle).toHaveBeenCalledWith(false);
  });
});
