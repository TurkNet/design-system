import React, { FC } from 'react'
import type { FlexboxProps } from 'styled-system'
import type { BoxProps } from '../Box'
import { FlexStyled } from './styled'

export type FlexProps = FlexboxProps & BoxProps

export const Flex: FC<FlexProps> = props => <FlexStyled {...props} />
