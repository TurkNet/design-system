import React, { FC, InputHTMLAttributes } from 'react'
import { RadioStyled, LabelStyled, RadioStyledProps } from './styled'

export type RadioProps = RadioStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Radio: FC<RadioProps> = ({
  variant = 'standart',
  children,
  ...props
}) => {
  return (
    <LabelStyled>
      <RadioStyled type="radio" {...props} variant={variant} />
      <span>{children}</span>
    </LabelStyled>
  )
}
