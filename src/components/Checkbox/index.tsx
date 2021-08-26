import React, { FC, InputHTMLAttributes } from 'react'
import { CheckboxStyled, LabelStyled, CheckboxStyledProps } from './styled'

export interface CheckboxProps
  extends CheckboxStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export const Checkbox: FC<CheckboxProps> = ({
  variant = 'standart',
  name,
  children,
  inputRef,
  ...props
}) => {
  return (
    <LabelStyled>
      <CheckboxStyled
        type="checkbox"
        {...props}
        variant={variant}
        name={name}
        ref={inputRef}
      />
      <span>{children}</span>
    </LabelStyled>
  )
}
