import styled, { css } from 'styled-components'
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

export const OverlayStyled = styled.ul<Record<'placement', 'top' | 'bottom'>>`
  width: 100%;
  margin: 4px 0 0 0;
  border-radius: 4px;
  border: solid 2px ${color('sky.light')};
  position: absolute;
  left: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${color('grey.100')};
  z-index: 100;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03), -5px 5px 5px rgba(0, 0, 0, 0.03);
  ${ifProp({ placement: 'top' }, 'bottom: 100%;', 'top: 100%;')}
`

export const OptionStyled = styled.li<Record<'active', any>>`
  padding: 0;
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

export const IconStyled = styled.span<Record<'isCustom', boolean>>`
  z-index: ${ifProp('isCustom', 1, -1)};
  position: absolute;
  right: 16px;
  top: 12px;
  cursor: pointer;
`
