import React, { FC } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './shared/theme'
import { GlobalStyle } from './shared/global'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <>
        {children}
        <GlobalStyle />
      </>
    </StyledThemeProvider>
  )
}
