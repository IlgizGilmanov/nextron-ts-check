import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    font-weight: 500;
    line-height: 1.125rem;
    color: ${colors.primary};
  `,
);

export const LogoWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    background-color: ${colors.primary};
    border-radius: 0.25rem;
  `,
);
