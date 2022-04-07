import { FC } from 'react';
declare type ISort = Record<string, 'asc' | 'desc'>;
export interface TableProps {
    rows: any[];
    columns: any[];
    enableAdd?: boolean;
    selectable?: boolean;
    buttonText?: string;
    rowId?: string;
    [key: string]: any;
    onSort?(param: ISort): void;
    onCheck?(param: any[]): void;
    onAddClick?(): void;
    loading?: boolean;
}
export declare const Table: FC<TableProps>;
export {};
