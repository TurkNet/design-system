import React, { FC } from 'react';
import { TagStyledProps } from './styled';
export interface TagProps extends TagStyledProps {
    label?: string;
    icon?: React.ReactNode;
}
export declare const Tag: FC<TagProps>;
