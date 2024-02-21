import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.scss'
import { RouterProvider } from '@app/providers/router'
import { ThemeProvider } from '@app/providers/ThemeProvider'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { StoreProvider } from '@app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <StoreProvider>
                <RouterProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </RouterProvider>
            </StoreProvider>
        </ErrorBoundary>
    </React.StrictMode>,
)
