import { FC } from 'react';
export interface FileUploadProps {
    onlyButton?: boolean;
    multiple?: boolean;
    maxSize?: number;
    accept?: string[];
    onUpload?(fileList: Array<File>): void;
    label?: string;
}
export declare const FileUpload: FC<FileUploadProps>;
