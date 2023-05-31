import styled, { css } from 'styled-components';

import { BaseOption } from 'components/shared/molecules/DropdownMenu';

export const Option = styled(BaseOption)(
  ({ theme: { colors } }) => css`
    &:hover,
    &:focus {
      background-color: ${colors.custom_grey_2};
    }
  `,
);
