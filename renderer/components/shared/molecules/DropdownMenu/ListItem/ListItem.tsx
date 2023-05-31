import { useListItem } from '@floating-ui/react';

import { Option } from './styled';
import { TListItem } from './types';

const ListItem = ({ label, activeIndex, selectedIndex, getItemProps, handleSelect }: TListItem) => {
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <Option
      type="button"
      ref={ref}
      role="option"
      aria-selected={isActive && isSelected}
      $isActive={isActive}
      $isSelected={isSelected}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {label}
    </Option>
  );
};

export default ListItem;
