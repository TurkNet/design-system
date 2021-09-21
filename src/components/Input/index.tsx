import React, { InputHTMLAttributes } from 'react'
import { InputStyled, InputStyledProps } from './styled'

export type InputProps = InputStyledProps &
  InputHTMLAttributes<HTMLInputElement>
export type { InputStyledProps }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return <InputStyled {...props} variant={variant} ref={ref} />
  }
)
