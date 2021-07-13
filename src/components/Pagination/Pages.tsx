import React, { FC } from 'react'
import Page from './Page'
import { PageStyled } from './styled'
import { map } from '../../utility'

interface PagesProps {
  totalPages: number
  activePage: number
  onChange(page: number): void
}

export const Pages: FC<PagesProps> = ({ totalPages, activePage, onChange }) => {
  const showingPage = 5
  const buffer = 3
  const middlePage = 3
  const midPageRestriction = 1

  if (totalPages <= showingPage) {
    return (
      <>
        {map(totalPages, page => (
          <Page
            key={page}
            page={page + 1}
            activePage={activePage}
            onChange={onChange}
          />
        ))}
      </>
    )
  }

  if (activePage + buffer > totalPages) {
    return (
      <>
        <Page page={1} activePage={activePage} onChange={onChange} />
        <PageStyled>...</PageStyled>
        {map(buffer + 1, page => (
          <Page
            key={page}
            page={totalPages - page}
            activePage={activePage}
            onChange={onChange}
          />
        )).reverse()}
      </>
    )
  }

  if (activePage - buffer < 1) {
    return (
      <>
        {map(buffer + 1, page => (
          <Page
            key={page}
            page={page + 1}
            activePage={activePage}
            onChange={onChange}
          />
        ))}
        <PageStyled>...</PageStyled>
        <Page page={totalPages} activePage={activePage} onChange={onChange} />
      </>
    )
  }

  return (
    <>
      <Page page={1} activePage={activePage} onChange={onChange} />
      <PageStyled>...</PageStyled>
      {map(middlePage, page => (
        <Page
          key={page}
          page={activePage - midPageRestriction + page}
          activePage={activePage}
          onChange={onChange}
        />
      ))}
      <PageStyled>...</PageStyled>
      <Page page={totalPages} activePage={activePage} onChange={onChange} />
    </>
  )
}
