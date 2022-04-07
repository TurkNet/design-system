import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { InputProps } from '../Input';
export declare type DateInputProps = ReactDatePickerProps & InputProps & {
    selected: DateType;
    dateFormat: string;
};
declare type DateType = Date | [Date | null, Date | null] | null | undefined;
export declare const DateInput: React.ForwardRefExoticComponent<ReactDatePickerProps<never> & InputProps & {
    selected: DateType;
    dateFormat: string;
} & React.RefAttributes<HTMLInputElement>>;
export {};
