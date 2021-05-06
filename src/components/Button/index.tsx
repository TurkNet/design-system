import React, { FC, HTMLAttributes } from 'react';
import { ButtonStyled } from './styled';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outlined';
}

export const Button: FC<ButtonProps> = ({ variant }) => {
  return <ButtonStyled>Button {variant}</ButtonStyled>;
};
