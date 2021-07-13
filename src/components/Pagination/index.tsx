import React, { FC, useState } from 'react'
import { Pages } from './Pages'
import { PaginationStyled, PageStyled } from './styled'
import { Icon } from '../Icon'
import { noop } from '../../utility'

export interface PaginationProps {
  totalItemsCount: number
  itemsCountPerPage: number
  onChange?(page: number): void
}

export const Pagination: FC<PaginationProps> = ({
  totalItemsCount,
  itemsCountPerPage,
  onChange = noop,
}) => {
  const [activePage, setActivePage] = useState(1)

  const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage)

  const handleChange = (activePage: number) => {
    setActivePage(activePage)
    onChange(activePage)
  }

  return (
    <PaginationStyled>
      <PageStyled
        last={activePage === 1}
        onClick={() => handleChange(activePage - 1)}
      >
        <Icon name="chevron_left" fontSize="20px" />
      </PageStyled>
      <Pages
        totalPages={totalPages}
        activePage={activePage}
        onChange={handleChange}
      />
      <PageStyled
        last={activePage === totalPages}
        onClick={() => handleChange(activePage + 1)}
      >
        <Icon name="chevron_right" fontSize="20px" />
      </PageStyled>
    </PaginationStyled>
  )
}
