import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/shared/atoms/Icon';

import { TabGroup, TabGroupName, TabItem, Wrapper } from './styled';
import { TTabs } from './types';

const Tabs = ({ tabGroups }: TTabs) => {
  const { pathname } = useRouter();

  return (
    <Wrapper data-testid="sidebar-tabs">
      {tabGroups.map(group => (
        <TabGroup key={`tab-group-${group.name}`}>
          <TabGroupName>{group.name}</TabGroupName>
          {group.items.map(({ text, url, iconName, testId }) => (
            <TabItem
              key={`tab-group-item-${text}`}
              data-testid={testId}
              $isActive={pathname === url}
            >
              <Link href={url} passHref>
                <Icon
                  name={iconName}
                  $strokeColor={pathname === url ? 'primary' : 'secondary_text'}
                  $color="transparent"
                  $size={18}
                />
                <span>{text}</span>
              </Link>
            </TabItem>
          ))}
        </TabGroup>
      ))}
    </Wrapper>
  );
};

export default Tabs;
