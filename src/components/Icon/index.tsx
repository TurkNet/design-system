import React, { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

export interface IconProps
  extends IconStyledProps,
    HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  color?: string
  iconClassType?: 'fill' | 'outlined' | 'round'
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  iconClassType = 'fill',
  cursor,
  ...props
}) => {
  const iconClassTypeMap = {
    fill: 'custom-icons material-icons',
    outlined: 'custom-icons material-icons-outlined',
    round: 'custom-icons material-icons-round',
  }
  return (
    <IconStyled
      className={iconClassTypeMap[iconClassType]}
      fontSize={size}
      color={color}
      cursor={cursor}
      {...props}
    >
      {name}
    </IconStyled>
  )
}
