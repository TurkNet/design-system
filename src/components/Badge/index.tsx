import React, { FC } from 'react'
import { BadgeStyled, BadgeStyledProps } from './styled'

export interface BadgeProps extends BadgeStyledProps {
  label?: string
}

export const Badge: FC<BadgeProps> = ({
  label,
  variant = 'fill',
  color = 'primary',
  ...props
}) => {
  return (
    <BadgeStyled {...props} variant={variant} color={color}>
      {label}
    </BadgeStyled>
  )
}
