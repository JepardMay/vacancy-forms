import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import 'normalize.css';
import GlobalStyles from './styles/GlobalStyles.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
