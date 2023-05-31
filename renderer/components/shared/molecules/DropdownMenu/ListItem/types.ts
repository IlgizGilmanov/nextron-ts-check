export type TListItem = {
  label: string;
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  handleSelect: (index: number | null) => void;
};
