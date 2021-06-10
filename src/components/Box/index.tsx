import React, { FC, HTMLAttributes } from 'react'
import { BoxStyled, BoxStyledProps } from './styled'

export interface BoxProps
  extends BoxStyledProps,
    HTMLAttributes<HTMLDivElement> {
  color?: string
  flex?: string
}

export const Box: FC<BoxProps> = props => <BoxStyled {...props} />
