import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { SIGNIN } from 'config/routes';
import { TNextPage } from 'lib/apollo/types';

import ActionLink from 'components/shared/atoms/ActionLink';
import AuthTemplate, {
  AuthRegularText,
  AuthSubtitle,
  AuthTitle,
} from 'components/shared/templates/AuthTemplate';

import SignUpForm from './components/SignUpForm';

const SignUpPage: TNextPage = () => {
  return (
    <AuthTemplate testId="signup-page">
      <AuthTitle>Create account</AuthTitle>
      <AuthSubtitle>Create an account to start using ChatterAI</AuthSubtitle>
      <SignUpForm />
      <p>
        <AuthRegularText>Already a member?</AuthRegularText>
        <ActionLink href={SIGNIN} label="Login" $weight={500} />
      </p>
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignUpPage)));
