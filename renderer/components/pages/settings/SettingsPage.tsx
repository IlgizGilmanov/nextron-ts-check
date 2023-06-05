import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { TNextPage } from 'lib/apollo/types';

import PageHeader, { PageTitle, PageWrapper } from 'components/shared/molecules/PageHeader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import { Content } from './styled';

export const SettingsPage: TNextPage = () => {
  return (
    <DefaultTemplate testId="settings-page">
      <PageWrapper>
        <PageHeader leftControls={<PageTitle>Settings</PageTitle>} />
        <Content> </Content>
      </PageWrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(SettingsPage)));
