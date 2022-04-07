import { FC, ReactNode } from 'react';
import type { SpaceProps, LayoutProps } from 'styled-system';
export interface CardProps extends SpaceProps, LayoutProps {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    content?: string | ReactNode;
    footer?: string | ReactNode;
    image?: ReactNode;
}
export declare const Card: FC<CardProps>;
