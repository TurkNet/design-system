import React, { FC } from 'react'
import {
  TableBodyStyled,
  TableHeadStyled,
  TableTdStyled,
  TableThStyled,
  TableTrStyled,
} from './styled'

export interface TableProps {
  row: any[]
  column: any[]
}

const List: FC<TableProps> = ({ row, column }) => {
  const columns = column?.map((item: any) => {
    return (
      <TableThStyled key={item.id} style={{ width: item.width }}>
        {item.Header}
      </TableThStyled>
    )
  })

  const rows = row?.map((row: any) => {
    return (
      <TableTrStyled>
        {column.map((item: any) => {
          return (
            <TableTdStyled key={item.accessor}>
              {`${row[item.accessor]}`}
            </TableTdStyled>
          )
        })}
      </TableTrStyled>
    )
  })
  return (
    <>
      <TableHeadStyled>
        <TableTrStyled>{columns}</TableTrStyled>
      </TableHeadStyled>
      <TableBodyStyled>{rows}</TableBodyStyled>
    </>
  )
}

export default List
