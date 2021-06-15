import styled from 'styled-components'
import { ifProp, theme } from 'styled-tools'
import { Flex } from '../Flex'

export const SummaryStyled = styled(Flex)`
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme('fontSizes.15')};
  font-weight: ${theme('fontWeights.semi-bold')};
  padding: 12px 0;
`
interface BorderProps {
  expanded: boolean
}

export const BorderStyled = styled.div<BorderProps>`
  height: 1px;
  background-color: ${theme('colors.grey.300')};
  margin-top: ${ifProp('expanded', '24px', '0px')};
  transition: margin 0.3s ease;
`
