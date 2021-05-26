import React, { FC } from 'react'
import { TagStyled, TagStyledProps } from './styled'

export interface TagProps extends TagStyledProps {
  label?: string
  icon?: React.ReactNode
}

export const Tag: FC<TagProps> = ({
  label,
  children,
  variant = 'fill',
  color = 'primary',
  icon,
  ...props
}) => {
  return (
    <TagStyled {...props} variant={variant} color={color}>
      <span>{label || children}</span>
      {icon}
    </TagStyled>
  )
}
