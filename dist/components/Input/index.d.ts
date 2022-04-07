import React, { InputHTMLAttributes, ReactNode } from 'react';
import { InputStyledProps } from './styled';
export interface InputProps extends InputStyledProps, InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    onClickIcon?(): void;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
