import { useRouter } from 'next/router';

import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';

import Button from 'components/shared/atoms/Button/Button';

import AccountDropdown from './AccountDropdown';
import SidebarHeader from './SidebarHeader';
import Tabs, { TTabGroup } from './Tabs';

import { SidebarWrapper } from './styled';
import { TSidebar } from './types';

const tabGroups: TTabGroup[] = [
  {
    name: 'Assistant',
    items: [
      { text: 'Assistant', url: ASSISTANT, iconName: 'message-circle', testId: 'assistant' },
      { text: 'History', url: HISTORY, iconName: 'user-profile', testId: 'history' },
    ],
  },
  {
    name: 'Other',
    items: [{ text: 'Settings', url: SETTINGS, iconName: 'settings', testId: 'settings' }],
  },
];
const Sidebar = ({ user, signOut }: TSidebar) => {
  const router = useRouter();
  const isAssistantPage = router.pathname === ASSISTANT;

  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <SidebarHeader />
          {isAssistantPage && <Button label="New Chat" shape="rounded" />}
          <Tabs tabGroups={tabGroups} />
          {/* Subscription info */}
          <AccountDropdown user={user} signOut={signOut} />
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
