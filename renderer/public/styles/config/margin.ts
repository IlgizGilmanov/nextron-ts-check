import { css } from 'styled-components';

export type TMargin = {
  $ml?: number | 'auto';
  $mr?: number | 'auto';
  $mt?: number | 'auto';
  $mb?: number | 'auto';
};

export const getMarginStyles = ({ $ml = 0, $mr = 0, $mt = 0, $mb = 0 }: TMargin) => {
  return css`
    margin: ${$mt === 'auto' ? $mt : `${$mt}px`} ${$mr === 'auto' ? $mr : `${$mr}px`}
      ${$mb === 'auto' ? $mb : `${$mb}px`} ${$ml === 'auto' ? $ml : `${$ml}px`};
  `;
};
