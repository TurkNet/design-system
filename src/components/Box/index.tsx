import React, { FC } from 'react'
import type { SpaceProps, LayoutProps, ColorProps } from 'styled-system'
import { BoxStyled } from './styled'

export interface BoxProps extends SpaceProps, LayoutProps, ColorProps {
  color?: string
}

export const Box: FC<BoxProps> = props => <BoxStyled {...props} />
