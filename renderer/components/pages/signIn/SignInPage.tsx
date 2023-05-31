import { useEffect } from 'react';

import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { SIGNUP } from 'config/routes';
import { TNextPage } from 'lib/apollo/types';

import ActionLink from 'components/shared/atoms/ActionLink';
import AuthTemplate, {
  AuthRegularText,
  AuthSubtitle,
  AuthTitle,
} from 'components/shared/templates/AuthTemplate';

import SignInForm from './components/SignInForm';

const SignInPage: TNextPage = () => {
  useEffect(() => {
    const callback = async () => {
      // const response = await window.versions?.ping?.();
      // eslint-disable-next-line no-console
      // console.log(response); // prints out 'pong'
    };
    callback();
  });

  return (
    <AuthTemplate testId="signin-page">
      <AuthTitle>Login to account</AuthTitle>
      <AuthSubtitle>Enter your credentials to use ChatterAI</AuthSubtitle>
      <SignInForm />
      <p>
        <AuthRegularText>Not a member?</AuthRegularText>
        <ActionLink href={SIGNUP} label="Create Account" $weight={500} />
      </p>
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignInPage)));
