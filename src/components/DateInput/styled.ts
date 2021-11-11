import styled from 'styled-components'
import { color, fontWeight, borderRadius, fontSize } from '../../utility/styled'

export const ContainerStyled = styled.div<any>`
  background-color: ${color('grey.100')}
  border-radius: ${borderRadius('normal')};

  .react-datepicker {
    border: none;
  }

  .react-datepicker__header {
    background-color: ${color('grey.100')};
    border: none;
    padding: 0;
  }

  .react-datepicker__month {
    border-width: 1px;
    border-style: solid;
    border-color: ${color('grey.400')} transparent;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 44px;
    height: 44px;
    margin: 0;
    font-size: ${fontSize('15')};
  }

  .react-datepicker__day-name {
    color: ${color('grey.600')};
  }

  .react-datepicker__day-names {
    border-top: 1px solid ${color('grey.400')};
  }

  select {
    border: none;
    font-weight: ${fontWeight('semi-bold')};
  }
`
