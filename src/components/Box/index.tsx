import React, { FC } from 'react';
import type { SpaceProps, LayoutProps, ColorProps } from 'styled-system';
import { BoxStyled } from './styled';
import { theme } from '../../shared/theme';

export type BoxProps = SpaceProps<typeof theme> &
  LayoutProps<typeof theme> &
  ColorProps;

export const Box: FC<BoxProps> = props => <BoxStyled {...props} />;
