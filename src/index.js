import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import App from './App'
const HotApp = hot(App)

// App
ReactDOM.render(<HotApp />, document.getElementById('app'))
