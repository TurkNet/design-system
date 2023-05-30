import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, ifProp } from '../../utility/styled'
import { Flex } from '../Flex'
import { Box } from '../Box'

interface SummaryProps {
  expanded?: boolean
}

export const AccordionStyled = styled(Box)`
  > div:not(:last-child) {
    border-bottom: 1px solid ${color('grey.300')};
  }
`
export const SummaryStyled = styled(Flex)<SummaryProps>`
  cursor: pointer;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize('15')};
  font-weight: ${fontWeight('semi-bold')};
  ${ifProp(
    { expanded: true },
    css`
      margin-bottom: 16px;
    `
  )}
  position: relative;
  span {
    position: absolute;
    right: 0;
  }
`

interface BorderProps {
  hasBorder?: boolean
  expanded?: boolean
  bg?: string
}

export const BorderStyled = styled.div<BorderProps>`
  padding: 16px;
  ${({ bg }) => {
    console.log('props', bg)
    return ifProp(
      { hasBorder: true },
      css`
        border-radius: 8px;
        border: 1px solid ${color('grey.300')};
        ${ifProp(
          { expanded: true },
          bg &&
            css`
          border: 1px solid ${color(bg, 0.1)}};
          background-color: ${color(bg, 0.03)};
        `
        )}
        :not(:last-child) {
          margin-bottom: 16px;
        }
      `
    )
  }}
`
