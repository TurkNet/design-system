import React, { InputHTMLAttributes, ReactNode } from 'react'
import { InputStyled, InputStyledProps, WrapperStyled } from './styled'

export type InputProps = InputStyledProps &
  InputHTMLAttributes<HTMLInputElement> & { icon?: ReactNode }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', icon, ...props }, ref) => {
    return (
      <WrapperStyled>
        <InputStyled {...props} variant={variant} ref={ref} />
        {icon}
      </WrapperStyled>
    )
  }
)
