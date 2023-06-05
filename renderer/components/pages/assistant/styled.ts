import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  padding: 2rem 2.75rem;
`;

export const ChatNameWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const ChatName = styled.span(
  ({ theme: { colors } }) => css`
    font-size: 18px;
    line-height: 24px;
    color: ${colors.primary_text};
  `,
);
