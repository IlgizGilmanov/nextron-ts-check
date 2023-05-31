import { createGlobalStyle } from 'styled-components';

import defaultTransition from './config/defaultTransition';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  html {
    text-size-adjust: 100%;
  }

  body {
    min-height: calc(var(--vh) * 100);
    padding: 0;
    margin: 0;

    font-family: IBMPlexSans, sans-serif;
  }

  :focus {
    outline: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  input,
  textarea {
    font-family: IBMPlexSans, sans-serif;
  }

  a, button {
    font-family: IBMPlexSans, sans-serif;

    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.blue_500};
    text-decoration: none;

    outline: none;
    ${defaultTransition};
  }

  ul, ol {
    padding: 0;
    margin: 0;

    list-style: none;
  }
`;

export default GlobalStyle;
