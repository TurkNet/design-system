export declare const variants: {
    success: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    danger: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    info: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    standart: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
export interface RadioStyledProps {
    variant?: keyof typeof variants;
}
export declare const RadioStyled: import("styled-components").StyledComponent<"input", any, RadioStyledProps, never>;
export declare const LabelStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
