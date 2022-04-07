import { FC } from 'react';
import { BoxProps } from '../Box';
export interface TabPanelProps extends BoxProps {
    tabId: number;
    currentTabId?: number;
}
export declare const TabPanel: FC<TabPanelProps>;
