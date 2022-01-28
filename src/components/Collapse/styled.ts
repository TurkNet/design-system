import styled, { css } from 'styled-components'
import { ifNotProp } from 'styled-tools'

export type CollapseProp = {
  expanded?: boolean
}

export const CollapseStyled = styled.div<CollapseProp>`
  transition: all 0.3s ease;
  max-height: 0px;
  ${ifNotProp(
    'expanded',
    css`
      overflow: hidden;
      max-height: 0px;
    `,
    css`
      max-height: 100%;
    `
  )}
`
