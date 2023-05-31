import styled, { css } from 'styled-components';

import defaultBoxShadow from 'public/styles/config/defaultBoxShadow';

export const StyledReference = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    gap: 0.25rem;
    align-items: center;

    padding: 0.25rem 0.25rem 0.25rem 0.625rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${colors.primary_text};

    cursor: pointer;

    background-color: ${colors.custom_grey_3};
    border-radius: 1.25rem;

    &:hover,
    &:focus {
      background-color: ${colors.custom_grey_1};
    }
  `,
);

export const StyledList = styled.ul(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;

    min-width: 180px;
    padding: 0.625rem;

    background-color: ${colors.white};
    border: 1px solid ${colors.custom_grey_1};
    border-radius: 0.375rem;
    ${defaultBoxShadow};
  `,
);
