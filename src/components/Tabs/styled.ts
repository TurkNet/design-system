import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, ifProp } from '../../utility'

export const TabsStyled = styled.div`
  display: flex;
  align-items: center;
`

export const TabStyled = styled.div<Record<'isActive', boolean>>`
  border-bottom: 4px solid;
  border-color: transparent;
  border-radius: 1px;
  font-size: ${fontSize('14')};
  font-weight: ${fontWeight('semi-bold')};
  padding: 12px 24px;
  cursor: pointer;
  color: ${color('sky.dark')};

  ${ifProp(
    'isActive',
    css`
      border-color: ${color('primary.normal')};
      color: ${color('primary.normal')};
    `
  )}
`
