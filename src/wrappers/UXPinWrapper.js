// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'

export default function UXPinWrapper ({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
