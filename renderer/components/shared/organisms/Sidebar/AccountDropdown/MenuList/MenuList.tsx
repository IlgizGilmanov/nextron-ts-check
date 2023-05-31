import Router from 'next/router';
import { useListItem } from '@floating-ui/react';

import { SETTINGS } from 'config/routes';

import { Option } from './styled';
import { TMenuList } from './types';

const MenuList = ({ getItemProps, handleSelect, signOut }: TMenuList) => {
  const { ref: accountRef, index: accountIndex } = useListItem({ label: 'Account Settings' });
  const { ref: logoutRef, index: logoutIndex } = useListItem({ label: 'Logout' });

  const actions = [
    {
      label: 'Account Settings',
      handler: () => {
        Router.push(SETTINGS);
      },
      ref: accountRef,
      index: accountIndex,
    },
    {
      label: 'Logout',
      handler: () => {
        signOut();
      },
      ref: logoutRef,
      index: logoutIndex,
    },
  ];

  return (
    <>
      {actions.map(action => (
        <Option
          key={`menu-list-item-${action.label}`}
          ref={action.ref}
          type="button"
          role="option"
          {...getItemProps({
            onClick: () => {
              action.handler();
              handleSelect(action.index);
            },
          })}
        >
          {action.label}
        </Option>
      ))}
    </>
  );
};

export default MenuList;
