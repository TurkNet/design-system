import React, { InputHTMLAttributes, ReactNode } from 'react'
import {
  IconStyled,
  InputStyled,
  InputStyledProps,
  WrapperStyled,
} from './styled'

export interface InputProps
  extends InputStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', icon, ...props }, ref) => {
    return (
      <WrapperStyled>
        <InputStyled {...props} variant={variant} ref={ref} />
        <IconStyled>{icon}</IconStyled>
      </WrapperStyled>
    )
  }
)
