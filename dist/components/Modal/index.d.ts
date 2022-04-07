import { FC } from 'react';
export interface ModalProps {
    show?: boolean;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    showCloseIcon?: boolean;
    closeOnClickOutside?: boolean;
    onClosed?(): void;
}
export declare const Modal: FC<ModalProps>;
