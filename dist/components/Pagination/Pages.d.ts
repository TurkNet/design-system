import { FC } from 'react';
interface PagesProps {
    totalPages: number;
    currentPage: number;
    onChange(page: number): void;
}
export declare const Pages: FC<PagesProps>;
export {};
