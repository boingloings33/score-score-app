import './styles/main.css'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '@/contexts/Auth'
import { SnackbarProvider } from '@/contexts/Snackbar'

import AppRouter from './router'
import theme from './theme'
import { DialogsContextProvider } from '@/contexts/Dialogs'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <SnackbarProvider>
              <DialogsContextProvider>
                <AppRouter />
              </DialogsContextProvider>
            </SnackbarProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
