import React, { FC, HTMLAttributes } from 'react'
import { ButtonStyledProps, ButtonStyled } from './styled'

export interface ButtonProps
  extends ButtonStyledProps,
    HTMLAttributes<HTMLButtonElement> {
  value?: string
  icon?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({
  size = 'large',
  variant = 'fill',
  color = 'primary',
  children,
  icon,
  value,
  iconPosition = 'right',
  ...props
}) => {
  return (
    <ButtonStyled
      {...props}
      size={size}
      variant={variant}
      color={color}
      iconPosition={iconPosition}
    >
      <span>{value || children}</span>
      {icon}
    </ButtonStyled>
  )
}
