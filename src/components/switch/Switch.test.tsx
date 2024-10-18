import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SwitchButton from './Switch';

describe('SwitchButton', () => {
  test('renders the switch button with default colors', () => {
    render(<SwitchButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('backgroundColor: grey');
    expect(button.textContent).toBe('OFF');
  });

  test('toggles button state and color on click', () => {
    render(<SwitchButton onColor="darkblue" offColor="lightgrey" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('backgroundColor: lightgrey');
    expect(button.textContent).toBe('OFF');

    fireEvent.click(button);
    expect(button).toHaveStyle('backgroundColor: darkblue');
    expect(button.textContent).toBe('ON');

    fireEvent.click(button);
    expect(button).toHaveStyle('backgroundColor: lightgrey');
    expect(button.textContent).toBe('OFF');
  });

  test('handles absent onClick as a noop', () => {
    render(<SwitchButton />);
    const button = screen.getByRole('button');
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
