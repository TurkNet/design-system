import { FlexboxProps, PositionProps, SpaceProps, LayoutProps, ColorProps } from 'styled-system';
export declare type BoxStyledProps = SpaceProps & LayoutProps & ColorProps & PositionProps & FlexboxProps;
export declare const BoxStyled: import("styled-components").StyledComponent<"div", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;