import { HTMLProps } from 'react';

export type TMenuList = {
  getItemProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
  handleSelect: (index: number | null) => void;
  signOut: () => Promise<void>;
};
