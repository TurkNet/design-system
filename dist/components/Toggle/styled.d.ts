export declare const variants: {
    success: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    danger: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    info: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    standart: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
export interface ToggleStyledProps {
    variant?: keyof typeof variants;
}
export declare const ToggleStyled: import("styled-components").StyledComponent<"input", any, ToggleStyledProps, never>;
export declare const LabelStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
