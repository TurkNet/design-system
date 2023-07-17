import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space as systemSpace } from 'styled-system'
import { color } from '../../utility/styled'
import { Typography } from '../Typography'

export const WrapperStyled = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
  border-radius: 4px;
  border: 2px solid ${color('grey.300')};
  background-color: ${color('grey.200')};
`

export const CopiedMessage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color('success.light')};
  color: #fff;
`
