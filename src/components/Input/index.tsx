import React, { FC, InputHTMLAttributes } from 'react'
import { InputStyled, InputStyledProps } from './styled'

export type InputProps = InputStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ variant = 'primary', ...props }) => (
  <InputStyled {...props} variant={variant} />
)
