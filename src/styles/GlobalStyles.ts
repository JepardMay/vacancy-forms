import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4C73E3;
    --hover-color: #88A7FF;
    --accent-color: #F2C94C;
    --active-color: #F0FFE9;
    --active-shadow-color: #35A500B2;
    --alert-color: #BF0003;
    --border-color: #DEE4F0;
    --placeholder-color: #DCDCDC;
    --bg-color: #F3F7F8;
    --bg-secondary-color: #FFFFFF;
    --text-color: #4F4F55;
    --ff-inter: "Inter", serif;
    --default-transition: 0.3s ease-out;
  }

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
    font-family: var(--ff-inter);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-optical-sizing: auto;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-color);
    background-color: var(--bg-color);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
  }

  button,
  [type="button"],
  [type="reset"] {
    appearance: none;
  }
`;

export default GlobalStyles;
