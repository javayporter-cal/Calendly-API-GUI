import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.tsx';


createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
</React.StrictMode>,
)
