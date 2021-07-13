import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, ifProp } from '../../utility'

interface PageStyledProps {
  active?: boolean
  last?: boolean
}

export const PaginationStyled = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
`

export const PageStyled = styled.li<PageStyledProps>`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
  font-size: ${fontSize('15')};
  font-weight: ${fontWeight('semi-bold')};
  border-radius: 4px;
  border: solid 2px ${color('grey.400')};
  user-select: none;
  &:hover {
    background-color: ${color('grey.400')};
  }

  ${ifProp(
    'active',
    css`
      border-color: ${color('primary.normal')};
      color: ${color('primary.normal')};
    `
  )}

  ${ifProp(
    { last: true },
    css`
      pointer-events: none;
      background-color: ${color('grey.400')};
    `
  )}

  ${ifProp(
    { last: false },
    css`
      background-color: ${color('primary.normal')} !important;
      border-color: ${color('primary.normal')};
      color: ${color('grey.100')};
    `
  )}
`
