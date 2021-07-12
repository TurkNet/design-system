import styled from 'styled-components'
import { Box } from '../Box'
import { color } from '../../utility/styled'

export const CrossIconStyled = styled.span`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
  z-index: 10;
`

export const ModalContentStyled = styled(Box)`
  position: relative;
  min-width: 420px;
  overflow: auto;
  background-color: ${color('grey.100')};
  box-shadow: 0 4px 16px 0 ${color('grey.700')};
  border: 2px solid ${color('grey.400')};
  border-radius: 8px;
  z-index: 2;
`

export const ModalStyled = styled.div`
  text-align: left;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBgStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${color('grey.1100', 0.5)};
  overflow: hidden;
  z-index: 1;
`
