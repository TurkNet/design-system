import React, { FC } from 'react'
import List from './List'
import { TableStyled } from './styled'

export interface TableProps {
  row: any[]
  column: any[]
}

export const Table: FC<TableProps> = ({ row, column, ...props }) => {
  return (
    <TableStyled>
      <List row={row} column={column} {...props} />
    </TableStyled>
  )
}
