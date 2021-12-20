import styled from 'styled-components'
import { color, fontSize, fontWeight, ifProp } from '../../utility/styled'
import { Flex } from '../Flex'

export const SummaryStyled = styled(Flex)`
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize('15')};
  font-weight: ${fontWeight('semi-bold')};
  padding: 12px 0;
  position: relative;
  padding-right: 40px;
  span {
    position: absolute;
    right: 16px;
  }
`
interface BorderProps {
  expanded: boolean
}

export const BorderStyled = styled.div<BorderProps>`
  height: 1px;
  background-color: ${color('grey.300')};
  margin-top: ${ifProp('expanded', '24px', '0px')};
  transition: margin 0.3s ease;
`
