import { FC } from 'react';
import styled, { css } from 'styled-components';

import { getMarginStyles } from 'public/styles/config/margin';

import { TIcon, TIconBase } from './types';
import { configIcons, IconKeys } from './config';
import { getFillStyles, getRotateStyles, getSizeStyles, getStrokeStyles } from './helpers';
// добавить свг трансформер в конфиг сборщика
const IconBase = styled.svg<TIconBase>(
  props => css`
    ${getSizeStyles(props)}
    ${getMarginStyles(props)}
    ${getFillStyles(props)}
    ${getStrokeStyles(props)}
    ${getRotateStyles(props)}
  `,
);

const Icon: FC<TIcon> = ({ name, ...props }) => (
  <IconBase {...props} as={configIcons[name as IconKeys]} />
);

export default Icon;
