import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps } from 'styled-system'
import { fadeIn } from '../../shared/animation'
import { prop } from '../../utility'

export type IconStyledProps = TypographyProps & ColorProps

export const IconStyled = styled.span<IconStyledProps>`
  ${typography}
  ${color}
  width: ${prop('fontSize')}px;
  overflow: hidden;
  display: block;
  animation: ${fadeIn} 0.5s ease;
`
