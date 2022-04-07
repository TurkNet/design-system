import { FC, ReactNode } from 'react';
import { PopoverStyledProps } from './styled';
export interface PopoverProps extends PopoverStyledProps {
    title?: string;
    content?: ReactNode;
}
export declare const Popover: FC<PopoverProps>;
