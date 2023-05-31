import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  min-height: 100vh;
`;

export const PageContent = styled.div(
  ({ theme: { down, breakpoints } }) =>
    css`
      width: 100%;
      max-width: ${breakpoints.xl};

      ${down(breakpoints.xl)} {
        max-width: 100%;
      }
    `,
);
