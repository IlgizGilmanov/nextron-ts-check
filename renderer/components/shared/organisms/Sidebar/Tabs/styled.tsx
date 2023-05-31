import styled, { css } from 'styled-components';

import defaultTransition from 'public/styles/config/defaultTransition';

export const Wrapper = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.125rem;

  margin-top: 1.125rem;

  list-style: none;
`;

export const TabGroup = styled.div``;

export const TabGroupName = styled.div(
  ({ theme: { colors } }) => css`
    padding-left: 0.625rem;
    margin-bottom: 0.25rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${colors.custom_grey_4};
  `,
);

export const TabItem = styled.li<{ $isActive: boolean }>(
  ({ $isActive, theme: { colors } }) => css`
    a,
    button {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      padding: 0.625rem;
      margin: 0;

      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.25rem;
      color: ${colors.secondary_text};
      text-align: left;
      ${defaultTransition};

      cursor: pointer;

      background: none;
      border: none;
      border-radius: 0.5rem;

      ${$isActive &&
      css`
        color: ${colors.primary};

        background-color: ${colors.global_blue_200};
      `};

      path {
        ${defaultTransition};
      }

      &:hover,
      &:active,
      &:focus {
        color: ${colors.primary};

        background-color: ${colors.global_blue_200};

        path {
          stroke: ${colors.primary};
          ${defaultTransition};
        }
      }
    }
  `,
);
