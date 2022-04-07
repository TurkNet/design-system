import { FC } from 'react';
import { TooltipStyledProps } from './styled';
export interface TooltipProps extends TooltipStyledProps {
    title: string;
}
export declare const Tooltip: FC<TooltipProps>;
