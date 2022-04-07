import type { SpaceProps } from 'styled-system';
export interface InputStyledProps extends SpaceProps {
    variant?: keyof typeof variants;
}
declare const variants: {
    success: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    info: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    danger: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
export declare const TextareaStyled: import("styled-components").StyledComponent<"textarea", any, InputStyledProps, never>;
export {};
