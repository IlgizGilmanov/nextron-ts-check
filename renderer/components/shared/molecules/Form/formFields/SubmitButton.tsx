import { FC } from 'react';

import Button from 'components/shared/atoms/Button';

import { SubmitButtonFieldConfig } from './types';

const SubmitButton: FC<SubmitButtonFieldConfig> = ({ name, testId, disabled, isSubmitting }) => {
  return (
    <Button
      $width="100%"
      shape="rounded"
      type="submit"
      testId={testId}
      disabled={disabled || isSubmitting}
      isLoading={isSubmitting}
      label={name}
    />
  );
};

export default SubmitButton;
