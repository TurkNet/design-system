import React, { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

export interface IconProps
  extends IconStyledProps,
    HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = '',
  ...props
}) => {
  return (
    <IconStyled
      className={`material-icons ${className}`}
      fontSize={size}
      color={color}
      {...props}
    >
      {name}
    </IconStyled>
  )
}
