import { FC } from 'react';
export interface PaginationProps {
    currentPage: number;
    totalItemsCount: number;
    itemsCountPerPage: number;
    onChange?(page: number): void;
}
export declare const Pagination: FC<PaginationProps>;
