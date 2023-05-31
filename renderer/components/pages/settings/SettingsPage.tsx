import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { TNextPage } from 'lib/apollo/types';

import PageHeader from 'components/shared/molecules/PageHeader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import { Content } from './styled';

export const SettingsPage: TNextPage = () => {
  return (
    <DefaultTemplate testId="settings-page">
      <PageHeader title="Settings" />
      <Content>Settings page content</Content>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(SettingsPage)));
