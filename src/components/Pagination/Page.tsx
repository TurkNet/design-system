import React, { FC } from 'react'
import { PageStyled } from './styled'

interface PageProps {
  page: number
  currentPage: number
  onChange(page: number): void
}

const Page: FC<PageProps> = ({ page, currentPage, onChange }) => {
  return (
    <PageStyled active={currentPage === page} onClick={() => onChange(page)}>
      {page}
    </PageStyled>
  )
}

export default Page
