import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full h-screen bg-almostWhite'>
    <Menu/>
    </div>
  </React.StrictMode>,
)
