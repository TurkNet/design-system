import { FC, ReactNode } from 'react';
import { FlexProps } from '../Flex';
interface AccordionItemProps extends FlexProps {
    summary: ReactNode;
    id?: string;
    expandedId?: string;
    defaultExpanded?: boolean;
    onExpand?: (expandedId: string) => void;
    onToggle?: (expanded?: boolean) => void;
}
declare const AccordionItem: FC<AccordionItemProps>;
export default AccordionItem;
