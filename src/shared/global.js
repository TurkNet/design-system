import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
 body {
  font-family: 'Roboto', sans-serif;
  font-size: ${theme.fontSizes[14]};
  color: ${theme.colors.text};
  line-height: 1.3;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
 }

  button,
  input,
  textarea,
  select {
    outline: none;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`
