import styled, { css } from 'styled-components'
import { Input } from '../Input'
import { color, ifProp } from '../../utility/styled'

export const SelectStyled = styled.div`
  position: relative;
  .material-icons {
    position: absolute;
    right: 16px;
    top: 12px;
  }
`

export const InputStyled = styled(Input)`
  width: 100%;
  caret-color: transparent;
  cursor: pointer;
  user-select: none;
`

export const OverlayStyled = styled.ul`
  width: 100%;
  margin: 4px 0 0 0;
  border-radius: 4px;
  border: solid 2px ${color('sky.light')};
  position: absolute;
  left: 0;
  top: 100%;
  padding: 0;
  overflow: hidden;
  background-color: ${color('grey.100')};
  z-index: 100;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03), -5px 5px 5px rgba(0, 0, 0, 0.03);
`

export const MenuStyled = styled.li<Record<'active', any>>`
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
`
