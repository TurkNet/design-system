import styled, { css } from 'styled-components'
import { ifNotProp } from 'styled-tools'

export type CollapseProp = {
  expanded?: boolean
}

export const CollapseStyled = styled.div<CollapseProp>`
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
