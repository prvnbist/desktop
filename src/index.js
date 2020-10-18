import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'

import App from './App'
import './index.css'

ReactDOM.render(
   <div>
      <GlobalStyles />
      <App />
   </div>,
   document.getElementById('root')
)
