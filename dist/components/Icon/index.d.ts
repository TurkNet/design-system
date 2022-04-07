import { FC, HTMLAttributes } from 'react';
import { IconStyledProps } from './styled';
export interface IconProps extends IconStyledProps, HTMLAttributes<HTMLSpanElement> {
    name: string;
    size?: number;
    color?: string;
    outlined?: boolean;
}
export declare const Icon: FC<IconProps>;
