import React, { FC, HTMLAttributes } from 'react'
import { BoxStyled, BoxStyledProps } from './styled'

export interface BoxProps
  extends BoxStyledProps,
    HTMLAttributes<HTMLDivElement> {
  color?: string
  flex?: string
  hidden?: boolean
}

export const Box: FC<BoxProps> = ({ hidden, ...props }) => {
  if (hidden) {
    return null
  }
  return <BoxStyled {...props} />
}
