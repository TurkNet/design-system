import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  font-size: ${theme.fontSizes[14]};
  color: ${theme.colors.grey[0]};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
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
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
