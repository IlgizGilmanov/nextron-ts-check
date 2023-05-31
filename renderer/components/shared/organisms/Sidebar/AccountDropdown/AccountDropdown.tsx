import { FloatingFocusManager, FloatingList } from '@floating-ui/react';

import ProfileImage from 'components/shared/atoms/ProfileImage';
import { useDropdownMenu } from 'components/shared/molecules/DropdownMenu';

import MenuList from './MenuList';

import {
  AvatarWrapper,
  StyledList,
  StyledReference,
  UserEmail,
  UserInfo,
  UserName,
} from './styled';
import { TAccountDropdown } from './types';

const AccountDropdown = ({ user, signOut }: TAccountDropdown) => {
  const {
    isOpen,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    elementsRef,
    labelsRef,
    handleSelect,
  } = useDropdownMenu({ selectedIndex: null, defaultLabel: '' });

  return (
    <>
      <StyledReference tabIndex={0} ref={refs.setReference} {...getReferenceProps()}>
        <AvatarWrapper>
          <ProfileImage avatar={user.avatarUrl} alt={user.email} />
        </AvatarWrapper>
        <UserInfo>
          <UserName>{[user.firstName, user.lastName].join(' ')}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
      </StyledReference>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <StyledList ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
              <MenuList getItemProps={getItemProps} handleSelect={handleSelect} signOut={signOut} />
            </FloatingList>
          </StyledList>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default AccountDropdown;
