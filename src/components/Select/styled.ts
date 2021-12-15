import styled, { css, keyframes } from 'styled-components'
import { Input } from '../Input'
import { color, ifProp } from '../../utility/styled'

export const SelectStyled = styled.div`
  position: relative;
`

export const InputStyled = styled(Input)<Record<'searchable', boolean>>`
  width: 100%;
  caret-color: ${ifProp('searchable', null, 'transparent')};
  cursor: pointer;
  user-select: none;
  background-color: transparent;
`

export const OverlayStyled = styled.ul<Record<string, any>>`
  width: 100%;
  margin: 4px 0 0 0;
  border-radius: 4px;
  border: solid 2px ${color('sky.light')};
  position: absolute;
  left: 0;
  padding: 0;
  overflow-y: auto;
  max-height: 260px;
  background-color: ${color('grey.100')};
  z-index: 100;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03), -5px 5px 5px rgba(0, 0, 0, 0.03);
  display: ${ifProp('show', 'block', 'none')};
  z-index: 2;
`
export const BgStyled = styled.div<Record<string, any>>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  display: ${ifProp('show', 'block', 'none')};
  z-index: 1;
`

export const OptionStyled = styled.li<Record<'active', any>>`
  list-style: none;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 16px;
  border: none;
  margin: 0;
  cursor: pointer;

  ${ifProp(
    'active',
    css`
      background-color: ${color('primary.normal')};
      color: ${color('grey.100')};
    `
  )}

  :hover {
    background-color: ${color('primary.light')};
    color: ${color('grey.100')};
  }
`
