import styled, { css } from 'styled-components';

export const PageContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
`;

export const FormContentWrapper = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div`
  width: 29rem; /* 400px */
  padding: 2rem;
`;

export const ImageWrapper = styled.div`
  flex: 1 1 50%;

  background-color: #9babdb; /* average image color */
  background-image: url('${process.env.ASSET_HOST}/images/auth-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.75rem;
`;

export const AuthTitle = styled.h1`
  margin: 0 0 0.75rem;

  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
`;

export const AuthSubtitle = styled.p`
  margin: 0 0 1.5rem;

  font-weight: 300;
  line-height: 22px;
`;

export const AuthRegularText = styled.span(
  ({ theme: { colors } }) => css`
    margin-right: 0.5rem;

    font-size: 0.875rem;
    line-height: 1rem;
    color: ${colors.secondary_text};
  `,
);
