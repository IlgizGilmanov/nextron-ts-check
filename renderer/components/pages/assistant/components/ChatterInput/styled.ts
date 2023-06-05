import styled, { css } from 'styled-components';

import defaultTransition from 'public/styles/config/defaultTransition';

import Button from 'components/shared/atoms/Button/Button';
import SimpleInput from 'components/shared/atoms/SimpleInput/SimpleInput';

export const Wrapper = styled.div<{ $focused: boolean }>(
  ({ $focused, theme: { colors } }) => css`
    position: relative;

    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    ${$focused
      ? css`
          border: 1px solid ${colors.primary};
          box-shadow: 0 0 0 2px #cedbf9;
        `
      : css`
          border: 1px solid ${colors.custom_grey_5};
        `}

    border-radius: 0.5rem;
    ${defaultTransition};
  `,
);

export const StyledSimpleInput = styled(SimpleInput)`
  padding-bottom: 1.5rem;

  border: 0;
`;

export const ControlsWrapper = styled.div`
  padding: 0 1rem;
`;

export const Controls = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;

    padding: 0.875rem 0;

    border-top: 1px solid ${colors.custom_grey_1};
  `,
);

export const StyledButton = styled(Button)`
  padding-right: 0;
  padding-left: 0;
`;

export const Hint = styled.span<{ $focused: boolean }>(
  ({ $focused, theme: { colors } }) => css`
    position: absolute;
    top: 14px;
    right: 12px;

    font-size: 13px;
    line-height: 18px;
    color: ${$focused ? colors.primary : colors.input_placeholder};
    ${defaultTransition};

    pointer-events: none;
  `,
);
