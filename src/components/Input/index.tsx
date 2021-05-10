import React, { FC, HTMLAttributes } from 'react'
import { InputStyled, InputStyledProps } from './styled'

export type InputProps = InputStyledProps & HTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = props => <InputStyled {...props} />
