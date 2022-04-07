import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';
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
export declare const SelectStyled: import("styled-components").StyledComponent<ReactSelect, any, InputStyledProps, never>;
export declare const SearchSelectStyled: import("styled-components").StyledComponent<AsyncSelect, any, InputStyledProps, never>;
export {};
