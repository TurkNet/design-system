import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps } from 'styled-system'

export type IconStyledProps = TypographyProps & ColorProps

export const IconStyled = styled.span<IconStyledProps>`
  ${typography}
  ${color}
`
