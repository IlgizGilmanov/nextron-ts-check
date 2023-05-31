import { useEffect } from 'react';
import * as Yup from 'yup';

import { usePasswordRecovery } from 'lib/apollo/hooks/actions/auth';
import useNotifier from 'hooks/useNotifier';

import {
  PASSWORD_INVALID_FORMAT,
  PASSWORD_INVALID_LENGTH,
  REQUIRED_FIELD,
} from 'config/constants/errorsText';
import { PASSWORD_REGULAR_EXP } from 'config/constants/regularExpressions';

import Form, { FormFieldType } from 'components/shared/molecules/Form';

import { TFormValues } from './types';

const ChooseNewPasswordForm = () => {
  const [recoveryPassword, detailMessage] = usePasswordRecovery();
  const { setInfo } = useNotifier();

  useEffect(() => {
    if (detailMessage) setInfo(detailMessage);
  }, [detailMessage]);

  const form = {
    fields: [
      {
        type: FormFieldType.password,
        name: 'newPassword',
        title: 'New password',
        placeholder: 'Enter a new password',
        testId: 'input-new-password',
        initialValue: '',
        validationSchema: Yup.string()
          .required(REQUIRED_FIELD)
          .trim()
          .min(6, PASSWORD_INVALID_LENGTH)
          .matches(PASSWORD_REGULAR_EXP, PASSWORD_INVALID_FORMAT),
      },
      {
        type: FormFieldType.password,
        name: 'confirmPassword',
        title: 'Confirm password',
        placeholder: 'Confirm password',
        testId: 'input-confirm-password',
        initialValue: '',
        validationSchema: Yup.string()
          .required(REQUIRED_FIELD)
          .trim()
          .min(6, PASSWORD_INVALID_LENGTH)
          .matches(PASSWORD_REGULAR_EXP, PASSWORD_INVALID_FORMAT),
      },
      {
        type: FormFieldType.submit,
        name: 'Reset Password',
        testId: 'submit-button',
      },
    ],
    onSubmit: async (values: TFormValues) => {
      await recoveryPassword(values);
    },
  };

  return <Form form={form} $width="100%" />;
};

export default ChooseNewPasswordForm;
