import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps } from 'styled-system'
import { prop } from '../../utility'

type Cursorprops = {
  cursor?: string
}

export type IconStyledProps = TypographyProps & ColorProps & Cursorprops

export const IconStyled = styled.span<IconStyledProps>`
  &.custom-icons {
    ${typography}
    ${color}
    width: ${prop('fontSize')}px;
    overflow: hidden;
    display: block;
    cursor: ${prop('cursor', 'default')};
  }
`
