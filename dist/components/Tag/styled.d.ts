import { SpaceProps } from 'styled-system';
export interface TagStyledProps extends SpaceProps {
    variant?: keyof typeof variants;
    color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'sky';
}
declare const variants: {
    fill: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    outline: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
export declare const TagStyled: import("styled-components").StyledComponent<"div", any, TagStyledProps, never>;
export {};
