import { FC, HTMLAttributes } from 'react';
import { BoxStyledProps } from './styled';
export interface BoxProps extends BoxStyledProps, HTMLAttributes<HTMLDivElement> {
    color?: string;
    flex?: string;
    hidden?: boolean;
    position?: 'absolute' | 'relative' | 'fixed';
}
export declare const Box: FC<BoxProps>;
