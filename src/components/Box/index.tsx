import React, { FC } from 'react';
import type { SpaceProps, LayoutProps, ColorProps } from 'styled-system';
import { BoxStyled } from './styled';

export type BoxProps = SpaceProps & LayoutProps & ColorProps;

export const Box: FC<BoxProps> = props => <BoxStyled {...props} />;
