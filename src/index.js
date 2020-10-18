import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'

import App from './App'

ReactDOM.render(
   <div>
      <GlobalStyles />
      <App />
   </div>,
   document.getElementById('root')
)
