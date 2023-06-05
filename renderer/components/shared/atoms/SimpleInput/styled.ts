import styled, { css } from 'styled-components';

export const StyledInput = styled.input(
  ({ theme: { colors } }) => css`
    width: 100%;
    padding: 0.875rem 1rem;

    border: 1px solid ${colors.custom_grey_5};
    border-radius: 0.5rem;

    &::placeholder {
      font-weight: 300;
      color: ${colors.custom_grey_4};
    }
  `,
);
