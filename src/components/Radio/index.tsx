import React, { FC, InputHTMLAttributes } from 'react'
import { RadioStyled, LabelStyled, RadioStyledProps } from './styled'

export interface RadioProps
  extends RadioStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export const Radio: FC<RadioProps> = ({
  variant = 'standart',
  children,
  inputRef,

  ...props
}) => {
  return (
    <LabelStyled>
      <RadioStyled type="radio" {...props} variant={variant} ref={inputRef} />
      <span>{children}</span>
    </LabelStyled>
  )
}
