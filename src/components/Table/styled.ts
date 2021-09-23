import styled from 'styled-components'
import { color } from '../../utility/styled'

export const TableStyled = styled.table`
  border: 2px solid ${color('grey.400')};
  min-width: 900px;
  // min-height: 600px;
`

export const TableHeadStyled = styled.thead`
  // background-color: white;
`

export const TableBodyStyled = styled.tbody``

export const TableTrStyled = styled.tr`
  :nth-child(odd) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`

export const TableThStyled = styled.th`
  border: 2px solid ${color('grey.400')};
  background-color: white;
  height: 64px;
`

export const TableTdStyled = styled.td`
  height: 48px;
`
