import { ASSISTANT, HISTORY, SETTINGS } from 'config/routes';

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
  return (
    <>
      {!!user && (
        <SidebarWrapper>
          <SidebarHeader />
          <Tabs tabGroups={tabGroups} />
          {/* Subscription info */}
          <AccountDropdown user={user} signOut={signOut} />
        </SidebarWrapper>
      )}
    </>
  );
};

export default Sidebar;
