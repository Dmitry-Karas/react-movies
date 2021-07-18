import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

smoothscroll.polyfill()
