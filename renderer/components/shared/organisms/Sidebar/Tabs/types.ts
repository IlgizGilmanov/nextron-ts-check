import { TIcon } from 'components/shared/atoms/Icon/types';

export type TTabItem = {
  text: string;
  url: string;
  iconName: TIcon['name'];
  testId: string;
};

export type TTabGroup = {
  name: string;
  items: TTabItem[];
};

export type TTabs = { tabGroups: TTabGroup[] };
