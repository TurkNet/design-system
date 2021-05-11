import styled from 'styled-components'
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'

export type BoxStyledProps = SpaceProps & LayoutProps & ColorProps

export const BoxStyled = styled.div<BoxStyledProps>`
  ${space}
  ${layout}
  ${color}
`
