import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.inter};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-optical-sizing: auto;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button,
  [type="button"],
  [type="reset"] {
    appearance: none;
  }
`;

export default GlobalStyles;
