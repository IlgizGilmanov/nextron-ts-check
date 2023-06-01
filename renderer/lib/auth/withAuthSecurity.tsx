import Router from 'next/router';
import omit from 'lodash/omit';

import { getCurrentUser } from 'lib/apollo/cache/getCurrentUser';

import { SIGNIN } from 'config/routes';
import { TNextPage } from 'lib/apollo/types';

const withAuthSecurity = (Page: TNextPage): TNextPage => {
  const WithAuthSecurity: TNextPage = ({ ...pageProps }) => {
    return <Page {...pageProps} />;
  };

  WithAuthSecurity.getInitialProps = context => {
    const { req, res, apolloClient } = context;
    const ctx = omit(context, ['req', 'res']);
    const user = getCurrentUser({ apolloClient });

    if (!user) {
      if (!!req && !!res) {
        // Отличается из за то что не кастомный некстовый сервер, билд падает из за типизации
        // res?.writeHead(307,  { Location: SIGNIN })
        // res?.end()
      } else {
        Router.push(SIGNIN);
      }
    }

    return Page.getInitialProps ? Page.getInitialProps(context) : ctx;
  };

  return WithAuthSecurity;
};

export default withAuthSecurity;
