import React, { FC, InputHTMLAttributes } from 'react'
import { SelectStyled, SelectStyledProps, OptionStyled } from './styled'

export type SelectProps = SelectStyledProps &
  InputHTMLAttributes<HTMLInputElement>

export const Select: FC<SelectProps> = ({
  variant = 'primary',
  children,
  options,
  placeholder = 'choose new',
  ...props
}) => {
  return (
    <SelectStyled variant={variant}>
      <OptionStyled selected>{placeholder}</OptionStyled>
      <OptionStyled>1</OptionStyled>
      <OptionStyled>2</OptionStyled>
      <OptionStyled>3</OptionStyled>
    </SelectStyled>
  )
}
