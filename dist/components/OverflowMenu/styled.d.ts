import { LayoutProps } from 'styled-system';
export interface OverflowMenuItemProps extends LayoutProps {
    icon: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
}
export declare const OverflowMenuStyled: import("styled-components").StyledComponent<"ol", any, {}, never>;
export declare const OverflowMenuItemStyled: import("styled-components").StyledComponent<"li", any, LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;
export declare const OverflowLabel: import("styled-components").StyledComponent<"span", any, {}, never>;
