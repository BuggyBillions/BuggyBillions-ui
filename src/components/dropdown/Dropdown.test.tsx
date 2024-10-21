export interface DropdownItem {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  items: DropdownItem[]; // Array of dropdown items
  buttonText: string; // The main button text
  buttonClassName?: string; // Custom classes for the button
  menuClassName?: string; // Custom classes for the dropdown menu
  itemClassName?: string; // Custom classes for dropdown items
  icon?: (isOpen: boolean) => React.ReactNode; // Custom icon function based on open state
  iconClassName?: string; // Custom classes for the icon
}
