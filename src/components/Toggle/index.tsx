import React, { FC, InputHTMLAttributes } from 'react'
import { ToggleStyled, LabelStyled, ToggleStyledProps } from './styled'

export type ToggleProps = ToggleStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Toggle: FC<ToggleProps> = ({
  variant = 'standart',
  name,
  children,
  ...props
}) => {
  return (
    <LabelStyled>
      <ToggleStyled type="checkbox" {...props} variant={variant} name={name} />
      <span>{children}</span>
    </LabelStyled>
  )
}
