import styled from 'styled-components'
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system'
import { prop } from '../../utility/styled'

export type BoxStyledProps = SpaceProps & LayoutProps & ColorProps

export const BoxStyled = styled.div<BoxStyledProps>`
  flex: ${prop('flex')};
  position: ${prop('position', 'inherit')};
  ${space}
  ${layout}
  ${color}
`
