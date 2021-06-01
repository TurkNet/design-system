import React, { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

export interface IconProps
  extends IconStyledProps,
    HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  color?: string
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color = 'grey.800',
  ...props
}) => {
  return (
    <IconStyled
      className="material-icons"
      fontSize={size}
      color={color}
      {...props}
    >
      {name}
    </IconStyled>
  )
}
