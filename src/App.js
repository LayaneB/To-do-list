import { ThemeProvider } from '@mui/material/styles'
import Router from "./routes/Router" 
import React from 'react'
import theme from './theme/theme'
import { GlobalStyle } from './theme/GlobalStyle';


function App() {
  return (
       <ThemeProvider theme={theme}>
        <GlobalStyle /> 
          <Router />
      </ThemeProvider>
  );
}
export default App;
