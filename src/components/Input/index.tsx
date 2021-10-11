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
  onClickIcon?(): void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', onClickIcon, icon, ...props }, ref) => {
    return (
      <WrapperStyled>
        <InputStyled {...props} variant={variant} ref={ref} />
        {icon && <IconStyled onClick={onClickIcon}>{icon}</IconStyled>}
      </WrapperStyled>
    )
  }
)
