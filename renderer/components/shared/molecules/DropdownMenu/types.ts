export type TDropdownMenu = {
  defaultLabel: string;
  menuItems: string[];
  selectedIndex: number | null;
  onSelect?: (index: number | null) => void;
};
