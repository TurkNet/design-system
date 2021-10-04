import React, { FC } from 'react'
import { Pages } from './Pages'
import { PaginationStyled, PageStyled } from './styled'
import { Icon } from '../Icon'
import { noop } from '../../utility'

export interface PaginationProps {
  currentPage: number
  totalItemsCount: number
  itemsCountPerPage: number
  onChange?(page: number): void
}

export const Pagination: FC<PaginationProps> = ({
  currentPage = 1,
  totalItemsCount,
  itemsCountPerPage,
  onChange = noop,
}) => {
  const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage)

  const handleChange = (activePage: number) => {
    onChange(activePage)
  }

  return (
    <PaginationStyled>
      <PageStyled
        last={currentPage === 1}
        onClick={() => handleChange(currentPage - 1)}
      >
        <Icon name="chevron_left" fontSize="20px" />
      </PageStyled>
      <Pages
        totalPages={totalPages}
        activePage={currentPage}
        onChange={handleChange}
      />
      <PageStyled
        last={currentPage === totalPages}
        onClick={() => handleChange(currentPage + 1)}
      >
        <Icon name="chevron_right" fontSize="20px" />
      </PageStyled>
    </PaginationStyled>
  )
}
