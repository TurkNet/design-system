import styled from 'styled-components'
import { borderRadius } from 'src/utility/styled'

export const ButtonGroupStyled = styled.div`
  button:nth-child(n) {
    border-radius: ${borderRadius('normal')} 0 0 ${borderRadius('normal')};
  }
  button:nth-child(n + 2) {
    border-radius: 0;
    border-left: 0;
  }
  button:last-child {
    border-radius: 0 ${borderRadius('normal')} ${borderRadius('normal')} 0;
  }
`
