import React, { TextareaHTMLAttributes } from 'react';
import { InputStyledProps } from './styled';
export interface TextareaProps extends InputStyledProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
