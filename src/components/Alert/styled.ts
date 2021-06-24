import styled from 'styled-components'
import {
  propColor,
  borderRadius,
  color,
  fontSize,
  fontWeight,
} from '../../utility/styled'

export interface AlertStyledProps {
  severity: 'success' | 'warning' | 'danger' | 'info'
}

export const AlertStyled = styled.div<AlertStyledProps>`
  background-color: ${propColor('normal', 0.1)};
  border-radius: ${borderRadius('normal')};
  color: ${color('grey.700')};
  font-size: ${fontSize('15')};
  font-weight: ${fontWeight('semi-bold')};
  line-height: 1.6;
  padding: 12px 16px 12px 12px;
  border-left: 4px solid ${propColor('normal')}; ;
`
