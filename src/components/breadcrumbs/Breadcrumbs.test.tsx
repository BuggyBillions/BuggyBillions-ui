import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Breadcrumbs Component', () => {
  it('renders breadcrumbs based on the current path', () => {
    // Mocking usePathname to simulate a route
    (usePathname as jest.Mock).mockReturnValue('/category/product');

    render(<Breadcrumbs />);

    // Debug to inspect the rendered output
    screen.debug();  // This will print the current DOM state

    // Check if "Home" and the path segments are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
  });
});
