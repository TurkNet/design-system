import { FC } from 'react';
export interface TabProps {
    label?: string;
    tabId: number;
    currentTabId?: number;
    onClick?(id: number): void;
}
export declare const Tab: FC<TabProps>;
