import React, { InputHTMLAttributes } from 'react'
import { CheckboxStyled, LabelStyled, CheckboxStyledProps } from './styled'

export type CheckboxProps = CheckboxStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant = 'standart', name, children, ...props }, ref) => {
    return (
      <LabelStyled>
        <CheckboxStyled
          type="checkbox"
          {...props}
          variant={variant}
          name={name}
          ref={ref}
        />
        <span>{children}</span>
      </LabelStyled>
    )
  }
)
