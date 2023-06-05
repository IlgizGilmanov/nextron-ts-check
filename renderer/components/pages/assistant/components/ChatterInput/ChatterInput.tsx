import { useState } from 'react';

import {
  Controls,
  ControlsWrapper,
  Hint,
  StyledButton,
  StyledSimpleInput,
  Wrapper,
} from './styled';

export const ChatterInput = () => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper $focused={focused}>
      <Hint $focused={focused}>↵&nbsp;&nbsp;Send</Hint>
      <StyledSimpleInput
        type="text"
        name="chatter-input"
        value={value}
        placeholder="Write anything"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <ControlsWrapper>
        <Controls>
          <StyledButton variant="hollow" label="Saved Prompts" />
          <StyledButton variant="hollow" label="Prompt Library" />
        </Controls>
      </ControlsWrapper>
    </Wrapper>
  );
};

export default ChatterInput;
