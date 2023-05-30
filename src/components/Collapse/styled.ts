import styled, { css } from 'styled-components'
import { ifNotProp } from 'styled-tools'

export type CollapseProp = {
  expanded?: boolean
}

export const CollapseStyled = styled.div<CollapseProp>`
  transition: all 0.3s ease-in-out;
  max-height: 0px;
  ${ifNotProp(
    'expanded',
    css`
      overflow: hidden;
      opacity: 0;
      max-height: 0px;
    `,
    css`
      opacity: 1;
      max-height: 100vh;
    `
  )}
`
