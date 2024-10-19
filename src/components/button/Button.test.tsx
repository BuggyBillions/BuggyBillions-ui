// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" />);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
  });

  it('triggers onClick event', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders button with an icon', () => {
    render(<Button text="Click me" icon={<span>🔍</span>} />);
    const icon = screen.getByText(/🔍/);
    expect(icon).toBeInTheDocument();
  });
});
