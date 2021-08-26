import React, { InputHTMLAttributes } from 'react'
import { RadioStyled, LabelStyled, RadioStyledProps } from './styled'

export type RadioProps = RadioStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ variant = 'standart', children, ...props }, ref) => {
    return (
      <LabelStyled>
        <RadioStyled type="radio" {...props} variant={variant} ref={ref} />
        <span>{children}</span>
      </LabelStyled>
    )
  }
)
