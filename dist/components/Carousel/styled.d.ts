/// <reference types="react" />
export declare const ArrowStyled: import("styled-components").StyledComponent<import("react").FC<import("../Flex").FlexProps>, any, {}, never>;
export interface SlickSliderCssProps {
    variant: keyof typeof variants;
}
declare const variants: {
    standart: string;
    compact: string;
    inner: string;
};
export declare const SlickSliderCss: import("styled-components").GlobalStyleComponent<SlickSliderCssProps, import("styled-components").DefaultTheme>;
export {};
