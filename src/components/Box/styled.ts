import styled from 'styled-components'
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'
import { prop } from 'styled-tools'

export type BoxStyledProps = SpaceProps & LayoutProps & ColorProps

export const BoxStyled = styled.div<BoxStyledProps>`
  flex: ${prop('flex')};
  ${space}
  ${layout}
  ${color}
`
