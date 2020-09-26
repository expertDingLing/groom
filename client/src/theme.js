import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#299494',
      light: '#53a9a9',
      dark: '#1c6767',
    },
    text: {
      main: '#666666',
      light: '#808080',
    },
  },
  typography: {
    body2: {
      fontWeight: 'lighter',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        color: 'white',
        background: '#299494',
        '&:hover': {
          background: '#53a9a9',
        },
      },
      textPrimary: {
        color: '#299494',
        '&:hover': {
          color: '#53a9a9',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
      button: {
        '&:hover': {
          color: '#53a9a9',
        },
      },
    },
    MuiCard: {
      root: {
        borderRadius: 10,
      },
    },
    MuiInput: {
      colorSecondary: {
        background: 'white',
        borderRadius: 5,
        border: '1px solid #808080',
        '&$focused': {
          border: '1px solid #53a9a9',
        },
        paddingLeft: 10,
      },
    },
    MuiTabs: {
      root: {
        width: '100%',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
      textColorPrimary: {
        '&$selected': {
          color: '#299494',
          background: '#EDEDED',
        },
      },
    },
  },
});

export default theme;
