import React, { FC, InputHTMLAttributes } from 'react'
import { InputStyled, InputStyledProps } from './styled'

export interface InputProps
  extends InputStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export const Input: FC<InputProps> = ({
  variant = 'primary',
  inputRef,
  ...props
}) => <InputStyled {...props} variant={variant} ref={inputRef} />
