import styled from 'styled-components'
import {
  space,
  layout,
  color,
  position,
  flexbox,
  FlexboxProps,
  PositionProps,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'

export type BoxStyledProps = SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  FlexboxProps

export const BoxStyled = styled.div<BoxStyledProps>`
  ${flexbox}
  ${position}
  ${space}
  ${layout}
  ${color}
`
