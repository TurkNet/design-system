import styled, { css } from 'styled-components'
import { ifNotProp } from 'styled-tools'
import { BoxProps } from '../Box'

export interface CollapseProps extends BoxProps {
  expanded?: boolean
}

export const CollapseStyled = styled.div<CollapseProps>`
  height: auto;
  ${ifNotProp(
    'expanded',
    css`
      overflow: hidden;
      max-height: 0px;
    `
  )}

  transition: max-height 0.3s ease;
`
