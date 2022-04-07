import { SpaceProps } from 'styled-system';
export interface AlertStyledProps extends SpaceProps {
    severity: 'success' | 'warning' | 'danger' | 'info';
}
export declare const AlertStyled: import("styled-components").StyledComponent<"div", any, AlertStyledProps, never>;
