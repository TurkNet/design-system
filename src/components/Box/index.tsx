import React, { FC } from 'react'
import { BoxStyled, BoxStyledProps } from './styled'

export interface BoxProps extends BoxStyledProps {
  color?: string
}

export const Box: FC<BoxProps> = props => <BoxStyled {...props} />
