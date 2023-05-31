import styled, { css } from 'styled-components';

import { BaseStyledList } from 'components/shared/molecules/DropdownMenu';

export const StyledReference = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    padding: 0.625rem;

    cursor: pointer;

    border: 1px solid ${colors.custom_grey_1};
    border-radius: 0.375rem;
    box-shadow: 0 3px 4px -5px rgb(24 24 28 / 3%), 0 1px 2px rgb(24 24 28 / 4%);

    &:hover,
    &:focus {
      background-color: ${colors.custom_grey_3};
    }
  `,
);

export const AvatarWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.span(
  ({ theme: { colors } }) => css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: ${colors.primary_text};
  `,
);

export const UserEmail = styled.span(
  ({ theme: { colors } }) => css`
    font-size: 0.625rem;
    font-weight: 300;
    line-height: 0.75rem;
    color: ${colors.secondary_text};
  `,
);

export const StyledList = styled(BaseStyledList)``;
