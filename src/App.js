import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    primary: {
      light: '#F33823',
      main: '#fff',
      dark: '#F33823',
      contrastText: '#000',
    },
    primary1: {
      light: '#F33823',
      main: '#F33823',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',

          '&.Mui-selected': {
            backgroundColor: 'red',
          },
          '&:hover': {
            backgroundColor: '#F33823',
          }
        },
      },
    },
  },
});




function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster></Toaster>
    </ThemeProvider>
  );
}

export default App;
