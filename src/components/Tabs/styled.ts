import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, ifProp } from '../../utility'

export interface TabsProps {
  fullWidth?: boolean
}

export const TabsStyled = styled.div<TabsProps>`
  display: flex;
  align-items: flex-end;
  ${ifProp(
    'fullWidth',
    css`
      div {
        justify-content: center;
        flex: 1;
        text-align: center;
      }
    `
  )}
`

export const TabStyled = styled.div<Record<'isActive', boolean>>`
  border-bottom: 4px solid;
  border-color: ${color('grey.400')};
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
