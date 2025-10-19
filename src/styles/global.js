import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* 1. CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. CSS Variables (Design Tokens) */
  :root {
    /* Cores */
    --color-background: #f5f5f5;
    --color-dark-background: #002a3a;
    --color-footer-background: #000000;
    --color-cyan: #00bfff;
    --color-yellow: #ffcc00;
    --color-white: #ffffff;
    --color-text: #333333;

    /* Fontes */
    --font-display: 'Bungee Inline', sans-serif;
    --font-body: 'Sansita', sans-serif;
  }

  /* 3. Body Base Styles */
  body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;
