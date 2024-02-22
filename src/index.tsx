import { createRoot } from 'react-dom/client'
import React from 'react'
import GlobalStyles from './globalStyles/index.ts'
import { ThemeProvider } from "styled-components"
import mainTheme from '@src/themes/mainTheme.ts'
import App from "@src/App.tsx"

const rootEl: HTMLElement | null = document.getElementById("root") as HTMLElement

const appRoot = createRoot(rootEl)

appRoot.render(
    <>
        <GlobalStyles />
        <ThemeProvider theme={mainTheme(false)}>
            <App />
        </ThemeProvider>
    </>
)