import React, { FC } from 'react'
import { PageStyled } from './styled'

interface PageProps {
  page: number
  activePage: number
  onChange(page: number): void
}

const Page: FC<PageProps> = ({ page, activePage, onChange }) => {
  return (
    <PageStyled active={activePage === page} onClick={() => onChange(page)}>
      {page}
    </PageStyled>
  )
}

export default Page
