import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'

export const fontIcon =
  'https://fonts.googleapis.com/icon?family=Material+Icons'

export const GlobalStyle = createGlobalStyle`
 body {
  font-family: 'Open Sans', sans-serif;
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
