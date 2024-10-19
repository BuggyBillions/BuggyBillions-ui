export interface DropdownItem {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  items: DropdownItem[];
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}
