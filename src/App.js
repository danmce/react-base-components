import React, { Component, useEffect, useState } from 'react'
import { Location } from '@reach/router'
import 'reset-css'
import { ThemeProvider, injectGlobal } from 'styled-components'

import theme from 'utils/theme'
import Routes from 'routes'

/**
 * Main App
 */
export default () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)

/**
 * Global Styles
 *
 * Simply sets body font to 10px - for rem use
 * https://snook.ca/archives/html_and_css/font-size-with-rem
 *
 * Adds 'normal' box sizing
 */
injectGlobal`
  html, body {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
`
