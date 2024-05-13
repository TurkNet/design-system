import React, { FC, useEffect, useState } from 'react'
import { Flex } from '../Flex'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { noop } from '../../utility'
import { Icon } from '../Icon'
import { CircleLoader } from '../Loader'
import { Typography } from '../Typography'
import {
  TableLoading,
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
  enableAdd?: boolean
  selectable?: boolean
  buttonText?: string
  rowId?: string
  [key: string]: any
  onSort?(param: ISort): void
  onCheck?(param: any[]): void
  onAddClick?(): void
  loading?: boolean
  checkAllText?: string
  checkAllWidth?: number
}

const SortMap: ISort = {
  asc: 'desc',
  desc: 'asc',
  undefined: 'desc',
}

export const Table: FC<TableProps> = ({
  rowId = 'id',
  rows = [],
  columns = [],
  selectable,
  enableAdd,
  buttonText = 'Add',
  onAddClick,
  onSort = noop,
  onCheck = noop,
  loading,
  checkAllText = 'Tümünü Seç',
  checkAllWidth = 150,
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
    setChecked({
      ...checked,
      [row[rowId]]: event.target.checked,
      all: false,
    })
  }

  const onCheckAll = (event: any) => {
    if (!event.target.checked) {
      setChecked({ all: false })
    } else {
      setChecked(
        rows.reduce((obj, r) => ({ ...obj, [r.id]: true }), {
          all: true,
        })
      )
    }
  }

  useEffect(() => {
    onCheck(rows.filter(r => checked[r[rowId]]))
  }, [checked])

  return (
    <Wrapped>
      <TableStyled>
        <thead>
          <TableTrStyled>
            {selectable && (
              <TableThStyled style={{ width: checkAllWidth }}>
                <Flex>
                  <Checkbox checked={checked.all} onChange={onCheckAll} />
                  {checkAllText}
                </Flex>
              </TableThStyled>
            )}
            {columns?.map((column: any) => {
              return (
                <TableThStyled
                  key={column.accessor}
                  style={{ width: column.width }}
                  sortable={column.sortable}
                  onClick={column.sortable && handleSort(column.accessor)}
                >
                  <Flex alignItems="center" justifyContent="flex-start">
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
                  </Flex>
                </TableThStyled>
              )
            })}
          </TableTrStyled>
        </thead>
        {loading ? (
          <TableTrStyled>
            <TableTdStyled colSpan={columns.length + 1}>
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                width={1}
              >
                <TableLoading>
                  <CircleLoader />
                </TableLoading>
              </Flex>
            </TableTdStyled>
          </TableTrStyled>
        ) : (
          <tbody>
            {(enableAdd || !rows?.length) && (
              <TableTrStyled>
                <TableTdStyled colSpan={columns.length + 1}>
                  <Flex
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    width={1}
                  >
                    {enableAdd && (
                      <Button
                        variant="ghost"
                        onClick={onAddClick}
                        icon={<Icon name="add" />}
                        alignment="left"
                      >
                        {buttonText}
                      </Button>
                    )}
                    {!rows?.length && (
                      <Typography variant="paragraph1" my={60}>
                        No data available
                      </Typography>
                    )}
                  </Flex>
                </TableTdStyled>
              </TableTrStyled>
            )}

            {rows?.map((row: any) => (
              <TableTrStyled key={row[rowId]}>
                {selectable && (
                  <TableTdStyled>
                    <Checkbox
                      checked={checked[row[rowId]] || false}
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
            ))}
          </tbody>
        )}
      </TableStyled>
    </Wrapped>
  )
}
