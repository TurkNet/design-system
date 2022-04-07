import { FC } from 'react';
import { LoaderStyledProps } from './styled';
export interface LoaderProps extends LoaderStyledProps {
    main?: boolean;
}
export declare const CircleLoader: FC<LoaderProps>;
export declare const LinearLoader: FC;
