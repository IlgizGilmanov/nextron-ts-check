import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem 1.75rem;

    border-bottom: 1px solid ${colors.custom_grey_1};
  `,
);

const Controls = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  align-items: center;
`;

export const LeftControls = styled(Controls)`
  justify-content: flex-start;
`;

export const RightControls = styled(Controls)`
  justify-content: flex-end;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const PageTitle = styled.h1(
  ({ theme: { colors } }) => css`
    padding: 0.5rem;
    margin: 0;

    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.primary_text};
  `,
);
