import { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from './styled';

type TInputType = InputHTMLAttributes<HTMLInputElement>;

const SimpleInput: FC<TInputType> = props => {
  return <StyledInput {...props} />;
};

export default SimpleInput;
