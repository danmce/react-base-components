import React from 'react'
import { Router } from '@reach/router'

import Home from 'routes/Home'
import Dashboard from 'routes/Dashboard'

/**
 * Route defs
 */
const Routes = ({ auth }) => (
  <Router>
    <Home path='/' />
    {/** Sample Route */}
    <Dashboard path='dashboard' />
  </Router>
)

export default Routes
