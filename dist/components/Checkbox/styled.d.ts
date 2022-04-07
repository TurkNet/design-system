export declare const variants: {
    success: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    danger: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    info: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    primary: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    standart: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
export interface CheckboxStyledProps {
    variant?: keyof typeof variants;
}
export declare const CheckboxStyled: import("styled-components").StyledComponent<"input", any, CheckboxStyledProps, never>;
export declare const LabelStyled: import("styled-components").StyledComponent<"label", any, {}, never>;
