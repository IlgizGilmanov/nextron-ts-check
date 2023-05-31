import { useEffect } from 'react';
import * as Yup from 'yup';

import { usePasswordRecovery } from 'lib/apollo/hooks/actions/auth';
import useNotifier from 'hooks/useNotifier';

import { EMAIL_INVALID, REQUIRED_FIELD } from 'config/constants/errorsText';

import Form, { FormFieldType } from 'components/shared/molecules/Form';

import { TFormValues } from './types';

const VerifyEmailForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        name: 'Verify Email',
        testId: 'submit-button',
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async (values: TFormValues) => {
      // await recoveryPassword(values);
      if (onSubmit) {
        onSubmit();
      }
    },
  };

  return <Form form={form} $width="100%" />;
};

export default VerifyEmailForm;
