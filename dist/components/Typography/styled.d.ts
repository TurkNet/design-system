import { SpaceProps, ColorProps, TypographyProps } from 'styled-system';
declare const variants: {
    h1: {
        fontSize: string;
        fontWeight: string;
    };
    h2: {
        fontSize: string;
        fontWeight: string;
    };
    h3: {
        fontSize: string;
        fontWeight: string;
    };
    h4: {
        fontSize: string;
        fontWeight: string;
    };
    h5: {
        fontSize: string;
        fontWeight: string;
    };
    h6: {
        fontSize: string;
        fontWeight: string;
    };
    subtitle1: {
        fontSize: string;
        fontWeight: string;
    };
    subtitle2: {
        fontSize: string;
        fontWeight: string;
    };
    paragraph1: {
        fontSize: string;
    };
    paragraph2: {
        fontSize: string;
    };
    caption1: {
        fontSize: string;
    };
    caption2: {
        fontSize: string;
        fontWeight: string;
    };
    label: {
        fontSize: string;
        fontWeight: string;
    };
    span: {
        fontSize: string;
        fontWeight: string;
    };
};
export declare type IVariant = keyof typeof variants;
export interface TypographyStyledProps extends TypographyProps, SpaceProps, ColorProps {
    variant?: IVariant;
    color?: string;
    cursor?: string;
}
export declare const TypographyStyled: import("styled-components").StyledComponent<"div", any, TypographyStyledProps, never>;
export {};
