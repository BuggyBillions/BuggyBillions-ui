import { render, screen } from "@testing-library/react";
import Badge from "./Badge"
import React from "react";

describe('Badge Component', () => {
    it('renders badge with text or numbers', () => {
      render(<Badge text="New" />);
      const badge = screen.getByText(/new/i);
      expect(badge).toBeInTheDocument();
    });
  });