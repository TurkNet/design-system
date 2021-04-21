import React, { FC } from 'react';
import type { FlexboxProps } from 'styled-system';
import { theme } from '../../shared/theme';
import { BoxProps } from '../Box';
import { FlexStyled } from './styled';

export type FlexProps = BoxProps & FlexboxProps<typeof theme>;

export const Flex: FC<FlexProps> = props => <FlexStyled {...props} />;
