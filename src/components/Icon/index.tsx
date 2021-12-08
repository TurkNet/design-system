import React, { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

export interface IconProps
  extends IconStyledProps,
    HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  color?: string
  outlined?: boolean
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  outlined,
  ...props
}) => {
  const cs = outlined ? '-outlined' : ''
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
