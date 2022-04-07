import { FC } from 'react';
import { BadgeStyledProps } from './styled';
export interface BadgeProps extends BadgeStyledProps {
    label?: string;
}
export declare const Badge: FC<BadgeProps>;
