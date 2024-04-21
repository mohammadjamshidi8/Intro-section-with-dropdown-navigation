import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import Hero from './assets/Hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full h-screen bg-almostWhite font-Epilogue'>
    <Menu/>
    <Hero/>
    </div>
  </React.StrictMode>,
)
