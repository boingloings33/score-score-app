import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }
}

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: '#EE2530',
      main: '#CF2027',
      dark: '#A81c20',
      darker: '#6F181A',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#4c4c4c',
      main: '#333333',
      dark: '#262626',
      contrastText: '#110D0D',
    },
    background: {
      default: '#F5F3F4',
      paper: '#FFFFFF',
    },
    info: {
      main: '#494747',
    },
    divider: '#DBDBDB',
    text: {
      primary: '#110D0D',
      secondary: '#494747',
    },
  },

  typography: {
    allVariants: {
      fontFamily: "'Rubik', sans-serif",
      /*
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;',
      */
    },
    h1: {
      fontSize: '64px',
      fontWeight: 700,
      letterSpacing: '1%',
      lineHeight: '72px',
    },
    h2: {
      fontSize: '40px',
      fontWeight: 700,
      letterSpacing: '1%',
      lineHeight: '48px',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '40px',
      letterSpacing: '1%',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      letterSpacing: '1%',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 700,
      letterSpacing: '1%',
      lineHeight: '24px',
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '26px',
      letterSpacing: '0%',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      letterSpacing: '0%',
    },
    caption: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          border: '2px solid',
          borderColor: theme.palette.divider,
          borderRadius: '4px',
        }),
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '4px',
          border: '2px solid',
          borderColor: theme.palette.divider,
        }),
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: '2px solid',
          borderColor: theme.palette.divider,
          borderRadius: '4px',
        }),
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '4px',
          backgroundColor: theme.palette.grey[300],
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          borderWidth: '2px',
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            borderWidth: '2px',
          },
        },
        outlined: ({ theme }) => ({
          backgroundColor: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.divider,
            borderWidth: 2,
          },
        }),
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.dark,
          borderColor: `${theme.palette.secondary.dark} !important`,
          borderWidth: 1,
          borderStyle: 'solid',
          '&:hover': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.main,
            borderColor: `${theme.palette.primary.main} !important`,
            borderWidth: 1,
            borderStyle: 'solid',
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.contrastText,
            border: theme.palette.secondary.dark,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        // https://github.com/mui/material-ui/issues/33339#issuecomment-1171611514
        // @ts-expect-error known error for MUI Helper Text. It is only a ts error. Still works in js
        component: 'div',
      },
    },

    MuiSnackbar: {
      styleOverrides: {
        root: {
          left: '0 !important',
          right: '0 !important',
          bottom: '0 !important',
          transform: 'none !important',
        },
      },
    },
    MuiAlert: {
      defaultProps: { variant: 'filled', icon: false },
      styleOverrides: {
        root: ({ theme }) => ({
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          backgroundColor: theme.palette.primary.main,
          width: '100%',
          color: theme.palette.primary.contrastText,
        }),
      },
    },

    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          whiteSpace: 'normal',
          position: 'relative',
          marginBottom: 4,
          color: theme.palette.primary.contrastText,
        }),
        shrink: {
          transform: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
        }),
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottomLeftRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
    },
  },
}

export default createTheme(theme)
