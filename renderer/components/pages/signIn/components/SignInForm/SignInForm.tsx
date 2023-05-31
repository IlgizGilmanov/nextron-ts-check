import { useState } from 'react';
import * as Yup from 'yup';

import { useSignIn } from 'lib/apollo/hooks/actions/auth';

import {
  EMAIL_INVALID,
  PASSWORD_INVALID_FORMAT,
  PASSWORD_INVALID_LENGTH,
} from 'config/constants/errorsText';
import { PASSWORD_REGULAR_EXP } from 'config/constants/regularExpressions';
import { RECOVERY_PASSWORD } from 'config/routes';
import { DEFAULT_EMAIL, DEFAULT_PASSWORD } from 'config/vars';

import ActionLink from 'components/shared/atoms/ActionLink';
import Checkbox from 'components/shared/atoms/Checkbox';
import Form, { FormFieldType } from 'components/shared/molecules/Form';

import { ActionsWrapper } from './styled';
import { TFormValues } from './types';

const SignInForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [signIn] = useSignIn();

  const form = {
    fields: [
      {
        type: FormFieldType.text,
        name: 'email',
        title: 'Email',
        placeholder: 'Enter email',
        testId: 'input-email',
        initialValue: DEFAULT_EMAIL || '',
        validationSchema: Yup.string().email(EMAIL_INVALID).max(255),
      },
      {
        type: FormFieldType.password,
        name: 'password',
        title: 'Password',
        placeholder: 'Enter password',
        testId: 'input-password',
        initialValue: DEFAULT_PASSWORD || '',
        validationSchema: Yup.string()
          .trim()
          .min(6, PASSWORD_INVALID_LENGTH)
          .matches(PASSWORD_REGULAR_EXP, PASSWORD_INVALID_FORMAT),
      },
      {
        type: FormFieldType.submit,
        name: 'Login',
        testId: 'submit-button',
      },
    ],
    onSubmit: async (values: TFormValues) => {
      await signIn(values);
    },
  };

  return (
    <>
      <Form form={form} $width="100%" />
      <ActionsWrapper>
        <Checkbox
          label="Remember me"
          name="remember-me-checkbox"
          onChange={() => setRememberMe(prevValue => !prevValue)}
          checked={rememberMe}
        />
        <ActionLink href={RECOVERY_PASSWORD} label="Forgot?" $weight={500} />
      </ActionsWrapper>
    </>
  );
};

export default SignInForm;
