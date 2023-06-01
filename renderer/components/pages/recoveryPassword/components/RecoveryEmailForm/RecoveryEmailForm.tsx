import { useEffect } from 'react';
import * as Yup from 'yup';

import { usePasswordRecovery } from 'lib/apollo/hooks/actions/auth';
import useNotifier from 'hooks/useNotifier';

import { EMAIL_INVALID, REQUIRED_FIELD } from 'config/constants/errorsText';

import Form, { FormFieldType } from 'components/shared/molecules/Form';

import { TFormValues } from './types';

const RecoveryEmailForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const [recoveryPassword, detailMessage] = usePasswordRecovery();
  const { setInfo } = useNotifier();

  useEffect(() => {
    if (detailMessage) setInfo(detailMessage);
  }, [detailMessage]);

  const form = {
    fields: [
      {
        type: FormFieldType.text,
        name: 'email',
        title: 'Email',
        placeholder: 'Enter email',
        testId: 'input-email',
        initialValue: '',
        validationSchema: Yup.string().email(EMAIL_INVALID).max(255).required(REQUIRED_FIELD),
      },
      {
        type: FormFieldType.submit,
        name: 'Reset Password',
        testId: 'submit-button',
      },
    ],
    onSubmit: async (values: TFormValues) => {
      await recoveryPassword(values);

      if (onSubmit) {
        onSubmit();
      }
    },
  };

  return <Form form={form} $width="100%" />;
};

export default RecoveryEmailForm;
