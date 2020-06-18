import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
    background-color: transparent;
    word-wrap: break-word;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html, body, #root {
    height: 100%;
  }
  body {
    min-width: 320px;
  }

  button {
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:active {
    transform: scale(1.1);
  }

  .active {
    opacity: 0.5;
    background-color: #182d4e;
  }
`;

export default GlobalStyle;
