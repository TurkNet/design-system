import React, { FC, useState } from 'react'
import { Flex } from '../Flex'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { noop } from '../../utility'
import { Icon } from '../Icon'
import {
  TableStyled,
  TableTdStyled,
  TableThStyled,
  TableTrStyled,
  Wrapped,
} from './styled'

type ISort = Record<string, 'asc' | 'desc'>
type ICheck = Record<string, boolean>

export interface TableProps {
  rows: any[]
  columns: any[]
  onSort?(param: ISort): void
  onCheck?(param: ICheck): void
  enableAdd?: boolean
  selectable?: boolean
  onAddClick?(): void
  [key: string]: any
  buttonText?: string
}

const SortMap: ISort = {
  asc: 'desc',
  desc: 'asc',
  undefined: 'desc',
}

export const Table: FC<TableProps> = ({
  rows = [],
  columns = [],
  selectable,
  enableAdd,
  buttonText = 'Add',
  onAddClick,
  onSort = noop,
  onCheck = noop,
  ...props
}) => {
  const [sort, setSort] = useState<ISort>({})
  const [checked, setChecked] = useState<ICheck>({ all: false })

  const handleSort = (accessor: string) => () => {
    const updateSort: ISort = {
      ...sort,
      [accessor]: SortMap[sort[accessor]],
    }
    setSort(updateSort)
    onSort(updateSort)
  }

  const handleChecked = (row: any) => (event: any) => {
    const updateChecked = {
      ...checked,
      [row.id]: event.target.checked,
      all: false,
    }
    setChecked(updateChecked)
    onCheck(updateChecked)
  }

  const onCheckAll = (event: any) => {
    if (!event.target.checked) {
      setChecked({ all: false })
      onCheck({ all: false })
    } else {
      const selectedRows = rows.reduce(
        (obj, r) => ({ ...obj, [r.id]: true }),
        {}
      )
      setChecked({ ...selectedRows, all: true })
      onCheck({ ...selectedRows, all: true })
    }
  }

  return (
    <Wrapped>
      <TableStyled>
        <thead>
          <TableTrStyled>
            {selectable && (
              <TableThStyled>
                <Flex>
                  <Checkbox checked={checked.all} onChange={onCheckAll} />
                  Tümünü Seç
                </Flex>
              </TableThStyled>
            )}
            {columns?.map((column: any) => {
              return (
                <TableThStyled
                  key={column.id}
                  style={{ width: column.width }}
                  sortable={column.sortable}
                  onClick={column.sortable && handleSort(column.accessor)}
                >
                  <span> {column.Header}</span>
                  {column.sortable && (
                    <Icon
                      name={
                        SortMap[sort[column.accessor]] === 'desc'
                          ? 'expand_more'
                          : 'expand_less'
                      }
                    />
                  )}
                </TableThStyled>
              )
            })}
          </TableTrStyled>
        </thead>
        <tbody>
          {enableAdd && (
            <TableTrStyled>
              <TableTdStyled colSpan={columns.length + 1}>
                <Flex justifyContent="center" width={1}>
                  <Button
                    variant="ghost"
                    onClick={onAddClick}
                    icon={<Icon name="add" />}
                    alignment="left"
                  >
                    {buttonText}
                  </Button>
                </Flex>
              </TableTdStyled>
            </TableTrStyled>
          )}
          {rows?.map((row: any) => {
            return (
              <TableTrStyled key={row.id}>
                {selectable && (
                  <TableTdStyled>
                    <Checkbox
                      checked={checked[row.id] || false}
                      onChange={handleChecked(row)}
                    />
                  </TableTdStyled>
                )}
                {columns.map((column: any) => {
                  const CellRender = props[column.accessor]
                  return (
                    <TableTdStyled key={column.accessor}>
                      {column.custom && CellRender ? (
                        <CellRender column={column} row={row} />
                      ) : (
                        row[column.accessor]
                      )}
                    </TableTdStyled>
                  )
                })}
              </TableTrStyled>
            )
          })}
        </tbody>
      </TableStyled>
    </Wrapped>
  )
}
