import { useState } from 'react';

import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { SIGNIN } from 'config/routes';
import { TNextPage } from 'lib/apollo/types';

import ActionLink from 'components/shared/atoms/ActionLink';
import Icon from 'components/shared/atoms/Icon';
import AuthTemplate, { AuthSubtitle, AuthTitle } from 'components/shared/templates/AuthTemplate';

import ChooseNewPasswordForm from './components/ChooseNewPasswordForm';
import RecoveryEmailForm from './components/RecoveryEmailForm';
import VerifyEmailForm from './components/VerifyEmailForm';

import { ActionLinkWrapper } from './styled';

enum PasswordRecoverySteps {
  SEND_LINK = 'send_link',
  VERIFY_EMAIL = 'verify_email',
  CHOOSE_NEW_PASSWORD = 'choose_new_password',
}

const RecoveryPasswordPage: TNextPage = () => {
  const [currentStep, setCurrentStep] = useState<PasswordRecoverySteps>(
    PasswordRecoverySteps.SEND_LINK,
  );

  return (
    <AuthTemplate testId="recovery-password-page">
      {currentStep === PasswordRecoverySteps.SEND_LINK && (
        <>
          <AuthTitle>Reset your password</AuthTitle>
          <AuthSubtitle>
            We&apos;ll email you instructions to reset your password.
            <br />
            Follow the steps provided to reset your password.
          </AuthSubtitle>
          <RecoveryEmailForm onSubmit={() => setCurrentStep(PasswordRecoverySteps.VERIFY_EMAIL)} />
          <ActionLinkWrapper>
            <Icon name="arrow-left" $color="primary" />
            <ActionLink href={SIGNIN} label="Back to login" $weight={500} />
          </ActionLinkWrapper>
        </>
      )}
      {currentStep === PasswordRecoverySteps.VERIFY_EMAIL && (
        <>
          <AuthTitle>Verify email</AuthTitle>
          <AuthSubtitle>
            A verification code has been sent to your email. Enter the code below
          </AuthSubtitle>
          <VerifyEmailForm
            onSubmit={() => setCurrentStep(PasswordRecoverySteps.CHOOSE_NEW_PASSWORD)}
          />
          <ActionLinkWrapper>
            <Icon name="arrow-left" $color="primary" />
            <ActionLink href={SIGNIN} label="Back to login" $weight={500} />
          </ActionLinkWrapper>
        </>
      )}
      {currentStep === PasswordRecoverySteps.CHOOSE_NEW_PASSWORD && (
        <>
          <AuthTitle>Choose a new password</AuthTitle>
          <AuthSubtitle>Almost done. Enter your new password and you&apos;re all set.</AuthSubtitle>
          <ChooseNewPasswordForm />
          <ActionLinkWrapper>
            <Icon name="arrow-left" $color="primary" />
            <ActionLink href={SIGNIN} label="Back to login" $weight={500} />
          </ActionLinkWrapper>
        </>
      )}
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(RecoveryPasswordPage)));
