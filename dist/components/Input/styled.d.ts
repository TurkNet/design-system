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
export declare const WrapperStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const InputStyled: import("styled-components").StyledComponent<"input", any, InputStyledProps, never>;
export declare const IconStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
