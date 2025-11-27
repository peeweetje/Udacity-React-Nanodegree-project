import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #121212;
    --surface-color: #1e1e1e;
    --primary-color: #bb86fc;
    --text-color: #e0e0e0;
    --secondary-text-color: #a0a0a0;
    --shelf-wood: #3e2723;
    --shelf-shadow: #1a1a1a;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
    font-weight: 700;
  }

  html,
  body,
  .root {
    height: 100%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

