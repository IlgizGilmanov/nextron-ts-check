import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.75rem;

    border-bottom: 1px solid ${colors.custom_grey_1};
  `,
);

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const Controls = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;
