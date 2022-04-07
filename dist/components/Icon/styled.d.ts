import { TypographyProps, ColorProps } from 'styled-system';
declare type Cursorprops = {
    cursor?: string;
};
export declare type IconStyledProps = TypographyProps & ColorProps & Cursorprops;
export declare const IconStyled: import("styled-components").StyledComponent<"span", any, TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & Cursorprops, never>;
export {};
