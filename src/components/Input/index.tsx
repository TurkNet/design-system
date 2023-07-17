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
  copiedText?: string
  copiable?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', onClickIcon, icon, ...props }, ref) => (
    <WrapperStyled>
      <InputStyled {...props} variant={variant} ref={ref} />
      {icon && <IconStyled onClick={onClickIcon}>{icon}</IconStyled>}
    </WrapperStyled>
  )
)
