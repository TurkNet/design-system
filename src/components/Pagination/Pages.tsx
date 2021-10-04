import React, { FC } from 'react'
import Page from './Page'
import { PageStyled } from './styled'
import { map } from '../../utility'

interface PagesProps {
  totalPages: number
  currentPage: number
  onChange(page: number): void
}

export const Pages: FC<PagesProps> = ({
  totalPages,
  currentPage,
  onChange,
}) => {
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
            currentPage={currentPage}
            onChange={onChange}
          />
        ))}
      </>
    )
  }

  if (currentPage + buffer > totalPages) {
    return (
      <>
        <Page page={1} currentPage={currentPage} onChange={onChange} />
        <PageStyled>...</PageStyled>
        {map(buffer + 1, page => (
          <Page
            key={page}
            page={totalPages - page}
            currentPage={currentPage}
            onChange={onChange}
          />
        )).reverse()}
      </>
    )
  }

  if (currentPage - buffer < 1) {
    return (
      <>
        {map(buffer + 1, page => (
          <Page
            key={page}
            page={page + 1}
            currentPage={currentPage}
            onChange={onChange}
          />
        ))}
        <PageStyled>...</PageStyled>
        <Page page={totalPages} currentPage={currentPage} onChange={onChange} />
      </>
    )
  }

  return (
    <>
      <Page page={1} currentPage={currentPage} onChange={onChange} />
      <PageStyled>...</PageStyled>
      {map(middlePage, page => (
        <Page
          key={page}
          page={currentPage - midPageRestriction + page}
          currentPage={currentPage}
          onChange={onChange}
        />
      ))}
      <PageStyled>...</PageStyled>
      <Page page={totalPages} currentPage={currentPage} onChange={onChange} />
    </>
  )
}
