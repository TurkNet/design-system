import styled from 'styled-components'
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  ifProp,
} from '../../utility/styled'

export const Wrapped = styled.div`
  border: 2px solid ${color('grey.400')};
  border-radius: ${borderRadius('large')};
`

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`
export const TableThStyled = styled.th<Record<string, any>>`
  position: relative;
  height: 64px;
  padding: 16px;
  font-size: ${fontSize('15')};
  font-weight: ${fontWeight('semi-bold')};
  background-color: transparent !important;
  text-align: left;
  border-style: solid;
  border-color: ${color('grey.400')};
  border-width: 0 2px 2px 0;
  user-select: none;
  cursor: ${ifProp('sortable', 'pointer', 'inherit')};

  :last-of-type {
    border-right-width: 0;
  }

  .material-icons {
    position: absolute;
    right: 16px;
    top: 20px;
  }
`

export const TableTrStyled = styled.tr`
  :nth-child(even) {
    background-color: ${color('grey.200')};
  }
  :last-child {
    td:first-child {
      border-bottom-left-radius: 4px;
    }
    td:last-child {
      border-bottom-right-radius: 4px;
    }
  }
`

export const TableTdStyled = styled.td`
  height: 48px;
  padding: 0 16px 0 16px;
`

export const TableLoading = styled.div`
  display: table-row;
  margin: 60px auto;
  justify-content: center;
  align-items: center;
`
