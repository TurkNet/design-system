import React, { FC, HTMLAttributes } from 'react';
import { ButtonStyledProps } from './styled';
export interface ButtonProps extends ButtonStyledProps, HTMLAttributes<HTMLButtonElement> {
    value?: string;
    icon?: React.ReactNode;
    type?: 'submit' | 'button' | 'reset';
}
export declare const Button: FC<ButtonProps>;
