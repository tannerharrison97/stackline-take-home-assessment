import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: 'rgb(6,40,73)',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255)',
        },
      },
    }
  }
});

export default theme;