import { SpaceProps } from 'styled-system';
declare const sizes: {
    giant: {
        height: string;
        fontSize: string;
    };
    large: {
        height: string;
        fontSize: string;
    };
    medium: {
        height: string;
        fontSize: string;
    };
    small: {
        height: string;
        fontSize: string;
    };
    tiny: {
        height: string;
        fontSize: string;
    };
};
declare const variants: {
    fill: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    outline: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    ghost: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
declare const positions: {
    right: import("styled-components").FlattenSimpleInterpolation;
    left: import("styled-components").FlattenSimpleInterpolation;
};
export interface ButtonStyledProps extends SpaceProps {
    color?: string;
    size?: keyof typeof sizes;
    variant?: keyof typeof variants;
    fullWidth?: boolean;
    disabled?: boolean;
    alignment?: keyof typeof positions;
    width?: number;
}
export declare const ButtonStyled: import("styled-components").StyledComponent<"button", any, ButtonStyledProps, never>;
export {};
