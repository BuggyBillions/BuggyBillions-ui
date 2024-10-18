import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './Button';

test('Button renders with correct label', () => {
  render(<Button label="Click Me" value="click me" onClick={() => {}} />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button triggers onClick event', () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" value='click me' onClick={handleClick} />);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
