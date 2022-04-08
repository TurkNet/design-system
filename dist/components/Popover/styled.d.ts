export declare const variants: {
    topCenter: import("styled-components").FlattenSimpleInterpolation;
    topLeft: import("styled-components").FlattenSimpleInterpolation;
    topRight: import("styled-components").FlattenSimpleInterpolation;
    right: import("styled-components").FlattenSimpleInterpolation;
    bottomCenter: import("styled-components").FlattenSimpleInterpolation;
    bottomLeft: import("styled-components").FlattenSimpleInterpolation;
    bottomRight: import("styled-components").FlattenSimpleInterpolation;
    left: import("styled-components").FlattenSimpleInterpolation;
};
export interface PopoverStyledProps {
    variant?: keyof typeof variants;
}
export declare const Overlay: import("styled-components").StyledComponent<"div", any, PopoverStyledProps, never>;
export declare const PopoverStyled: import("styled-components").StyledComponent<"div", any, PopoverStyledProps, never>;
