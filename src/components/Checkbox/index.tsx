import React, { FC, InputHTMLAttributes } from 'react'
import { CheckboxStyled, LabelStyled, CheckboxStyledProps } from './styled'

export type CheckboxProps = CheckboxStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<CheckboxProps> = ({
  variant = 'standart',
  name,
  children,
  ...props
}) => {
  return (
    <LabelStyled htmlFor={name}>
      <CheckboxStyled
        type="checkbox"
        {...props}
        variant={variant}
        name={name}
      />
      <span>{children}</span>
    </LabelStyled>
  )
}
