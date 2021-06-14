import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Flex } from '../Flex'

export const SummaryStyled = styled(Flex)`
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme('fontSizes.20')};
  line-height: 24px;
  padding: 12px 0;
`
