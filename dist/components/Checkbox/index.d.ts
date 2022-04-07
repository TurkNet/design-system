import React, { InputHTMLAttributes } from 'react';
import { CheckboxStyledProps } from './styled';
export declare type CheckboxProps = CheckboxStyledProps & InputHTMLAttributes<HTMLInputElement>;
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxStyledProps & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
