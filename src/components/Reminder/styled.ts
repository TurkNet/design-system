import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { propColor, borderRadius, color, fontSize } from '../../utility/styled'

export interface ReminderStyledProps extends SpaceProps {
  severity: 'success' | 'warning' | 'danger' | 'info'
  colorTone: 'light' | 'normal' | 'dark'
}

export const ReminderStyled = styled.div<ReminderStyledProps>`
  border-radius: ${borderRadius('large')};
  border: 2px solid ${props => propColor(props.colorTone)};
  color: ${color('grey.700')};
  font-size: ${fontSize('15')};
  line-height: 1.6;
  padding: 16px;
  display: flex;
  align-items: center;
  span > :first-child {
    margin-right: 16px;
  }
  ${space}
`
