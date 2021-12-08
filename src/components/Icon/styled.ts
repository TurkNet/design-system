import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps } from 'styled-system'
import { prop } from '../../utility'

export type IconStyledProps = TypographyProps & ColorProps

export const IconStyled = styled.span<IconStyledProps>`
  &.custom-icons {
    ${typography}
    ${color}
    width: ${prop('fontSize')}px;
    overflow: hidden;
    display: block;
  }
`
