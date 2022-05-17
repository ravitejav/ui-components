import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SideBar } from './Components/SideBar'
import { HomePage } from './Components/HomePage'
import { TimerWrapper } from './Components/TimerWrapper'

import 'ui-components/dist/index.css'
import './styles/main.css'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <main className='flex'>
        <div className='sidebarWrapper bg-slate-900'>
          <SideBar />
        </div>
        <div className='mainBlock'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/timer' element={<TimerWrapper />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
