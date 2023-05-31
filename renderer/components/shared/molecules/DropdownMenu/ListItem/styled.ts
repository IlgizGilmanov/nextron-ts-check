import styled, { css } from 'styled-components';

export const Option = styled.button<{ $isActive?: boolean; $isSelected?: boolean }>(
  ({ $isActive, $isSelected, theme: { colors } }) => css`
    padding: 0.675rem;

    font-size: 0.875rem;
    font-weight: ${$isSelected ? 'bold' : ''};
    line-height: 1.25rem;
    color: ${colors.primary_text};
    text-align: left;

    background-color: ${$isActive ? colors.custom_grey_2 : colors.white};
    border: 0;
    border-radius: 0.375rem;
  `,
);
