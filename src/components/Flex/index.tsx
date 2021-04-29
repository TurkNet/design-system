import React, { FC } from 'react';
import type { FlexboxProps } from 'styled-system';
import { BoxProps } from '../Box';
import { FlexStyled } from './styled';

export type FlexProps = BoxProps & FlexboxProps;

export const Flex: FC<FlexProps> = props => <FlexStyled {...props} />;
