import React, { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

export interface IconProps
  extends IconStyledProps,
    HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  color?: string
  className?: 'outlined' | 'sharp' | 'two-tone' | 'round'
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  className,
  ...props
}) => {
  const cs = className ? `-${className}` : ''
  return (
    <IconStyled
      className={`material-icons${cs}`}
      fontSize={size}
      color={color}
      {...props}
    >
      {name}
    </IconStyled>
  )
}
